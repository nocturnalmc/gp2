// const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Superadmin = require("../models/Superadmin");
const Fasiliti = require("../models/Fasiliti");
const Operator = require("../models/Operator");
const async = require("async");

exports.loginPage = (req, res) => {
  res.render("admin/loginadmin");
};

exports.isItOk = async (req, res) => {
  let username = req.body.userName;
  let password = req.body.password;
  const User = await Superadmin.findOne({ user_name: username });
  if (!User) {
    const msg = "Tiada user ini dalam sistem";
    res.render("admin/loginadmin", { msg: msg });
  }
  if (User.password === password) {
    const genToken = jwt.sign(
      {
        userId: User._id,
        username: User.user_name,
        daerah: User.daerah,
        negeri: User.negeri,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.cookie("token", genToken, { httpOnly: true });
    console.log(req.cookies.token);
    res.redirect("/admin/home");
  } else {
    const msg = "Username atau Password salah";
    res.render("admin/loginadmin", { msg: msg });
  }
};

exports.test = (req, res) => {
  res.render("admin/admin");
};

exports.deleteData = (req, res) => {
  if (req.params.id != "pg") {
    Fasiliti.findByIdAndDelete(req.params.id2, function deleteData(err) {
      if (err) {
        return next(err);
      }
      console.log("Deleted " + req.params.id2);
      res.redirect("/admin/" + req.params.id);
    });
  } else {
    Operator.findByIdAndDelete(req.params.id2, function deleteData(err) {
      if (err) {
        return next(err);
      }
      console.log("Deleted " + req.params.id2);
      res.redirect("/admin/" + req.params.id);
    });
  }
};

exports.updateData = (req, res) => {
  if (req.params.id != "pg") {
    Fasiliti.findByIdAndUpdate(
      req.params.id2,
      { $set: req.body },
      function updateData(err) {
        if (err) {
          return next(err);
        }
        console.log("Updated " + req.params.id2);
        res.redirect("/admin/" + req.params.id);
      }
    );
  } else {
    Operator.findByIdAndUpdate(
      req.params.id2,
      { $set: req.body },
      function updateData(err) {
        if (err) {
          return next(err);
        }
        console.log("Updated " + req.params.id2);
        res.redirect("/admin/" + req.params.id);
      }
    );
  }
};

exports.listTaska = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "Taska",
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin/list", {
          data: data,
          fasiliti: "Taska",
          fas: "taska",
          mode: "list",
        });
      }
    }
  );
};

exports.addTaska = (req, res) => {
  async.parallel(
    {
      jenisFasiliti: function (callback) {
        Fasiliti.distinct("jenisFasiliti", { nama: new RegExp("") }, callback);
      },
      listdaerah: function (callback) {
        Fasiliti.find({
          daerah: new RegExp(""),
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("daerah", { nama: new RegExp("") }, callback);
      },
      listnegeri: function (callback) {
        Fasiliti.distinct("negeri", { nama: new RegExp("") }, callback);
      },
      listklinik: function (callback) {
        Fasiliti.find({
          jenisFasiliti: "Klinik",
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("nama", { nama: new RegExp("") }, callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      console.log(results.listklinik);
      res.render("admin/add", {
        title: "Tambah Taska",
        fasiliti: "Taska",
        listfasiliti: results.jenisFasiliti,
        listdaerah: results.listdaerah,
        listnegeri: results.listnegeri,
        listklinik: results.listklinik,
      });
    }
  );
};

exports.commitData = async (req, res) => {
  if (req.body.jenisFasiliti == "Taska") {
    await Fasiliti.create({
      nama: req.body.nama,
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      negeri: jwt.verify(req.cookies.token, process.env.JWT_SECRET).negeri,
      jenisFasiliti: req.body.jenisFasiliti,
      handler: req.body.handler,
    });
    // console.log('done adding taska');
    res.redirect("/admin/taska");
  } else if (req.body.jenisFasiliti == "Tadika") {
    await Fasiliti.create({
      nama: req.body.nama,
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      negeri: jwt.verify(req.cookies.token, process.env.JWT_SECRET).negeri,
      jenisFasiliti: req.body.jenisFasiliti,
      handler: req.body.handler,
    });
    // console.log('done adding tadika');
    res.redirect("/admin/tadika");
  } else if (req.body.jenisFasiliti == "Sekolah Rendah") {
    await Fasiliti.create({
      nama: req.body.nama,
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      negeri: jwt.verify(req.cookies.token, process.env.JWT_SECRET).negeri,
      jenisFasiliti: req.body.jenisFasiliti,
      handler: req.body.handler,
    });
    // console.log('done adding sr');
    res.redirect("/admin/sr");
  } else if (req.body.jenisFasiliti == "Sekolah Menengah") {
    await Fasiliti.create({
      nama: req.body.nama,
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      negeri: jwt.verify(req.cookies.token, process.env.JWT_SECRET).negeri,
      jenisFasiliti: req.body.jenisFasiliti,
      handler: req.body.handler,
    });
    // console.log('done adding sm');
    res.redirect("/admin/sm");
  } else if (req.body.jenisFasiliti == "Pegawai") {
    await Operator.create({
      nama: req.body.nama,
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      negeri: jwt.verify(req.cookies.token, process.env.JWT_SECRET).negeri,
      kpSkrg: req.body.kpSkrg,
    });
    // console.log('done adding pg');
    res.redirect("/admin/pg");
  } else if (req.body.jenisFasiliti == "Klinik") {
    await Fasiliti.create({
      nama: req.body.nama,
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      negeri: jwt.verify(req.cookies.token, process.env.JWT_SECRET).negeri,
      jenisFasiliti: req.body.jenisFasiliti,
    });
    // console.log('done adding kp');
    res.redirect("/admin/kp");
  }
  console.log("done");
};

exports.listTadika = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "Tadika",
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin/list", {
          data: data,
          fasiliti: "Tadika",
          fas: "tadika",
          mode: "list",
        });
      }
    }
  );
};

