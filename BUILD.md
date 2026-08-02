# Compilar el Vademécum para Google Play

La app es una web (HTML/CSS/JS) empaquetada como aplicación Android con
[Capacitor](https://capacitorjs.com). Todo el contenido viaja dentro del
paquete: la app funciona sin conexión y no depende del sitio web.

| | |
|---|---|
| applicationId | `com.medishort360.vademecum` |
| versionCode | `1` |
| versionName | `1.0.0` |
| minSdk | 23 (Android 6.0) |
| targetSdk / compileSdk | 36 (Android 16) |

El `applicationId` **es permanente**: una vez publicada la app en Play Console
no se puede cambiar nunca más. Si querés otro, cambialo antes de la primera
subida en `android/app/build.gradle` (`applicationId` y `namespace`),
`capacitor.config.json` y `android/app/src/main/res/values/strings.xml`.

---

## 1. Crear la clave de firma (una sola vez)

La clave identifica tu app ante Google Play. **Guardala en un lugar seguro y
hacé copia de respaldo**: sin ella no podrás publicar actualizaciones.

```bash
keytool -genkeypair -v \
  -keystore release.keystore \
  -alias vademecum \
  -keyalg RSA -keysize 2048 -validity 10000
```

Te pedirá una contraseña y algunos datos (nombre, organización, país). Anotá
la contraseña y el alias.

> **Nunca subas el `.keystore` ni las contraseñas al repositorio.** El
> `.gitignore` ya bloquea `*.keystore`, `*.jks` y `keystore.properties`.

Si activás **Play App Signing** (recomendado, y es lo predeterminado para apps
nuevas), esta clave es solo la *clave de subida*: Google guarda la clave real
de firma y podés pedir el reemplazo de la de subida si la perdés.

---

## 2. Opción A — compilar en tu máquina

Necesitás [Android Studio](https://developer.android.com/studio) (trae el SDK),
Node 20+ y JDK 21.

```bash
# 1. Dependencias
npm install

# 2. Colocá release.keystore dentro de android/ y creá android/keystore.properties:
cat > android/keystore.properties <<'EOF'
storeFile=release.keystore
storePassword=TU_CONTRASEÑA
keyAlias=vademecum
keyPassword=TU_CONTRASEÑA
EOF

# 3. Compilar el App Bundle firmado
npm run aab
```

El archivo queda en:

```
android/app/build/outputs/bundle/release/app-release.aab
```

Ese `.aab` es el que se sube a Play Console.

Para probar en un teléfono antes de publicar, `npm run apk` genera un APK
instalable en `android/app/build/outputs/apk/release/`.

---

## 3. Opción B — compilar en GitHub Actions

Si no querés instalar Android Studio, el flujo
`.github/workflows/android-release.yml` compila el AAB firmado en la nube.

Primero cargá cuatro secretos en el repositorio
(*Settings → Secrets and variables → Actions → New repository secret*):

| Secreto | Valor |
|---|---|
| `KEYSTORE_BASE64` | salida de `base64 -w0 release.keystore` |
| `KEYSTORE_PASSWORD` | la contraseña del almacén |
| `KEY_ALIAS` | `vademecum` (o el alias que hayas usado) |
| `KEY_PASSWORD` | la contraseña de la clave |

Después andá a la pestaña **Actions → Compilar AAB de release → Run workflow**.
Podés indicar `versionName` y `versionCode` para esa compilación. Al terminar,
descargá el `.aab` desde los *artifacts* de la ejecución.

---

## 4. Publicar una actualización

Cada subida a Play Console necesita un `versionCode` mayor que el anterior.
En `android/app/build.gradle`:

```gradle
versionCode 2
versionName "1.1.0"
```

`versionCode` es un entero que solo puede crecer; `versionName` es el texto que
ve el usuario en la ficha de Play Store.

---

## Flujo de trabajo diario

Los archivos de la app se editan en la raíz del repositorio (`index.html`,
`app.js`, `style.css`, `data/`). La carpeta `www/` **se genera** y no se versiona.

```bash
npm run build   # arma www/ desde los archivos de la raíz
npm run sync    # build + copia www/ al proyecto Android
npm run aab     # sync + compila el App Bundle firmado
```
