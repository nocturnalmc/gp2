const mongoose = require('mongoose');

const SekolahSchema = new mongoose.Schema({
  // negeri, daerah, kp, operator are associated with each person
  createdByNegeri: {
    type: String,
  },
  createdByDaerah: {
    type: String,
  },
  createdByKp: {
    type: String,
  },
  createdByUsername: {
    type: String,
  },
  // save status -------------------------------------------------------
  statusRawatan: {
    type: String,
    required: true,
    default: 'belum mula',
  },
  // supplied by ERKM --------------------------------------------------
  nama: {
    type: String,
    required: [true, 'Please provide nama'],
    trim: true,
  },
  jantina: {
    type: String,
    required: [true, 'Please provide jantina'],
  },
  umur: {
    type: Number,
    required: [true, 'Please provide umur'],
  },
  namaSekolah: {
    type: String,
    required: [true, 'Please provide nama sekolah'],
  },
  kelas: {
    type: String,
    required: [true, 'Please provide kelas'],
  },
  ic: {
    type: String,
    required: [true, 'Please provide IC'],
  },
  tarikhLahir: {
    type: String,
    required: [true, 'Please provide tarikh lahir'],
  },
  warganegara: {
    type: String,
    required: [true, 'Please provide warganegara'],
  },
  bangsa: {
    type: String,
    required: [true, 'Please provide bangsa'],
  },
  darjah: {
    type: Number,
  },
  tingkatan: {
    type: Number,
  },
  // pendaftaran -------------------------------------------------------
  statikBergerak: {
    type: String,
    default: '',
  },
  kpBergerak: {
    type: Boolean,
    default: false,
  },
  plateNo: {
    type: String,
    default: '',
  },
  baruUlanganKedatanganPendaftaran: {
    type: String,
    default: '',
  },
  engganKedatanganPendaftaran: {
    type: Boolean,
    default: false,
  },
  tidakHadirKedatanganPendaftaran: {
    type: Boolean,
    default: false,
  },
  adaTiadaPemeriksaanPendaftaran: {
    type: String,
    default: '',
  },
  tinggiRendahRisikoSekolahPendaftaran: {
    type: String,
    default: '',
  },
  // pemeriksaan awal div 1 --------------------------------------------------
  adaCleftLip: {
    type: Boolean,
    default: false,
  },
  rujukCleftLip: {
    type: Boolean,
    default: false,
  },
  yaTidakSediaAdaStatusDenture: {
    type: String,
    default: '',
  },
  separaPenuhAtasSediaAdaDenture: {
    type: String,
    default: '',
  },
  separaPenuhBawahSediaAdaDenture: {
    type: String,
    default: '',
  },
  yaTidakPerluStatusDenture: {
    type: String,
    default: '',
  },
  separaPenuhAtasPerluDenture: {
    type: String,
    default: '',
  },
  separaPenuhBawahPerluDenture: {
    type: String,
    default: '',
  },
  toothSurfaceLossTrauma: {
    type: Boolean,
    default: false,
  },
  kecederaanGigiAnteriorTrauma: {
    type: Boolean,
    default: false,
  },
  tisuLembutTrauma: {
    type: Boolean,
    default: false,
  },
  tisuKerasTrauma: {
    type: Boolean,
    default: false,
  },
  // pemeriksaan awal div 2
  kebersihanMulutOralHygiene: {
    type: String,
    default: '',
  },
  skorBpeOralHygiene: {
    type: String,
    default: '',
  },
  saringanKanserMulutOralHygiene: {
    type: Boolean,
    default: false,
  },
  skorGisMulutOralHygiene: {
    type: String,
    default: '',
  },
  adaDesidus: {
    type: Boolean,
    default: false,
  },
  dAdaGigiDesidus: {
    type: Number,
    min: 0,
    default: 0,
  },
  mAdaGigiDesidus: {
    type: Number,
    min: 0,
    default: 0,
  },
  fAdaGigiDesidus: {
    type: Number,
    min: 0,
    default: 0,
  },
  xAdaGigiDesidus: {
    type: Number,
    min: 0,
    default: 0,
  },
  smAdaGigiDesidus: {
    type: Number,
    min: 0,
    default: 0,
  },
  adaKekal: {
    type: Boolean,
    default: false,
  },
  dAdaGigiKekal: {
    type: Number,
    min: 0,
    default: 0,
  },
  mAdaGigiKekal: {
    type: Number,
    min: 0,
    default: 0,
  },
  fAdaGigiKekal: {
    type: Number,
    min: 0,
    default: 0,
  },
  eAdaGigiKekal: {
    type: Number,
    min: 0,
    default: 0,
  },
  xAdaGigiKekal: {
    type: Number,
    min: 0,
    default: 0,
  },
  jumlahFaktorRisiko: {
    type: Number,
    min: 0,
    default: 0,
  },
  // pemeriksaan awal div 3
  gicBilanganFsDibuat3TahunLepas: {
    type: Number,
    min: 0,
    default: 0,
  },
  resinBilanganFsDibuat3TahunLepas: {
    type: Number,
    min: 0,
    default: 0,
  },
  lainLainBilanganFsDibuat3TahunLepas: {
    type: Number,
    min: 0,
    default: 0,
  },
  dBilanganFsDibuat3TahunLepasTerjadi: {
    type: Number,
    min: 0,
    default: 0,
  },
  mBilanganFsDibuat3TahunLepasTerjadi: {
    type: Number,
    min: 0,
    default: 0,
  },
  fBilanganFsDibuat3TahunLepasTerjadi: {
    type: Number,
    min: 0,
    default: 0,
  },
  eBilanganFsDibuat3TahunLepasTerjadi: {
    type: Number,
    min: 0,
    default: 0,
  },
  xBilanganFsDibuat3TahunLepasTerjadi: {
    type: Number,
    min: 0,
    default: 0,
  },
  classID: {
    type: Number,
    min: 0,
    default: 0,
  },
  classIID: {
    type: Number,
    min: 0,
    default: 0,
  },
  classIF: {
    type: Number,
    min: 0,
    default: 0,
  },
  classIIF: {
    type: Number,
    min: 0,
    default: 0,
  },
  // perlu dibuat --------------------------------------------------
  baruJumlahGigiKekalPerluFs: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaJumlahGigiKekalPerluFs: {
    type: Number,
    min: 0,
    default: 0,
  },
  jumlahGigiFsGagal: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruJumlahGigiKekalPerluFv: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaJumlahGigiKekalPerluFv: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruJumlahGigiKekalPerluPrrJenis1: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaJumlahGigiKekalPerluPrrJenis1: {
    type: Number,
    min: 0,
    default: 0,
  },
  yaTidakSilverDiamineFluoridePerluSapuan: {
    type: String,
    default: '',
  },
  baruGDAnteriorSewarnaJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaGDAnteriorSewarnaJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruGKAnteriorSewarnaJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaGKAnteriorSewarnaJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruGDPosteriorSewarnaJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaGDPosteriorSewarnaJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruGKPosteriorSewarnaJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaGKPosteriorSewarnaJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruGDPosteriorAmalgamJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaGDPosteriorAmalgamJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruGKPosteriorAmalgamJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaGKPosteriorAmalgamJumlahTampalanDiperlukan: {
    type: Number,
    min: 0,
    default: 0,
  },
  // penyata akhir 1 --------------------------------------------------
  baruJumlahGigiKekalDibuatFs: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaJumlahGigiKekalDibuatFs: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruJumlahGigiKekalDiberiFv: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaJumlahGigiKekalDiberiFv: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruJumlahGigiKekalDiberiPrrJenis1: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaJumlahGigiKekalDiberiPrrJenis1: {
    type: Number,
    min: 0,
    default: 0,
  },
  baruJumlahGigiYangDiberiSdf: {
    type: Number,
    min: 0,
    default: 0,
  },
  semulaJumlahGigiYangDiberiSdf: {
    type: Number,
    min: 0,
    default: 0,
  },
  gdBaruAnteriorSewarnaJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gdSemulaAnteriorSewarnaJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gkBaruAnteriorSewarnaJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gkSemulaAnteriorSewarnaJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gdBaruPosteriorSewarnaJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gdSemulaPosteriorSewarnaJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gkBaruPosteriorSewarnaJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gkSemulaPosteriorSewarnaJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gdBaruPosteriorAmalgamJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gdSemulaPosteriorAmalgamJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gkBaruPosteriorAmalgamJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  gkSemulaPosteriorAmalgamJumlahTampalanDibuat: {
    type: Number,
    min: 0,
    default: 0,
  },
  // penyata akhir 2 --------------------------------------------------
  cabutDesidusPenyataAkhir2: {
    type: Number,
    min: 0,
    default: 0,
  },
  cabutKekalPenyataAkhir2: {
    type: Number,
    min: 0,
    default: 0,
  },
  jumlahTampalanSementaraPenyataAkhir2: {
    type: Number,
    min: 0,
    default: 0,
  },
  pulpotomiPenyataAkhir2: {
    type: Number,
    min: 0,
    default: 0,
  },
  endodontikPenyataAkhir2: {
    type: Number,
    min: 0,
    default: 0,
  },
  absesPenyataAkhir2: {
    type: Number,
    min: 0,
    default: 0,
  },
  penskaleranPenyataAkhir2: {
    type: Number,
    min: 0,
    default: 0,
  },
  kesSelesaiPenyataAkhir2: {
    type: Boolean,
    default: false,
  },
  kesSelesaiIcdasPenyataAkhir2: {
    type: Boolean,
    default: false,
  },
  rujukPenyataAkhir2: {
    type: Boolean,
    default: false,
  },
  ceramahPromosiPenyataAkhir2: {
    type: String,
    default: '',
  },
  lmgPromosiPenyataAkhir2: {
    type: String,
    default: '',
  },
  yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2: {
    type: String,
    default: '',
  },
  plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2: {
    type: Boolean,
    default: false,
  },
  dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2: {
    type: Boolean,
    default: false,
  },
  penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2: {
    type: Boolean,
    default: false,
  },
  kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2: {
    type: Boolean,
    default: false,
  },
  // kotak --------------------------------------------------
  statusM: {
    type: String,
    default: '',
  },
  jenisR: {
    type: String,
    default: '',
  },
  tarikh1: {
    type: String,
    default: '',
  },
  tarikh2: {
    type: String,
    default: '',
  },
  tarikh3: {
    type: String,
    default: '',
  },
  tarikh4: {
    type: String,
    default: '',
  },
  adaTiadaQ: {
    type: String,
    default: '',
  },
  rujukGuruKaunseling: {
    type: String,
    default: '',
  },
  tarikhQ: {
    type: String,
    default: '',
  },
  statusSelepas6Bulan: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Sekolah', SekolahSchema);
