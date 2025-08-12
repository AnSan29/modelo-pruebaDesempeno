# 📚 Sistema de Gestión de Préstamos de Biblioteca

Este proyecto es un **modelo base** para la gestión de préstamos de una biblioteca, desarrollado como parte de una **prueba de desempeño**.  
El sistema está construido en **Node.js** con **Express** y utiliza **MySQL** como base de datos.  
Incluye carga inicial de datos desde archivos CSV mediante **seeders**.

---

## 📂 Estructura del Proyecto

```
modelo-pruebaDesempeño/
│
├── docs/
│   └── model.sql                # Script de creación de base de datos y tablas
│
├── server/
│   ├── controllers/
│   │   └── prestamosController.js # Controlador para CRUD de préstamos
│   ├── data/
│   │   ├── 01_usuarios.csv       # Datos iniciales de usuarios
│   │   ├── 02_libros.csv         # Datos iniciales de libros
│   │   └── 03_prestamos.csv      # Datos iniciales de préstamos
│   ├── seeders/
│   │   ├── load_libros.js        # Seeder para libros
│   │   ├── load_prestamos.js     # Seeder para préstamos
│   │   ├── load_usuarios.js      # Seeder para usuarios
│   │   └── run_seeders.js        # Ejecuta todos los seeders
│   ├── conexion_bd.js            # Conexión a la base de datos MySQL
│   └── index.js                  # Punto de entrada del servidor Express
│
├── .env                          # Variables de entorno para conexión BD
├── package.json                  # Dependencias y scripts de npm
└── README.md                     # Documentación del proyecto
```

---

## 🛠 Tecnologías Utilizadas

- **Node.js** (runtime de JavaScript)
- **Express** (framework backend)
- **MySQL** (base de datos relacional)
- **csv-parser** (lectura de datos CSV)
- **dotenv** (manejo de variables de entorno)

---

## ⚙️ Instalación y Configuración

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd modelo-pruebaDesempeño
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**  
   Editar el archivo `.env` con la configuración de la base de datos:
   ```env
   BD_HOST=localhost
   BD_USER=root
   BD_PASSWORD=
   BD_NAME=biblioteca_easy
   BD_PORT=3306
   ```

4. **Crear la base de datos**
   - Ejecutar el script `docs/model.sql` en tu gestor MySQL.

5. **Cargar datos iniciales (opcional)**
   ```bash
   node server/seeders/run_seeders.js
   ```

---

## 🚀 Ejecución del Proyecto

Iniciar el servidor en modo desarrollo:
```bash
node server/index.js
```

El servidor estará disponible en:
```
http://localhost:3000
```

---

## 📌 Endpoints Disponibles

### **Préstamos**
| Método | Endpoint         | Descripción                        |
|--------|------------------|------------------------------------|
| GET    | `/prestamos`     | Lista todos los préstamos          |
| GET    | `/prestamos/:id` | Muestra un préstamo por ID          |
| POST   | `/prestamos`     | Crea un nuevo préstamo              |
| PUT    | `/prestamos/:id` | Actualiza un préstamo existente     |

---

## 📑 Ejemplo de Petición POST

**POST** `/prestamos`
```json
{
  "id_usuario": 1,
  "isbn": "978-1234567890",
  "fecha_prestamo": "2025-08-10",
  "fecha_devolucion": "2025-08-20",
  "estado": "activo"
}
```

---

## 🧑‍💻 Autor

Proyecto desarrollado como modelo para prueba de desempeño.  
Autor: **Andrés de Jesús Santoyo**  
📍 Barranquilla, Colombia