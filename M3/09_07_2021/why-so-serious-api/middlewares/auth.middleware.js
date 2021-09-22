const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Verificar se recebi um token
  const token = req.get('Authorization');

  if (!token) {
    res.status(401).json({ message: 'Request without token' });
  }
  // validar o token
  const tokenWithoutBearer = token.split(' ')[1];

  try {
    const decodedToken = jwt.verify(
      tokenWithoutBearer,
      process.env.SECRET_JWT,
    );
    req.user = { ...decodedToken };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized', error });
  }

  // enviar para proxima rota
}

module.exports = auth;