# Help Desk · Registro — guía de instalación

La app son 5 archivos (index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png). Sin servidor ni base de datos: guarda en el teléfono y sube a tu Hoja de Google.

## 1. Pasa tu Excel a Google Sheets (una sola vez)
1. Sube HELP_DESK_ABRIL_2026.xlsx a tu Drive, ábrelo y usa Archivo → Guardar como Hoja de cálculo de Google.
2. Debe existir una pestaña llamada **HELP DESK** con los encabezados en la **fila 4** (como en tu archivo). La app agrega cada tarea terminada como una fila nueva al final.
3. Copia el enlace de la hoja (lo usarás en el paso 4).

## 2. Crea el acceso de Google (unos 10 min, gratis)
1. Entra a https://console.cloud.google.com y crea un proyecto.
2. Menú → APIs y servicios → Biblioteca → activa **Google Sheets API**.
3. APIs y servicios → Pantalla de consentimiento OAuth → tipo **Externo** → llena nombre y correo → en **Usuarios de prueba** agrega tu propio correo de Google.
4. APIs y servicios → Credenciales → Crear credenciales → **ID de cliente de OAuth** → tipo **Aplicación web**.
5. En **Orígenes autorizados de JavaScript** pon la dirección donde alojarás la app (paso 3), por ejemplo https://tuusuario.github.io (sin barra final ni ruta).
6. Copia el **ID de cliente** (termina en .apps.googleusercontent.com).

## 3. Aloja los 5 archivos con HTTPS (gratis)
- **Netlify:** entra a app.netlify.com/drop y arrastra la carpeta. Te da una dirección https://….netlify.app. Esa es la dirección del paso 2.5 (puedes volver a editarla en Credenciales).
- **GitHub Pages:** sube los archivos a un repositorio y activa Pages.
Para que el acceso de Google funcione, la dirección debe coincidir exactamente con el origen autorizado.

## 4. Instala y configura en el móvil
1. Abre la dirección en Chrome (Android) o Safari (iPhone) y elige **Instalar app / Añadir a pantalla de inicio**.
2. Abre la app → **ajustes Google** → pega el ID de cliente y el enlace de la hoja → Guardar.
3. Toca **Conectar** y acepta. Google mostrará "app no verificada": Avanzado → Continuar (es tu propia app, en modo de prueba).
4. Abre la app una vez con internet para que quede disponible sin conexión.

## Cómo se comporta
- Puedes tener varias tareas abiertas a la vez. Las abiertas se quedan solo en el teléfono hasta que las finalices.
- Al finalizar, la tarea entra en la cola. Con internet se sube sola; sin internet espera y se sube al volver (se reintenta cada minuto y al recuperar conexión).
- El permiso de Google dura aproximadamente 1 hora. Si vence, sale el botón **Conectar** (un toque) y la cola continúa.
- Solo se agregan filas nuevas. Si editas o borras un registro que ya se subió, el cambio no se refleja en la hoja; corrígelo allí.
- Los datos viven en el navegador del teléfono: no borres los datos del sitio mientras haya pendientes. "Descargar Excel" queda como respaldo.
