const Umum = require('../../../models/Umum');
const Superadmins = require('../../../models/Superadmin');
const Operator = require('../../../models/Operator');
const Fasiliti = require('../../../models/Fasiliti');

module.exports = {
  // HOLY MOTHER
  klinik: async (args) => {
    const klinik = await Fasiliti.find({
      jenisFasiliti: 'klinik',
      daerah: args.daerah,
    });
    return klinik.map((klinik) => {
      return {
        ...klinik._doc,
        nama: klinik.nama,
        negeri: klinik.negeri,
        daerah: klinik.daerah,
        handler: klinik.handler,
      };
    });
  },
  // HOLY MOTHER

  // GORE
  facOrPeg: async (args) => {
    const orang = await Operator.findById({
      _id: args._id,
    });
    const tempat = await Fasiliti.findById({
      _id: args._id,
    });
    if (!tempat) {
      return {
        ...orang._doc,
        _id: orang.id,
        nama: orang.nama,
        negeri: 'NOT A FACILITY',
        daerah: orang.daerah,
        kpSkrg: orang.kpSkrg,
        gred: orang.gred,
        role: orang.role,
        handler: 'NOT A FACILITY',
      };
    }
    if (!orang) {
      return {
        ...tempat._doc,
        _id: tempat.id,
        nama: tempat.nama,
        negeri: tempat.negeri,
        daerah: tempat.daerah,
        kpSkrg: 'NOT AN OPERATOR',
        gred: 'NOT AN OPERATOR',
        role: 'NOT AN OPERATOR',
        handler: tempat.handler,
      };
    }
  },

  killItWithFire: async (args) => {
    const deletedOp = await Operator.findByIdAndDelete(args._id);
    const deletedFas = await Fasiliti.findByIdAndDelete(args._id);
    if (!deletedOp) {
      return {
        ...deletedFas._doc,
        _id: deletedFas.id,
      };
    }
    if (!deletedFas) {
      return {
        ...deletedOp._doc,
        _id: deletedOp.id,
      };
    }
  },
  // GORE

  // NO SEARCH JUST RETURN EVERYTHING IN THE DATABASE
  patients: async () => {
    try {
      const patients = await Umum.find();
      return patients.map((pt) => {
        return {
          ...pt._doc,
          _id: pt.id,
          createdByNegeri: pt.createdByNegeri,
          createdByDaerah: pt.createdByDaerah,
          createdByKp: pt.createdByKp,
          createdByUsername: pt.createdByUsername,
          nama: pt.nama,
          jenisIc: pt.jenisIc,
          ic: pt.ic,
          tarikhLahir: pt.tarikhLahir,
          umur: pt.umur,
          jantina: pt.jantina,
          tarikhKedatangan: pt.tarikhKedatangan,
          alamat: pt.alamat,
          waktuSampai: pt.waktuSampai,
          kategoriPesakit: pt.kategoriPesakit,
          statusPesara: pt.statusPesara,
          kumpulanEtnik: pt.kumpulanEtnik,
          rujukDaripada: pt.rujukDaripada,
          createdAt: new Date(pt._doc.createdAt).toISOString(),
        };
      });
    } catch (error) {
      throw error;
    }
  },

  operators: async () => {
    try {
      const operators = await Operator.find();
      return operators.map((op) => {
        return {
          ...op._doc,
          _id: op.id,
          nama: op.nama,
          gred: op.gred,
          daerah: op.daerah,
          kpSkrg: op.kpSkrg,
          role: op.role,
        };
      });
    } catch (error) {
      throw error;
    }
  },

  fasilitis: async () => {
    try {
      const fasilitis = await Fasiliti.find();
      return fasilitis.map((fa) => {
        return {
          ...fa._doc,
          _id: fa.id,
          nama: fa.nama,
          negeri: fa.negeri,
          daerah: fa.daerah,
          handler: fa.handler,
          jenisFasiliti: fa.jenisFasiliti,
        };
      });
    } catch (error) {
      throw error;
    }
  },
  // NO SEARCH JUST RETURN EVERYTHING IN THE DATABASE

  // SINGLE SEARCH USING ID
  patient: async (_id) => {
    try {
      const patient = await Umum.findById(_id._id);
      return {
        ...patient._doc,
        _id: patient.id,
        createdByNegeri: patient.createdByNegeri,
        createdByDaerah: patient.createdByDaerah,
        createdByKp: patient.createdByKp,
        createdByUsername: patient.createdByUsername,
        nama: patient.nama,
        ic: patient.ic,
        tarikhLahir: patient.tarikhLahir,
        umur: patient.umur,
        jantina: patient.jantina,
        tarikhKedatangan: patient.tarikhKedatangan,
        alamat: patient.alamat,
        waktuSampai: patient.waktuSampai,
        kategoriPesakit: patient.kategoriPesakit,
        statusPesara: patient.statusPesara,
        kumpulanEtnik: patient.kumpulanEtnik,
        rujukDaripada: patient.rujukDaripada,
      };
    } catch (error) {
      throw error;
    }
  },

  operator: async (_id) => {
    try {
      const operator = await Operator.findById(_id._id);
      return {
        ...operator._doc,
        _id: operator.id,
        nama: operator.nama,
        gred: operator.gred,
        daerah: operator.daerah,
        kpSkrg: operator.kpSkrg,
        role: operator.role,
      };
    } catch (error) {
      throw error;
    }
  },

  fasiliti: async (_id) => {
    try {
      const fasiliti = await Fasiliti.findById(_id._id);
      return {
        ...fasiliti._doc,
        _id: fasiliti.id,
        nama: fasiliti.nama,
        negeri: fasiliti.negeri,
        daerah: fasiliti.daerah,
        handler: fasiliti.handler,
        jenisFasiliti: fasiliti.jenisFasiliti,
      };
    } catch (error) {
      throw error;
    }
  },
  // SINGLE SEARCH USING ID

  // NOW THE QUERIES BEGIN
  listPatientByTarikhKedatangan: async (args) => {
    try {
      const patients = await Umum.find({
        tarikhKedatangan: args.tarikhKedatangan,
        jenisFasiliti: args.jenisFasiliti,
      });
      return patients.map((pt) => {
        return {
          ...pt._doc,
          _id: pt.id,
          createdByNegeri: pt.createdByNegeri,
          createdByDaerah: pt.createdByDaerah,
          createdByKp: pt.createdByKp,
          createdByUsername: pt.createdByUsername,
          nama: pt.nama,
          jenisIc: pt.jenisIc,
          ic: pt.ic,
          tarikhLahir: pt.tarikhLahir,
          umur: pt.umur,
          jantina: pt.jantina,
          tarikhKedatangan: pt.tarikhKedatangan,
          alamat: pt.alamat,
          waktuSampai: pt.waktuSampai,
          kategoriPesakit: pt.kategoriPesakit,
          statusPesara: pt.statusPesara,
          kumpulanEtnik: pt.kumpulanEtnik,
          rujukDaripada: pt.rujukDaripada,
          createdAt: new Date(pt._doc.createdAt).toISOString(),
        };
      });
    } catch (error) {
      throw error;
    }
  },

  listOperatorByDaerah: async (args) => {
    try {
      const operators = await Operator.find({
        daerah: args.daerah,
      });
      return operators.map((op) => {
        return {
          ...op._doc,
          _id: op.id,
          nama: op.nama,
          gred: op.gred,
          daerah: op.daerah,
          kpSkrg: op.kpSkrg,
          role: op.role,
        };
      });
    } catch (error) {
      throw error;
    }
  },

  fasilitisByType: async (args) => {
    try {
      const fasilitis = await Fasiliti.find({
        daerah: args.daerah,
        jenisFasiliti: args.jenisFasiliti,
      });
      return fasilitis.map((fa) => {
        return {
          ...fa._doc,
          _id: fa.id,
          nama: fa.nama,
          negeri: fa.negeri,
          daerah: fa.daerah,
          handler: fa.handler,
          jenisFasiliti: fa.jenisFasiliti,
        };
      });
    } catch (error) {
      throw error;
    }
  },

  // CREATE STUFF
  createPatient: async (args) => {
    try {
      var {
        createdByNegeri,
        createdByDaerah,
        createdByKp,
        createdByUsername,
        nama,
        jenisIc,
        ic,
        tarikhLahir,
        umur,
        jantina,
        tarikhKedatangan,
        alamat,
        waktuSampai,
        kategoriPesakit,
        statusPesara,
        kumpulanEtnik,
        rujukDaripada,
        jenisFasiliti,
      } = args.patient;
      nama = nama.toLowerCase();
      const ptdata = new Umum({
        createdByNegeri,
        createdByDaerah,
        createdByKp,
        createdByUsername,
        nama,
        jenisIc,
        ic,
        tarikhLahir,
        umur,
        jantina,
        tarikhKedatangan,
        alamat,
        waktuSampai,
        kategoriPesakit,
        statusPesara,
        kumpulanEtnik,
        rujukDaripada,
        jenisFasiliti,
      });
      const newPt = await ptdata.save();
      return { ...newPt._doc, _id: newPt.id };
    } catch (error) {
      throw error;
    }
  },

  createOperator: async (args) => {
    try {
      let { nama, gred, daerah, kpSkrg, role } = args.operator;
      nama = nama.toLowerCase();
      const opdata = new Operator({
        nama,
        gred,
        daerah,
        kpSkrg,
        role,
      });
      const newOp = await opdata.save();
      return { ...newOp._doc, _id: newOp.id };
    } catch (error) {
      throw error;
    }
  },

  createFasiliti: async (args) => {
    try {
      let { nama, negeri, daerah, handler, jenisFasiliti } = args.fasiliti;
      nama = nama.toLowerCase();
      const fasdata = new Fasiliti({
        nama,
        negeri,
        daerah,
        handler,
        jenisFasiliti,
      });
      const newFas = await fasdata.save();
      return { ...newFas._doc, _id: newFas.id };
    } catch (error) {
      throw error;
    }
  },

  // DELETE STUFF
  deletePatient: async (id) => {
    try {
      const deletedPt = await Umum.findByIdAndDelete(id);
      return {
        ...deletedPt._doc,
        _id: deletedPt.id,
        createdAt: new Date(deletedPt._doc.createdAt).toISOString(),
      };
    } catch (error) {
      throw error;
    }
  },

  deleteOperator: async (id) => {
    try {
      const deletedOp = await Operator.findByIdAndDelete(id);
      return {
        ...deletedOp._doc,
        _id: deletedOp.id,
        createdAt: new Date(deletedOp._doc.createdAt).toISOString(),
      };
    } catch (error) {
      throw error;
    }
  },

  deleteFasiliti: async (id) => {
    try {
      const deletedFas = await Fasiliti.findByIdAndDelete(id);
      return {
        ...deletedFas._doc,
        _id: deletedFas.id,
        createdAt: new Date(deletedFas._doc.createdAt).toISOString(),
      };
    } catch (error) {
      throw error;
    }
  },

  // UPDATE STUFF
  updatePatient: async (args) => {
    try {
      const {
        _id,
        nama,
        ic,
        tarikhLahir,
        umur,
        jantina,
        // tarikhKedatangan,
        alamat,
        waktuSampai,
        kategoriPesakit,
        statusPesara,
        kumpulanEtnik,
        rujukDaripada,
      } = args.patient;
      const updatedPt = await Umum.findByIdAndUpdate(_id, {
        nama: nama.toLowerCase(),
        ic: ic,
        tarikhLahir: tarikhLahir,
        umur: umur,
        jantina: jantina,
        // tarikhKedatangan: tarikhKedatangan,
        alamat: alamat,
        waktuSampai: waktuSampai,
        kategoriPesakit: kategoriPesakit,
        statusPesara: statusPesara,
        kumpulanEtnik: kumpulanEtnik,
        rujukDaripada: rujukDaripada,
      });
      return `Patient ${updatedPt._id} updated Successfully!!!`;
    } catch (error) {
      throw error;
    }
  },

  updateOperator: async (args) => {
    try {
      const { _id, nama, gred, daerah, kpSkrg, role } = args.operator;
      const updatedOp = await Operator.findByIdAndUpdate(_id, {
        nama: nama.toLowerCase(),
        gred: gred,
        daerah: daerah,
        kpSkrg: kpSkrg,
        role: role,
      });
      return `Operator updated Successfully!!!`;
    } catch (error) {
      throw error;
    }
  },

  updateFasiliti: async (args) => {
    console.log('trying to update fasiliti');
    console.log(args);
    try {
      var { _id, nama, negeri, daerah, handler, jenisFasiliti } = args.fasiliti;
      console.log(_id);
      const updatedFas = await Fasiliti.findByIdAndUpdate(_id, {
        nama: nama,
        negeri: negeri,
        daerah: daerah,
        handler: handler,
        jenisFasiliti: jenisFasiliti,
      });
      return `Fasiliti updated Successfully!!!`;
    } catch (error) {
      throw error;
    }
  },
};
