const Umum = require('../../../models/Umum');

module.exports = {
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
          kumpulanEtnik: pt.kumpulanEtnik,
          rujukDaripada: pt.rujukDaripada,
          createdAt: new Date(pt._doc.createdAt).toISOString(),
        };
      });
    } catch (error) {
      throw error;
    }
  },

  listPatientByTarikhKedatangan: async (args) => {
    try {
      const patients = await Umum.find({
        tarikhKedatangan: args.tarikhKedatangan,
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
          kumpulanEtnik: pt.kumpulanEtnik,
          rujukDaripada: pt.rujukDaripada,
          createdAt: new Date(pt._doc.createdAt).toISOString(),
        };
      });
    } catch (error) {
      throw error;
    }
  },

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
        kumpulanEtnik: patient.kumpulanEtnik,
        rujukDaripada: patient.rujukDaripada,
      };
    } catch (error) {
      throw error;
    }
  },

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
        kumpulanEtnik,
        rujukDaripada,
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
        kumpulanEtnik,
        rujukDaripada,
      });
      const newPt = await ptdata.save();
      return { ...newPt._doc, _id: newPt.id };
    } catch (error) {
      throw error;
    }
  },

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
        kumpulanEtnik: kumpulanEtnik,
        rujukDaripada: rujukDaripada,
      });
      return `Patient ${updatedPt._id} updated Successfully!!!`;
    } catch (error) {
      throw error;
    }
  },
};
