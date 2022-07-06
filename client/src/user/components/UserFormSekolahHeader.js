import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaInfoCircle } from 'react-icons/fa';

import { useGlobalUserAppContext } from '../context/userAppContext';

import Pendaftaran from './form-sekolah/Pendaftaran';
import PemeriksaanAwal from './form-sekolah/PemeriksaanAwal';
import PerluDibuat from './form-sekolah/PerluDibuat';
import PenyataAkhir1 from './form-sekolah/PenyataAkhir1';
import PenyataAkhir2 from './form-sekolah/PenyataAkhir2';
import Kotak from './form-sekolah/Kotak';

function UserFormSekolah() {
  const { userToken, username, navigate, catchAxiosErrorAndLogout, useParams } =
    useGlobalUserAppContext();

  const { personSekolahId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [singlePersonSekolah, setSinglePersonSekolah] = useState([]);

  // creating masterForm object to be used by the form
  const masterForm = {};
  masterForm.createdByUsername = username;
  let statusRawatan = '';
  // pendaftaran
  const [statikBergerak, setStatikBergerak] = useState('');
  masterForm.statikBergerak = statikBergerak;
  masterForm.setStatikBergerak = setStatikBergerak;
  const [kpBergerak, setKpBergerak] = useState(false);
  masterForm.kpBergerak = kpBergerak;
  masterForm.setKpBergerak = setKpBergerak;
  const [plateNo, setPlateNo] = useState('');
  masterForm.plateNo = plateNo;
  masterForm.setPlateNo = setPlateNo;
  const [
    baruUlanganKedatanganPendaftaran,
    setBaruUlanganKedatanganPendaftaran,
  ] = useState('');
  masterForm.baruUlanganKedatanganPendaftaran =
    baruUlanganKedatanganPendaftaran;
  masterForm.setBaruUlanganKedatanganPendaftaran =
    setBaruUlanganKedatanganPendaftaran;
  const [engganKedatanganPendaftaran, setEngganKedatanganPendaftaran] =
    useState(false);
  masterForm.engganKedatanganPendaftaran = engganKedatanganPendaftaran;
  masterForm.setEngganKedatanganPendaftaran = setEngganKedatanganPendaftaran;
  const [tidakHadirKedatanganPendaftaran, setTidakHadirKedatanganPendaftaran] =
    useState(false);
  masterForm.tidakHadirKedatanganPendaftaran = tidakHadirKedatanganPendaftaran;
  masterForm.setTidakHadirKedatanganPendaftaran =
    setTidakHadirKedatanganPendaftaran;
  const [adaTiadaPemeriksaanPendaftaran, setAdaTiadaPemeriksaanPendaftaran] =
    useState('');
  masterForm.adaTiadaPemeriksaanPendaftaran = adaTiadaPemeriksaanPendaftaran;
  masterForm.setAdaTiadaPemeriksaanPendaftaran =
    setAdaTiadaPemeriksaanPendaftaran;
  const [
    tinggiRendahRisikoSekolahPendaftaran,
    setTinggiRendahRisikoSekolahPendaftaran,
  ] = useState('');
  masterForm.tinggiRendahRisikoSekolahPendaftaran =
    tinggiRendahRisikoSekolahPendaftaran;
  masterForm.setTinggiRendahRisikoSekolahPendaftaran =
    setTinggiRendahRisikoSekolahPendaftaran;
  // pemeriksaan awal div 1
  const [adaCleftLip, setAdaCleftLip] = useState(false);
  masterForm.adaCleftLip = adaCleftLip;
  masterForm.setAdaCleftLip = setAdaCleftLip;
  const [rujukCleftLip, setRujukCleftLip] = useState(false);
  masterForm.rujukCleftLip = rujukCleftLip;
  masterForm.setRujukCleftLip = setRujukCleftLip;
  const [yaTidakSediaAdaStatusDenture, setYaTidakSediaAdaStatusDenture] =
    useState('');
  masterForm.yaTidakSediaAdaStatusDenture = yaTidakSediaAdaStatusDenture;
  masterForm.setYaTidakSediaAdaStatusDenture = setYaTidakSediaAdaStatusDenture;
  const [separaPenuhAtasSediaAdaDenture, setSeparaPenuhAtasSediaAdaDenture] =
    useState('');
  masterForm.separaPenuhAtasSediaAdaDenture = separaPenuhAtasSediaAdaDenture;
  masterForm.setSeparaPenuhAtasSediaAdaDenture =
    setSeparaPenuhAtasSediaAdaDenture;
  const [separaPenuhBawahSediaAdaDenture, setSeparaPenuhBawahSediaAdaDenture] =
    useState('');
  masterForm.separaPenuhBawahSediaAdaDenture = separaPenuhBawahSediaAdaDenture;
  masterForm.setSeparaPenuhBawahSediaAdaDenture =
    setSeparaPenuhBawahSediaAdaDenture;
  const [yaTidakPerluStatusDenture, setYaTidakPerluStatusDenture] =
    useState('');
  masterForm.yaTidakPerluStatusDenture = yaTidakPerluStatusDenture;
  masterForm.setYaTidakPerluStatusDenture = setYaTidakPerluStatusDenture;
  const [separaPenuhAtasPerluDenture, setSeparaPenuhAtasPerluDenture] =
    useState('');
  masterForm.separaPenuhAtasPerluDenture = separaPenuhAtasPerluDenture;
  masterForm.setSeparaPenuhAtasPerluDenture = setSeparaPenuhAtasPerluDenture;
  const [separaPenuhBawahPerluDenture, setSeparaPenuhBawahPerluDenture] =
    useState('');
  masterForm.separaPenuhBawahPerluDenture = separaPenuhBawahPerluDenture;
  masterForm.setSeparaPenuhBawahPerluDenture = setSeparaPenuhBawahPerluDenture;
  const [toothSurfaceLossTrauma, setToothSurfaceLossTrauma] = useState(false);
  masterForm.toothSurfaceLossTrauma = toothSurfaceLossTrauma;
  masterForm.setToothSurfaceLossTrauma = setToothSurfaceLossTrauma;
  const [kecederaanGigiAnteriorTrauma, setKecederaanGigiAnteriorTrauma] =
    useState(false);
  masterForm.kecederaanGigiAnteriorTrauma = kecederaanGigiAnteriorTrauma;
  masterForm.setKecederaanGigiAnteriorTrauma = setKecederaanGigiAnteriorTrauma;
  const [tisuLembutTrauma, setTisuLembutTrauma] = useState(false);
  masterForm.tisuLembutTrauma = tisuLembutTrauma;
  masterForm.setTisuLembutTrauma = setTisuLembutTrauma;
  const [tisuKerasTrauma, setTisuKerasTrauma] = useState(false);
  masterForm.tisuKerasTrauma = tisuKerasTrauma;
  masterForm.setTisuKerasTrauma = setTisuKerasTrauma;
  // pemeriksaan awal div 2
  const [kebersihanMulutOralHygiene, setKebersihanMulutOralHygiene] =
    useState('');
  masterForm.kebersihanMulutOralHygiene = kebersihanMulutOralHygiene;
  masterForm.setKebersihanMulutOralHygiene = setKebersihanMulutOralHygiene;
  const [skorBpeOralHygiene, setSkorBpeOralHygiene] = useState('');
  masterForm.skorBpeOralHygiene = skorBpeOralHygiene;
  masterForm.setSkorBpeOralHygiene = setSkorBpeOralHygiene;
  const [saringanKanserMulutOralHygiene, setSaringanKanserMulutOralHygiene] =
    useState(false);
  masterForm.saringanKanserMulutOralHygiene = saringanKanserMulutOralHygiene;
  masterForm.setSaringanKanserMulutOralHygiene =
    setSaringanKanserMulutOralHygiene;
  const [skorGisMulutOralHygiene, setSkorGisMulutOralHygiene] = useState('');
  masterForm.skorGisMulutOralHygiene = skorGisMulutOralHygiene;
  masterForm.setSkorGisMulutOralHygiene = setSkorGisMulutOralHygiene;
  const [dAdaGigiDesidus, setDAdaGigiDesidus] = useState('');
  masterForm.dAdaGigiDesidus = dAdaGigiDesidus;
  masterForm.setDAdaGigiDesidus = setDAdaGigiDesidus;
  const [mAdaGigiDesidus, setMAdaGigiDesidus] = useState('');
  masterForm.mAdaGigiDesidus = mAdaGigiDesidus;
  masterForm.setMAdaGigiDesidus = setMAdaGigiDesidus;
  const [fAdaGigiDesidus, setFAdaGigiDesidus] = useState('');
  masterForm.fAdaGigiDesidus = fAdaGigiDesidus;
  masterForm.setFAdaGigiDesidus = setFAdaGigiDesidus;
  const [xAdaGigiDesidus, setXAdaGigiDesidus] = useState('');
  masterForm.xAdaGigiDesidus = xAdaGigiDesidus;
  masterForm.setXAdaGigiDesidus = setXAdaGigiDesidus;
  const [sumDMFXDesidus, setSumDMFXDesidus] = useState(0);
  masterForm.sumDMFXDesidus = sumDMFXDesidus;
  const [dAdaGigiKekal, setDAdaGigiKekal] = useState('');
  masterForm.dAdaGigiKekal = dAdaGigiKekal;
  masterForm.setDAdaGigiKekal = setDAdaGigiKekal;
  const [mAdaGigiKekal, setMAdaGigiKekal] = useState('');
  masterForm.mAdaGigiKekal = mAdaGigiKekal;
  masterForm.setMAdaGigiKekal = setMAdaGigiKekal;
  const [fAdaGigiKekal, setFAdaGigiKekal] = useState('');
  masterForm.fAdaGigiKekal = fAdaGigiKekal;
  masterForm.setFAdaGigiKekal = setFAdaGigiKekal;
  const [eAdaGigiKekal, setEAdaGigiKekal] = useState('');
  masterForm.eAdaGigiKekal = eAdaGigiKekal;
  masterForm.setEAdaGigiKekal = setEAdaGigiKekal;
  const [xAdaGigiKekal, setXAdaGigiKekal] = useState('');
  masterForm.xAdaGigiKekal = xAdaGigiKekal;
  masterForm.setXAdaGigiKekal = setXAdaGigiKekal;
  const [sumDMFXKekal, setSumDMFXKekal] = useState(0);
  masterForm.sumDMFXKekal = sumDMFXKekal;
  const [jumlahFaktorRisiko, setJumlahFaktorRisiko] = useState('');
  masterForm.jumlahFaktorRisiko = jumlahFaktorRisiko;
  masterForm.setJumlahFaktorRisiko = setJumlahFaktorRisiko;
  // pemeriksaan awal div 3
  const [gicBilanganFsDibuat3TahunLepas, setGicBilanganFsDibuat3TahunLepas] =
    useState('');
  masterForm.gicBilanganFsDibuat3TahunLepas = gicBilanganFsDibuat3TahunLepas;
  masterForm.setGicBilanganFsDibuat3TahunLepas =
    setGicBilanganFsDibuat3TahunLepas;
  const [
    resinBilanganFsDibuat3TahunLepas,
    setResinBilanganFsDibuat3TahunLepas,
  ] = useState('');
  masterForm.resinBilanganFsDibuat3TahunLepas =
    resinBilanganFsDibuat3TahunLepas;
  masterForm.setResinBilanganFsDibuat3TahunLepas =
    setResinBilanganFsDibuat3TahunLepas;
  const [
    lainLainBilanganFsDibuat3TahunLepas,
    setLainLainBilanganFsDibuat3TahunLepas,
  ] = useState('');
  masterForm.lainLainBilanganFsDibuat3TahunLepas =
    lainLainBilanganFsDibuat3TahunLepas;
  masterForm.setLainLainBilanganFsDibuat3TahunLepas =
    setLainLainBilanganFsDibuat3TahunLepas;
  const [
    dBilanganFsDibuat3TahunLepasTerjadi,
    setDBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState('');
  masterForm.dBilanganFsDibuat3TahunLepasTerjadi =
    dBilanganFsDibuat3TahunLepasTerjadi;
  masterForm.setDBilanganFsDibuat3TahunLepasTerjadi =
    setDBilanganFsDibuat3TahunLepasTerjadi;
  const [
    mBilanganFsDibuat3TahunLepasTerjadi,
    setMBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState('');
  masterForm.mBilanganFsDibuat3TahunLepasTerjadi =
    mBilanganFsDibuat3TahunLepasTerjadi;
  masterForm.setMBilanganFsDibuat3TahunLepasTerjadi =
    setMBilanganFsDibuat3TahunLepasTerjadi;
  const [
    fBilanganFsDibuat3TahunLepasTerjadi,
    setFBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState('');
  masterForm.fBilanganFsDibuat3TahunLepasTerjadi =
    fBilanganFsDibuat3TahunLepasTerjadi;
  masterForm.setFBilanganFsDibuat3TahunLepasTerjadi =
    setFBilanganFsDibuat3TahunLepasTerjadi;
  const [
    eBilanganFsDibuat3TahunLepasTerjadi,
    setEBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState('');
  masterForm.eBilanganFsDibuat3TahunLepasTerjadi =
    eBilanganFsDibuat3TahunLepasTerjadi;
  masterForm.setEBilanganFsDibuat3TahunLepasTerjadi =
    setEBilanganFsDibuat3TahunLepasTerjadi;
  const [
    xBilanganFsDibuat3TahunLepasTerjadi,
    setXBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState('');
  masterForm.xBilanganFsDibuat3TahunLepasTerjadi =
    xBilanganFsDibuat3TahunLepasTerjadi;
  masterForm.setXBilanganFsDibuat3TahunLepasTerjadi =
    setXBilanganFsDibuat3TahunLepasTerjadi;
  const [classID, setClassID] = useState('');
  masterForm.classID = classID;
  masterForm.setClassID = setClassID;
  const [classIID, setClassIID] = useState('');
  masterForm.classIID = classIID;
  masterForm.setClassIID = setClassIID;
  const [sumClassD, setSumClassD] = useState(0);
  masterForm.sumClassD = sumClassD;
  const [classIF, setClassIF] = useState('');
  masterForm.classIF = classIF;
  masterForm.setClassIF = setClassIF;
  const [classIIF, setClassIIF] = useState('');
  masterForm.classIIF = classIIF;
  masterForm.setClassIIF = setClassIIF;
  const [sumClassF, setSumClassF] = useState(0);
  masterForm.sumClassF = sumClassF;
  //perlu dibuat
  const [baruJumlahGigiKekalPerluFs, setBaruJumlahGigiKekalPerluFs] =
    useState('');
  masterForm.baruJumlahGigiKekalPerluFs = baruJumlahGigiKekalPerluFs;
  masterForm.setBaruJumlahGigiKekalPerluFs = setBaruJumlahGigiKekalPerluFs;
  const [semulaJumlahGigiKekalPerluFs, setSemulaJumlahGigiKekalPerluFs] =
    useState('');
  masterForm.semulaJumlahGigiKekalPerluFs = semulaJumlahGigiKekalPerluFs;
  masterForm.setSemulaJumlahGigiKekalPerluFs = setSemulaJumlahGigiKekalPerluFs;
  const [sumPerluFs, setSumPerluFs] = useState(0);
  masterForm.sumPerluFs = sumPerluFs;
  const [jumlahGigiFsGagal, setJumlahGigiFsGagal] = useState('');
  masterForm.jumlahGigiFsGagal = jumlahGigiFsGagal;
  masterForm.setJumlahGigiFsGagal = setJumlahGigiFsGagal;
  const [baruJumlahGigiKekalPerluFv, setBaruJumlahGigiKekalPerluFv] =
    useState('');
  masterForm.baruJumlahGigiKekalPerluFv = baruJumlahGigiKekalPerluFv;
  masterForm.setBaruJumlahGigiKekalPerluFv = setBaruJumlahGigiKekalPerluFv;
  const [semulaJumlahGigiKekalPerluFv, setSemulaJumlahGigiKekalPerluFv] =
    useState('');
  masterForm.semulaJumlahGigiKekalPerluFv = semulaJumlahGigiKekalPerluFv;
  masterForm.setSemulaJumlahGigiKekalPerluFv = setSemulaJumlahGigiKekalPerluFv;
  const [sumPerluFv, setSumPerluFv] = useState(0);
  masterForm.sumPerluFv = sumPerluFv;
  const [
    baruJumlahGigiKekalPerluPrrJenis1,
    setBaruJumlahGigiKekalPerluPrrJenis1,
  ] = useState('');
  masterForm.baruJumlahGigiKekalPerluPrrJenis1 =
    baruJumlahGigiKekalPerluPrrJenis1;
  masterForm.setBaruJumlahGigiKekalPerluPrrJenis1 =
    setBaruJumlahGigiKekalPerluPrrJenis1;
  const [
    semulaJumlahGigiKekalPerluPrrJenis1,
    setSemulaJumlahGigiKekalPerluPrrJenis1,
  ] = useState('');
  masterForm.semulaJumlahGigiKekalPerluPrrJenis1 =
    semulaJumlahGigiKekalPerluPrrJenis1;
  masterForm.setSemulaJumlahGigiKekalPerluPrrJenis1 =
    setSemulaJumlahGigiKekalPerluPrrJenis1;
  const [sumPerluPrr, setSumPerluPrr] = useState(0);
  masterForm.sumPerluPrr = sumPerluPrr;
  const [
    yaTidakSilverDiamineFluoridePerluSapuan,
    setYaTidakSilverDiamineFluoridePerluSapuan,
  ] = useState('');
  masterForm.yaTidakSilverDiamineFluoridePerluSapuan =
    yaTidakSilverDiamineFluoridePerluSapuan;
  masterForm.setYaTidakSilverDiamineFluoridePerluSapuan =
    setYaTidakSilverDiamineFluoridePerluSapuan;
  const [
    baruGDAnteriorSewarnaJumlahTampalanDiperlukan,
    setBaruGDAnteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.baruGDAnteriorSewarnaJumlahTampalanDiperlukan =
    baruGDAnteriorSewarnaJumlahTampalanDiperlukan;
  masterForm.setBaruGDAnteriorSewarnaJumlahTampalanDiperlukan =
    setBaruGDAnteriorSewarnaJumlahTampalanDiperlukan;
  const [
    semulaGDAnteriorSewarnaJumlahTampalanDiperlukan,
    setSemulaGDAnteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.semulaGDAnteriorSewarnaJumlahTampalanDiperlukan =
    semulaGDAnteriorSewarnaJumlahTampalanDiperlukan;
  masterForm.setSemulaGDAnteriorSewarnaJumlahTampalanDiperlukan =
    setSemulaGDAnteriorSewarnaJumlahTampalanDiperlukan;
  const [
    baruGKAnteriorSewarnaJumlahTampalanDiperlukan,
    setBaruGKAnteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.baruGKAnteriorSewarnaJumlahTampalanDiperlukan =
    baruGKAnteriorSewarnaJumlahTampalanDiperlukan;
  masterForm.setBaruGKAnteriorSewarnaJumlahTampalanDiperlukan =
    setBaruGKAnteriorSewarnaJumlahTampalanDiperlukan;
  const [
    semulaGKAnteriorSewarnaJumlahTampalanDiperlukan,
    setSemulaGKAnteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.semulaGKAnteriorSewarnaJumlahTampalanDiperlukan =
    semulaGKAnteriorSewarnaJumlahTampalanDiperlukan;
  masterForm.setSemulaGKAnteriorSewarnaJumlahTampalanDiperlukan =
    setSemulaGKAnteriorSewarnaJumlahTampalanDiperlukan;
  const [
    baruGDPosteriorSewarnaJumlahTampalanDiperlukan,
    setBaruGDPosteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.baruGDPosteriorSewarnaJumlahTampalanDiperlukan =
    baruGDPosteriorSewarnaJumlahTampalanDiperlukan;
  masterForm.setBaruGDPosteriorSewarnaJumlahTampalanDiperlukan =
    setBaruGDPosteriorSewarnaJumlahTampalanDiperlukan;
  const [
    semulaGDPosteriorSewarnaJumlahTampalanDiperlukan,
    setSemulaGDPosteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.semulaGDPosteriorSewarnaJumlahTampalanDiperlukan =
    semulaGDPosteriorSewarnaJumlahTampalanDiperlukan;
  masterForm.setSemulaGDPosteriorSewarnaJumlahTampalanDiperlukan =
    setSemulaGDPosteriorSewarnaJumlahTampalanDiperlukan;
  const [
    baruGKPosteriorSewarnaJumlahTampalanDiperlukan,
    setBaruGKPosteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.baruGKPosteriorSewarnaJumlahTampalanDiperlukan =
    baruGKPosteriorSewarnaJumlahTampalanDiperlukan;
  masterForm.setBaruGKPosteriorSewarnaJumlahTampalanDiperlukan =
    setBaruGKPosteriorSewarnaJumlahTampalanDiperlukan;
  const [
    semulaGKPosteriorSewarnaJumlahTampalanDiperlukan,
    setSemulaGKPosteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.semulaGKPosteriorSewarnaJumlahTampalanDiperlukan =
    semulaGKPosteriorSewarnaJumlahTampalanDiperlukan;
  masterForm.setSemulaGKPosteriorSewarnaJumlahTampalanDiperlukan =
    setSemulaGKPosteriorSewarnaJumlahTampalanDiperlukan;
  const [
    baruGDPosteriorAmalgamJumlahTampalanDiperlukan,
    setBaruGDPosteriorAmalgamJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.baruGDPosteriorAmalgamJumlahTampalanDiperlukan =
    baruGDPosteriorAmalgamJumlahTampalanDiperlukan;
  masterForm.setBaruGDPosteriorAmalgamJumlahTampalanDiperlukan =
    setBaruGDPosteriorAmalgamJumlahTampalanDiperlukan;
  const [
    semulaGDPosteriorAmalgamJumlahTampalanDiperlukan,
    setSemulaGDPosteriorAmalgamJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.semulaGDPosteriorAmalgamJumlahTampalanDiperlukan =
    semulaGDPosteriorAmalgamJumlahTampalanDiperlukan;
  masterForm.setSemulaGDPosteriorAmalgamJumlahTampalanDiperlukan =
    setSemulaGDPosteriorAmalgamJumlahTampalanDiperlukan;
  const [
    baruGKPosteriorAmalgamJumlahTampalanDiperlukan,
    setBaruGKPosteriorAmalgamJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.baruGKPosteriorAmalgamJumlahTampalanDiperlukan =
    baruGKPosteriorAmalgamJumlahTampalanDiperlukan;
  masterForm.setBaruGKPosteriorAmalgamJumlahTampalanDiperlukan =
    setBaruGKPosteriorAmalgamJumlahTampalanDiperlukan;
  const [
    semulaGKPosteriorAmalgamJumlahTampalanDiperlukan,
    setSemulaGKPosteriorAmalgamJumlahTampalanDiperlukan,
  ] = useState('');
  masterForm.semulaGKPosteriorAmalgamJumlahTampalanDiperlukan =
    semulaGKPosteriorAmalgamJumlahTampalanDiperlukan;
  masterForm.setSemulaGKPosteriorAmalgamJumlahTampalanDiperlukan =
    setSemulaGKPosteriorAmalgamJumlahTampalanDiperlukan;
  // penyata akhir 1
  const [baruJumlahGigiKekalDibuatFs, setBaruJumlahGigiKekalDibuatFs] =
    useState('');
  masterForm.baruJumlahGigiKekalDibuatFs = baruJumlahGigiKekalDibuatFs;
  masterForm.setBaruJumlahGigiKekalDibuatFs = setBaruJumlahGigiKekalDibuatFs;
  const [semulaJumlahGigiKekalDibuatFs, setSemulaJumlahGigiKekalDibuatFs] =
    useState('');
  masterForm.semulaJumlahGigiKekalDibuatFs = semulaJumlahGigiKekalDibuatFs;
  masterForm.setSemulaJumlahGigiKekalDibuatFs =
    setSemulaJumlahGigiKekalDibuatFs;
  const [sumDibuatFs, setSumDibuatFs] = useState(0);
  masterForm.sumDibuatFs = sumDibuatFs;
  const [baruJumlahGigiKekalDiberiFv, setBaruJumlahGigiKekalDiberiFv] =
    useState('');
  masterForm.baruJumlahGigiKekalDiberiFv = baruJumlahGigiKekalDiberiFv;
  masterForm.setBaruJumlahGigiKekalDiberiFv = setBaruJumlahGigiKekalDiberiFv;
  const [semulaJumlahGigiKekalDiberiFv, setSemulaJumlahGigiKekalDiberiFv] =
    useState('');
  masterForm.semulaJumlahGigiKekalDiberiFv = semulaJumlahGigiKekalDiberiFv;
  masterForm.setSemulaJumlahGigiKekalDiberiFv =
    setSemulaJumlahGigiKekalDiberiFv;
  const [sumDiberiFv, setSumDiberiFv] = useState(0);
  masterForm.sumDiberiFv = sumDiberiFv;
  const [
    baruJumlahGigiKekalDiberiPrrJenis1,
    setBaruJumlahGigiKekalDiberiPrrJenis1,
  ] = useState('');
  masterForm.baruJumlahGigiKekalDiberiPrrJenis1 =
    baruJumlahGigiKekalDiberiPrrJenis1;
  masterForm.setBaruJumlahGigiKekalDiberiPrrJenis1 =
    setBaruJumlahGigiKekalDiberiPrrJenis1;
  const [
    semulaJumlahGigiKekalDiberiPrrJenis1,
    setSemulaJumlahGigiKekalDiberiPrrJenis1,
  ] = useState('');
  masterForm.semulaJumlahGigiKekalDiberiPrrJenis1 =
    semulaJumlahGigiKekalDiberiPrrJenis1;
  masterForm.setSemulaJumlahGigiKekalDiberiPrrJenis1 =
    setSemulaJumlahGigiKekalDiberiPrrJenis1;
  const [sumDiberiPrr, setSumDiberiPrr] = useState(0);
  masterForm.sumDiberiPrr = sumDiberiPrr;
  const [baruJumlahGigiYangDiberiSdf, setBaruJumlahGigiYangDiberiSdf] =
    useState('');
  masterForm.baruJumlahGigiYangDiberiSdf = baruJumlahGigiYangDiberiSdf;
  masterForm.setBaruJumlahGigiYangDiberiSdf = setBaruJumlahGigiYangDiberiSdf;
  const [semulaJumlahGigiYangDiberiSdf, setSemulaJumlahGigiYangDiberiSdf] =
    useState('');
  masterForm.semulaJumlahGigiYangDiberiSdf = semulaJumlahGigiYangDiberiSdf;
  masterForm.setSemulaJumlahGigiYangDiberiSdf =
    setSemulaJumlahGigiYangDiberiSdf;
  const [
    gdBaruAnteriorSewarnaJumlahTampalanDibuat,
    setGdBaruAnteriorSewarnaJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gdBaruAnteriorSewarnaJumlahTampalanDibuat =
    gdBaruAnteriorSewarnaJumlahTampalanDibuat;
  masterForm.setGdBaruAnteriorSewarnaJumlahTampalanDibuat =
    setGdBaruAnteriorSewarnaJumlahTampalanDibuat;
  const [
    gdSemulaAnteriorSewarnaJumlahTampalanDibuat,
    setGdSemulaAnteriorSewarnaJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gdSemulaAnteriorSewarnaJumlahTampalanDibuat =
    gdSemulaAnteriorSewarnaJumlahTampalanDibuat;
  masterForm.setGdSemulaAnteriorSewarnaJumlahTampalanDibuat =
    setGdSemulaAnteriorSewarnaJumlahTampalanDibuat;
  const [
    gkBaruAnteriorSewarnaJumlahTampalanDibuat,
    setGkBaruAnteriorSewarnaJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gkBaruAnteriorSewarnaJumlahTampalanDibuat =
    gkBaruAnteriorSewarnaJumlahTampalanDibuat;
  masterForm.setGkBaruAnteriorSewarnaJumlahTampalanDibuat =
    setGkBaruAnteriorSewarnaJumlahTampalanDibuat;
  const [
    gkSemulaAnteriorSewarnaJumlahTampalanDibuat,
    setGkSemulaAnteriorSewarnaJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gkSemulaAnteriorSewarnaJumlahTampalanDibuat =
    gkSemulaAnteriorSewarnaJumlahTampalanDibuat;
  masterForm.setGkSemulaAnteriorSewarnaJumlahTampalanDibuat =
    setGkSemulaAnteriorSewarnaJumlahTampalanDibuat;
  const [
    gdBaruPosteriorSewarnaJumlahTampalanDibuat,
    setGdBaruPosteriorSewarnaJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gdBaruPosteriorSewarnaJumlahTampalanDibuat =
    gdBaruPosteriorSewarnaJumlahTampalanDibuat;
  masterForm.setGdBaruPosteriorSewarnaJumlahTampalanDibuat =
    setGdBaruPosteriorSewarnaJumlahTampalanDibuat;
  const [
    gdSemulaPosteriorSewarnaJumlahTampalanDibuat,
    setGdSemulaPosteriorSewarnaJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gdSemulaPosteriorSewarnaJumlahTampalanDibuat =
    gdSemulaPosteriorSewarnaJumlahTampalanDibuat;
  masterForm.setGdSemulaPosteriorSewarnaJumlahTampalanDibuat =
    setGdSemulaPosteriorSewarnaJumlahTampalanDibuat;
  const [
    gkBaruPosteriorSewarnaJumlahTampalanDibuat,
    setGkBaruPosteriorSewarnaJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gkBaruPosteriorSewarnaJumlahTampalanDibuat =
    gkBaruPosteriorSewarnaJumlahTampalanDibuat;
  masterForm.setGkBaruPosteriorSewarnaJumlahTampalanDibuat =
    setGkBaruPosteriorSewarnaJumlahTampalanDibuat;
  const [
    gkSemulaPosteriorSewarnaJumlahTampalanDibuat,
    setGkSemulaPosteriorSewarnaJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gkSemulaPosteriorSewarnaJumlahTampalanDibuat =
    gkSemulaPosteriorSewarnaJumlahTampalanDibuat;
  masterForm.setGkSemulaPosteriorSewarnaJumlahTampalanDibuat =
    setGkSemulaPosteriorSewarnaJumlahTampalanDibuat;
  const [
    gdBaruPosteriorAmalgamJumlahTampalanDibuat,
    setGdBaruPosteriorAmalgamJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gdBaruPosteriorAmalgamJumlahTampalanDibuat =
    gdBaruPosteriorAmalgamJumlahTampalanDibuat;
  masterForm.setGdBaruPosteriorAmalgamJumlahTampalanDibuat =
    setGdBaruPosteriorAmalgamJumlahTampalanDibuat;
  const [
    gdSemulaPosteriorAmalgamJumlahTampalanDibuat,
    setGdSemulaPosteriorAmalgamJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gdSemulaPosteriorAmalgamJumlahTampalanDibuat =
    gdSemulaPosteriorAmalgamJumlahTampalanDibuat;
  masterForm.setGdSemulaPosteriorAmalgamJumlahTampalanDibuat =
    setGdSemulaPosteriorAmalgamJumlahTampalanDibuat;
  const [
    gkBaruPosteriorAmalgamJumlahTampalanDibuat,
    setGkBaruPosteriorAmalgamJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gkBaruPosteriorAmalgamJumlahTampalanDibuat =
    gkBaruPosteriorAmalgamJumlahTampalanDibuat;
  masterForm.setGkBaruPosteriorAmalgamJumlahTampalanDibuat =
    setGkBaruPosteriorAmalgamJumlahTampalanDibuat;
  const [
    gkSemulaPosteriorAmalgamJumlahTampalanDibuat,
    setGkSemulaPosteriorAmalgamJumlahTampalanDibuat,
  ] = useState('');
  masterForm.gkSemulaPosteriorAmalgamJumlahTampalanDibuat =
    gkSemulaPosteriorAmalgamJumlahTampalanDibuat;
  masterForm.setGkSemulaPosteriorAmalgamJumlahTampalanDibuat =
    setGkSemulaPosteriorAmalgamJumlahTampalanDibuat;
  // penyata akhir 2
  const [cabutDesidusPenyataAkhir2, setCabutDesidusPenyataAkhir2] =
    useState('');
  masterForm.cabutDesidusPenyataAkhir2 = cabutDesidusPenyataAkhir2;
  masterForm.setCabutDesidusPenyataAkhir2 = setCabutDesidusPenyataAkhir2;
  const [cabutKekalPenyataAkhir2, setCabutKekalPenyataAkhir2] = useState('');
  masterForm.cabutKekalPenyataAkhir2 = cabutKekalPenyataAkhir2;
  masterForm.setCabutKekalPenyataAkhir2 = setCabutKekalPenyataAkhir2;
  const [
    jumlahTampalanSementaraPenyataAkhir2,
    setJumlahTampalanSementaraPenyataAkhir2,
  ] = useState('');
  masterForm.jumlahTampalanSementaraPenyataAkhir2 =
    jumlahTampalanSementaraPenyataAkhir2;
  masterForm.setJumlahTampalanSementaraPenyataAkhir2 =
    setJumlahTampalanSementaraPenyataAkhir2;
  const [pulpotomiPenyataAkhir2, setPulpotomiPenyataAkhir2] = useState('');
  masterForm.pulpotomiPenyataAkhir2 = pulpotomiPenyataAkhir2;
  masterForm.setPulpotomiPenyataAkhir2 = setPulpotomiPenyataAkhir2;
  const [endodontikPenyataAkhir2, setEndodontikPenyataAkhir2] = useState('');
  masterForm.endodontikPenyataAkhir2 = endodontikPenyataAkhir2;
  masterForm.setEndodontikPenyataAkhir2 = setEndodontikPenyataAkhir2;
  const [absesPenyataAkhir2, setAbsesPenyataAkhir2] = useState('');
  masterForm.absesPenyataAkhir2 = absesPenyataAkhir2;
  masterForm.setAbsesPenyataAkhir2 = setAbsesPenyataAkhir2;
  const [penskaleranPenyataAkhir2, setPenskaleranPenyataAkhir2] = useState('');
  masterForm.penskaleranPenyataAkhir2 = penskaleranPenyataAkhir2;
  masterForm.setPenskaleranPenyataAkhir2 = setPenskaleranPenyataAkhir2;
  const [kesSelesaiPenyataAkhir2, setKesSelesaiPenyataAkhir2] = useState(false);
  masterForm.kesSelesaiPenyataAkhir2 = kesSelesaiPenyataAkhir2;
  masterForm.setKesSelesaiPenyataAkhir2 = setKesSelesaiPenyataAkhir2;
  const [kesSelesaiIcdasPenyataAkhir2, setKesSelesaiIcdasPenyataAkhir2] =
    useState(false);
  masterForm.kesSelesaiIcdasPenyataAkhir2 = kesSelesaiIcdasPenyataAkhir2;
  masterForm.setKesSelesaiIcdasPenyataAkhir2 = setKesSelesaiIcdasPenyataAkhir2;
  const [rujukPenyataAkhir2, setRujukPenyataAkhir2] = useState(false);
  masterForm.rujukPenyataAkhir2 = rujukPenyataAkhir2;
  masterForm.setRujukPenyataAkhir2 = setRujukPenyataAkhir2;
  const [ceramahPromosiPenyataAkhir2, setCeramahPromosiPenyataAkhir2] =
    useState('');
  masterForm.ceramahPromosiPenyataAkhir2 = ceramahPromosiPenyataAkhir2;
  masterForm.setCeramahPromosiPenyataAkhir2 = setCeramahPromosiPenyataAkhir2;
  const [lmgPromosiPenyataAkhir2, setLmgPromosiPenyataAkhir2] = useState('');
  masterForm.lmgPromosiPenyataAkhir2 = lmgPromosiPenyataAkhir2;
  masterForm.setLmgPromosiPenyataAkhir2 = setLmgPromosiPenyataAkhir2;
  const [
    yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2,
    setYaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2,
  ] = useState('');
  masterForm.yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2 =
    yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2;
  masterForm.setYaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2 =
    setYaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2;
  const [
    plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2,
    setPlakGigiNasihatPergigianIndividuPromosiPenyataAkhir2,
  ] = useState(false);
  masterForm.plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2 =
    plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2;
  masterForm.setPlakGigiNasihatPergigianIndividuPromosiPenyataAkhir2 =
    setPlakGigiNasihatPergigianIndividuPromosiPenyataAkhir2;
  const [
    dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2,
    setDietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2,
  ] = useState(false);
  masterForm.dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2 =
    dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2;
  masterForm.setDietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2 =
    setDietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2;
  const [
    penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2,
    setPenjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2,
  ] = useState(false);
  masterForm.penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2 =
    penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2;
  masterForm.setPenjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2 =
    setPenjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2;
  const [
    kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2,
    setKanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2,
  ] = useState(false);
  masterForm.kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2 =
    kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2;
  masterForm.setKanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2 =
    setKanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2;
  // kotak
  const [statusM, setStatusM] = useState('');
  masterForm.statusM = statusM;
  masterForm.setStatusM = setStatusM;
  const [jenisR, setJenisR] = useState('');
  masterForm.jenisR = jenisR;
  masterForm.setJenisR = setJenisR;
  const [tarikh1, setTarikh1] = useState('');
  masterForm.tarikh1 = tarikh1;
  masterForm.setTarikh1 = setTarikh1;
  const [tarikh2, setTarikh2] = useState('');
  masterForm.tarikh2 = tarikh2;
  masterForm.setTarikh2 = setTarikh2;
  const [tarikh3, setTarikh3] = useState('');
  masterForm.tarikh3 = tarikh3;
  masterForm.setTarikh3 = setTarikh3;
  const [tarikh4, setTarikh4] = useState('');
  masterForm.tarikh4 = tarikh4;
  masterForm.setTarikh4 = setTarikh4;
  const [adaQ, setAdaQ] = useState(false);
  masterForm.adaQ = adaQ;
  masterForm.setAdaQ = setAdaQ;
  const [tiadaQ, setTiadaQ] = useState(false);
  masterForm.tiadaQ = tiadaQ;
  masterForm.setTiadaQ = setTiadaQ;
  const [rujukG, setRujukG] = useState(false);
  masterForm.rujukG = rujukG;
  masterForm.setRujukG = setRujukG;
  const [tarikhQ, setTarikhQ] = useState('');
  masterForm.tarikhQ = tarikhQ;
  masterForm.setTarikhQ = setTarikhQ;
  const [statusSelepas6Bulan, setStatusSelepas6Bulan] = useState('');
  masterForm.statusSelepas6Bulan = statusSelepas6Bulan;
  masterForm.setStatusSelepas6Bulan = setStatusSelepas6Bulan;

  useEffect(() => {
    const fetchSinglePersonSekolah = async () => {
      try {
        const { data } = await axios.get(`/api/v1/sekolah/${personSekolahId}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        setSinglePersonSekolah(data.singlePersonSekolah);
        // map pendaftaran
        setStatikBergerak(data.singlePersonSekolah.statikBergerak);
        setKpBergerak(data.singlePersonSekolah.kpBergerak);
        setPlateNo(data.singlePersonSekolah.plateNo);
        setBaruUlanganKedatanganPendaftaran(
          data.singlePersonSekolah.baruUlanganKedatanganPendaftaran
        );
        setEngganKedatanganPendaftaran(
          data.singlePersonSekolah.engganKedatanganPendaftaran
        );
        setTidakHadirKedatanganPendaftaran(
          data.singlePersonSekolah.tidakHadirKedatanganPendaftaran
        );
        setAdaTiadaPemeriksaanPendaftaran(
          data.singlePersonSekolah.adaTiadaPemeriksaanPendaftaran
        );
        setTinggiRendahRisikoSekolahPendaftaran(
          data.singlePersonSekolah.tinggiRendahRisikoSekolahPendaftaran
        );
        // map pemeriksaan awal div 1
        setAdaCleftLip(data.singlePersonSekolah.adaCleftLip);
        setRujukCleftLip(data.singlePersonSekolah.rujukCleftLip);
        setYaTidakSediaAdaStatusDenture(
          data.singlePersonSekolah.yaTidakSediaAdaStatusDenture
        );
        setSeparaPenuhAtasSediaAdaDenture(
          data.singlePersonSekolah.separaPenuhAtasSediaAdaDenture
        );
        setSeparaPenuhBawahSediaAdaDenture(
          data.singlePersonSekolah.separaPenuhBawahSediaAdaDenture
        );
        setYaTidakPerluStatusDenture(
          data.singlePersonSekolah.yaTidakPerluStatusDenture
        );
        setSeparaPenuhAtasPerluDenture(
          data.singlePersonSekolah.separaPenuhAtasPerluDenture
        );
        setSeparaPenuhBawahPerluDenture(
          data.singlePersonSekolah.separaPenuhBawahPerluDenture
        );
        setToothSurfaceLossTrauma(
          data.singlePersonSekolah.toothSurfaceLossTrauma
        );
        setKecederaanGigiAnteriorTrauma(
          data.singlePersonSekolah.kecederaanGigiAnteriorTrauma
        );
        setTisuLembutTrauma(data.singlePersonSekolah.tisuLembutTrauma);
        setTisuKerasTrauma(data.singlePersonSekolah.tisuKerasTrauma);
        // map pemeriksaan awal div 2
        setKebersihanMulutOralHygiene(
          data.singlePersonSekolah.kebersihanMulutOralHygiene
        );
        setSkorBpeOralHygiene(data.singlePersonSekolah.skorBpeOralHygiene);
        setSaringanKanserMulutOralHygiene(
          data.singlePersonSekolah.saringanKanserMulutOralHygiene
        );
        setSkorGisMulutOralHygiene(
          data.singlePersonSekolah.skorGisMulutOralHygiene
        );
        setDAdaGigiDesidus(data.singlePersonSekolah.dAdaGigiDesidus);
        setMAdaGigiDesidus(data.singlePersonSekolah.mAdaGigiDesidus);
        setFAdaGigiDesidus(data.singlePersonSekolah.fAdaGigiDesidus);
        setXAdaGigiDesidus(data.singlePersonSekolah.xAdaGigiDesidus);
        setDAdaGigiKekal(data.singlePersonSekolah.dAdaGigiKekal);
        setMAdaGigiKekal(data.singlePersonSekolah.mAdaGigiKekal);
        setFAdaGigiKekal(data.singlePersonSekolah.fAdaGigiKekal);
        setEAdaGigiKekal(data.singlePersonSekolah.eAdaGigiKekal);
        setXAdaGigiKekal(data.singlePersonSekolah.xAdaGigiKekal);
        setJumlahFaktorRisiko(data.singlePersonSekolah.jumlahFaktorRisiko);
        // map pemeriksaan awal div 3
        setGicBilanganFsDibuat3TahunLepas(
          data.singlePersonSekolah.gicBilanganFsDibuat3TahunLepas
        );
        setResinBilanganFsDibuat3TahunLepas(
          data.singlePersonSekolah.resinBilanganFsDibuat3TahunLepas
        );
        setLainLainBilanganFsDibuat3TahunLepas(
          data.singlePersonSekolah.lainLainBilanganFsDibuat3TahunLepas
        );
        setDBilanganFsDibuat3TahunLepasTerjadi(
          data.singlePersonSekolah.dBilanganFsDibuat3TahunLepasTerjadi
        );
        setMBilanganFsDibuat3TahunLepasTerjadi(
          data.singlePersonSekolah.mBilanganFsDibuat3TahunLepasTerjadi
        );
        setFBilanganFsDibuat3TahunLepasTerjadi(
          data.singlePersonSekolah.fBilanganFsDibuat3TahunLepasTerjadi
        );
        setEBilanganFsDibuat3TahunLepasTerjadi(
          data.singlePersonSekolah.eBilanganFsDibuat3TahunLepasTerjadi
        );
        setXBilanganFsDibuat3TahunLepasTerjadi(
          data.singlePersonSekolah.xBilanganFsDibuat3TahunLepasTerjadi
        );
        setClassID(data.singlePersonSekolah.classID);
        setClassIID(data.singlePersonSekolah.classIID);
        setClassIF(data.singlePersonSekolah.classIF);
        setClassIIF(data.singlePersonSekolah.classIIF);
        // map perlu dibuat
        setBaruJumlahGigiKekalPerluFs(
          data.singlePersonSekolah.baruJumlahGigiKekalPerluFs
        );
        setSemulaJumlahGigiKekalPerluFs(
          data.singlePersonSekolah.semulaJumlahGigiKekalPerluFs
        );
        setJumlahGigiFsGagal(data.singlePersonSekolah.jumlahGigiFsGagal);
        setBaruJumlahGigiKekalPerluFv(
          data.singlePersonSekolah.baruJumlahGigiKekalPerluFv
        );
        setSemulaJumlahGigiKekalPerluFv(
          data.singlePersonSekolah.semulaJumlahGigiKekalPerluFv
        );
        setBaruJumlahGigiKekalPerluPrrJenis1(
          data.singlePersonSekolah.baruJumlahGigiKekalPerluPrrJenis1
        );
        setSemulaJumlahGigiKekalPerluPrrJenis1(
          data.singlePersonSekolah.semulaJumlahGigiKekalPerluPrrJenis1
        );
        setYaTidakSilverDiamineFluoridePerluSapuan(
          data.singlePersonSekolah.yaTidakSilverDiamineFluoridePerluSapuan
        );
        setBaruGDAnteriorSewarnaJumlahTampalanDiperlukan(
          data.singlePersonSekolah.baruGDAnteriorSewarnaJumlahTampalanDiperlukan
        );
        setSemulaGDAnteriorSewarnaJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .semulaGDAnteriorSewarnaJumlahTampalanDiperlukan
        );
        setBaruGKAnteriorSewarnaJumlahTampalanDiperlukan(
          data.singlePersonSekolah.baruGKAnteriorSewarnaJumlahTampalanDiperlukan
        );
        setSemulaGKAnteriorSewarnaJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .semulaGKAnteriorSewarnaJumlahTampalanDiperlukan
        );
        setBaruGDPosteriorSewarnaJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .baruGDPosteriorSewarnaJumlahTampalanDiperlukan
        );
        setSemulaGDPosteriorSewarnaJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .semulaGDPosteriorSewarnaJumlahTampalanDiperlukan
        );
        setBaruGKPosteriorSewarnaJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .baruGKPosteriorSewarnaJumlahTampalanDiperlukan
        );
        setSemulaGKPosteriorSewarnaJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .semulaGKPosteriorSewarnaJumlahTampalanDiperlukan
        );
        setBaruGDPosteriorAmalgamJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .baruGDPosteriorAmalgamJumlahTampalanDiperlukan
        );
        setSemulaGDPosteriorAmalgamJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .semulaGDPosteriorAmalgamJumlahTampalanDiperlukan
        );
        setBaruGKPosteriorAmalgamJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .baruGKPosteriorAmalgamJumlahTampalanDiperlukan
        );
        setSemulaGKPosteriorAmalgamJumlahTampalanDiperlukan(
          data.singlePersonSekolah
            .semulaGKPosteriorAmalgamJumlahTampalanDiperlukan
        );
        // map penyata akhir 1
        setBaruJumlahGigiKekalDibuatFs(
          data.singlePersonSekolah.baruJumlahGigiKekalDibuatFs
        );
        setSemulaJumlahGigiKekalDibuatFs(
          data.singlePersonSekolah.semulaJumlahGigiKekalDibuatFs
        );
        setBaruJumlahGigiKekalDiberiFv(
          data.singlePersonSekolah.baruJumlahGigiKekalDiberiFv
        );
        setSemulaJumlahGigiKekalDiberiFv(
          data.singlePersonSekolah.semulaJumlahGigiKekalDiberiFv
        );
        setBaruJumlahGigiKekalDiberiPrrJenis1(
          data.singlePersonSekolah.baruJumlahGigiKekalDiberiPrrJenis1
        );
        setSemulaJumlahGigiKekalDiberiPrrJenis1(
          data.singlePersonSekolah.semulaJumlahGigiKekalDiberiPrrJenis1
        );
        setBaruJumlahGigiYangDiberiSdf(
          data.singlePersonSekolah.baruJumlahGigiYangDiberiSdf
        );
        setSemulaJumlahGigiYangDiberiSdf(
          data.singlePersonSekolah.semulaJumlahGigiYangDiberiSdf
        );
        setGdBaruAnteriorSewarnaJumlahTampalanDibuat(
          data.singlePersonSekolah.gdBaruAnteriorSewarnaJumlahTampalanDibuat
        );
        setGdSemulaAnteriorSewarnaJumlahTampalanDibuat(
          data.singlePersonSekolah.gdSemulaAnteriorSewarnaJumlahTampalanDibuat
        );
        setGkBaruAnteriorSewarnaJumlahTampalanDibuat(
          data.singlePersonSekolah.gkBaruAnteriorSewarnaJumlahTampalanDibuat
        );
        setGkSemulaAnteriorSewarnaJumlahTampalanDibuat(
          data.singlePersonSekolah.gkSemulaAnteriorSewarnaJumlahTampalanDibuat
        );
        setGdBaruPosteriorSewarnaJumlahTampalanDibuat(
          data.singlePersonSekolah.gdBaruPosteriorSewarnaJumlahTampalanDibuat
        );
        setGdSemulaPosteriorSewarnaJumlahTampalanDibuat(
          data.singlePersonSekolah.gdSemulaPosteriorSewarnaJumlahTampalanDibuat
        );
        setGkBaruPosteriorSewarnaJumlahTampalanDibuat(
          data.singlePersonSekolah.gkBaruPosteriorSewarnaJumlahTampalanDibuat
        );
        setGkSemulaPosteriorSewarnaJumlahTampalanDibuat(
          data.singlePersonSekolah.gkSemulaPosteriorSewarnaJumlahTampalanDibuat
        );
        setGdBaruPosteriorAmalgamJumlahTampalanDibuat(
          data.singlePersonSekolah.gdBaruPosteriorAmalgamJumlahTampalanDibuat
        );
        setGdSemulaPosteriorAmalgamJumlahTampalanDibuat(
          data.singlePersonSekolah.gdSemulaPosteriorAmalgamJumlahTampalanDibuat
        );
        setGkBaruPosteriorAmalgamJumlahTampalanDibuat(
          data.singlePersonSekolah.gkBaruPosteriorAmalgamJumlahTampalanDibuat
        );
        setGkSemulaPosteriorAmalgamJumlahTampalanDibuat(
          data.singlePersonSekolah.gkSemulaPosteriorAmalgamJumlahTampalanDibuat
        );
        // map penyata akhir 2
        setCabutDesidusPenyataAkhir2(
          data.singlePersonSekolah.cabutDesidusPenyataAkhir2
        );
        setCabutKekalPenyataAkhir2(
          data.singlePersonSekolah.cabutKekalPenyataAkhir2
        );
        setJumlahTampalanSementaraPenyataAkhir2(
          data.singlePersonSekolah.jumlahTampalanSementaraPenyataAkhir2
        );
        setPulpotomiPenyataAkhir2(
          data.singlePersonSekolah.pulpotomiPenyataAkhir2
        );
        setEndodontikPenyataAkhir2(
          data.singlePersonSekolah.endodontikPenyataAkhir2
        );
        setAbsesPenyataAkhir2(data.singlePersonSekolah.absesPenyataAkhir2);
        setPenskaleranPenyataAkhir2(
          data.singlePersonSekolah.penskaleranPenyataAkhir2
        );
        setKesSelesaiPenyataAkhir2(
          data.singlePersonSekolah.kesSelesaiPenyataAkhir2
        );
        setKesSelesaiIcdasPenyataAkhir2(
          data.singlePersonSekolah.kesSelesaiIcdasPenyataAkhir2
        );
        setRujukPenyataAkhir2(data.singlePersonSekolah.rujukPenyataAkhir2);
        setCeramahPromosiPenyataAkhir2(
          data.singlePersonSekolah.ceramahPromosiPenyataAkhir2
        );
        setLmgPromosiPenyataAkhir2(
          data.singlePersonSekolah.lmgPromosiPenyataAkhir2
        );
        setYaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2(
          data.singlePersonSekolah
            .yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2
        );
        setPlakGigiNasihatPergigianIndividuPromosiPenyataAkhir2(
          data.singlePersonSekolah
            .plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2
        );
        setDietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2(
          data.singlePersonSekolah
            .dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2
        );
        setPenjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2(
          data.singlePersonSekolah
            .penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2
        );
        setKanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2(
          data.singlePersonSekolah
            .kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2
        );
        // map kotak
        setStatusM(data.singlePersonSekolah.statusM);
        setJenisR(data.singlePersonSekolah.jenisR);
        setTarikh1(data.singlePersonSekolah.tarikh1);
        setTarikh2(data.singlePersonSekolah.tarikh2);
        setTarikh3(data.singlePersonSekolah.tarikh3);
        setTarikh4(data.singlePersonSekolah.tarikh4);
        setAdaQ(data.singlePersonSekolah.adaQ);
        setTiadaQ(data.singlePersonSekolah.tiadaQ);
        setRujukG(data.singlePersonSekolah.rujukG);
        setTarikhQ(data.singlePersonSekolah.tarikhQ);
        setStatusSelepas6Bulan(data.singlePersonSekolah.statusSelepas6Bulan);
      } catch (error) {
        catchAxiosErrorAndLogout();
        navigate('/');
      }
    };
    fetchSinglePersonSekolah();
  }, []);

  // calculate total dmfx desidus
  useEffect(() => {
    setSumDMFXDesidus(
      parseInt(dAdaGigiDesidus) +
        parseInt(mAdaGigiDesidus) +
        parseInt(fAdaGigiDesidus) +
        parseInt(xAdaGigiDesidus)
    );
  }, [dAdaGigiDesidus, mAdaGigiDesidus, fAdaGigiDesidus, xAdaGigiDesidus]);

  // calculate total DMFX kekal
  useEffect(() => {
    setSumDMFXKekal(
      parseInt(dAdaGigiKekal) +
        parseInt(mAdaGigiKekal) +
        parseInt(fAdaGigiKekal) +
        parseInt(xAdaGigiKekal)
    );
  }, [dAdaGigiKekal, mAdaGigiKekal, fAdaGigiKekal, xAdaGigiKekal]);

  // calculate total D class I & II
  useEffect(() => {
    setSumClassD(parseInt(classID) + parseInt(classIID));
  }, [classID, classIID]);

  // calculate total F class I & II
  useEffect(() => {
    setSumClassF(parseInt(classIF) + parseInt(classIIF));
  }, [classIF, classIIF]);

  // calculate total perlu FS
  useEffect(() => {
    setSumPerluFs(
      parseInt(baruJumlahGigiKekalPerluFs) +
        parseInt(semulaJumlahGigiKekalPerluFs)
    );
  }, [baruJumlahGigiKekalPerluFs, semulaJumlahGigiKekalPerluFs]);

  // calculate total perlu FV
  useEffect(() => {
    setSumPerluFv(
      parseInt(baruJumlahGigiKekalPerluFv) +
        parseInt(semulaJumlahGigiKekalPerluFv)
    );
  }, [baruJumlahGigiKekalPerluFv, semulaJumlahGigiKekalPerluFv]);

  // calculate total perlu PRR
  useEffect(() => {
    setSumPerluPrr(
      parseInt(baruJumlahGigiKekalPerluPrrJenis1) +
        parseInt(semulaJumlahGigiKekalPerluPrrJenis1)
    );
  }, [baruJumlahGigiKekalPerluPrrJenis1, semulaJumlahGigiKekalPerluPrrJenis1]);

  // calculate total dibuat FS
  useEffect(() => {
    setSumDibuatFs(
      parseInt(baruJumlahGigiKekalDibuatFs) +
        parseInt(semulaJumlahGigiKekalDibuatFs)
    );
  }, [baruJumlahGigiKekalDibuatFs, semulaJumlahGigiKekalDibuatFs]);

  // calculate total diberi FV
  useEffect(() => {
    setSumDiberiFv(
      parseInt(baruJumlahGigiKekalDiberiFv) +
        parseInt(semulaJumlahGigiKekalDiberiFv)
    );
  }, [baruJumlahGigiKekalDiberiFv, semulaJumlahGigiKekalDiberiFv]);

  // calculate total diberi PRR
  useEffect(() => {
    setSumDiberiPrr(
      parseInt(baruJumlahGigiKekalDiberiPrrJenis1) +
        parseInt(semulaJumlahGigiKekalDiberiPrrJenis1)
    );
  }, [
    baruJumlahGigiKekalDiberiPrrJenis1,
    semulaJumlahGigiKekalDiberiPrrJenis1,
  ]);

  // idea dapat masa angkat takbir subhanAllah..
  // useEffect(() => {
  //   setTimeout(async () => {
  //     statusRawatan = 'belum selesai';
  //     console.log('save draft called');
  //     try {
  //       await axios.patch(
  //         `/api/v1/sekolah/${personSekolahId}`,
  //         {
  //           createdByUsername: masterForm.createdByUsername,
  //           statusRawatan,
  //         },
  //         { headers: { Authorization: `Bearer ${userToken}` } }
  //       );
  //       console.log('Draft saved');
  //     } catch (error) {
  //       console.log(error.response.data.msg);
  //     }
  //     setSaveDraftState(!saveDraftState);
  //   }, 900000);
  // }, [saveDraftState]);

  const saveDraft = async (e) => {
    e.preventDefault();
    if (sumDMFXDesidus > 20) {
      alert('Jumlah dmfx tidak boleh melebihi 20 !!!!!!!');
      return;
    }
    if (sumDMFXKekal > 32) {
      alert('Jumlah DMFX tidak boleh melebihi 32 !!!!!!!');
      return;
    }
    if (sumClassD > dAdaGigiKekal) {
      alert('Jumlah Class I + Class II D tidak boleh melebihi D !!!!!!!');
      return;
    }
    if (sumClassF > fAdaGigiKekal) {
      alert('Jumlah Class I + Class II F tidak boleh melebihi F !!!!!!!');
      return;
    }
    if (sumPerluFs > 16) {
      alert('Jumlah baru & semula FS tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumPerluFv > 16) {
      alert('Jumlah baru & semula FV tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumPerluPrr > 16) {
      alert('Jumlah baru & semula PRR tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumDibuatFs > 16) {
      alert('Jumlah baru & semula FS tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumDiberiFv > 16) {
      alert('Jumlah baru & semula FV tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumDiberiPrr > 16) {
      alert('Jumlah baru & semula PRR tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    statusRawatan = 'belum selesai';
    try {
      await axios.patch(
        `/api/v1/sekolah/${personSekolahId}`,
        {
          createdByUsername: masterForm.createdByUsername,
          statusRawatan,
          // pendaftaran
          statikBergerak,
          kpBergerak,
          plateNo,
          baruUlanganKedatanganPendaftaran,
          engganKedatanganPendaftaran,
          tidakHadirKedatanganPendaftaran,
          adaTiadaPemeriksaanPendaftaran,
          tinggiRendahRisikoSekolahPendaftaran,
          // pemeriksaan awal div 1
          adaCleftLip,
          rujukCleftLip,
          yaTidakSediaAdaStatusDenture,
          separaPenuhAtasSediaAdaDenture,
          separaPenuhBawahSediaAdaDenture,
          yaTidakPerluStatusDenture,
          separaPenuhAtasPerluDenture,
          separaPenuhBawahPerluDenture,
          toothSurfaceLossTrauma,
          kecederaanGigiAnteriorTrauma,
          tisuLembutTrauma,
          tisuKerasTrauma,
          // pemeriksaan awal div 2
          kebersihanMulutOralHygiene,
          skorBpeOralHygiene,
          saringanKanserMulutOralHygiene,
          skorGisMulutOralHygiene,
          dAdaGigiDesidus,
          mAdaGigiDesidus,
          fAdaGigiDesidus,
          xAdaGigiDesidus,
          dAdaGigiKekal,
          mAdaGigiKekal,
          fAdaGigiKekal,
          eAdaGigiKekal,
          xAdaGigiKekal,
          jumlahFaktorRisiko,
          // pemeriksaan awal div 3
          gicBilanganFsDibuat3TahunLepas,
          resinBilanganFsDibuat3TahunLepas,
          lainLainBilanganFsDibuat3TahunLepas,
          dBilanganFsDibuat3TahunLepasTerjadi,
          mBilanganFsDibuat3TahunLepasTerjadi,
          fBilanganFsDibuat3TahunLepasTerjadi,
          eBilanganFsDibuat3TahunLepasTerjadi,
          xBilanganFsDibuat3TahunLepasTerjadi,
          classID,
          classIID,
          classIF,
          classIIF,
          // perlu dibuat
          baruJumlahGigiKekalPerluFs,
          semulaJumlahGigiKekalPerluFs,
          jumlahGigiFsGagal,
          baruJumlahGigiKekalPerluFv,
          semulaJumlahGigiKekalPerluFv,
          baruJumlahGigiKekalPerluPrrJenis1,
          semulaJumlahGigiKekalPerluPrrJenis1,
          yaTidakSilverDiamineFluoridePerluSapuan,
          baruGDAnteriorSewarnaJumlahTampalanDiperlukan,
          semulaGDAnteriorSewarnaJumlahTampalanDiperlukan,
          baruGKAnteriorSewarnaJumlahTampalanDiperlukan,
          semulaGKAnteriorSewarnaJumlahTampalanDiperlukan,
          baruGDPosteriorSewarnaJumlahTampalanDiperlukan,
          semulaGDPosteriorSewarnaJumlahTampalanDiperlukan,
          baruGKPosteriorSewarnaJumlahTampalanDiperlukan,
          semulaGKPosteriorSewarnaJumlahTampalanDiperlukan,
          baruGDPosteriorAmalgamJumlahTampalanDiperlukan,
          semulaGDPosteriorAmalgamJumlahTampalanDiperlukan,
          baruGKPosteriorAmalgamJumlahTampalanDiperlukan,
          semulaGKPosteriorAmalgamJumlahTampalanDiperlukan,
          // penyata akhir 1
          baruJumlahGigiKekalDibuatFs,
          semulaJumlahGigiKekalDibuatFs,
          baruJumlahGigiKekalDiberiFv,
          semulaJumlahGigiKekalDiberiFv,
          baruJumlahGigiKekalDiberiPrrJenis1,
          semulaJumlahGigiKekalDiberiPrrJenis1,
          baruJumlahGigiYangDiberiSdf,
          semulaJumlahGigiYangDiberiSdf,
          gdBaruAnteriorSewarnaJumlahTampalanDibuat,
          gdSemulaAnteriorSewarnaJumlahTampalanDibuat,
          gkBaruAnteriorSewarnaJumlahTampalanDibuat,
          gkSemulaAnteriorSewarnaJumlahTampalanDibuat,
          gdBaruPosteriorSewarnaJumlahTampalanDibuat,
          gdSemulaPosteriorSewarnaJumlahTampalanDibuat,
          gkBaruPosteriorSewarnaJumlahTampalanDibuat,
          gkSemulaPosteriorSewarnaJumlahTampalanDibuat,
          gdBaruPosteriorAmalgamJumlahTampalanDibuat,
          gdSemulaPosteriorAmalgamJumlahTampalanDibuat,
          gkBaruPosteriorAmalgamJumlahTampalanDibuat,
          gkSemulaPosteriorAmalgamJumlahTampalanDibuat,
          // penyata akhir 2
          cabutDesidusPenyataAkhir2,
          cabutKekalPenyataAkhir2,
          jumlahTampalanSementaraPenyataAkhir2,
          pulpotomiPenyataAkhir2,
          endodontikPenyataAkhir2,
          absesPenyataAkhir2,
          penskaleranPenyataAkhir2,
          kesSelesaiPenyataAkhir2,
          kesSelesaiIcdasPenyataAkhir2,
          rujukPenyataAkhir2,
          ceramahPromosiPenyataAkhir2,
          lmgPromosiPenyataAkhir2,
          yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2,
          plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2,
          dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2,
          penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2,
          kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2,
          // kotak
          statusM,
          jenisR,
          tarikh1,
          tarikh2,
          tarikh3,
          tarikh4,
          adaQ,
          tiadaQ,
          rujukG,
          tarikhQ,
          statusSelepas6Bulan,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );
      alert('Draft saved !');
    } catch (error) {
      alert('Login expired, please login again');
      catchAxiosErrorAndLogout();
      navigate('/');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sumDMFXDesidus > 20) {
      alert('Jumlah dmfx tidak boleh melebihi 20 !!!!!!!');
      return;
    }
    if (sumDMFXKekal > 32) {
      alert('Jumlah DMFX tidak boleh melebihi 32 !!!!!!!');
      return;
    }
    if (sumClassD > dAdaGigiKekal) {
      alert('Jumlah Class I + Class II D tidak boleh melebihi D !!!!!!!');
      return;
    }
    if (sumClassF > fAdaGigiKekal) {
      alert('Jumlah Class I + Class II F tidak boleh melebihi F !!!!!!!');
      return;
    }
    if (sumPerluFs > 16) {
      alert('Jumlah baru & semula FS tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumPerluFv > 16) {
      alert('Jumlah baru & semula FV tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumPerluPrr > 16) {
      alert('Jumlah baru & semula PRR tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumDibuatFs > 16) {
      alert('Jumlah baru & semula FS tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumDiberiFv > 16) {
      alert('Jumlah baru & semula FV tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    if (sumDiberiPrr > 16) {
      alert('Jumlah baru & semula PRR tidak boleh melebihi 16 !!!!!!!');
      return;
    }
    statusRawatan = 'selesai';
    try {
      await axios.patch(
        `/api/v1/sekolah/${personSekolahId}`,
        {
          createdByUsername: masterForm.createdByUsername,
          statusRawatan,
          // pendaftaran
          statikBergerak,
          kpBergerak,
          plateNo,
          baruUlanganKedatanganPendaftaran,
          engganKedatanganPendaftaran,
          tidakHadirKedatanganPendaftaran,
          adaTiadaPemeriksaanPendaftaran,
          tinggiRendahRisikoSekolahPendaftaran,
          // pemeriksaan awal div 1
          adaCleftLip,
          rujukCleftLip,
          yaTidakSediaAdaStatusDenture,
          separaPenuhAtasSediaAdaDenture,
          separaPenuhBawahSediaAdaDenture,
          yaTidakPerluStatusDenture,
          separaPenuhAtasPerluDenture,
          separaPenuhBawahPerluDenture,
          toothSurfaceLossTrauma,
          kecederaanGigiAnteriorTrauma,
          tisuLembutTrauma,
          tisuKerasTrauma,
          // pemeriksaan awal div 2
          kebersihanMulutOralHygiene,
          skorBpeOralHygiene,
          saringanKanserMulutOralHygiene,
          skorGisMulutOralHygiene,
          dAdaGigiDesidus,
          mAdaGigiDesidus,
          fAdaGigiDesidus,
          xAdaGigiDesidus,
          dAdaGigiKekal,
          mAdaGigiKekal,
          fAdaGigiKekal,
          eAdaGigiKekal,
          xAdaGigiKekal,
          jumlahFaktorRisiko,
          // pemeriksaan awal div 3
          gicBilanganFsDibuat3TahunLepas,
          resinBilanganFsDibuat3TahunLepas,
          lainLainBilanganFsDibuat3TahunLepas,
          dBilanganFsDibuat3TahunLepasTerjadi,
          mBilanganFsDibuat3TahunLepasTerjadi,
          fBilanganFsDibuat3TahunLepasTerjadi,
          eBilanganFsDibuat3TahunLepasTerjadi,
          xBilanganFsDibuat3TahunLepasTerjadi,
          classID,
          classIID,
          classIF,
          classIIF,
          // perlu dibuat
          baruJumlahGigiKekalPerluFs,
          semulaJumlahGigiKekalPerluFs,
          jumlahGigiFsGagal,
          baruJumlahGigiKekalPerluFv,
          semulaJumlahGigiKekalPerluFv,
          baruJumlahGigiKekalPerluPrrJenis1,
          semulaJumlahGigiKekalPerluPrrJenis1,
          yaTidakSilverDiamineFluoridePerluSapuan,
          baruGDAnteriorSewarnaJumlahTampalanDiperlukan,
          semulaGDAnteriorSewarnaJumlahTampalanDiperlukan,
          baruGKAnteriorSewarnaJumlahTampalanDiperlukan,
          semulaGKAnteriorSewarnaJumlahTampalanDiperlukan,
          baruGDPosteriorSewarnaJumlahTampalanDiperlukan,
          semulaGDPosteriorSewarnaJumlahTampalanDiperlukan,
          baruGKPosteriorSewarnaJumlahTampalanDiperlukan,
          semulaGKPosteriorSewarnaJumlahTampalanDiperlukan,
          baruGDPosteriorAmalgamJumlahTampalanDiperlukan,
          semulaGDPosteriorAmalgamJumlahTampalanDiperlukan,
          baruGKPosteriorAmalgamJumlahTampalanDiperlukan,
          semulaGKPosteriorAmalgamJumlahTampalanDiperlukan,
          // penyata akhir 1
          baruJumlahGigiKekalDibuatFs,
          semulaJumlahGigiKekalDibuatFs,
          baruJumlahGigiKekalDiberiFv,
          semulaJumlahGigiKekalDiberiFv,
          baruJumlahGigiKekalDiberiPrrJenis1,
          semulaJumlahGigiKekalDiberiPrrJenis1,
          baruJumlahGigiYangDiberiSdf,
          semulaJumlahGigiYangDiberiSdf,
          gdBaruAnteriorSewarnaJumlahTampalanDibuat,
          gdSemulaAnteriorSewarnaJumlahTampalanDibuat,
          gkBaruAnteriorSewarnaJumlahTampalanDibuat,
          gkSemulaAnteriorSewarnaJumlahTampalanDibuat,
          gdBaruPosteriorSewarnaJumlahTampalanDibuat,
          gdSemulaPosteriorSewarnaJumlahTampalanDibuat,
          gkBaruPosteriorSewarnaJumlahTampalanDibuat,
          gkSemulaPosteriorSewarnaJumlahTampalanDibuat,
          gdBaruPosteriorAmalgamJumlahTampalanDibuat,
          gdSemulaPosteriorAmalgamJumlahTampalanDibuat,
          gkBaruPosteriorAmalgamJumlahTampalanDibuat,
          gkSemulaPosteriorAmalgamJumlahTampalanDibuat,
          // penyata akhir 2
          cabutDesidusPenyataAkhir2,
          cabutKekalPenyataAkhir2,
          jumlahTampalanSementaraPenyataAkhir2,
          pulpotomiPenyataAkhir2,
          endodontikPenyataAkhir2,
          absesPenyataAkhir2,
          penskaleranPenyataAkhir2,
          kesSelesaiPenyataAkhir2,
          kesSelesaiIcdasPenyataAkhir2,
          rujukPenyataAkhir2,
          ceramahPromosiPenyataAkhir2,
          lmgPromosiPenyataAkhir2,
          yaTidakMelaksanakanAktivitiBeginPromosiPenyataAkhir2,
          plakGigiNasihatPergigianIndividuPromosiPenyataAkhir2,
          dietPemakananNasihatPergigianIndividuPromosiPenyataAkhir2,
          penjagaanKesihatanMulutNasihatPergigianIndividuPromosiPenyataAkhir2,
          kanserMulutNasihatPergigianIndividuPromosiPenyataAkhir2,
          // kotak
          statusM,
          jenisR,
          tarikh1,
          tarikh2,
          tarikh3,
          tarikh4,
          adaQ,
          tiadaQ,
          rujukG,
          tarikhQ,
          statusSelepas6Bulan,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );
      alert('Update success !');
    } catch (error) {
      alert('Login expired, please login again');
      catchAxiosErrorAndLogout();
      navigate('/');
    }
  };

  const handleNext = () => {
    // do something..
  };

  return (
    <>
      <div className='h-full p-3 px-10 overflow-y-auto'>
        <div className='p-2'>
          <article className='outline outline-1 outline-userBlack grid grid-cols-1 md:grid-cols-2'>
            <div>
              <div className='text-l font-bold flex flex-row pl-5 p-2'>
                <h1>MAKLUMAT AM PESAKIT</h1>
                <FaInfoCircle
                  className='m-1 text-lg'
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                />
              </div>
              {isShown && (
                <div className='z-100 absolute float-right box-border outline outline-1 outline-userBlack left-72 p-5 bg-userWhite '>
                  <div className='flex flex-row text-sm'>
                    <h2 className='font-semibold'>NAMA :</h2>
                    <p className='ml-1'>{singlePersonSekolah.nama}</p>
                  </div>
                  <div className='text-sm flex flex-row '>
                    <h2 className='font-semibold'>NO IC :</h2>
                    <p className='ml-1'>{singlePersonSekolah.ic}</p>
                  </div>
                  <div className='text-sm flex flex-row '>
                    <h2 className='font-semibold'>JANTINA :</h2>
                    <p className='ml-1'>{singlePersonSekolah.jantina}</p>
                  </div>
                  <div className='text-sm flex flex-row '>
                    <h2 className='font-semibold'>TARIKH LAHIR :</h2>
                    <p className='ml-1'>{singlePersonSekolah.tarikhLahir}</p>
                  </div>
                  <div className='text-sm flex flex-row '>
                    <h2 className='font-semibold'>WARGANEGARA :</h2>
                    <p className='ml-1'>{singlePersonSekolah.warganegara}</p>
                  </div>
                  <div className='text-sm flex flex-row '>
                    <h2 className='font-semibold'>BANGSA :</h2>
                    <p className='ml-1'>{singlePersonSekolah.bangsa}</p>
                  </div>
                </div>
              )}
              <div className='text-s flex flex-row pl-5'>
                <h2 className='font-semibold'>NAMA :</h2>
                <p className='ml-1'>{singlePersonSekolah.nama}</p>
              </div>
              <div className='text-s flex flex-row pl-5'>
                <h2 className='font-semibold'>JANTINA :</h2>
                <p className='ml-1'>{singlePersonSekolah.jantina}</p>
              </div>
              <div className='text-s flex flex-row pl-5'>
                <h2 className='font-semibold'>UMUR :</h2>
                <p className='ml-1'>{singlePersonSekolah.umur} tahun</p>
              </div>
            </div>
            <div className='md:pt-10'>
              <div className='text-s flex flex-row pl-5'>
                <h2 className='font-semibold'>NAMA SEKOLAH :</h2>
                <p className='ml-1'>{singlePersonSekolah.namaSekolah}</p>
              </div>
              <div className='text-s flex flex-row pl-5'>
                <h2 className='font-semibold'>KELAS :</h2>
                <p className='ml-1'>{singlePersonSekolah.kelas}</p>
              </div>
              <div className='text-s flex flex-row pl-5'>
                <h2 className='font-semibold'>
                  {(singlePersonSekolah.darjah && 'DARJAH') ||
                    (singlePersonSekolah.tingkatan && 'TINGKATAN')}{' '}
                  :
                </h2>
                <p className='ml-1'>
                  {singlePersonSekolah.darjah || singlePersonSekolah.tingkatan}
                </p>
              </div>
              <button
                onClick={saveDraft}
                className='float-right m-2 p-2 capitalize bg-user3 hover:bg-user1 hover:text-userWhite transition-all'
              >
                simpan draf
              </button>
            </div>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <Pendaftaran {...masterForm} />
          <PemeriksaanAwal {...masterForm} umur={singlePersonSekolah.umur} />
          <PerluDibuat {...masterForm} />
          <PenyataAkhir1 {...masterForm} />
          <PenyataAkhir2 {...masterForm} />
          <Kotak {...masterForm} />
          <div className='grid grid-cols-1 lg:grid-cols-2 col-start-1 md:col-start-2 gap-2 col-span-2 md:col-span-1'>
            <div className='grid grid-cols-3 gap-3 lg:col-start-2'>
              <button className='flex bg-user3 p-2 w-full capitalize justify-center hover:bg-user1 hover:text-userWhite transition-all'>
                kosongkan
              </button>
              <button className='flex bg-user3 p-2 w-full capitalize justify-center hover:bg-user1 hover:text-userWhite transition-all'>
                teruskan
              </button>
              <button
                type='submit'
                className='flex bg-user3 p-2 w-full capitalize justify-center hover:bg-user1 hover:text-userWhite transition-all'
              >
                hantar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserFormSekolah;
