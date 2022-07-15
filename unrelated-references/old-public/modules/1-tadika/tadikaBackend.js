const formOptionContainerTadika = document.getElementById('form-option-container-tadika')
const formAlertDOM = document.querySelector('.form-alert');
const btnSaveDOM = document.querySelector('.save');
console.log(namaOperator);
console.log(namaFasiliti);

// pendaftaran
const namaPendaftaranTadikaDOM = document.getElementById('nama-pendaftaran-tadika');
const umurPendaftaranTadikaDOM = document.getElementById('umur-pendaftaran-tadika');
const bangsaPendaftaranTadikaDOM = document.getElementById('bangsa-pendaftaran-tadika');
const kelasPendaftaranTadikaDOM = document.getElementById('kelas-pendaftaran-tadika');
const taskaTadikaPraSekolahPendaftaranTadikaDOM = document.getElementById('taska-tadika-pra-sekolah-pendaftaran-tadika');
const kerajaanSwastaPendaftaranTadikaDOM = document.getElementById('kerajaan-swasta-pendaftaran-tadika');
const kemasPerpaduanLain2PendaftaranTadikaDOM = document.getElementById('kemas-perpaduan-lain2-pendaftaran-tadika');
const jantinaPendaftaranTadikaDOM = document.getElementById('jantina-pendaftaran-tadika');
const kelasToddlerPendaftaranTadikaDOM = document.getElementById('kelas-toddler-pendaftaran-tadika');
const namaFasilitiPendaftaranTadikaDOM = document.getElementById('nama-fasiliti-tadika-pendaftaran-tadika');
const enrolmenPendaftaranTadikaDOM = document.getElementById('enrolmen-pendaftaran-tadika');
const baruPendaftaranTadikaDOM = document.getElementById('baru-pendaftaran-tadika');
const ulanganPendaftaranTadikaDOM = document.getElementById('ulangan-pendaftaran-tadika');
const engganPendaftaranTadikaDOM = document.getElementById('enggan-pendaftaran-tadika');
const tidakHadirPendaftaranTadikaDOM = document.getElementById('tidak-hadir-pendaftaran-tadika');
const pemeriksaanAdaTiadaPendaftaranTadikaDOM = document.getElementById('pemeriksaan-ada-tiada-pendaftaran-tadika');
const namaOperatorPendaftaranTadikaDOM = document.getElementById('nama-operator-pendaftaran-tadika'); // watch localStorage
const namaPasukanBergerakPendaftaranTadikaDOM = document.getElementById('nama-pasukan-bergerak-pendaftaran-tadika');

