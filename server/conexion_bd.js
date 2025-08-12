import mysql from "mysql2/promise";
import "dotenv/config";

export const pool = mysql.createPool({
  host: process.env.BD_HOST,
  database: process.env.BD_NAME,
  port: process.env.BD_PORT,
  user: process.env.BD_USER,
  password: process.env.BD_PASSWORD,
  connectionLimit: 10, // Máximo numero de conexiones activas al mismo tiempo
  waitForConnections: true, // si se alcanza el limite, las nuevas peticiones esperan su turno
  queueLimit: 0, // Número maximo de peticiones en espera(0= sin limite)
});

async function tryBdConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("OK -> success connection with DB");
    connection.release();
  } catch (error) {
    console.error("Error -> bd no connected:", error.message);
  }
}

tryBdConnection();