exports.addTadika = (req, res) => {
  async.parallel(
    {
      jenisFasiliti: function (callback) {
        Fasiliti.distinct("jenisFasiliti", { nama: new RegExp("") }, callback);
      },
      listdaerah: function (callback) {
        Fasiliti.find({
          daerah: new RegExp(""),
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("daerah", { nama: new RegExp("") }, callback);
      },
      listnegeri: function (callback) {
        Fasiliti.distinct("negeri", { nama: new RegExp("") }, callback);
      },
      listklinik: function (callback) {
        Fasiliti.find({
          jenisFasiliti: "Klinik",
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("nama", { nama: new RegExp("") }, callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      console.log(results.listklinik);
      res.render("admin/add", {
        title: "Tambah Tadika",
        fasiliti: "Tadika",
        listfasiliti: results.jenisFasiliti,
        listdaerah: results.listdaerah,
        listnegeri: results.listnegeri,
        listklinik: results.listklinik,
      });
    }
  );
};

exports.listKp = (req, res) => {
  //   const daerah = "Kuala Selangor";
  Fasiliti.find(
    {
      jenisFasiliti: "Klinik",
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin/list", {
          data: data,
          fasiliti: "Klinik",
          fas: "kp",
          mode: "list",
        });
      }
    }
  );
};

exports.addKp = (req, res) => {
  async.parallel(
    {
      jenisFasiliti: function (callback) {
        Fasiliti.distinct("jenisFasiliti", { nama: new RegExp("") }, callback);
      },
      listdaerah: function (callback) {
        Fasiliti.find({
          daerah: new RegExp(""),
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("daerah", { nama: new RegExp("") }, callback);
        // Fasiliti.distinct('daerah', {nama: new RegExp('')}, callback);
      },
      listnegeri: function (callback) {
        Fasiliti.distinct("negeri", { nama: new RegExp("") }, callback);
      },
      // listklinik: function(callback) {
      //     Fasiliti.find({ jenisFasiliti: "Klinik", daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah })
      //     .distinct('nama', {nama: new RegExp('')}, callback);
      // },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      console.log(results.listklinik);
      res.render("admin/add", {
        title: "Tambah Klinik",
        fasiliti: "Klinik",
        listfasiliti: results.jenisFasiliti,
        listdaerah: results.listdaerah,
        listnegeri: results.listnegeri,
        // listklinik: results.listklinik
      });
    }
  );
};
// Fasiliti.distinct('jenisFasiliti', {nama: new RegExp('')}, function(err, listfasiliti) {
//     if (err) { return next(err); }
//     res.render('admin/add', { title: 'Overview mengikut negeri', fasiliti: 'Klinik', listfasiliti: listfasiliti });
//   });
// };

exports.listSr = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "Sekolah Rendah",
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin/list", {
          data: data,
          fasiliti: "Sekolah Rendah",
          fas: "sr",
          mode: "list",
        });
      }
    }
  );
};

exports.addSr = (req, res) => {
  async.parallel(
    {
      jenisFasiliti: function (callback) {
        Fasiliti.distinct("jenisFasiliti", { nama: new RegExp("") }, callback);
      },
      listdaerah: function (callback) {
        Fasiliti.find({
          daerah: new RegExp(""),
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("daerah", { nama: new RegExp("") }, callback);
      },
      listnegeri: function (callback) {
        Fasiliti.distinct("negeri", { nama: new RegExp("") }, callback);
      },
      listklinik: function (callback) {
        Fasiliti.find({
          jenisFasiliti: "Klinik",
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("nama", { nama: new RegExp("") }, callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      res.render("admin/add", {
        title: "Tambah Sekolah Rendah",
        fasiliti: "Sekolah Rendah",
        listfasiliti: results.jenisFasiliti,
        listdaerah: results.listdaerah,
        listnegeri: results.listnegeri,
        listklinik: results.listklinik,
      });
    }
  );
};

exports.listSm = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "Sekolah Menengah",
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin/list", {
          data: data,
          fasiliti: "Sekolah Menengah",
          fas: "sm",
          mode: "list",
        });
      }
    }
  );
};

