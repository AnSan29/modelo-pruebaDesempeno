// leer todos los prestamos
export const readAllPrestamos = async (pool, req, res) => {
  try {
    const query = `
      SELECT
        prestamos.id_prestamo AS prestamo,
        usuarios.nombre_completo AS usuario,
        libros.isbn,
        libros.titulo AS libro
        FROM prestamos
        JOIN usuarios ON usuarios.id_usuario = prestamos.id_usuario
        JOIN libros ON libros.isbn = prestamos.isbn
        order by prestamo asc
      `;

    const [filas] = await pool.query(query);
    return res.json(filas);
  } catch (error) {
    res.status(500).json({
      status: "error",
      endpoint: req.originalUrl,
      method: req.method,
      message: error.message,
    });
  }
};

// leer un solo prestamo
export const readOnePrestamo = async (pool, req, res) => {
  try {
    const { id } = req.params;

    const query = `
      SELECT
        prestamos.id_prestamo AS prestamo,
        usuarios.nombre_completo AS usuario,
        libros.isbn,
        libros.titulo AS libro
        FROM prestamos
        JOIN usuarios ON usuarios.id_usuario = prestamos.id_usuario
        JOIN libros ON libros.isbn = prestamos.isbn
        WHERE prestamos.id_prestamo = ?
        order by prestamo asc 
      `;

    const [filas] = await pool.query(query, [id]);
    return res.json(filas);
  } catch (error) {
    res.status(500).json({
      status: "error",
      endpoint: req.originalUrl,
      method: req.method,
      message: error.message,
    });
  }
};

// crear un solo prestamo
export const createPrestamo = async (pool, req, res) => {
  try {
    const { id_usuario, isbn, fecha_prestamo, fecha_devolucion, estado } =
      req.body;

    const query = `
      INSERT INTO prestamos(id_usuario,isbn,fecha_prestamo,fecha_devolucion,estado) 
      VALUES(?,?,?,?,?)
      `;
    const values = [id_usuario, isbn, fecha_prestamo, fecha_devolucion, estado];

    const [results] = await pool.query(query, values);

    res.status(200).json({
      mensaje: "prestamo creado exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      endpoint: req.originalUrl,
      method: req.method,
      message: error.message,
    });
  }
};

export const updatePrestamo = async (pool, req, res) => {
  try {
    const { id_usuario, isbn, fecha_prestamo, fecha_devolucion, estado } =
      req.body;

    const { id } = req.params;

    const query = `
      UPDATE prestamos 
      SET id_usuario = ?,
          isbn = ?,
          fecha_prestamo = ?,
          fecha_devolucion = ?,
          estado = ?
      WHERE id_prestamo = ?
      `;
    const values = [
      id_usuario,
      isbn,
      fecha_prestamo,
      fecha_devolucion,
      estado,
      id,
    ];
    const [result] = await pool.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "Préstamo no encontrado" });
    }

    res.status(200).json({ mensaje: "Préstamo actualizado correctamente" });
  } catch (error) {
    res.status(500).json({
      status: "error",
      endpoint: req.originalUrl,
      method: req.method,
      message: error.message,
    });
  }
};
