const notFound = (req, res) => {
  res.status(404).send('Page not found. Error : 404');
};

module.exports = notFound;
