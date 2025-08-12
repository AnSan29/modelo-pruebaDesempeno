/* este archivo se encargara de llmar a los loads */

import { loadLibrosToDataBase } from "./load_libros.js";
import { loadPrestamosToDataBase } from "./load_prestamos.js";
import { loadUsersToDataBase } from "./load_usuarios.js";

(async () => {
  try {
    console.log("Iniciando Sedeers...");

    //await loadUsersToDataBase();
    //await loadLibrosToDataBase();
    await loadPrestamosToDataBase();

    console.log("OK-> Todos los Sedeers ejecutados correctamente.");
  } catch (error) {
    console.error("Error ejecutando los Sedeers...");
  } finally {
    process.exit();
  }
})();
