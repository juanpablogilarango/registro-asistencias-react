# Sistema de Registro de Asistencias

Este es un proyecto de prueba técnica desarrollado con **React + Vite**. Permite registrar la hora de entrada y salida de personas, con autenticación simulada usando `localStorage`.

## Funcionalidades

- Registro de asistencias con hora automática
- Filtrado por nombre u hora
- Hora de entrada y salida por persona
- Simulación de login con validación de token en `localStorage`
- Rutas protegidas
- Persistencia de asistencias en `localStorage`
- Interfaz simple y clara

## Tecnologías usadas

- React
- Vite
- React Router DOM
- JavaScript (sin TypeScript)
- localStorage para autenticación y persistencia

## Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

Instala dependencias:

bash
Copiar
Editar
npm install
Ejecuta el proyecto:

bash
Copiar
Editar
npm run dev
Estructura del proyecto
css
Copiar
Editar
src/
├── components/
│   ├── AttendanceForm.jsx
│   ├── AttendanceList.jsx
├── pages/
│   ├── LoginPage.jsx
│   ├── AdminPage.jsx
├── App.jsx
├── main.jsx
Autenticación simulada
El login está simulado: si se ingresa cualquier usuario/contraseña válida, se guarda un token en localStorage.

La ruta /admin está protegida y requiere token.

Persistencia
Las asistencias registradas se guardan en localStorage, incluyendo hora de entrada y salida.

Notas
No se usan librerías externas de UI como Bootstrap o Material UI.

No se usa useContext, Redux ni hooks personalizados.

No hay backend real ni conexión con bases de datos.

yaml
Copiar
Editar
