const async = require('async');
var Tadika = require('../models/Tadika');

// Display detail page for a specific murid
exports.kid_detail = function(req, res) {
    async.parallel({
        nama: function(callback) {
            Tadika.findById(req.params.id)
              .exec(callback)
        },
        tadika: function(callback) {
            Tadika.find({ 'namaTaskaTadikaPendaftaranTadika': req.params.id })
          .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.nama==null) { // No results.
            var err = new Error('Tiada budak seperti itu');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('kids_detail', { title: 'Murid', nama: results.nama } );
    });
};

// Display delete confirmation page for specific murid
exports.kiddeleteForm = function(req, res) {
    async.parallel({
        nama: function(callback) {
            Tadika.findById(req.params.id)
              .exec(callback)
        },
        tadika: function(callback) {
            Tadika.find({ 'namaTaskaTadikaPendaftaranTadika': req.params.id })
          .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.nama==null) { // No results.
            var err = new Error('Tiada budak seperti itu');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('kids_delete', { title: 'Murid', nama: results.nama } );
    });
};

// Delete murid and redirect to the list of murids
exports.kiddeletePost = function(req, res) {
    if (err) { 
        var err = new Error('Tiada budak seperti itu');
        err.status = 404;
        return next(err);
     }
    Tadika.findByIdAndDelete(req.body.kidid, function deleteKid(err) {
        if (err) { return next(err); }
        console.log('Deleted ' + req.body.kidid);
        res.redirect('/generate/senaraidata');
    });
};