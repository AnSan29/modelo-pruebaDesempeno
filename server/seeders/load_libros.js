/* se encargara de cargar usuarios a la base de datos */
import fs from "fs"; //permite leer archivos
import path from "path"; //muestra la ruta actual
import csv from "csv-parser";
import { pool } from "../conexion_bd.js";

export async function loadLibrosToDataBase() {
  const rutaArchivo = path.resolve("server/data/02_libros.csv");
  const libros = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(rutaArchivo)
      .pipe(csv())
      .on("data", (fila) => {
        libros.push([
          fila.isbn,
          fila.titulo.trim(),
          fila.anio_publicacion,
          fila.autor,
        ]);
      })
      .on("end", async () => {
        try {
          const sql =
            "INSERT INTO libros(isbn,titulo,anio_publicacion,autor) VALUES ?";
          const [result] = await pool.query(sql, [libros]);
          console.log(`Se insertaron ${result.affectedRows} libros`);
          resolve();
        } catch (error) {
          console.error("Error al insertar libros:", error.message);
          reject(error);
        }
      })
      .on("error", (err) => {
        console.error("Error al leer el archivo CSV de libros:", err.message);
        reject(err);
      });
  });
}