// pemeriksaan awal
const adaRujukCleftPemeriksaanAwalTadikaDOM = document.getElementById('ada-rujuk-cleft-pemeriksaan-awal-tadika');
const dentureSediaAdaPemeriksaanAwalTadikaDOM = document.getElementById('denture-sedia-ada-pemeriksaan-awal-tadika');
const dentureSediaAdaAtasPemeriksaanAwalTadikaDOM = document.getElementById('denture-sedia-ada-atas-pemeriksaan-awal-tadika');
const dentureSediaAdaBawahPemeriksaanAwalTadikaDOM = document.getElementById('denture-sedia-ada-bawah-pemeriksaan-awal-tadika');
const denturePerluPemeriksaanAwalTadikaDOM = document.getElementById('denture-perlu-pemeriksaan-awal-tadika');
const denturePerluAtasPemeriksaanAwalTadikaDOM = document.getElementById('denture-perlu-atas-pemeriksaan-awal-tadika');
const denturePerluBawahPemeriksaanAwalTadikaDOM = document.getElementById('denture-perlu-bawah-pemeriksaan-awal-tadika');
const toothSurfaceLossPemeriksaanAwalTadikaDOM = document.getElementById('tooth-surface-loss-pemeriksaan-awal-tadika');
const kecederaanGigiAnteriorPemeriksaanAwalTadikaDOM = document.getElementById('kecederaan-gigi-anterior-pemeriksaan-awal-tadika');
const tisuLembutPemeriksaanAwalTadikaDOM = document.getElementById('tisu-lembut-pemeriksaan-awal-tadika');
const tisuKerasPemeriksaanAwalTadikaDOM = document.getElementById('tisu-keras-pemeriksaan-awal-tadika');
const kebersihanMulutPemeriksaanAwalTadikaDOM = document.getElementById('kebersihan-mulut-pemeriksaan-awal-tadika');
const gisSkorPemeriksaanAwalTadikaDOM = document.getElementById('gis-skor-pemeriksaan-awal-tadika');
const decayDesidusPemeriksaanAwalTadikaDOM = document.getElementById('decay-desidus-pemeriksaan-awal-tadika');
const missingDesidusPemeriksaanAwalTadikaDOM = document.getElementById('missing-desidus-pemeriksaan-awal-tadika');
const filledDesidusPemeriksaanAwalTadikaDOM = document.getElementById('filled-desidus-pemeriksaan-awal-tadika');
const forExtractionDesidusPemeriksaanAwalTadikaDOM = document.getElementById('for-extraction-desidus-pemeriksaan-awal-tadika');
const decayKekalPemeriksaanAwalTadikaDOM = document.getElementById('decay-kekal-pemeriksaan-awal-tadika');
const missingKekalPemeriksaanAwalTadikaDOM = document.getElementById('missing-kekal-pemeriksaan-awal-tadika');
const filledKekalPemeriksaanAwalTadikaDOM = document.getElementById('filled-kekal-pemeriksaan-awal-tadika');
const forExtractionKekalPemeriksaanAwalTadikaDOM = document.getElementById('for-extraction-kekal-pemeriksaan-awal-tadika');
const eKekalPemeriksaanAwalTadikaDOM = document.getElementById('e-kekal-pemeriksaan-awal-tadika');
const jumlahFaktorRisikoPemeriksaanAwalTadikaDOM = document.getElementById('jumlah-faktor-risiko-pemeriksaan-awal-tadika');
const class1DPemeriksaanAwalTadikaDOM = document.getElementById('class1-d-pemeriksaan-awal-tadika');
const class2DPemeriksaanAwalTadikaDOM = document.getElementById('class2-d-pemeriksaan-awal-tadika');
const class1FPemeriksaanAwalTadikaDOM = document.getElementById('class1-f-pemeriksaan-awal-tadika');
const class2FPemeriksaanAwalTadikaDOM = document.getElementById('class1-f-pemeriksaan-awal-tadika');
const gicLepasPemeriksaanAwalTadikaDOM = document.getElementById('gic-lepas-pemeriksaan-awal-tadika');
const resinLepasPemeriksaanAwalTadikaDOM = document.getElementById('resin-lepas-pemeriksaan-awal-tadika');
const lainLainLepasPemeriksaanAwalTadikaDOM = document.getElementById('lain-lain-lepas-pemeriksaan-awal-tadika');
const gicIntactPemeriksaanAwalTadikaDOM = document.getElementById('gic-intact-pemeriksaan-awal-tadika');
const resinIntactPemeriksaanAwalTadikaDOM = document.getElementById('resin-intact-pemeriksaan-awal-tadika');
const lainLainIntactPemeriksaanAwalTadikaDOM = document.getElementById('lain-lain-intact-pemeriksaan-awal-tadika');
//perludibuat
const baruJumlahGigiPerluFsPerluDibuatTadikaDOM = document.getElementById('baru-jumlah-gigi-perlu-fs-perlu-dibuat-tadika');
const semulaJumlahGigiPerluFsPerluDibuatTadikaDOM = document.getElementById('semula-jumlah-gigi-perlu-fs-perlu-dibuat-tadika');
const failedJumlahGigiPerluFsPerluDibuatTadikaDOM = document.getElementById('failed-jumlah-gigi-perlu-fs-perlu-dibuat-tadika');
const perluFvPerluDibuatTadikaDOM = document.getElementById('perlu-fv-perlu-dibuat-tadika');//tuka radio ke select
// const tidakPerluFvPerluDibuatTadikaDOM = document.getElementById('tidak-perlu-fv-perlu-dibuat-tadika');
const baruJumlahGigiPerluPrrPerluDibuatTadikaDOM = document.getElementById('baru-jumlah-gigi-perlu-prr-perlu-dibuat-tadika');
const semulaJumlahGigiPerluPrrPerluDibuatTadikaDOM = document.getElementById('semula-jumlah-gigi-perlu-prr-perlu-dibuat-tadika');
const gdBaruAnteriorSewarnaPerluDibuatTadikaDOM = document.getElementById('gd-baru-anterior-sewarna-perlu-dibuat-tadika');
const gdSemulaAnteriorSewarnaPerluDibuatTadikaDOM = document.getElementById('gd-semula-anterior-sewarna-perlu-dibuat-tadika');
const gkBaruAnteriorSewarnaPerluDibuatTadikaDOM = document.getElementById('gk-baru-anterior-sewarna-perlu-dibuat-tadika');
const gkSemulaAnteriorSewarnaPerluDibuatTadikaDOM = document.getElementById('gk-semula-anterior-sewarna-perlu-dibuat-tadika');
const gdBaruPosteriorSewarnaPerluDibuatTadikaDOM = document.getElementById('gd-baru-posterior-sewarna-perlu-dibuat-tadika');
const gdSemulaPosteriorSewarnaPerluDibuatTadikaDOM = document.getElementById('gd-semula-posterior-sewarna-perlu-dibuat-tadika');
const gkBaruPosteriorSewarnaPerluDibuatTadikaDOM = document.getElementById('gk-baru-posterior-sewarna-perlu-dibuat-tadika');
const gkSemulaPosteriorSewarnaPerluDibuatTadikaDOM = document.getElementById('gk-semula-posterior-sewarna-perlu-dibuat-tadika');

