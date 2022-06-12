const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ err });
};

module.exports = errorHandler;
