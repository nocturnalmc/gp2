const jwt = require("jsonwebtoken");
const Superadmin = require("../models/Superadmin");
const Fasiliti = require("../models/Fasiliti");
const Operator = require("../models/Operator");
const async = require("async");

exports.helloUser = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Hello User",
  });
};

exports.loginUser = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const User = await Superadmin.findOne({ user_name: username });
  if (!User) {
    const msg = "Tiada user ini dalam sistem";
    return res.status(401).json({
      status: "error",
      message: msg,
    });
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
    return res.status(200).json({
      status: "success",
      message: "Login berjaya",
      token: genToken,
    });
  } else {
    const msg = "Password salah";
    return res.status(401).json({
      status: "error",
      message: msg,
    });
  }
};

exports.getCurrentUser = async (req, res) => {
  const data = {
    userId: jwt.verify(req.body.token, process.env.JWT_SECRET).userId,
    username: jwt.verify(req.body.token, process.env.JWT_SECRET).username,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
  };
  // console.log(data);
  res.status(200).json({
    status: "success",
    message: "Data user berjaya diambil",
    data: data,
  });
};

exports.listKp = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "Klinik",
      daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: data,
          message: "Retrieved all KPs",
        });
      }
    }
  );
};

exports.listPg = (req, res) => {
  Operator.find(
    // { daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah },
    { daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: data,
          message: "Retrieved all PGs",
        });
      }
    }
  );
};

exports.listTaska = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "Taska",
      //   daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: data,
          message: "Retrieved all Taskas",
        });
      }
    }
  );
};

exports.listTadika = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "Tadika",
      //   daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: data,
          message: "Retrieved all Tadikas",
        });
      }
    }
  );
};

exports.listSr = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "Sekolah Rendah",
      //   daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: data,
          message: "Retrieved all SRs",
        });
      }
    }
  );
};

exports.listSm = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "Sekolah Menengah",
      //   daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: data,
          message: "Retrieved all SMs",
        });
      }
    }
  );
};

exports.listInstitusi = (req, res) => {
  Fasiliti.find(
    {
      jenisFasiliti: "XXX",
      //   daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: data,
          message: "Retrieved all Institusis",
        });
      }
    }
  );
};

exports.listFacilityType = (req, res) => {
  try {
    Fasiliti.distinct("jenisFasiliti", { nama: new RegExp("") }),
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            status: "success",
            data: data,
            message: "Retrieved all Facility Types",
          });
        }
      };
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.addKp = (req, res) => {
  const kp = new Fasiliti({
    nama: req.body.klinik,
    negeri: jwt.verify(req.body.token, process.env.JWT_SECRET).negeri,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    handler: "",
    jenisFasiliti: "Klinik",
  });
  kp.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Klinik berjaya ditambah",
      });
    }
  });
};

exports.addPg = (req, res) => {
  const pg = new Operator({
    nama: req.body.pegawai,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    kpSkrg: pilihan,
  });
  pg.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "pegawai berjaya ditambah",
      });
    }
  });
};
