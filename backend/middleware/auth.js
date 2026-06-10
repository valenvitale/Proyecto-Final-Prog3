const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "secret_por_defecto";

function generarToken(user) {
  // TODO: Generar un token JWT con el id y email del usuario.
  // Pista: usar jwt.sign() con un payload { id, email } y una expiración de '24h'.
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "24h" },
  );
  // Crea un token JWT con el id y email del usuario
}

function verificarToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  // TODO: Extraer el token del header Authorization.
  // El formato es "Bearer <token>", hay que quedarse solo con la parte del token.
  // Pista: usar split(' ')
  const token = authHeader.split(" ")[1];
  // Extrae el token del encabezado "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Formato de token inválido" });
  }

  try {
    // TODO: Verificar y decodificar el token con jwt.verify()
    // Si es válido, guardar los datos del usuario en req.user y llamar a next()
    // Si es inválido, devolver status 401 con un mensaje de error
    const decoded = jwt.verify(token, JWT_SECRET);
    // Verifica que el token sea válido y obtiene sus datos

    req.user = decoded;
    // Guarda los datos del usuario autenticado para usarlos en la ruta

    next();
    // Continúa con la ejecución del siguiente middleware o controlador
  } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
}

module.exports = { generarToken, verificarToken };
