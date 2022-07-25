const mongoose = require('mongoose');

const UmumSchema = new mongoose.Schema(
  {
    // negeri, daerah, kp, operator are associated with each person
    createdByNegeri: {
      type: String,
      // required: true,
    },
    createdByDaerah: {
      type: String,
      // required: true,
    },
    createdByKp: {
      type: String,
      // required: true,
    },
    createdByUsername: {
      type: String,
      // required: true,
    },
    // pendaftaran pg101 --------------------------------------------------
    tarikhKedatangan: {
      type: String,
      // required: [true, 'Please provide tarikh kedatangan'],
    },
    nama: {
      type: String,
      // required: [true, 'Please provide nama'],
      trim: true,
    },
    jenisIc: {
      type: String,
      // required: [true, 'Please provide jenis ic'],
      trim: true,
    },
    ic: {
      type: String,
      // required: [true, 'Please provide IC'],
      trim: true,
    },
    tarikhLahir: {
      type: String,
      // required: [true, 'Please provide tarikh lahir'],
    },
    umur: {
      type: Number,
      // required: [true, 'Please provide umur'],
    },
    jantina: {
      type: String,
      // required: [true, 'Please provide jantina'],
    },
    alamat: {
      type: String,
      // required: [true, 'Please provide alamat'],
    },
    waktuSampai: {
      type: String,
      // required: [true, 'Please provide waktu sampai'],
    },
    kategoriPesakit: {
      type: String,
      // required: [true, 'Please provide kategori pesakit'],
    },
    kumpulanEtnik: {
      type: String,
      // required: [true, 'Please provide kumpulan etnik'],
    },
    statusPesara: {
      type: String,
      default: 'bukan-pesara',
    },
    rujukDaripada: {
      type: String,
      // required: [true, 'Please provide rujuk dari'],
    },
    // end of pendaftaran pg101 -------------------------------------------
    //fasiliti perkhidmatan
    jenisFasiliti: {
      type: String,
      default: '',
    },
    kepp: {
      type: Boolean,
      default: false,
    },
    jenisProgramKomuniti: {
      type: String,
      default: '',
    },
    //maklumat lanjut
    kedatangan: {
      type: String,
      default: '',
    },
    fasilitiTaskaTadika: {
      type: String,
      default: '',
    },
    jenisTaskaTadika: {
      type: String,
      default: '',
    },
    kelasToddler: {
      type: Boolean,
      default: false,
    },
    namaFasilitiTaskaTadika: {
      type: String,
      default: '',
    },
    enrolmenTaskaTadika: {
      type: Boolean,
      default: false,
    },
    kedatanganTaskaTadika: {
      type: String,
      default: '',
    },
    engganTaskaTadika: {
      type: Boolean,
      default: false,
    },
    tidakHadirTaskaTadika: {
      type: Boolean,
      default: false,
    },
    pemeriksaanTaskaTadika: {
      type: String,
      default: '',
    },
    statusPesara: {
      //Leong added this
      //nak tahu pesara kerajaan atau ATM atau tidak - utk generate reten PG211
    },
    jenisFasilitiPerkhidmatan: {
      //Leong added this
      //check-drop down to know the data
    },
    kedatanganSemasa: {
      //Leong added this
      //baru atau ulangan
    },
    ibuMengandung: {
      //Leong added this
      //ya atau tidak
    },
    episodMengandung: {
      //diisi jika patient mengandung
      //baru atau ulangan;
      //Contoh: patient A dtg Januari 2022 ; patient A mengandung 8 bulan then kira episod baru
      //Patient A then bersalin April 2022 ;
      //patient A dtg klinik june 2022 ; kira dewasa ; kedatangan semasa = ulangan ; episode tiada ; sbb not ibu mengandung
      //then patient A mengandung kali kedua dan dtg Aug 2022 ; kira ibu mengandung ; episode baru ;
      // kalau patient A dtg sep 2022 for appt ; kira ibu mengandung ; episode ulangan;
      //utk reten 207 punya ;
    },
    kedatanganKEPP: {
      //Leong added this
      //baru atau ulangan
    },
    tarikhRujukanKEPP: {
      //Leong added this
      // required: [true, 'Please provide umur'],
    },
    tarikhMulaRawatanKEPP: {
      //Leong added this
    },
    penyampaianPerkhidmatanBergerak: {
      //Leong added this
    },
    kampungAngkat: {
      //Leong added this
    },
    institusiOKU: {
      //Leong added this
    },
    institusiWargaEmas: {
      //Leong added this
    },
    jenisFasilitiTadika: {
      //Leong added this
    },
    namaFasilitiTadika: {
      //Leong added this
    },
    enrolmenTadika: {
      //Leong added this
    },
    baruUlanganKedatanganEnrolmenTadika: {
      //Leong added this
    },
    engganKedatanganEnrolmenTadika: {
      //Leong added this
    },
    tidakHadirKedatanganEnrolmenTadika: {
      //Leong added this
    },
    adaTiadaPemeriksaanEnrolmenTadika: {
      //Leong added this
    },
    enrolmenKolejAtauIPG: {
      //Leong added this
    },
    jenisInstitusiKolejAtauIPG: {
      //Leong added this
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Umum', UmumSchema);
