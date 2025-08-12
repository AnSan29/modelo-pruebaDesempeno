import express from "express";
import { pool } from "./conexion_bd.js";
import {
  createPrestamo,
  readAllPrestamos,
  readOnePrestamo,
  updatePrestamo,
} from "./controllers/prestamosController.js";
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  console.log("Hola mundo");
  res.send("Hola mundo");
});

/* Prestamos */

// GET
app.get("/prestamos", async (req, res) => readAllPrestamos(pool, req, res));

app.get("/prestamos/:id", async (req, res) => readOnePrestamo(pool, req, res));
// POST
app.post("/prestamos", async (req, res) => createPrestamo(pool, req, res));
// PUT
app.put("/prestamos/:id", async (req, res) => updatePrestamo(pool, req, res));
// DELETE

app.listen(3000, () => {
  console.log("El servidor inició, esta corriendo en http://localhost:3000");
});
