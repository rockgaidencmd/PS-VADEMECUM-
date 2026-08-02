# Textos y respuestas para Play Console

Todo lo de este archivo es para **copiar y pegar** en Play Console. No hay que
tocar código.

---

## 1. Ficha de la tienda

### Título (máx. 30 caracteres)

```
Vademécum MediShort360
```

### Descripción breve (máx. 80 caracteres)

```
Consulta farmacológica rápida para enfermería. 163 fármacos, sin conexión.
```

### Descripción completa

> ⚠️ **No borres el bloque final de AVISO IMPORTANTE.** Google exige esa
> redacción literal en la descripción de las aplicaciones de salud. Sin ella la
> app se rechaza por la política de *Health Content and Services*.

```
Vademécum de enfermería para consulta farmacológica rápida en la práctica asistencial.

Diseñado para profesionales y estudiantes de enfermería que necesitan verificar dosis, diluciones, compatibilidades y precauciones en segundos, junto a la cama del paciente.

CONTENIDO
• 163 fármacos de uso hospitalario con ficha completa
• Dosis, diluciones y velocidades de infusión
• Vías de administración y compatibilidades
• Incompatibilidades y precauciones críticas
• Medicamentos de alto riesgo señalizados
• Sección de hemoterapia: hemocomponentes y hemoderivados
• Antídotos y reversores

ORGANIZACIÓN
• Categorías: vasopresores, antibióticos, electrolitos, insulinas, diuréticos, anticoagulantes, antiarrítmicos, analgesia y sedación
• Buscador instantáneo por nombre comercial o principio activo
• Favoritos y consultados recientemente
• Modo claro y oscuro

FUNCIONA SIN CONEXIÓN
Todo el contenido viaja dentro de la aplicación. No necesita internet en ningún momento, ni siquiera la primera vez. Pensado para pasillos de hospital, sótanos y guardias sin cobertura.

PRIVACIDAD
No recopila datos. No pide registro ni correo electrónico. No incluye publicidad ni rastreadores. Tus favoritos y preferencias se guardan únicamente en tu dispositivo.

PAGO ÚNICO
Se paga una sola vez al descargar. Sin suscripciones, sin compras dentro de la aplicación.

⚠️ AVISO IMPORTANTE
Esta aplicación es una herramienta de referencia educativa. No es un dispositivo médico y no diagnostica, trata, cura ni previene ninguna enfermedad o condición médica. No sustituye el juicio clínico profesional, los protocolos de tu institución ni la evaluación individualizada del paciente. Consulta siempre a un profesional sanitario cualificado para cualquier decisión sobre diagnóstico o tratamiento. La responsabilidad de toda intervención farmacológica recae exclusivamente en el profesional tratante.
```

---

## 2. Formulario de declaración de aplicaciones de salud

Play Console lo pide por ser una app de categoría médica. Es la causa más
frecuente de rechazo, por responderlo de forma incoherente con la descripción.

| Pregunta | Respuesta |
|---|---|
| ¿La app es un dispositivo médico regulado? | **No** |
| ¿Tiene aprobación de una autoridad sanitaria? | **No** (no la necesita: no es dispositivo médico) |
| Categoría de la app de salud | **Recursos e información sanitaria** / referencia clínica |
| ¿A quién va dirigida? | Profesionales sanitarios y estudiantes de enfermería |
| ¿Ofrece diagnóstico, tratamiento o dosificación personalizada al paciente? | **No** — muestra información de referencia general, no calcula ni recomienda para un paciente concreto |
| ¿Incluye el descargo obligatorio en la descripción? | **Sí** (bloque AVISO IMPORTANTE) |
| ¿Recopila datos de salud del usuario? | **No** |

**Regla de oro:** lo que respondas acá tiene que coincidir con lo que dice la
descripción y con lo que hace la app. Las incoherencias son el motivo de rechazo
número uno en esta categoría.

---

## 3. Seguridad de los datos

| Pregunta | Respuesta |
|---|---|
| ¿La app recopila o comparte datos de usuario? | **No** |
| ¿Los datos se cifran en tránsito? | No aplica (no hay transmisión) |
| ¿Se puede solicitar la eliminación de datos? | No aplica |
| Política de privacidad | URL pública de `privacidad.html` |

Esto es verificable: la aplicación no realiza ninguna petición de red.

---

## 4. Clasificación del contenido

| Pregunta | Respuesta |
|---|---|
| Categoría | Referencia / Medicina |
| Violencia, sexo, lenguaje soez, apuestas | **No** a todo |
| Referencias a drogas | **Sí** — contexto médico y educativo. Es un vademécum: describe fármacos de uso hospitalario para profesionales |
| Público objetivo | **Mayores de 18 años** (profesionales sanitarios) |

Marcar público adulto evita las obligaciones adicionales de la política de
Familias, que no aplican a esta app.

---

## 5. Recursos gráficos que hay que preparar

| Recurso | Requisito |
|---|---|
| Icono | 512 × 512 px, PNG de 32 bits |
| Gráfico de funciones | 1024 × 500 px |
| Capturas de teléfono | Mínimo 2, máximo 8 (recomendado 4–6) |

Buenas capturas: pantalla de inicio, una ficha de fármaco abierta, la vista de
categorías y el buscador con resultados.

---

## 6. Orden recomendado de publicación

1. Crear la app en Play Console y activar **Play App Signing**.
2. Subir el `.aab` a **Prueba interna** primero, nunca directo a producción.
3. Instalarla en un teléfono real desde el enlace de prueba interna y comprobar
   que la cabecera y la barra inferior no quedan tapadas por las barras del
   sistema.
4. Completar ficha, declaración de salud, seguridad de los datos y clasificación.
5. Fijar el precio y los países.
6. Recién entonces promover a producción.
