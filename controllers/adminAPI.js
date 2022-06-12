const jwt = require("jsonwebtoken");
const Superadmin = require("../models/Superadmin");
const Fasiliti = require("../models/Fasiliti");
const Operator = require("../models/Operator");
const Dictionary = {
  klinik: "Klinik",
  taska: "Taska",
  tadika: "Tadika",
  sr: "Sekolah Rendah",
  sm: "Sekolah Menengah",
  ins: "Institusi",
};

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

exports.addAdmin = async (req, res) => {
  const Admin = new Superadmin({
    user_name: req.body.user_name,
    password: req.body.password,
    daerah: req.body.daerah,
    negeri: req.body.negeri,
  });
  Admin.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Admin berjaya ditambah",
      });
    }
  });
};

exports.getCurrentUser = async (req, res) => {
  const data = {
    userId: jwt.verify(req.body.token, process.env.JWT_SECRET).userId,
    username: jwt.verify(req.body.token, process.env.JWT_SECRET).username,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
  };
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
      jenisFasiliti: "Institusi",
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
    nama: req.body.nama,
    gred: req.body.gred,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    kpSkrg: req.body.kp,
    role: req.body.role,
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

exports.addTaska = (req, res) => {
  const taska = new Fasiliti({
    nama: req.body.nama,
    negeri: jwt.verify(req.body.token, process.env.JWT_SECRET).negeri,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    handler: req.body.handler,
    jenisFasiliti: "Taska",
  });
  taska.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Taska berjaya ditambah",
      });
    }
  });
};

exports.addTadika = (req, res) => {
  const tadika = new Fasiliti({
    nama: req.body.nama,
    negeri: jwt.verify(req.body.token, process.env.JWT_SECRET).negeri,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    handler: req.body.handler,
    jenisFasiliti: "Tadika",
  });
  tadika.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Tadika berjaya ditambah",
      });
    }
  });
};

exports.addSR = (req, res) => {
  const sr = new Fasiliti({
    nama: req.body.nama,
    negeri: jwt.verify(req.body.token, process.env.JWT_SECRET).negeri,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    handler: req.body.handler,
    jenisFasiliti: "Sekolah Rendah",
  });
  sr.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Sekolah Rendah berjaya ditambah",
      });
    }
  });
};

exports.addSM = (req, res) => {
  const sm = new Fasiliti({
    nama: req.body.nama,
    negeri: jwt.verify(req.body.token, process.env.JWT_SECRET).negeri,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    handler: req.body.handler,
    jenisFasiliti: "Sekolah Menengah",
  });
  sm.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Sekolah Menengah berjaya ditambah",
      });
    }
  });
};

exports.addInstitusi = (req, res) => {
  const institusi = new Fasiliti({
    nama: req.body.nama,
    negeri: jwt.verify(req.body.token, process.env.JWT_SECRET).negeri,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    handler: req.body.handler,
    jenisFasiliti: "Institusi",
  });
  institusi.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Institusi berjaya ditambah",
      });
    }
  });
};

exports.deleteData = (req, res) => {
  Fasiliti.findByIdAndDelete(req.body.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      Operator.findByIdAndDelete(req.body.id, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            status: "success",
            data: data,
            message: "Fasiliti berjaya dihapus",
          });
        }
      });
    }
  });
};

exports.findPegawai = (req, res) => {
  Operator.findById(req.body.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Pegawai berjaya dicari",
      });
    }
  });
};

exports.editPegawai = (req, res) => {
  Operator.findByIdAndUpdate(
    req.body.id,
    { gred: req.body.gred, kpSkrg: req.body.kp, role: req.body.role },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: data,
          message: "Pegawai berjaya dikemaskini",
        });
      }
    }
  );
};

exports.editFacility = async (req, res) => {
  Fasiliti.findByIdAndUpdate(
    req.body.id,
    {
      handler: req.body.handler,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: data,
          message: "Fasiliti berjaya dikemaskini",
        });
      }
    }
  );
};

exports.addFacility = async (req, res) => {
  // console.log(req.params.id);
  // const jenisFasiliti = Dictionary[req.params.id];
  // console.log(jenisFasiliti);
  const facility = new Fasiliti({
    nama: req.body.nama,
    negeri: jwt.verify(req.body.token, process.env.JWT_SECRET).negeri,
    daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    handler: req.body.handler,
    jenisFasiliti: req.params.id,
  });
  facility.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fasiliti berjaya ditambah",
      });
    }
  });
};

exports.listFacility = (req, res) => {
  const jenisFasiliti = Dictionary[req.body.jenisFacility];
  Fasiliti.find(
    {
      jenisFasiliti: jenisFasiliti,
      //   daerah: jwt.verify(req.cookies.token, process.env.JWT_SECRET).daerah,
      daerah: jwt.verify(req.body.token, process.env.JWT_SECRET).daerah,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          jenisFasiliti: jenisFasiliti,
          data: data,
          message: "Retrieved all Fasiliti",
        });
      }
    }
  );
};

exports.findFacility = (req, res) => {
  console.log(req.body.id);
  Fasiliti.findById(req.body.id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fasiliti berjaya dicari",
      });
    }
  });
};