exports.addSm = (req, res) => {
  async.parallel(
    {
      jenisFasiliti: function (callback) {
        Fasiliti.distinct("jenisFasiliti", { nama: new RegExp("") }, callback);
      },
      listdaerah: function (callback) {
        Fasiliti.find({
          daerah: new RegExp(""),
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("daerah", { nama: new RegExp("") }, callback);
      },
      listnegeri: function (callback) {
        Fasiliti.distinct("negeri", { nama: new RegExp("") }, callback);
      },
      listklinik: function (callback) {
        Fasiliti.find({
          jenisFasiliti: "Klinik",
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("nama", { nama: new RegExp("") }, callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      console.log(results.listklinik);
      res.render("admin/add", {
        title: "Tambah Sekolah Menengah",
        fasiliti: "Sekolah Menengah",
        listfasiliti: results.jenisFasiliti,
        listdaerah: results.listdaerah,
        listnegeri: results.listnegeri,
        listklinik: results.listklinik,
      });
    }
  );
};

exports.listPg = (req, res) => {
  Operator.find(
    { daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin/list", {
          data: data,
          fasiliti: "Pegawai",
          fas: "pg",
          mode: "list",
        });
      }
    }
  );
};

exports.addPg = (req, res) => {
  async.parallel(
    {
      // jenisFasiliti: function(callback) {
      //     Fasiliti.distinct('jenisFasiliti', {nama: new RegExp('')}, callback);
      // },
      // listdaerah: function(callback) {
      //     Fasiliti.find({ daerah: new RegExp(''), daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah })
      //     .distinct('daerah', {nama: new RegExp('')}, callback);
      //     // Fasiliti.distinct('daerah', {nama: new RegExp('')}, callback);
      // },
      // listnegeri: function(callback) {
      //     Fasiliti.distinct('negeri', {nama: new RegExp('')}, callback);
      // },
      listklinik: function (callback) {
        Fasiliti.find({
          jenisFasiliti: "Klinik",
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("nama", { nama: new RegExp("") }, callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      console.log(results.listklinik);
      res.render("admin/add", {
        title: "Tambah Pegawai",
        fasiliti: "Pegawai",
        // listfasiliti: results.jenisFasiliti,
        // listdaerah: results.listdaerah,
        // listnegeri: results.listnegeri,
        listklinik: results.listklinik,
      });
    }
  );
};

exports.searchAll = (req, res) => {
  const search = req.body.search;
  const regex = new RegExp(search, "i");
  console.log(regex);
  Fasiliti.find(
    {
      nama: { $regex: regex },
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        console.log(req.params.id);
        res.render("admin/list", { data: data, mode: "search" });
      }
    }
  );
};

exports.searchPg = (req, res) => {
  const search = req.body.search;
  const regex = new RegExp(search, "i");
  console.log(regex);
  Operator.find(
    {
      nama: { $regex: regex },
      daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.render("admin/list", {
          data: data,
          fasiliti: "Pegawai",
          mode: "search",
        });
      }
    }
  );
};

exports.logOut = (req, res) => {
  try {
    res.clearCookie("token");
    res.redirect("/admin");
  } catch (err) {
    console.log(err);
  }
};

exports.showEntrails = (req, res) => {
  Fasiliti.find({ _id: req.params.id }, (err, data) => {
    console.log(data);
    res.render("admin/detail", { title: "Entrails", data: data[0] });
  });
};

exports.updateFac = (req, res) => {
  async.parallel(
    {
      fasilitiNow: function (callback) {
        Fasiliti.findById(req.params.id, callback);
      },
      // listdaerah: function(callback) {
      //     Fasiliti.find({ daerah: new RegExp(''), daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah })
      //     .distinct('daerah', {nama: new RegExp('')}, callback);
      //     // Fasiliti.distinct('daerah', {nama: new RegExp('')}, callback);
      // },
      // listnegeri: function(callback) {
      //     Fasiliti.distinct('negeri', {nama: new RegExp('')}, callback);
      // },
      listklinik: function (callback) {
        Fasiliti.find({
          jenisFasiliti: "Klinik",
          daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
        }).distinct("nama", { nama: new RegExp("") }, callback);
      },
    },
    function (err, results) {
      // console.log(results.listklinik);
      res.render("admin/update", {
        title: "Entrails",
        data: results.fasilitiNow,
        klinik: results.listklinik,
      });
      // console.log(results.klinik);
    }
  );
  // Fasiliti.find({ jenisFasiliti: "Klinik", daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah }).exec();
  // Fasiliti.find({ _id: req.params.id }, (err, data) => {
  //     console.log(data);
  //     res.render('admin/update', { title: 'Entrails', data: data[0] });
  // })
};

exports.updateNow = async (req, res) => {
  Fasiliti.findByIdAndUpdate(
    req.params.id,
    { handler: req.body.kpSkrg },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        setTimeout(function () {
          Fasiliti.find({ _id: req.params.id }, (err, data) => {
            res.render("admin/detail", { title: "Entrails", data: data[0] });
          });
        }, 1000);
      }
    }
  );
};
