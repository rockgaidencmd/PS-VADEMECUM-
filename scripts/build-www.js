/* Copia los archivos de la app web a www/, que es la carpeta que Capacitor
   empaqueta dentro del APK/AAB. Todo lo que no esté aquí no llega al móvil. */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'www');

const FILES = [
  'index.html',
  'app.js',
  'style.css',
  'disclaimer.js',
  'manifest.json',
  'icono-192.png',
  'icono-512.png',
];

const DIRS = ['data', 'fonts'];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

let count = 0;

for (const file of FILES) {
  fs.copyFileSync(path.join(ROOT, file), path.join(OUT, file));
  count++;
}

for (const dir of DIRS) {
  fs.cpSync(path.join(ROOT, dir), path.join(OUT, dir), { recursive: true });
  count += fs.readdirSync(path.join(OUT, dir)).length;
}

// El service worker existe para desalojar cachés de la versión web; dentro de
// la app los archivos ya son locales y registrarlo solo puede causar ruido.
const indexPath = path.join(OUT, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');
const stripped = html.replace(
  /\n\s*<script>\s*if \('serviceWorker' in navigator\)[\s\S]*?<\/script>\n/,
  '\n'
);
if (stripped === html) {
  console.warn('AVISO: no se encontró el registro del service worker en index.html');
}
fs.writeFileSync(indexPath, stripped);

console.log(`www/ generado — ${count} archivos`);
