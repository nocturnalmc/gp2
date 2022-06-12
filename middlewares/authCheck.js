const jwt = require('jsonwebtoken');

const authCheck = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'Please log in' });
  }

  const userToken = authHeader.split(' ')[1];

  try {
    const userTokenVerified = jwt.verify(userToken, process.env.JWT_SECRET);
    req.user = {
      userId: userTokenVerified.userId,
      username: userTokenVerified.username,
      negeri: userTokenVerified.negeri,
      daerah: userTokenVerified.daerah,
      kp: userTokenVerified.kp,
      accountType: userTokenVerified.accountType,
    };
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Please log in' });
  }
};

module.exports = authCheck;
