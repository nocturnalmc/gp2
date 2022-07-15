function verifyToken(req, res, next) {
    if (!req.cookies.genToken) {
        return res.status(401).json({ msg: 'Please log in number 1' });
    }
    return next();
  }

module.exports = { verifyToken };