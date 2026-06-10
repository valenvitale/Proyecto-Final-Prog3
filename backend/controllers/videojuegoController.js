const { Videojuego } = require("../models/videojuego.model");

// crear videojuego
const crearVideojuego = async (req, res) => {
  try {
    const {
      titulo,
      genero,
      plataforma,
      estado,
      calificacion,
      horasJugadas,
    } = req.body;

    const videojuego = await Videojuego.create({
      titulo,
      genero,
      plataforma,
      estado,
      calificacion,
      horasJugadas,
    });

    res.status(201).json(videojuego);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el videojuego",
      detalle: error.message,
    });
  }
};

// Obtener todos los videojuegos
const obtenerVideojuegos = async (req, res) => {
  try {
    const videojuegos = await Videojuego.findAll();

    res.status(200).json(videojuegos);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener videojuegos",
      detalle: error.message,
    });
  }
};

// Obtener videojuego por ID
const obtenerVideojuegoPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const videojuego = await Videojuego.findByPk(id);

    if (!videojuego) {
      return res.status(404).json({
        error: "Videojuego no encontrado",
      });
    }

    res.status(200).json(videojuego);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener videojuego",
      detalle: error.message,
    });
  }
};

// Actualizar videojuego
const actualizarVideojuego = async (req, res) => {
  try {
    const { id } = req.params;

    const videojuego = await Videojuego.findByPk(id);

    if (!videojuego) {
      return res.status(404).json({
        error: "Videojuego no encontrado",
      });
    }

    await videojuego.update(req.body);

    res.status(200).json(videojuego);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar videojuego",
      detalle: error.message,
    });
  }
};

// Eliminar videojuego
const eliminarVideojuego = async (req, res) => {
  try {
    const { id } = req.params;

    const videojuego = await Videojuego.findByPk(id);

    if (!videojuego) {
      return res.status(404).json({
        error: "Videojuego no encontrado",
      });
    }

    await videojuego.destroy();

    res.status(200).json({
      mensaje: "Videojuego eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar videojuego",
      detalle: error.message,
    });
  }
};

// Cambiar estado
const cambiarEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    const videojuego = await Videojuego.findByPk(id);

    if (!videojuego) {
      return res.status(404).json({
        error: "Videojuego no encontrado",
      });
    }

    await videojuego.update({ estado });

    res.status(200).json(videojuego);
  } catch (error) {
    res.status(500).json({
      error: "Error al cambiar estado",
      detalle: error.message,
    });
  }
};

// Calificar videojuego
const calificarVideojuego = async (req, res) => {
  try {
    const { id } = req.params;
    const { calificacion } = req.body;

    const videojuego = await Videojuego.findByPk(id);

    if (!videojuego) {
      return res.status(404).json({
        error: "Videojuego no encontrado",
      });
    }

    await videojuego.update({ calificacion });

    res.status(200).json(videojuego);
  } catch (error) {
    res.status(500).json({
      error: "Error al calificar videojuego",
      detalle: error.message,
    });
  }
};

// Registrar horas jugadas
const registrarHoras = async (req, res) => {
  try {
    const { id } = req.params;
    const { horasJugadas } = req.body;

    const videojuego = await Videojuego.findByPk(id);

    if (!videojuego) {
      return res.status(404).json({
        error: "Videojuego no encontrado",
      });
    }

    await videojuego.update({ horasJugadas });

    res.status(200).json(videojuego);
  } catch (error) {
    res.status(500).json({
      error: "Error al registrar horas",
      detalle: error.message,
    });
  }
};

module.exports = {
  crearVideojuego,
  obtenerVideojuegos,
  obtenerVideojuegoPorId,
  actualizarVideojuego,
  eliminarVideojuego,
  cambiarEstado,
  calificarVideojuego,
  registrarHoras,
};