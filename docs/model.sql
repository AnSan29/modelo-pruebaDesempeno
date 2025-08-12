/* crear tabla  */

CREATE TABLE Ejemplos(
    id_ejemplo INT NOT NULL AUTO_INCREMENT,
    primer_nombre  VARCHAR(100) NOT NULL,
    segundo_nombre  VARCHAR(100) NULL,
    primer_apellido  VARCHAR(100) NOT NULL,
    segundo_apellido  VARCHAR(100) NULL,
    fecha_nacimiento  DATE NOT NULL,
    fecha_ingreso  DATE NOT NULL,
    email  VARCHAR(100) NOT NULL UNIQUE,
    id_genero INT NOT NULL,
    id_tipo_identificacion INT NOT NULL,
    num_id INT NOT NULL UNIQUE,
    id_carrera INT NOT NULL,
    Primary key (id_estudiante),
    FOREIGN KEY (id_genero) REFERENCES Generos(id_genero),
    FOREIGN KEY (id_tipo_identificacion) REFERENCES Tipo_identificacion(id_tipo_identificacion),
    FOREIGN KEY (id_carrera) REFERENCES Carrera(id_carrera)
);

CREATE TABLE usuarios(
    id_usuario INT NOT NULL AUTO_INCREMENT,
    nombre_completo VARCHAR(100) NOT NULL,
    identificacion INT NOT NULL UNIQUE,
    correo VARCHAR(100) NOT NULL UNIQUE,
    telefono INT NOT NULL,
    Primary key (id_usuario)
);

CREATE TABLE libros(
    isbn VARCHAR(20) NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    anio_publicacion INT NOT NULL ,
    autor VARCHAR(100) NOT NULL ,
    Primary key (isbn)
);

CREATE TABLE prestamos(
    id_prestamo INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    isbn VARCHAR(20) NOT NULL,
    fecha_prestamo DATE NOT NULL ,
    fecha_devolucion DATE NOT NULL ,
    estado VARCHAR(100) NOT NULL ,
    Primary key (id_prestamo),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (isbn) REFERENCES libros(isbn)
);

SELECT
prestamos.id_prestamo AS prestamo,
usuarios.nombre_completo AS usuario,
libros.isbn,
libros.titulo AS libro
FROM prestamos
JOIN usuarios ON usuarios.id_usuario = prestamos.id_usuario
JOIN libros ON libros.isbn = prestamos.isbn;


-- Comandos SELECT básicos
SELECT * FROM nombre_tabla;
SELECT * FROM clientes;

--Seleccionar columnas específicas: 
SELECT columna1, columna2 FROM nombre_tabla;

--Cláusulas y modificadores comunes de SELECT
--WHERE: Filtrar datos
SELECT columna1, columna2 FROM nombre_tabla WHERE condicion;
SELECT first_name, email FROM clientes WHERE city = 'Madrid';

--ORDER BY: Ordenar resultados
SELECT * FROM nombre_tabla ORDER BY columna ASC|DESC;
SELECT product_name, price FROM productos ORDER BY price DESC;

--LIMIT: Limitar la cantidad de resultados
SELECT * FROM nombre_tabla LIMIT numero_de_filas;
SELECT product_name, price FROM productos ORDER BY price DESC LIMIT 5;



--AS: Renombrar columnas o tablas
SELECT columna1 AS alias1, columna2 AS alias2 FROM nombre_tabla;
SELECT product_name AS "Nombre del Producto", price AS Precio FROM productos;







-- Modificar la Estructura de una Tabla

--Comando UPDATE
UPDATE nombre_tabla
SET columna1 = nuevo_valor1, columna2 = nuevo_valor2, ...
WHERE condicion;

--Actualizar un solo registro: Cambiar el precio del producto con el id 15 a 199.99.
UPDATE productos
SET price = 199.99
WHERE product_id = 15;

-- Actualizar múltiples registros: Aumentar el precio de todos los productos en la categoría 'Electrónica' en un 10%.
UPDATE productos
SET price = price * 1.10
WHERE category_name = 'Electrónica';

--Actualizar todos los registros de una tabla (¡úselo con extrema precaución!):
--Ejemplo: Establecer el estado de todos los pedidos a 'Pendiente'.
UPDATE pedidos
SET status = 'Pendiente';




--Añadir una nueva columna:
ALTER TABLE nombre_tabla
ADD COLUMN nueva_columna TIPO_DE_DATO;

-- Ejemplo: Añadir una columna email a la tabla clientes.
ALTER TABLE clientes
ADD COLUMN email VARCHAR(100);


--Modificar el tipo de dato de una columna:
ALTER TABLE nombre_tabla
MODIFY COLUMN nombre_columna NUEVO_TIPO_DE_DATO;

--Ejemplo: Cambiar el tipo de dato de la columna precio a un decimal.
ALTER TABLE productos
MODIFY COLUMN precio DECIMAL(10, 2);

--Eliminar una columna:
ALTER TABLE nombre_tabla
DROP COLUMN nombre_columna;

--Ejemplo: Eliminar la columna fax de la tabla proveedores.
ALTER TABLE proveedores
DROP COLUMN fax;











--DELETE: Eliminar Filas de una Tabla


--Sintaxis básica para eliminar registros específicos:
DELETE FROM nombre_tabla
WHERE condicion;

--Eliminar una sola fila: Ejemplo: Borrar al cliente con el id 10.
DELETE FROM clientes
WHERE customer_id = 10;

--Eliminar varias filas: Ejemplo: Borrar todos los productos que están fuera de stock (stock_quantity igual a 0).
DELETE FROM productos
WHERE stock_quantity = 0;

--Eliminar todas las filas de una tabla (¡úselo con precaución!):
DELETE FROM nombre_tabla;

--ejemplo: Borrar todos los registros de la tabla pedidos
DELETE FROM pedidos;









-- Comandos JOIN
--INNER JOIN: Devuelve filas cuando hay al menos una coincidencia en ambas tablas.
SELECT p.product_name, c.category_name
FROM products AS p
INNER JOIN categories AS c ON p.category_id = c.category_id;

--LEFT JOIN: Devuelve todas las filas de la tabla izquierda (products), incluso si no hay coincidencias en la tabla derecha (categories).
SELECT p.product_name, c.category_name
FROM products AS p
LEFT JOIN categories AS c ON p.category_id = c.category_id;
--RIGHT JOIN: Similar a LEFT JOIN, pero devuelve todas las filas de la tabla derecha.