const gdBaruPosteriorAmalgamPerluDibuatTadikaDOM = document.getElementById('gd-baru-posterior-amalgam-perlu-dibuat-tadika');
const gdSemulaPosteriorAmalgamPerluDibuatTadikaDOM = document.getElementById('gd-semula-posterior-amalgam-perlu-dibuat-tadika');
const gkBaruPosteriorAmalgamPerluDibuatTadikaDOM = document.getElementById('gk-baru-posterior-amalgam-perlu-dibuat-tadika');
const gkSemulaPosteriorAmalgamPerluDibuatTadikaDOM = document.getElementById('gk-semula-posterior-amalgam-perlu-dibuat-tadika');
// penyata akhir 1 tadika
// FISUR SELAN
const baruJumlahGigiTelahDibuatFSPenyataAkhirDOM = document.getElementById('baru-jumlah-gigi-telah-dibuat-fs-penyata-akhir-1-tadika');
const semulaJumlahGigiTelahDibuatFSPenyataAkhirDOM = document.getElementById('semula-jumlah-gigi-telah-dibuat-fs-penyata-akhir-1-tadika');
// FV TODD
const sesiFvPerluDibuatPenyataAkhir1TadikaDOM = document.getElementById('sesi-fv-perlu-dibuat-penyata-akhir-1-tadika');//tuka radio ke select
// const sesiFvPerludiBuatDUAPenyataAkhirSatuTadikaDOM = document.getElementById('sesi-fv-perlu-dibuat-2-penyata-akhir-1-tadika');
// const sesiFvPerludiBuatTIGAPenyataAkhirSatuTadikaDOM = document.getElementById('sesi-fv-perlu-dibuat-3-penyata-akhir-1-tadika');
// const sesiFvPerludiBuatEMPATPenyataAkhirSatuTadikaDOM = document.getElementById('sesi-fv-perlu-dibuat-4-penyata-akhir-1-tadika');
// FV PRASEKOLAH
const baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM = document.getElementById('baru-jumlah-gigi-telah-dibuat-fv-penyata-akhir-1-tadika');
const semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM = document.getElementById('semula-jumlah-gigi-telah-dibuat-fv-penyata-akhir-1-tadika');
// PRR JENIS 1
const baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM = document.getElementById('baru-jumlah-gigi-telah-dibuat-prr-penyata-akhir-1-tadika');
const semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM = document.getElementById('semula-jumlah-gigi-telah-dibuat-prr-penyata-akhir-1-tadika');
// JUMLAH TAMPALAN TELAH DILAKUKAN
// GD ANTERIOR SEWARNA
const gdBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gd-baru-anterior-sewarna-penyata-akhir-1-tadika');
const gdSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gd-semula-anterior-sewarna-penyata-akhir-1-tadika');
// GK ANT SEWARNA
const gkBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gk-baru-anterior-sewarna-penyata-akhir-1-tadika');
const gkSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gk-semula-anterior-sewarna-penyata-akhir-1-tadika');
// GD POST SEWARNA
const gdBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gd-baru-posterior-sewarna-penyata-akhir-1-tadika');
const gdSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gd-semula-posterior-sewarna-penyata-akhir-1-tadika');
//GK POST SEWARNA
const gkBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gk-baru-posterior-sewarna-penyata-akhir-1-tadika');
const gkSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM = document.getElementById('gk-semula-posterior-sewarna-penyata-akhir-1-tadika');
// GD POST AMALGAM
const gdBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM = document.getElementById('gd-baru-posterior-amalgam-penyata-akhir-1-tadika');
const gdSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM = document.getElementById('gd-semula-posterior-amalgam-penyata-akhir-1-tadika');
// GK POST AMALGAM
const gkBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM = document.getElementById('gk-baru-posterior-amalgam-penyata-akhir-1-tadika');
const gkSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM = document.getElementById('gk-semula-posterior-amalgam-penyata-akhir-1-tadika');
// PENYATA AKHIR 2
//CABUTAN
const desidusJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM = document.getElementById('desidus-jumlah-gigi-telah-dicabut-penyata-akhir-2-tadika');
const kekalJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM = document.getElementById('kekal-jumlah-gigi-telah-dicabut-penyata-akhir-2-tadika');
//TAMPALANSEMENTARA
const jumlahGigiTampalanSementaraPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-gigi-tampalan-sementara-penyata-akhir-2-tadika');
//RAWATAN LAIN
const jumlahPulpotomiRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-pulpotomi-rawatan-lain-penyata-akhir-2-tadika');
const jumlahEndodontikRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-endodontik-rawatan-lain-penyata-akhir-2-tadika');
const jumlahAbsesRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-abses-rawatan-lain-penyata-akhir-2-tadika');
const kesSelesaiRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('kes-selesai-rawatan-lain-penyata-akhir-2-tadika');
const kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadikaDOM = document.getElementById('kes-selesai-icdas-rawatan-lain-penyata-akhir-2-tadika');
const rujukRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('rujuk-rawatan-lain-penyata-akhir-2-tadika');
const penskaleranRawatanLainPenyataAkhirDUATadikaDOM = document.getElementById('penskaleran-rawatan-lain-penyata-akhir-2-tadika');
//PROMOSI
const ceramahPromosiPenyataAkhirDUATadikaDOM = document.getElementById('ceramah-promosi-penyata-akhir-2-tadika');
const lmgPromosiPenyataAkhirDUATadikaDOM = document.getElementById('lmg-promosi-penyata-akhir-2-tadika');
//BEGIN
const melaksanakanAktivitiBeginPenyataAkhirDUATadikaDOM = document.getElementById('melaksanakan-aktiviti-begin-penyata-akhir-2-tadika');//tuka radio ke select
//AG
const aGuidance4TahunDOM = document.getElementById('a-guidance-4-tahun');
const jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-15-17-ag-penyata-akhir-2-tadika');
const jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-18-19-ag-penyata-akhir-2-tadika');
const jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-20-29-ag-penyata-akhir-2-tadika');
const jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-30-49-ag-penyata-akhir-2-tadika');
const jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-50-59-ag-penyata-akhir-2-tadika');
const jumlahEnamPuluhAGPenyataAkhirDUATadikaDOM = document.getElementById('jumlah-60-ag-penyata-akhir-2-tadika');
//CATATAN
const catatanPenyataAkhirDUATadikaDOM = document.getElementById('catatan-penyata-akhir-2-tadika');


