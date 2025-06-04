# 📚 API RESTful - Biblioteca

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express** y **MongoDB** para gestionar una biblioteca digital. Permite a los usuarios registrar libros, actualizar información, eliminar registros y realizar consultas sobre los libros disponibles.

## 🚀 Características
✅ CRUD completo para gestión de libros  
✅ Autenticación de usuarios con JWT  
✅ Validación de datos con Mongoose  
✅ Conexión con base de datos MongoDB  
✅ Manejo de errores y respuestas JSON estructuradas  

## 🏗️ Tecnologías utilizadas
- **Node.js** (Entorno de ejecución)
- **Express.js** (Framework web)
- **MongoDB + Mongoose** (Base de datos)
- **JWT** (Autenticación)
- **dotenv** (Gestión de variables de entorno)

## 📦 Instalación
1. Clona este repositorio:
   ```
    >> git clone https://github.com/germanfabriziogomez/API_RESTful_Biblioteca.git
   ```
2. Instala dependencias
```sh
    >> npm install  
```
3. Crea un archivo .env y define las variables:
PORT=
URI_DB=



4. Inicia el servidor:
npm run dev


### 🔥 Endpoints principales
| Método | Ruta               | Descripción                     |
|--------|--------------------|---------------------------------|
| GET    | `/books`           | Obtener todos los libros       |
| GET    | `/books/:id`       | Obtener un libro por ID        |
| POST   | `/books`           | Agregar un nuevo libro         |
| PUT    | `/books/:id`       | Actualizar información de libro|
| DELETE | `/books/:id`       | Eliminar un libro              |

🔑 Autenticación
| Método | Ruta | Descripción | 
| POST | /register | Registrar un usuario | 
| POST | /login | Iniciar sesión (retorna JWT) | 


📩 Contacto
Si tienes alguna duda o sugerencia, ¡contáctame!
📧 Email: germanfabriziogomez@example.com



