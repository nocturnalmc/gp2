const Product = require('../models/Product');
const Review = require('../models/Review');

// GET /products
const findProducts = async (req, res) => {
  Product.find({})
    .then(function (dbProducts) {
      res.json(dbProducts);
    })
    .catch(function (err) {
      res.json(err);
    });
};

// GET /reviews
const findReviews = async (req, res) => {
  Review.find({})
    .then(function (dbReviews) {
      res.json(dbReviews);
    })
    .catch(function (err) {
      res.json(err);
    });
};

// POST /product
const createProduct = async (req, res) => {
  Product.create(req.body)
    .then(function (dbProduct) {
      // If we were able to successfully create a Product, send it back to the client
      res.json(dbProduct);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};

// POST /product/:id
// Route for creating a new Review and updating Product "review" field with it
const createReviewWithPushProduct = async (req, res) => {
  // Create a new note and pass the req.body to the entry
  Review.create(req.body)
    .then(function (dbReview) {
      // If a Review was created successfully, find one Product with an `_id` equal to `req.params.id`. Update the Product to be associated with the new Review
      // { new: true } tells the query that we want it to return the updated Product -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return Product.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { reviews: dbReview._id } },
        { new: true }
      );
    })
    .then(function (dbProduct) {
      // If we were able to successfully update a Product, send it back to the client
      res.json(dbProduct);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};

// GET /products/:id
// Route for retrieving a Product by id and populating it's Review.
const findProductWithPopulate = async (req, res) => {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  Product.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate('reviews')
    .then(function (dbProduct) {
      // If we were able to successfully find an Product with the given id, send it back to the client
      res.json(dbProduct);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
};

module.exports = {
  findProducts,
  findReviews,
  createProduct,
  createReviewWithPushProduct,
  findProductWithPopulate,
};