formOptionContainerTadika.addEventListener('submit', async (e) => {
    e.preventDefault();
    // pendaftaran
    const namaPendaftaranTadika = namaPendaftaranTadikaDOM.value;
    const umurPendaftaranTadika = umurPendaftaranTadikaDOM.value;
    const bangsaPendaftaranTadika = bangsaPendaftaranTadikaDOM.value;
    const kelasPendaftaranTadika = kelasPendaftaranTadikaDOM.value;
    const taskaTadikaPraSekolahPendaftaranTadika = taskaTadikaPraSekolahPendaftaranTadikaDOM.value;
    const kerajaanSwastaPendaftaranTadika = kerajaanSwastaPendaftaranTadikaDOM.value;
    const kemasPerpaduanLain2PendaftaranTadika = kemasPerpaduanLain2PendaftaranTadikaDOM.value;
    const jantinaPendaftaranTadika = jantinaPendaftaranTadikaDOM.value;

    let kelasToddlerPendaftaranTadika = '0';
    if (kelasToddlerPendaftaranTadikaDOM.checked === true) {
        kelasToddlerPendaftaranTadika = '1';
    }

    const namaFasilitiPendaftaranTadika = namaFasilitiPendaftaranTadikaDOM.value;

    let enrolmenPendaftaranTadika = '0';
    if (enrolmenPendaftaranTadikaDOM.checked === true) {
        enrolmenPendaftaranTadika = '1';
    }

    let baruPendaftaranTadika = '0';
    if (baruPendaftaranTadikaDOM.checked === true) {
        baruPendaftaranTadika = '1';
    }

    const ulanganPendaftaranTadika = ulanganPendaftaranTadikaDOM.value;

    let engganPendaftaranTadika = '0';
    if (engganPendaftaranTadikaDOM.checked === true) {
        engganPendaftaranTadika = '1';
    }

    let tidakHadirPendaftaranTadika = '0';
    if (tidakHadirPendaftaranTadikaDOM.checked === true) {
        tidakHadirPendaftaranTadika = '1';
    }

    const pemeriksaanAdaTiadaPendaftaranTadika = pemeriksaanAdaTiadaPendaftaranTadikaDOM.value;
    const namaOperatorPendaftaranTadika = namaOperatorPendaftaranTadikaDOM.value;
    const namaPasukanBergerakPendaftaranTadika = namaPasukanBergerakPendaftaranTadikaDOM.value;

    // pemeriksaan awal
    const adaRujukCleftPemeriksaanAwalTadika = adaRujukCleftPemeriksaanAwalTadikaDOM.value;
    const dentureSediaAdaPemeriksaanAwalTadika = dentureSediaAdaPemeriksaanAwalTadikaDOM.value;
    const dentureSediaAdaAtasPemeriksaanAwalTadika = dentureSediaAdaAtasPemeriksaanAwalTadikaDOM.value;
    const dentureSediaAdaBawahPemeriksaanAwalTadika = dentureSediaAdaBawahPemeriksaanAwalTadikaDOM.value;
    const denturePerluPemeriksaanAwalTadika = denturePerluPemeriksaanAwalTadikaDOM.value;
    const denturePerluAtasPemeriksaanAwalTadika = denturePerluAtasPemeriksaanAwalTadikaDOM.value;
    const denturePerluBawahPemeriksaanAwalTadika = denturePerluBawahPemeriksaanAwalTadikaDOM.value;
    
    let toothSurfaceLossPemeriksaanAwalTadika = '0';
    if (toothSurfaceLossPemeriksaanAwalTadikaDOM.checked === true) {
        toothSurfaceLossPemeriksaanAwalTadika = '1';
    }

    let kecederaanGigiAnteriorPemeriksaanAwalTadika = '0';
    if (kecederaanGigiAnteriorPemeriksaanAwalTadikaDOM.checked === true) {
        kecederaanGigiAnteriorPemeriksaanAwalTadika = '1';
    }

    let tisuLembutPemeriksaanAwalTadika = '0';
    if (tisuLembutPemeriksaanAwalTadikaDOM.checked === true) {
        tisuLembutPemeriksaanAwalTadika = '1';
    }

    let tisuKerasPemeriksaanAwalTadika = '0';
    if (tisuKerasPemeriksaanAwalTadikaDOM.checked === true) {
        tisuKerasPemeriksaanAwalTadika = '1';
    }

    const kebersihanMulutPemeriksaanAwalTadika = kebersihanMulutPemeriksaanAwalTadikaDOM.value;
    const gisSkorPemeriksaanAwalTadika = gisSkorPemeriksaanAwalTadikaDOM.value;
    const decayDesidusPemeriksaanAwalTadika = decayDesidusPemeriksaanAwalTadikaDOM.value;
    const missingDesidusPemeriksaanAwalTadika = missingDesidusPemeriksaanAwalTadikaDOM.value;
    const filledDesidusPemeriksaanAwalTadika = filledDesidusPemeriksaanAwalTadikaDOM.value;
    const forExtractionDesidusPemeriksaanAwalTadika = forExtractionDesidusPemeriksaanAwalTadikaDOM.value;
    const decayKekalPemeriksaanAwalTadika = decayKekalPemeriksaanAwalTadikaDOM.value;
    const missingKekalPemeriksaanAwalTadika = missingKekalPemeriksaanAwalTadikaDOM.value;
    const filledKekalPemeriksaanAwalTadika = filledKekalPemeriksaanAwalTadikaDOM.value;
    const forExtractionKekalPemeriksaanAwalTadika = forExtractionKekalPemeriksaanAwalTadikaDOM.value;
    const eKekalPemeriksaanAwalTadika = eKekalPemeriksaanAwalTadikaDOM.value;
    const jumlahFaktorRisikoPemeriksaanAwalTadika = jumlahFaktorRisikoPemeriksaanAwalTadikaDOM.value;
    const class1DPemeriksaanAwalTadika = class1DPemeriksaanAwalTadikaDOM.value;
    const class2DPemeriksaanAwalTadika = class2DPemeriksaanAwalTadikaDOM.value;
    const class1FPemeriksaanAwalTadika = class1FPemeriksaanAwalTadikaDOM.value;
    const class2FPemeriksaanAwalTadika = class2FPemeriksaanAwalTadikaDOM.value;
  
  // izzudin start
    const gicLepasPemeriksaanAwalTadika = gicLepasPemeriksaanAwalTadikaDOM.value;
    const resinLepasPemeriksaanAwalTadika = resinLepasPemeriksaanAwalTadikaDOM.value;
    const lainLainLepasPemeriksaanAwalTadika = lainLainLepasPemeriksaanAwalTadikaDOM.value;
    const gicIntactPemeriksaanAwalTadika = gicIntactPemeriksaanAwalTadikaDOM.value;
    const resinIntactPemeriksaanAwalTadika = resinIntactPemeriksaanAwalTadikaDOM.value;
    const lainLainIntactPemeriksaanAwalTadika = lainLainLepasPemeriksaanAwalTadikaDOM.value;
    //perludibuat
    const baruJumlahGigiPerluFsPerluDibuatTadika = baruJumlahGigiPerluFsPerluDibuatTadikaDOM.value;
    const semulaJumlahGigiPerluFsPerluDibuatTadika = semulaJumlahGigiPerluFsPerluDibuatTadikaDOM.value;
    const failedJumlahGigiPerluFsPerluDibuatTadika = failedJumlahGigiPerluFsPerluDibuatTadikaDOM.value;
    const perluFvPerluDibuatTadika = perluFvPerluDibuatTadikaDOM.value;//tuka radio ke select
    // const tidakPerluFvPerluDibuatTadika = tidakPerluFvPerluDibuatTadikaDOM.value;
    const baruJumlahGigiPerluPrrPerluDibuatTadika = baruJumlahGigiPerluPrrPerluDibuatTadikaDOM.value;
    const semulaJumlahGigiPerluPrrPerluDibuatTadika = semulaJumlahGigiPerluPrrPerluDibuatTadikaDOM.value;
    const gdBaruAnteriorSewarnaPerluDibuatTadika = gdBaruAnteriorSewarnaPerluDibuatTadikaDOM.value;
    const gdSemulaAnteriorSewarnaPerluDibuatTadika = gdSemulaAnteriorSewarnaPerluDibuatTadikaDOM.value;
    const gkBaruAnteriorSewarnaPerluDibuatTadika = gkBaruAnteriorSewarnaPerluDibuatTadikaDOM.value;
    const gkSemulaAnteriorSewarnaPerluDibuatTadika = gkSemulaAnteriorSewarnaPerluDibuatTadikaDOM.value;
    const gdBaruPosteriorSewarnaPerluDibuatTadika = gdBaruPosteriorSewarnaPerluDibuatTadikaDOM.value;
    const gdSemulaPosteriorSewarnaPerluDibuatTadika = gdSemulaPosteriorSewarnaPerluDibuatTadikaDOM.value;
    const gkBaruPosteriorSewarnaPerluDibuatTadika = gkBaruPosteriorSewarnaPerluDibuatTadikaDOM.value;
    const gkSemulaPosteriorSewarnaPerluDibuatTadika = gkSemulaPosteriorSewarnaPerluDibuatTadikaDOM.value;
    const gdBaruPosteriorAmalgamPerluDibuatTadika = gdBaruPosteriorAmalgamPerluDibuatTadikaDOM.value;
    const gdSemulaPosteriorAmalgamPerluDibuatTadika = gdSemulaPosteriorAmalgamPerluDibuatTadikaDOM.value;
    const gkBaruPosteriorAmalgamPerluDibuatTadika = gkBaruPosteriorAmalgamPerluDibuatTadikaDOM.value;
    const gkSemulaPosteriorAmalgamPerluDibuatTadika = gkSemulaPosteriorAmalgamPerluDibuatTadikaDOM.value;
    //PENYATA AKHIR 1
    // FISUR SELAN
    const baruJumlahGigiTelahDibuatFSPenyataAkhir = baruJumlahGigiTelahDibuatFSPenyataAkhirDOM.value;
    const semulaJumlahGigiTelahDibuatFSPenyataAkhir = semulaJumlahGigiTelahDibuatFSPenyataAkhirDOM.value;
    // FV TODD
    const sesiFvPerluDibuatPenyataAkhir1Tadika = sesiFvPerluDibuatPenyataAkhir1TadikaDOM.value;//tuka radio ke select
    // const sesiFvPerludiBuatDUAPenyataAkhirSatuTadika = sesiFvPerludiBuatDUAPenyataAkhirSatuTadikaDOM.value;
    // const sesiFvPerludiBuatTIGAPenyataAkhirSatuTadika = sesiFvPerludiBuatTIGAPenyataAkhirSatuTadikaDOM.value;
    // const sesiFvPerludiBuatEMPATPenyataAkhirSatuTadika = sesiFvPerludiBuatEMPATPenyataAkhirSatuTadikaDOM.value;
    // FV PRASEKOLAH
    const baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika = baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM.value;
    const semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika = semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM.value;
    // PRR JENIS 1
    const baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika = baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM.value;
    const semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika = semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM.value;
    // GD ANT SEWARNA
    const gdBaruAnteriorSewarnaPenyataAkhirSATUTadika = gdBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    const gdSemulaAnteriorSewarnaPenyataAkhirSATUTadika = gdSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    // GK ANT SEWARNA
    const gkBaruAnteriorSewarnaPenyataAkhirSATUTadika = gkBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    const gkSemulaAnteriorSewarnaPenyataAkhirSATUTadika = gkSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    // GD POST SEWARNA
    const gdBaruPosteriorSewarnaPenyataAkhirSATUTadika = gdBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    const gdSemulaPosteriorSewarnaPenyataAkhirSATUTadika = gdSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    // GK POST SEWARNA
    const gkBaruPosteriorSewarnaPenyataAkhirSATUTadika = gkBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    const gkSemulaPosteriorSewarnaPenyataAkhirSATUTadika = gkSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value;
    // GD POST AMALGAM
    const gdBaruPosteriorAmalgamPenyataAkhirSATUTadika = gdBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value;
    const gdSemulaPosteriorAmalgamPenyataAkhirSATUTadika = gdSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value;
    // GK POST AMALGAM
    const gkBaruPosteriorAmalgamPenyataAkhirSATUTadika = gkBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value;
    const gkSemulaPosteriorAmalgamPenyataAkhirSATUTadika = gkSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value;
    //PENYATA AKHIR2
    //CABUTAN
    const desidusJumlahGigiTelahDicabutPenyataAkhirDUATadika = desidusJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM.value;
    const kekalJumlahGigiTelahDicabutPenyataAkhirDUATadika = kekalJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM.value;
    //TAMPALAN SEMENTARA
    const jumlahGigiTampalanSementaraPenyataAkhirDUATadika = jumlahGigiTampalanSementaraPenyataAkhirDUATadikaDOM.value;
    //RAWATAN LAIN
    const jumlahPulpotomiRawatanLainPenyataAkhirDUATadika = jumlahPulpotomiRawatanLainPenyataAkhirDUATadikaDOM.value;
    const jumlahEndodontikRawatanLainPenyataAkhirDUATadika = jumlahEndodontikRawatanLainPenyataAkhirDUATadikaDOM.value;
    const jumlahAbsesRawatanLainPenyataAkhirDUATadika = jumlahAbsesRawatanLainPenyataAkhirDUATadikaDOM.value;
    const kesSelesaiRawatanLainPenyataAkhirDUATadika = kesSelesaiRawatanLainPenyataAkhirDUATadikaDOM.value;
    const kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadika = kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadikaDOM.value;
    const rujukRawatanLainPenyataAkhirDUATadika = rujukRawatanLainPenyataAkhirDUATadikaDOM.value;
    const penskaleranRawatanLainPenyataAkhirDUATadika = penskaleranRawatanLainPenyataAkhirDUATadikaDOM.value;
    //PROMOSI
    const ceramahPromosiPenyataAkhirDUATadika = ceramahPromosiPenyataAkhirDUATadikaDOM.value;
    const lmgPromosiPenyataAkhirDUATadika = lmgPromosiPenyataAkhirDUATadikaDOM.value;
    //BEGIN
    const melaksanakanAktivitiBeginPenyataAkhirDUATadika = melaksanakanAktivitiBeginPenyataAkhirDUATadikaDOM.value;//tuka radio ke select
    //AG
    const aGuidance4Tahun = aGuidance4TahunDOM.value;
    const jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadika = jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadikaDOM.value;
    const jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadika = jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadikaDOM.value;
    const jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadika = jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadikaDOM.value;
    const jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadika = jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadikaDOM.value;
    const jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadika = jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadikaDOM.value;
    const jumlahEnamPuluhAGPenyataAkhirDUATadika = jumlahEnamPuluhAGPenyataAkhirDUATadikaDOM.value;
    //CATATAN
    const catatanPenyataAkhirDUATadika = catatanPenyataAkhirDUATadikaDOM.value;
    
    try {
        await axios.post('/api/v1/tadika', { 
            namaFasiliti,
            namaPendaftaranTadika,
            umurPendaftaranTadika,
            bangsaPendaftaranTadika,
            kelasPendaftaranTadika,
            taskaTadikaPraSekolahPendaftaranTadika,
            kerajaanSwastaPendaftaranTadika,
            kemasPerpaduanLain2PendaftaranTadika,
            jantinaPendaftaranTadika,
            kelasToddlerPendaftaranTadika,
            namaFasilitiPendaftaranTadika,
            enrolmenPendaftaranTadika,
            baruPendaftaranTadika,
            ulanganPendaftaranTadika,
            engganPendaftaranTadika,
            tidakHadirPendaftaranTadika,
            pemeriksaanAdaTiadaPendaftaranTadika,
            namaOperatorPendaftaranTadika,
            namaPasukanBergerakPendaftaranTadika,
            
            // pemeriksaan awal
            adaRujukCleftPemeriksaanAwalTadika,
            dentureSediaAdaPemeriksaanAwalTadika,
            dentureSediaAdaAtasPemeriksaanAwalTadika,
            dentureSediaAdaBawahPemeriksaanAwalTadika,
            denturePerluPemeriksaanAwalTadika,
            denturePerluAtasPemeriksaanAwalTadika,
            denturePerluBawahPemeriksaanAwalTadika,
            toothSurfaceLossPemeriksaanAwalTadika,
            kecederaanGigiAnteriorPemeriksaanAwalTadika,
            tisuLembutPemeriksaanAwalTadika,
            tisuKerasPemeriksaanAwalTadika,
            kebersihanMulutPemeriksaanAwalTadika,
            gisSkorPemeriksaanAwalTadika,
            decayDesidusPemeriksaanAwalTadika,
            missingDesidusPemeriksaanAwalTadika,
            filledDesidusPemeriksaanAwalTadika,
            forExtractionDesidusPemeriksaanAwalTadika,
            decayKekalPemeriksaanAwalTadika,
            missingKekalPemeriksaanAwalTadika,
            filledKekalPemeriksaanAwalTadika,
            forExtractionKekalPemeriksaanAwalTadika,
            eKekalPemeriksaanAwalTadika,
            jumlahFaktorRisikoPemeriksaanAwalTadika,
            class1DPemeriksaanAwalTadika,
            class2DPemeriksaanAwalTadika,
            class1FPemeriksaanAwalTadika,
            class2FPemeriksaanAwalTadika,
            gicLepasPemeriksaanAwalTadika,
            resinLepasPemeriksaanAwalTadika,
            lainLainLepasPemeriksaanAwalTadika,
            gicIntactPemeriksaanAwalTadika, //x 5//dah tambah 5
            resinIntactPemeriksaanAwalTadika, //x 6//dah tambah 6
            lainLainIntactPemeriksaanAwalTadika,//x 7//dah tambah 7
            //perludibuat
            baruJumlahGigiPerluFsPerluDibuatTadika,
            semulaJumlahGigiPerluFsPerluDibuatTadika,
            failedJumlahGigiPerluFsPerluDibuatTadika,
            perluFvPerluDibuatTadika,//tuka radio ke select
            // tidakPerluFvPerluDibuatTadika,//x8 //dah tambah 8
            baruJumlahGigiPerluPrrPerluDibuatTadika,
            semulaJumlahGigiPerluPrrPerluDibuatTadika,
            gdBaruAnteriorSewarnaPerluDibuatTadika,
            gdSemulaAnteriorSewarnaPerluDibuatTadika,
            gkBaruAnteriorSewarnaPerluDibuatTadika,
            gkSemulaAnteriorSewarnaPerluDibuatTadika,
            gdBaruPosteriorSewarnaPerluDibuatTadika,
            gdSemulaPosteriorSewarnaPerluDibuatTadika,
            gkBaruPosteriorSewarnaPerluDibuatTadika,
            gkSemulaPosteriorSewarnaPerluDibuatTadika,
            gdBaruPosteriorAmalgamPerluDibuatTadika,
            gdSemulaPosteriorAmalgamPerluDibuatTadika,
            gkBaruPosteriorAmalgamPerluDibuatTadika,
            gkSemulaPosteriorAmalgamPerluDibuatTadika,
            //PENYATA AKHIR 1
            baruJumlahGigiTelahDibuatFSPenyataAkhir,
            semulaJumlahGigiTelahDibuatFSPenyataAkhir,
            sesiFvPerluDibuatPenyataAkhir1TadikaDOM,//tuka radio ke select

            // sesiFvPerludiBuatSATUPenyataAkhirSatuTadika,//x9 / dah tambah 
            // sesiFvPerludiBuatDUAPenyataAkhirSatuTadika,//x10 / dah tambah
            // sesiFvPerludiBuatTIGAPenyataAkhirSatuTadika,//x11 / dah tambah
            // sesiFvPerludiBuatEMPATPenyataAkhirSatuTadika,//x12 / dah tambah 
            // FV PRASEKOLAH
            baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika,
            semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadika,
            // PRR JENIS 1
            baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika,
            semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadika,
            // GD ANT SEWARNA
            gdBaruAnteriorSewarnaPenyataAkhirSATUTadika,
            gdSemulaAnteriorSewarnaPenyataAkhirSATUTadika,
            // GK ANT SEWARNA
            gkBaruAnteriorSewarnaPenyataAkhirSATUTadika,
            gkSemulaAnteriorSewarnaPenyataAkhirSATUTadika,
            // GD POST SEWARNA
            gdBaruPosteriorSewarnaPenyataAkhirSATUTadika,
            gdSemulaPosteriorSewarnaPenyataAkhirSATUTadika,
            // GK POST SEWARNA
            gkBaruPosteriorSewarnaPenyataAkhirSATUTadika,
            gkSemulaPosteriorSewarnaPenyataAkhirSATUTadika,
            // GD POST AMALGAM
            gdBaruPosteriorAmalgamPenyataAkhirSATUTadika,
            gdSemulaPosteriorAmalgamPenyataAkhirSATUTadika,
            // GK POST AMALAM
            gkBaruPosteriorAmalgamPenyataAkhirSATUTadika,
            gkSemulaPosteriorAmalgamPenyataAkhirSATUTadika,
            //CABUTAN
            desidusJumlahGigiTelahDicabutPenyataAkhirDUATadika,
            kekalJumlahGigiTelahDicabutPenyataAkhirDUATadika,
            //TAMPALAN SEMENTARA
            jumlahGigiTampalanSementaraPenyataAkhirDUATadika,
            //RAWATAN LAIN
            jumlahPulpotomiRawatanLainPenyataAkhirDUATadika,
            jumlahEndodontikRawatanLainPenyataAkhirDUATadika,
            jumlahAbsesRawatanLainPenyataAkhirDUATadika,
            kesSelesaiRawatanLainPenyataAkhirDUATadika,
            kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadika,
            rujukRawatanLainPenyataAkhirDUATadika,
            penskaleranRawatanLainPenyataAkhirDUATadika,
            //PROMOSI
            ceramahPromosiPenyataAkhirDUATadika,
            lmgPromosiPenyataAkhirDUATadika,
            //BEGIN
            melaksanakanAktivitiBeginPenyataAkhirDUATadika,//tuka radio ke select
            //AG
            aGuidance4Tahun,
            jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadika,
            jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadika,
            jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadika,
            jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadika,
            jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadika,
            jumlahEnamPuluhAGPenyataAkhirDUATadika,
            //CATATAN
            catatanPenyataAkhirDUATadika
        }, { headers: { Authorization: `Bearer ${token}` } });
        
        // // clearing all value after creating person
        // namaPendaftaranTadikaDOM.value = '';
        // umurPendaftaranTadikaDOM.value = '';
        // bangsaPendaftaranTadikaDOM.value = '';
        kelasPendaftaranTadikaDOM.value = '';
        namaTaskaTadikaPendaftaranTadika.value = '';
        taskaPendaftaranTadika.value = '';
        tadikaPendaftaranTadikaDOM.value = '';
        jenisTadikaPendaftaranTadikaDOM.value = '';
        jenisTadikaKerajaanPendaftaranTadikaDOM.value = '';
        baruPendaftaranTadikaDOM.value = '';
        ulanganPendaftaranTadikaDOM.value = '';
        engganPendaftaranTadikaDOM.value = '';
        tidakHadirPendaftaranTadikaDOM.value = '';
        adaPendaftaranTadikaDOM.value = '';
        tiadaPendaftaranTadikaDOM.value = '';
        namaOperatorPendaftaranTadikaDOM.value = '';
        namaPasukanBergerakPendaftaranTadikaDOM.value = '';
        //pemeriksaan awal
        adaCleftPemeriksaanAwalTadikaDOM.value = '';
        rujukPemeriksaanAwalTadikaDOM.value = '';
        adaDenturePemeriksaanAwalTadikaDOM.value = '';
        perluPemeriksaanAwalTadikaDOM.value = '';
        perluBaruPemeriksaanAwalTadikaDOM.value = '';
        perluSemulaPemeriksaanAwalTadikaDOM.value = '';
        toothSurfaceLossPemeriksaanAwalTadikaDOM.value = '';
        kecederaanGigiAnteriorPemeriksaanAwalTadikaDOM.value = '';
        tisuLembutPemeriksaanAwalTadikaDOM.value = '';
        tisuKerasPemeriksaanAwalTadikaDOM.value = '';
        kebersihanMulutPemeriksaanAwalTadikaDOM.value = '';
        GISSkorPemeriksaanAwalTadikaDOM.value = '';
        decayDesidusPemeriksaanAwalTadikaDOM.value = '';
        missingDesidusPemeriksaanAwalTadikaDOM.value = '';
        filledDesidusPemeriksaanAwalTadikaDOM.valuev
        forExtractionDesidusPemeriksaanAwalTadikaDOM.value = '';
        decayKekalPemeriksaanAwalTadikaDOM.value = '';
        missingKekalPemeriksaanAwalTadikaDOM.value = '';        
        filledKekalPemeriksaanAwalTadikaDOM.value = '';
        forExtractionKekalPemeriksaanAwalTadikaDOM.value = '';
        faktorRisikoPemeriksaanAwalTadikaDOM.value = '';
        class1DPemeriksaanAwalTadikaDOM.value = '';
        class2DPemeriksaanAwalTadikaDOM.value = '';
        class1FPemeriksaanAwalTadikaDOM.value = '';
        class2FPemeriksaanAwalTadikaDOM.value = '';
        gicLepasPemeriksaanAwalTadikaDOM.value = '';
        resinLepasPemeriksaanAwalTadikaDOM.value = '';
        lainLainLepasPemeriksaanAwalTadikaDOM.value = '';
        gicIntactPemeriksaanAwalTadikaDOM.value = '';
        resinIntactPemeriksaanAwalTadikaDOM.value = '';
        lainLainIntactPemeriksaanAwalTadikaDOM.value = '';
        //perludibuat
        baruJumlahGigiPerluFsPerluDibuatTadikaDOM.value = '';
        semulaJumlahGigiPerluFsPerluDibuatTadikaDOM.value = '';
        failedJumlahGigiPerluFsPerluDibuatTadikaDOM.value = '';
        perluFvPerluDibuatTadikaDOM.value = '';//tuka radio ke select
        // tidakPerluFvPerluDibuatTadikaDOM.value = '';
        baruJumlahGigiPerluPrrPerluDibuatTadikaDOM.value = '';
        semulaJumlahGigiPerluPrrPerluDibuatTadikaDOM.value = '';
        gdBaruAnteriorSewarnaPerluDibuatTadikaDOM.value = '';
        gdSemulaAnteriorSewarnaPerluDibuatTadikaDOM.value = '';
        gkBaruAnteriorSewarnaPerluDibuatTadikaDOM.value = '';
        gkSemulaAnteriorSewarnaPerluDibuatTadikaDOM.value = '';
        gdBaruPosteriorSewarnaPerluDibuatTadikaDOM.value = '';
        gdSemulaPosteriorSewarnaPerluDibuatTadikaDOM.value = '';
        gkBaruPosteriorSewarnaPerluDibuatTadikaDOM.value = '';
        gkSemulaPosteriorSewarnaPerluDibuatTadikaDOM.value = '';
        gdBaruPosteriorAmalgamPerluDibuatTadikaDOM.value = '';
        gdSemulaPosteriorAmalgamPerluDibuatTadikaDOM.value = '';
        gkBaruPosteriorAmalgamPerluDibuatTadikaDOM.value = '';
        gkSemulaPosteriorAmalgamPerluDibuatTadikaDOM.value = '';
        //PENYATA AKHIR 1
        // FS
        baruJumlahGigiTelahDibuatFSPenyataAkhirDOM.value = '';
        semulaJumlahGigiTelahDibuatFSPenyataAkhirDOM.value = '';
        // FV TODD
        sesiFvPerluDibuatPenyataAkhir1TadikaDOM.value = '0';//tuka radio ke select
        // sesiFvPerludiBuatSATUPenyataAkhirSatuTadikaDOM.value = '';
        // sesiFvPerludiBuatDUAPenyataAkhirSatuTadikaDOM.value = '';
        // sesiFvPerludiBuatTIGAPenyataAkhirSatuTadikaDOM.value = '';
        // sesiFvPerludiBuatEMPATPenyataAkhirSatuTadikaDOM.value = '';
        // FV PRASEKOLAH
        baruJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM.value = '';
        semulaJumlahGigiTelahDibuatFVPenyataAkhirSATUTadikaDOM.value = '';
        // PRR 1
        baruJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM.value = '';
        semulaJumlahGigiTelahDibuatPrrPenyataAkhirSATUTadikaDOM.value = '';
        // GD ANT SEWARNA
        gdBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        gdSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        // GK ANT SEWARNA
        gkBaruAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        gkSemulaAnteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        // GD POST SEWARNA
        gdBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        gdSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        //GK POST SEWARNA
        gkBaruPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        gkSemulaPosteriorSewarnaPenyataAkhirSATUTadikaDOM.value = '';
        //GD POST AMALGAM
        gdBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value = '';
        gdSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value = '';
        //GK POST AMALGAM
        gkBaruPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value = '';
        gkSemulaPosteriorAmalgamPenyataAkhirSATUTadikaDOM.value = '';
        // PENYATA AKHIR 2
        //CABUTAN
        desidusJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM.value = '';
        kekalJumlahGigiTelahDicabutPenyataAkhirDUATadikaDOM.value = '';
        //TAMPALAN SEMENTARA
        jumlahGigiTampalanSementaraPenyataAkhirDUATadikaDOM.value = '';
        //RAWATAN LAIN
        jumlahPulpotomiRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        jumlahEndodontikRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        jumlahAbsesRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        kesSelesaiRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        kesSelesaiIcdasRawatanLainPenyataAkhirDUAtadikaDOM.value = '';
        rujukRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        penskaleranRawatanLainPenyataAkhirDUATadikaDOM.value = '';
        //PROMOSI
        ceramahPromosiPenyataAkhirDUATadikaDOM.value = '';
        lmgPromosiPenyataAkhirDUATadikaDOM.value = '';
        //BEGIN
        melaksanakanAktivitiBeginPenyataAkhirDUATadikaDOM.value = '0';//tuka radio ke select
        //AG
        aGuidance4TahunDOM.checked = false;
        jumlahLimaBelasTujuhBelasAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahLapanBelasSembilanBelasAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahDuaPuluhDuaPuluhSembilanAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahTigaPuluhEmpatPuluhSembilanAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahLimaPuluhLimaPuluhSembilanAGPenyataAkhirDUATadikaDOM.value = '';
        jumlahEnamPuluhAGPenyataAkhirDUATadikaDOM.value = '';
        //CATATAN
        catatanPenyataAkhirDUATadikaDOM.value = '';

        // ----------------------------------------

        formAlertDOM.style.display = 'block';
        formAlertDOM.classList.add('text-success');
        formAlertDOM.textContent = 'Success, data added';
    } catch (error) {
        console.log(error);
        formAlertDOM.style.display = 'block';
        formAlertDOM.textContent = 'Please fill all data correctly';
    }
    setTimeout(() => {
        formAlertDOM.style.display = 'none';
        formAlertDOM.classList.remove('text-success');
    }, 3000);
});