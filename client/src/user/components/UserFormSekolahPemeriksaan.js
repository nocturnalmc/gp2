import { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import { useGlobalUserAppContext } from '../context/userAppContext';

function UserFormSekolahPemeriksaan() {
  const {
    userToken,
    username,
    navigate,
    catchAxiosErrorAndLogout,
    useParams,
    toast,
  } = useGlobalUserAppContext();

  const { personSekolahId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [singlePersonSekolah, setSinglePersonSekolah] = useState([]);

  const createdByUsername = username;
  const [tarikhPemeriksaanSemasa, setTarikhPemeriksaanSemasa] = useState('');
  const [engganKedatanganPendaftaran, setEngganKedatanganPendaftaran] =
    useState(false);
  const [tidakHadirKedatanganPendaftaran, setTidakHadirKedatanganPendaftaran] =
    useState(false);
  const [adaTiadaPemeriksaanPendaftaran, setAdaTiadaPemeriksaanPendaftaran] =
    useState('');
  const [statikBergerak, setStatikBergerak] = useState('');
  const [kpBergerak, setKpBergerak] = useState(false);
  const [plateNo, setPlateNo] = useState('');
  const [
    tinggiRendahRisikoSekolahPendaftaran,
    setTinggiRendahRisikoSekolahPendaftaran,
  ] = useState('');
  const [yaTidakSediaAdaStatusDenture, setYaTidakSediaAdaStatusDenture] =
    useState('');
  const [separaPenuhAtasSediaAdaDenture, setSeparaPenuhAtasSediaAdaDenture] =
    useState('');
  const [separaPenuhBawahSediaAdaDenture, setSeparaPenuhBawahSediaAdaDenture] =
    useState('');
  const [yaTidakPerluStatusDenture, setYaTidakPerluStatusDenture] =
    useState('');
  const [separaPenuhAtasPerluDenture, setSeparaPenuhAtasPerluDenture] =
    useState('');
  const [separaPenuhBawahPerluDenture, setSeparaPenuhBawahPerluDenture] =
    useState('');
  const [statusM, setStatusM] = useState('');
  const [inginMelakukanIntervensiMerokok, setInginMelakukanIntervensiMerokok] =
    useState('');
  const [jenisR, setJenisR] = useState('');
  const [kebersihanMulutOralHygiene, setKebersihanMulutOralHygiene] =
    useState('');
  const [skorBpeOralHygiene, setSkorBpeOralHygiene] = useState('');
  const [saringanKanserMulutOralHygiene, setSaringanKanserMulutOralHygiene] =
    useState(false);
  const [skorGisMulutOralHygiene, setSkorGisMulutOralHygiene] = useState('');
  const [adaDesidus, setAdaDesidus] = useState(false);
  const [dAdaGigiDesidus, setDAdaGigiDesidus] = useState(0);
  const [mAdaGigiDesidus, setMAdaGigiDesidus] = useState(0);
  const [fAdaGigiDesidus, setFAdaGigiDesidus] = useState(0);
  const [xAdaGigiDesidus, setXAdaGigiDesidus] = useState(0);
  const [smAdaGigiDesidus, setSmAdaGigiDesidus] = useState(0);
  const [sumDMFXDesidus, setSumDMFXDesidus] = useState(0);
  const [adaKekal, setAdaKekal] = useState(false);
  const [dAdaGigiKekal, setDAdaGigiKekal] = useState(0);
  const [mAdaGigiKekal, setMAdaGigiKekal] = useState(0);
  const [fAdaGigiKekal, setFAdaGigiKekal] = useState(0);
  const [eAdaGigiKekal, setEAdaGigiKekal] = useState(0);
  const [xAdaGigiKekal, setXAdaGigiKekal] = useState(0);
  const [sumDMFXKekal, setSumDMFXKekal] = useState(0);
  const [jumlahFaktorRisiko, setJumlahFaktorRisiko] = useState('');
  const [adaCleftLip, setAdaCleftLip] = useState(false);
  const [rujukCleftLip, setRujukCleftLip] = useState(false);
  const [toothSurfaceLossTrauma, setToothSurfaceLossTrauma] = useState(false);
  const [kecederaanGigiAnteriorTrauma, setKecederaanGigiAnteriorTrauma] =
    useState(false);
  const [tisuLembutTrauma, setTisuLembutTrauma] = useState(false);
  const [tisuKerasTrauma, setTisuKerasTrauma] = useState(false);
  const [gicBilanganFsDibuat3TahunLepas, setGicBilanganFsDibuat3TahunLepas] =
    useState(0);
  const [
    resinBilanganFsDibuat3TahunLepas,
    setResinBilanganFsDibuat3TahunLepas,
  ] = useState(0);
  const [
    lainLainBilanganFsDibuat3TahunLepas,
    setLainLainBilanganFsDibuat3TahunLepas,
  ] = useState(0);
  const [
    dBilanganFsDibuat3TahunLepasTerjadi,
    setDBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState(0);
  const [
    mBilanganFsDibuat3TahunLepasTerjadi,
    setMBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState(0);
  const [
    fBilanganFsDibuat3TahunLepasTerjadi,
    setFBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState(0);
  const [
    eBilanganFsDibuat3TahunLepasTerjadi,
    setEBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState(0);
  const [
    xBilanganFsDibuat3TahunLepasTerjadi,
    setXBilanganFsDibuat3TahunLepasTerjadi,
  ] = useState(0);
  const [classID, setClassID] = useState(0);
  const [classIID, setClassIID] = useState(0);
  const [sumClassD, setSumClassD] = useState(0);
  const [classIF, setClassIF] = useState(0);
  const [classIIF, setClassIIF] = useState(0);
  const [sumClassF, setSumClassF] = useState(0);
  const [baruJumlahGigiKekalPerluFs, setBaruJumlahGigiKekalPerluFs] =
    useState(0);
  const [semulaJumlahGigiKekalPerluFs, setSemulaJumlahGigiKekalPerluFs] =
    useState(0);
  const [sumPerluFs, setSumPerluFs] = useState(0);
  const [jumlahGigiFsGagal, setJumlahGigiFsGagal] = useState(0);
  const [baruJumlahMuridPerluFs, setBaruJumlahMuridPerluFs] = useState(false);
  const [semulaJumlahMuridPerluFs, setSemulaJumlahMuridPerluFs] = useState(0);
  const [baruJumlahGigiKekalPerluFv, setBaruJumlahGigiKekalPerluFv] =
    useState(0);
  const [semulaJumlahGigiKekalPerluFv, setSemulaJumlahGigiKekalPerluFv] =
    useState(0);
  const [sumPerluFv, setSumPerluFv] = useState(0);
  const [baruJumlahMuridPerluFv, setBaruJumlahMuridPerluFv] = useState(false);
  const [semulaJumlahMuridPerluFv, setSemulaJumlahMuridPerluFv] = useState(0);
  const [
    baruJumlahGigiKekalPerluPrrJenis1,
    setBaruJumlahGigiKekalPerluPrrJenis1,
  ] = useState(0);
  const [
    semulaJumlahGigiKekalPerluPrrJenis1,
    setSemulaJumlahGigiKekalPerluPrrJenis1,
  ] = useState(0);
  const [sumPerluPrr, setSumPerluPrr] = useState(0);
  const [baruJumlahMuridPerluPrrJenis1, setBaruJumlahMuridPerluPrrJenis1] =
    useState(false);
  const [semulaJumlahMuridPerluPrrJenis1, setSemulaJumlahMuridPerluPrrJenis1] =
    useState(0);
  const [
    yaTidakSilverDiamineFluoridePerluSapuan,
    setYaTidakSilverDiamineFluoridePerluSapuan,
  ] = useState('');
  const [
    baruGDAnteriorSewarnaJumlahTampalanDiperlukan,
    setBaruGDAnteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    semulaGDAnteriorSewarnaJumlahTampalanDiperlukan,
    setSemulaGDAnteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    baruGKAnteriorSewarnaJumlahTampalanDiperlukan,
    setBaruGKAnteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    semulaGKAnteriorSewarnaJumlahTampalanDiperlukan,
    setSemulaGKAnteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    baruGDPosteriorSewarnaJumlahTampalanDiperlukan,
    setBaruGDPosteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    semulaGDPosteriorSewarnaJumlahTampalanDiperlukan,
    setSemulaGDPosteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    baruGKPosteriorSewarnaJumlahTampalanDiperlukan,
    setBaruGKPosteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    semulaGKPosteriorSewarnaJumlahTampalanDiperlukan,
    setSemulaGKPosteriorSewarnaJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    baruGDPosteriorAmalgamJumlahTampalanDiperlukan,
    setBaruGDPosteriorAmalgamJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    semulaGDPosteriorAmalgamJumlahTampalanDiperlukan,
    setSemulaGDPosteriorAmalgamJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    baruGKPosteriorAmalgamJumlahTampalanDiperlukan,
    setBaruGKPosteriorAmalgamJumlahTampalanDiperlukan,
  ] = useState(0);
  const [
    semulaGKPosteriorAmalgamJumlahTampalanDiperlukan,
    setSemulaGKPosteriorAmalgamJumlahTampalanDiperlukan,
  ] = useState(0);

  const [showCleftLip, setShowCleftLip] = useState(false);
  const [showTrauma, setShowTrauma] = useState(false);

  // calculate total dmfx desidus
  useEffect(() => {
    setSumDMFXDesidus(
      parseInt(dAdaGigiDesidus) +
        parseInt(mAdaGigiDesidus) +
        parseInt(fAdaGigiDesidus) +
        parseInt(xAdaGigiDesidus) +
        parseInt(smAdaGigiDesidus)
    );
  }, [
    dAdaGigiDesidus,
    mAdaGigiDesidus,
    fAdaGigiDesidus,
    xAdaGigiDesidus,
    smAdaGigiDesidus,
  ]);

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

  //reset value
  useEffect(() => {
    if (statikBergerak === 'klinik-pergigian-statik' || statikBergerak === '') {
      setKpBergerak(false);
      setPlateNo('');
    }
    if (!engganKedatanganPendaftaran) {
      setAdaTiadaPemeriksaanPendaftaran('');
    }
    if (!tidakHadirKedatanganPendaftaran) {
      setAdaTiadaPemeriksaanPendaftaran('');
    }
    if (yaTidakSediaAdaStatusDenture === 'tidak-sedia-ada-status-denture') {
      setSeparaPenuhAtasSediaAdaDenture('');
      setSeparaPenuhBawahSediaAdaDenture('');
    }
    if (yaTidakPerluStatusDenture === 'tidak-perlu-status-denture') {
      setSeparaPenuhAtasPerluDenture('');
      setSeparaPenuhBawahPerluDenture('');
    }
    if (
      statusM === 'perokokPasif' ||
      statusM === 'bekasPerokok' ||
      statusM === 'bukanPerokok' ||
      statusM === ''
    ) {
      setJenisR('');
      setInginMelakukanIntervensiMerokok('');
    }
    if (!adaDesidus) {
      setDAdaGigiDesidus(0);
      setMAdaGigiDesidus(0);
      setFAdaGigiDesidus(0);
      setXAdaGigiDesidus(0);
      setSmAdaGigiDesidus(0);
    }
    if (!adaKekal) {
      setDAdaGigiKekal(0);
      setMAdaGigiKekal(0);
      setFAdaGigiKekal(0);
      setEAdaGigiKekal(0);
      setXAdaGigiKekal(0);
    }
  }, [
    statikBergerak,
    engganKedatanganPendaftaran,
    tidakHadirKedatanganPendaftaran,
    yaTidakSediaAdaStatusDenture,
    yaTidakPerluStatusDenture,
    statusM,
    adaDesidus,
    adaKekal,
  ]);

  return (
    <>
      <div className='h-full p-1 px-10 grid gap-2 pb-2'>
        <article className='outline outline-1 outline-userBlack grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-2'>
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
                <div className='flex flex-row'>
                  <h2 className='font-semibold'>NAMA :</h2>
                  <p className='ml-1'>stone cold</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>NO IC :</h2>
                  <p className='ml-1'>123456121234</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>JANTINA :</h2>
                  <p className='ml-1'>perempuan</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>TARIKH LAHIR :</h2>
                  <p className='ml-1'>2/12/2022</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>WARGANEGARA :</h2>
                  <p className='ml-1'>malaysia</p>
                </div>
                <div className='text-sm flex flex-row '>
                  <h2 className='font-semibold'>BANGSA :</h2>
                  <p className='ml-1'>pan-asia</p>
                </div>
              </div>
            )}
            <div className='flex flex-row pl-5'>
              <h2 className='font-semibold text-xs'>NAMA :</h2>
              <p className='ml-1 text-xs'>stone cold</p>
            </div>
          </div>
          <div className='md:pt-10'>
            <div className='text-s flex flex-row pl-5'>
              <h2 className='font-semibold text-xs'>NAMA SEKOLAH :</h2>
              <p className='ml-1 text-xs'>sk hogwart</p>
            </div>
          </div>
          <div className='lg:pt-10'>
            <div className='text-s flex flex-row pl-5'>
              <h2 className='font-semibold text-xs'>KELAS :</h2>
              <p className='ml-1 text-xs'>2 amal</p>
            </div>
          </div>
        </article>
        <div className='grid h-full overflow-scroll gap-2'>
          <form>
            <span className='flex bg-user3 p-2 w-full capitalize col-span-2'>
              <p className='ml-3 text-xl font-semibold'>Pemeriksaan</p>
            </span>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3 mb-3 w-full col-span-2'>
              <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='flex flex-row items-center pl-5 font-bold col-span-2'>
                  Kedatangan<span className='text-user6'>*</span>
                </h4>
                <div>
                  <p className='flex items-center justify-center text-m font-m'>
                    tarikh:<span className='text-user6'>*</span>
                  </p>
                  <input
                    required
                    type='date'
                    name='tarikh-pemeriksaan'
                    id='tarikh-pemeriksaan'
                    value={tarikhPemeriksaanSemasa}
                    onChange={(e) => {
                      setTarikhPemeriksaanSemasa(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack m-2 text-sm font-m'
                  />
                </div>
                {/* <div className='grid grid-rows-2 col-span-2 lg:col-span-1'>
                  <div className='flex items-center flex-row pl-5 '>
                    <input
                      required
                      type='radio'
                      name='kedatangan'
                      id='baru-kedatangan-pendaftaran'
                      value='baru-kedatangan-pendaftaran'
                      checked={
                        baruUlanganKedatanganPendaftaran ===
                        'baru-kedatangan-pendaftaran'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        setBaruUlanganKedatanganPendaftaran(
                          e.target.value
                        );
                      }}
                      className='w-4 h-4 inline-block text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='baru-kedatangan-pendaftaran'
                      className='m-2 text-sm font-m'
                    >
                      Baru
                    </label>
                  </div>
                  <div className='flex items-center flex-row pl-5'>
                    <input
                      required
                      type='radio'
                      name='kedatangan'
                      id='ulangan-kedatangan-pendaftaran'
                      value='ulangan-kedatangan-pendaftaran'
                      checked={
                        baruUlanganKedatanganPendaftaran ===
                        'ulangan-kedatangan-pendaftaran'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        setBaruUlanganKedatanganPendaftaran(
                          e.target.value
                        );
                      }}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='ulangan-kedatangan-pendaftaran'
                      className='m-2 text-sm font-m'
                    >
                      Ulangan
                    </label>
                  </div>
                </div> */}
                <div className='grid grid-rows-2'>
                  <div className='flex items-center flex-row pl-5'>
                    <input
                      type='checkbox'
                      name='enggan-kedatangan'
                      id='enggan-kedatangan'
                      checked={engganKedatanganPendaftaran}
                      onChange={() => {
                        setEngganKedatanganPendaftaran(
                          !engganKedatanganPendaftaran
                        );
                      }}
                      className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                    />
                    <label
                      htmlFor='enggan-kedatangan'
                      className='m-2 text-sm font-m'
                    >
                      Enggan
                    </label>
                  </div>
                  <div className='flex items-center flex-row pl-5'>
                    <input
                      type='checkbox'
                      name='tidak-hadir-kedatangan'
                      id='tidak-hadir-kedatangan'
                      checked={tidakHadirKedatanganPendaftaran}
                      onChange={() => {
                        setTidakHadirKedatanganPendaftaran(
                          !tidakHadirKedatanganPendaftaran
                        );
                      }}
                      className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                    />
                    <label
                      htmlFor='tidak-hadir-kedatangan'
                      className='m-2 text-sm font-m'
                    >
                      Tidak Hadir
                    </label>
                  </div>
                </div>
                <div
                  className={`${
                    engganKedatanganPendaftaran ||
                    tidakHadirKedatanganPendaftaran ||
                    'hidden'
                  } outline outline-1 outline-userBlack grid grid-rows-3 col-start-2`}
                >
                  <h4 className=' font-bold flex items-center flex-row px-2 text-clip'>
                    Pemeriksaan<span className='text-user6'>*</span>
                  </h4>
                  <div className='flex items-center flex-row px-2'>
                    <input
                      required={
                        engganKedatanganPendaftaran ||
                        tidakHadirKedatanganPendaftaran
                          ? true
                          : false
                      }
                      type='radio'
                      name='pemeriksaan'
                      id='ada-pemeriksaan'
                      value='ada-pemeriksaan'
                      checked={
                        adaTiadaPemeriksaanPendaftaran === 'ada-pemeriksaan'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        setAdaTiadaPemeriksaanPendaftaran(e.target.value);
                      }}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='ada-pemeriksaan'
                      className='m-2 text-sm font-m'
                    >
                      Ada
                    </label>
                  </div>
                  <div className='flex items-center flex-row px-2'>
                    <input
                      required={
                        engganKedatanganPendaftaran ||
                        tidakHadirKedatanganPendaftaran
                          ? true
                          : false
                      }
                      type='radio'
                      name='pemeriksaan'
                      id='tiada-pemeriksaan'
                      value='tiada-pemeriksaan'
                      checked={
                        adaTiadaPemeriksaanPendaftaran === 'tiada-pemeriksaan'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        setAdaTiadaPemeriksaanPendaftaran(e.target.value);
                      }}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='tiada-pemeriksaan'
                      className='m-2 text-sm font-m'
                    >
                      Tiada
                    </label>
                  </div>
                </div>
              </article>
              <article className='grid grid-cols-2 gap-2 auto-rows-min border border-userBlack pl-3 p-2 rounded-md'>
                <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                  Penyampaian Perkhidmatan Sekolah
                </h4>
                <div className='flex flex-row items-center pl-5 col-span-2'>
                  <select
                    required
                    name='statik-bergerak'
                    id='statik-bergerak'
                    value={statikBergerak}
                    onChange={(e) => {
                      setStatikBergerak(e.target.value);
                    }}
                  >
                    <option value=''>Sila pilih</option>
                    <option value='klinik-pergigian-statik'>
                      Klinik Pergigian Statik
                    </option>
                    <option value='pasukan-pergigian-bergerak'>
                      Pasukan Pergigian Bergerak
                    </option>
                  </select>
                  <span className='text-user6'>*</span>
                </div>
                <div
                  className={`${
                    statikBergerak === 'pasukan-pergigian-bergerak'
                      ? 'visible'
                      : 'hidden'
                  } flex flex-row items-center pl-5`}
                >
                  <input
                    type='checkbox'
                    name='kp-bergerak'
                    id='kp-bergerak'
                    checked={kpBergerak}
                    onChange={() => {
                      setKpBergerak(!kpBergerak);
                    }}
                    className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                  />
                  <label htmlFor='kp-bergerak' className='ml-2 text-sm font-m'>
                    KP Bergerak
                  </label>
                </div>
                <div
                  className={`${
                    !kpBergerak && 'hidden'
                  } flex flex-row items-center pl-5`}
                >
                  <select
                    required={kpBergerak && true}
                    name='plate-no'
                    id='plate-no'
                    value={plateNo}
                    onChange={(e) => {
                      setPlateNo(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-auto text-sm font-m'
                  >
                    <option value=''>Plate No</option>
                    <option value='1'>1</option>
                  </select>
                  {kpBergerak && <span className='text-user6'>*</span>}
                </div>
              </article>
              <article className='grid grid-cols-2 border border-userBlack pl-5 rounded-md'>
                <h4 className='font-bold flex flex-row items-center pl-5 col-span-2'>
                  Risiko Sekolah (PERSiS)<span className='text-user6'>*</span>
                </h4>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    required
                    type='radio'
                    name='risiko-sekolah'
                    id='tinggi-risiko-sekolah'
                    value='tinggi-risiko-sekolah'
                    checked={
                      tinggiRendahRisikoSekolahPendaftaran ===
                      'tinggi-risiko-sekolah'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      setTinggiRendahRisikoSekolahPendaftaran(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='tinggi-risiko-sekolah'
                    className='m-2 text-sm font-m'
                  >
                    Tinggi
                  </label>
                </div>
                <div className='flex items-center flex-row pl-5'>
                  <input
                    required
                    type='radio'
                    name='risiko-sekolah'
                    id='rendah-risiko-sekolah'
                    value='rendah-risiko-sekolah'
                    checked={
                      tinggiRendahRisikoSekolahPendaftaran ===
                      'rendah-risiko-sekolah'
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      setTinggiRendahRisikoSekolahPendaftaran(e.target.value);
                    }}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='rendah-risiko-sekolah'
                    className='m-2 text-sm font-m'
                  >
                    Rendah
                  </label>
                </div>
              </article>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 mt-3 mb-3 w-full col-span-2 '>
              <div className='grid gap-2 '>
                <article className='row-span-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5'>
                    Status denture
                  </h4>
                  <div className='grid grid-rows-2 gap-2 auto-rows-min'>
                    <article className='grid grid-cols-2 auto-rows-min border border-userBlack pl-3 p-2 rounded-md'>
                      <h4 className='font-semibold'>
                        Sedia Ada?<span className='text-user6'>*</span>
                      </h4>
                      <div className='flex items-center justify-center'>
                        <input
                          required
                          type='radio'
                          name='sedia-ada-status-denture'
                          id='ya-sedia-ada-status-denture'
                          value='ya-sedia-ada-status-denture'
                          checked={
                            yaTidakSediaAdaStatusDenture ===
                            'ya-sedia-ada-status-denture'
                              ? true
                              : false
                          }
                          onChange={(e) => {
                            setYaTidakSediaAdaStatusDenture(e.target.value);
                          }}
                          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                        />
                        <label
                          htmlFor='ya-sedia-ada-status-denture'
                          className='m-2 text-sm font-m'
                        >
                          Ya
                        </label>
                        <input
                          required
                          type='radio'
                          name='sedia-ada-status-denture'
                          id='tidak-sedia-ada-status-denture'
                          value='tidak-sedia-ada-status-denture'
                          checked={
                            yaTidakSediaAdaStatusDenture ===
                            'tidak-sedia-ada-status-denture'
                              ? true
                              : false
                          }
                          onChange={(e) => {
                            setYaTidakSediaAdaStatusDenture(e.target.value);
                          }}
                          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                        />
                        <label
                          htmlFor='tidak-sedia-ada-status-denture'
                          className='m-2 text-sm font-m'
                        >
                          Tidak
                        </label>
                      </div>
                      {yaTidakSediaAdaStatusDenture ===
                        'ya-sedia-ada-status-denture' && (
                        <div className='flex items-center flex-row pl-5'>
                          <label
                            htmlFor='atas-sedia-ada-denture'
                            className='m-2 text-sm font-m'
                          >
                            Atas
                          </label>
                        </div>
                      )}
                      {yaTidakSediaAdaStatusDenture ===
                        'ya-sedia-ada-status-denture' && (
                        <div className='grid grid-cols-2'>
                          <div className='flex items-center justify-center'>
                            <input
                              type='radio'
                              name='separa-penuh-atas-sedia-ada-denture'
                              id='separa-atas-sedia-ada-denture'
                              value='separa-atas-sedia-ada-denture'
                              checked={
                                separaPenuhAtasSediaAdaDenture ===
                                'separa-atas-sedia-ada-denture'
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                setSeparaPenuhAtasSediaAdaDenture(
                                  e.target.value
                                );
                              }}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                            />
                            <label
                              htmlFor='separa-atas-sedia-ada-denture'
                              className='m-2 text-sm font-m'
                            >
                              Separa
                            </label>
                          </div>
                          <div className='flex items-center justify-center'>
                            <input
                              type='radio'
                              name='separa-penuh-atas-sedia-ada-denture'
                              id='penuh-atas-sedia-ada-denture'
                              value='penuh-atas-sedia-ada-denture'
                              checked={
                                separaPenuhAtasSediaAdaDenture ===
                                'penuh-atas-sedia-ada-denture'
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                setSeparaPenuhAtasSediaAdaDenture(
                                  e.target.value
                                );
                              }}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                            />
                            <label
                              htmlFor='penuh-atas-sedia-ada-denture'
                              className='m-2 text-sm font-m'
                            >
                              Penuh
                            </label>
                          </div>
                        </div>
                      )}
                      {yaTidakSediaAdaStatusDenture ===
                        'ya-sedia-ada-status-denture' && (
                        <div className='flex items-center flex-row pl-5'>
                          <label
                            htmlFor='bawah-sedia-ada-denture'
                            className='m-2 text-sm font-m'
                          >
                            Bawah
                          </label>
                        </div>
                      )}
                      {yaTidakSediaAdaStatusDenture ===
                        'ya-sedia-ada-status-denture' && (
                        <div className='grid grid-cols-2'>
                          <div className='flex items-center justify-center'>
                            <input
                              type='radio'
                              name='separa-penuh-bawah-sedia-ada-denture'
                              id='separa-bawah-sedia-ada-denture'
                              value='separa-bawah-sedia-ada-denture'
                              checked={
                                separaPenuhBawahSediaAdaDenture ===
                                'separa-bawah-sedia-ada-denture'
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                setSeparaPenuhBawahSediaAdaDenture(
                                  e.target.value
                                );
                              }}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                            />
                            <label
                              htmlFor='separa-bawah-sedia-ada-denture'
                              className='m-2 text-sm font-m'
                            >
                              Separa
                            </label>
                          </div>
                          <div className='flex items-center justify-center'>
                            <input
                              type='radio'
                              name='separa-penuh-bawah-sedia-ada-denture'
                              id='penuh-bawah-sedia-ada-denture'
                              value='penuh-bawah-sedia-ada-denture'
                              checked={
                                separaPenuhBawahSediaAdaDenture ===
                                'penuh-bawah-sedia-ada-denture'
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                setSeparaPenuhBawahSediaAdaDenture(
                                  e.target.value
                                );
                              }}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                            />
                            <label
                              htmlFor='penuh-bawah-sedia-ada-denture'
                              className='m-2 text-sm font-m'
                            >
                              Penuh
                            </label>
                          </div>
                        </div>
                      )}
                    </article>
                    <article className='grid grid-cols-2 auto-rows-min border border-userBlack pl-3 p-2 rounded-md'>
                      <h4 className='font-semibold'>
                        Perlu<span className='text-user6'>*</span>
                      </h4>
                      <div className='flex items-center justify-center'>
                        <input
                          required
                          type='radio'
                          name='perlu-status-denture'
                          id='ya-perlu-status-denture'
                          value='ya-perlu-status-denture'
                          checked={
                            yaTidakPerluStatusDenture ===
                            'ya-perlu-status-denture'
                              ? true
                              : false
                          }
                          onChange={(e) => {
                            setYaTidakPerluStatusDenture(e.target.value);
                          }}
                          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                        />
                        <label
                          htmlFor='ya-perlu-status-denture'
                          className='m-2 text-sm font-m'
                        >
                          Ya
                        </label>
                        <input
                          required
                          type='radio'
                          name='perlu-status-denture'
                          id='tidak-perlu-status-denture'
                          value='tidak-perlu-status-denture'
                          checked={
                            yaTidakPerluStatusDenture ===
                            'tidak-perlu-status-denture'
                              ? true
                              : false
                          }
                          onChange={(e) => {
                            setYaTidakPerluStatusDenture(e.target.value);
                          }}
                          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                        />
                        <label
                          htmlFor='tidak-perlu-status-denture'
                          className='m-2 text-sm font-m'
                        >
                          Tidak
                        </label>
                      </div>
                      {yaTidakPerluStatusDenture ===
                        'ya-perlu-status-denture' && (
                        <div className='flex items-center flex-row pl-5'>
                          <label
                            htmlFor='atas-perlu-denture'
                            className='m-2 text-sm font-m'
                          >
                            Atas
                          </label>
                        </div>
                      )}
                      {yaTidakPerluStatusDenture ===
                        'ya-perlu-status-denture' && (
                        <div className='grid grid-cols-2'>
                          <div className='flex items-center justify-center'>
                            <input
                              type='radio'
                              name='separa-penuh-atas-perlu-denture'
                              id='separa-atas-perlu-denture'
                              value='separa-atas-perlu-denture'
                              checked={
                                separaPenuhAtasPerluDenture ===
                                'separa-atas-perlu-denture'
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                setSeparaPenuhAtasPerluDenture(e.target.value);
                              }}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                            />
                            <label
                              htmlFor='separa-atas-perlu-denture'
                              className='m-2 text-sm font-m'
                            >
                              Separa
                            </label>
                          </div>
                          <div className='flex items-center justify-center'>
                            <input
                              type='radio'
                              name='separa-penuh-atas-perlu-denture'
                              id='penuh-atas-perlu-denture'
                              value='penuh-atas-perlu-denture'
                              checked={
                                separaPenuhAtasPerluDenture ===
                                'penuh-atas-perlu-denture'
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                setSeparaPenuhAtasPerluDenture(e.target.value);
                              }}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                            />
                            <label
                              htmlFor='penuh-atas-perlu-denture'
                              className='m-2 text-sm font-m'
                            >
                              Penuh
                            </label>
                          </div>
                        </div>
                      )}
                      {yaTidakPerluStatusDenture ===
                        'ya-perlu-status-denture' && (
                        <div className='flex items-center flex-row pl-5'>
                          <label
                            htmlFor='bawah-perlu-denture'
                            className='m-2 text-sm font-m'
                          >
                            Bawah
                          </label>
                        </div>
                      )}
                      {yaTidakPerluStatusDenture ===
                        'ya-perlu-status-denture' && (
                        <div className='grid grid-cols-2'>
                          <div className='flex items-center justify-center'>
                            <input
                              type='radio'
                              name='separa-penuh-bawah-perlu-denture'
                              id='separa-bawah-perlu-denture'
                              value='separa-bawah-perlu-denture'
                              checked={
                                separaPenuhBawahPerluDenture ===
                                'separa-bawah-perlu-denture'
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                setSeparaPenuhBawahPerluDenture(e.target.value);
                              }}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                            />
                            <label
                              htmlFor='separa-bawah-perlu-denture'
                              className='m-2 text-sm font-m'
                            >
                              Separa
                            </label>
                          </div>
                          <div className='flex items-center justify-center'>
                            <input
                              type='radio'
                              name='separa-penuh-bawah-perlu-denture'
                              id='penuh-bawah-perlu-denture'
                              value='penuh-bawah-perlu-denture'
                              checked={
                                separaPenuhBawahPerluDenture ===
                                'penuh-bawah-perlu-denture'
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                setSeparaPenuhBawahPerluDenture(e.target.value);
                              }}
                              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                            />
                            <label
                              htmlFor='penuh-bawah-perlu-denture'
                              className='m-2 text-sm font-m'
                            >
                              Penuh
                            </label>
                          </div>
                        </div>
                      )}
                    </article>
                  </div>
                </article>
                <article className='grid grid-cols-2 auto-rows-min gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    status merokok<span className='text-user6'>*</span>
                  </h4>
                  <select
                    required
                    name='statusM'
                    id='statusM'
                    value={statusM}
                    onChange={(e) => {
                      setStatusM(e.target.value);
                    }}
                    className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                  >
                    <option value=''></option>
                    <option value='perokokSemasa'>Perokok Semasa</option>
                    <option value='bekasPerokok'>Bekas Perokok</option>
                    <option value='perokokPasif'>Perokok Pasif</option>
                    <option value='bukanPerokok'>Bukan Perokok</option>
                  </select>
                  <article
                    className={`${
                      statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                    } grid grid-cols-2 col-span-2 `}
                  >
                    <h4 className='font-semibold text-base flex flex-row pl-5 col-span-2'>
                      jenis rokok<span className='text-user6'>*</span>
                    </h4>
                    <select
                      required={statusM == 'perokokSemasa' ? true : false}
                      name='jenisR'
                      id='jenisR'
                      value={jenisR}
                      onChange={(e) => {
                        setJenisR(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                    >
                      <option value=''></option>
                      <option value='rokokB'>Rokok Biasa</option>
                      <option value='elektronik'>Elektronik</option>
                      <option value='shisha'>Shisha</option>
                      <option value='lain2'>Lain-lain</option>
                    </select>
                  </article>
                  <div
                    className={`${
                      statusM == 'perokokSemasa' ? 'visible' : 'hidden'
                    } col-span-2`}
                  >
                    <p className='flex items-center justify-center pl-5 text-sm font-m col-span-2'>
                      ingin melakukan intervensi merokok?
                    </p>
                    <div className='flex items-center justify-center'>
                      <input
                        required={statusM == 'perokokSemasa' ? true : false}
                        type='radio'
                        name='ingin-melakukan-intervensi-merokok'
                        id='ya-ingin-melakukan-intervensi-merokok'
                        value='ya-ingin-melakukan-intervensi-merokok'
                        checked={
                          inginMelakukanIntervensiMerokok ===
                          'ya-ingin-melakukan-intervensi-merokok'
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          setInginMelakukanIntervensiMerokok(e.target.value);
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='ya-ingin-melakukan-intervensi-merokok'
                        className='m-2 text-sm font-m'
                      >
                        Ya
                      </label>
                      <input
                        required={statusM == 'perokokSemasa' ? true : false}
                        type='radio'
                        name='ingin-melakukan-intervensi-merokok'
                        id='tidak-ingin-melakukan-intervensi-merokok'
                        value='tidak-ingin-melakukan-intervensi-merokok'
                        checked={
                          inginMelakukanIntervensiMerokok ===
                          'tidak-ingin-melakukan-intervensi-merokok'
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          setInginMelakukanIntervensiMerokok(e.target.value);
                        }}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                      />
                      <label
                        htmlFor='tidak-ingin-melakukan-intervensi-merokok'
                        className='m-2 text-sm font-m'
                      >
                        Tidak
                      </label>
                    </div>
                  </div>
                </article>
              </div>
              <div className='grid gap-2 auto-rows-min'>
                <article className='grid grid-cols-1 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5'>Oral Hygiene</h4>
                  <div className='flex items-center '>
                    <p className='flex flex-row pl-5 text-sm font-m'>
                      Kebersihan Mulut<span className='text-user6'>*</span>
                    </p>
                    <select
                      required
                      name='kebersihan-mulut'
                      id='kebersihan-mulut'
                      value={kebersihanMulutOralHygiene}
                      onChange={(e) => {
                        setKebersihanMulutOralHygiene(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    >
                      <option value=''></option>
                      <option value='A'>A</option>
                      <option value='C'>C</option>
                      <option value='E'>E</option>
                    </select>
                  </div>
                  <div
                    className='flex items-center flex-row pl-5'
                    // className={`${
                    //   umur < 15 && 'hidden'
                    // } flex items-center flex-row pl-5`}
                  >
                    <p className='text-sm font-m'>
                      Skor BPE<span className='text-user6'>*</span>
                    </p>
                    <select
                      // required={umur < 15 ? false : true}
                      name='skor-bpe'
                      id='skor-bpe'
                      value={skorBpeOralHygiene}
                      onChange={(e) => {
                        setSkorBpeOralHygiene(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                    >
                      <option value=''></option>
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                    </select>
                  </div>
                  <div
                    className='flex items-center flex-row pl-5'
                    // className={`${
                    //   umur < 15 && 'hidden'
                    // } flex items-center flex-row pl-5`}
                  >
                    <label
                      htmlFor='saringan-kanser-mulut'
                      className='text-sm font-m'
                    >
                      Saringan Kanser Mulut
                    </label>
                    <input
                      type='checkbox'
                      name='saringan-kanser-mulut'
                      id='saringan-kanser-mulut'
                      checked={saringanKanserMulutOralHygiene}
                      onChange={() => {
                        setSaringanKanserMulutOralHygiene(
                          !saringanKanserMulutOralHygiene
                        );
                      }}
                      className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 m-2'
                    />
                  </div>
                  <div className='flex items-center flex-row pl-5'>
                    <p className='flex text-sm font-m'>
                      Skor GIS<span className='text-user6'>*</span>
                    </p>
                    <select
                      required
                      name='skor-gis'
                      id='skor-gis'
                      value={skorGisMulutOralHygiene}
                      onChange={(e) => {
                        setSkorGisMulutOralHygiene(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-30 m-3 text-sm font-m'
                    >
                      <option value=''></option>
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                    </select>
                  </div>
                </article>
                <article className=' border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5'>
                    Status Gigi Desidus<span className='text-user6'>*</span>
                  </h4>
                  <div className='grid gap-1'>
                    <div className='flex items-center justify-center'>
                      <input
                        type='checkbox'
                        name='ada-desidus'
                        id='ada-desidus'
                        checked={adaDesidus}
                        onChange={() => {
                          setAdaDesidus(!adaDesidus);
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                      <label
                        htmlFor='ada-desidus'
                        className='m-2 text-sm font-m'
                      >
                        ada gigi desidus
                      </label>
                    </div>
                    {/* <div className='flex items-center flex-row pl-5 col-span-2'>
                    <span
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m bg-user1 text-userWhite hover:cursor-pointer'
                      onClick={(e) =>
                        !statusGigiDecidus
                          ? setStatusGigiDecidus(true)
                          : setStatusGigiDecidus(false)
                      }
                    >
                      {statusGigiDecidus ? 'Ada' : 'Tiada'}
                    </span>
                    <p className='text-xs font-m whitespace-normal'>
                      {statusGigiDecidus
                        ? 'Klik sekali lagi jika tiada data'
                        : 'Klik butang jika ada gigi desidus'}
                    </p>
                  </div> */}
                    <div
                      className={`${!adaDesidus && 'hidden'} grid grid-cols-2`}
                    >
                      <div className='flex flex-row items-center pl-5'>
                        <p className='text-sm font-m lowercase'>d: </p>
                        <span className='text-user6'>*</span>
                        <input
                          required
                          min='0'
                          max='20'
                          type='number'
                          name='d-ada-status-gigi-desidus'
                          id='d-ada-status-gigi-desidus'
                          value={dAdaGigiDesidus}
                          onChange={(e) => {
                            setDAdaGigiDesidus(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <p className='text-sm font-m lowercase'>m: </p>
                        <span className='text-user6'>*</span>
                        <input
                          required
                          min='0'
                          max='20'
                          type='number'
                          name='m-ada-status-gigi-desidus'
                          id='m-ada-status-gigi-desidus'
                          value={mAdaGigiDesidus}
                          onChange={(e) => {
                            setMAdaGigiDesidus(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <p className='text-sm font-m lowercase'>f: </p>
                        <span className='text-user6'>*</span>
                        <input
                          required
                          min='0'
                          max='20'
                          type='number'
                          name='f-ada-status-gigi-desidus'
                          id='f-ada-status-gigi-desidus'
                          value={fAdaGigiDesidus}
                          onChange={(e) => {
                            setFAdaGigiDesidus(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <p className='text-sm font-m lowercase'>x: </p>
                        <span className='text-user6'>*</span>
                        <input
                          required
                          min='0'
                          max='20'
                          type='number'
                          name='x-ada-status-gigi-desidus'
                          id='x-ada-status-gigi-desidus'
                          value={xAdaGigiDesidus}
                          onChange={(e) => {
                            setXAdaGigiDesidus(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <p className='text-sm font-m'>SM: </p>
                        <input
                          min='0'
                          max='20'
                          type='number'
                          name='sm-ada-status-gigi-desidus'
                          id='sm-ada-status-gigi-desidus'
                          value={smAdaGigiDesidus}
                          onChange={(e) => {
                            setSmAdaGigiDesidus(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                    </div>
                  </div>
                  {sumDMFXDesidus > 20 && (
                    <p className='text-user6 font-semibold'>
                      jumlah <span className='lowercase'>dmfx</span> dan SM
                      tidak boleh melebihi 20
                    </p>
                  )}
                </article>
                <article className='border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5'>
                    Status Gigi Kekal
                    <span className='text-user6 text-xl'>*</span>
                  </h4>
                  <div className='grid grid-cols-1'>
                    <div className='flex items-center justify-center peer-active:bg-user3'>
                      <input
                        type='checkbox'
                        name='ada-kekal'
                        id='ada-kekal'
                        checked={adaKekal}
                        onChange={() => {
                          setAdaKekal(!adaKekal);
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2'
                      />
                      <label htmlFor='ada-kekal' className='m-2 text-sm font-m'>
                        ada gigi kekal
                      </label>
                    </div>
                    {/* <div className='flex items-center flex-row pl-5 col-span-2'>
                    <span
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m bg-user1 text-userWhite hover:cursor-pointer'
                      onClick={(e) =>
                        !statusGigiKekal
                          ? setStatusGigiKekal(true)
                          : setStatusGigiKekal(false)
                      }
                    >
                      {statusGigiKekal ? 'Ada' : 'Tiada'}
                    </span>
                    <p className='text-xs font-m whitespace-normal'>
                      {statusGigiKekal
                        ? 'Klik sekali lagi jika tiada data'
                        : 'Klik butang jika ada gigi kekal'}
                    </p>
                  </div> */}
                    <div
                      className={`${
                        !adaKekal && 'hidden'
                      } grid grid-cols-2 gap-2`}
                    >
                      <div className='flex flex-row items-center  pl-5'>
                        <p className='text-sm font-m '>D: </p>
                        <span className='text-user6'>*</span>
                        <input
                          required
                          min='0'
                          max='32'
                          type='number'
                          name='d-ada-status-gigi-kekal'
                          id='d-ada-status-gigi-kekal'
                          value={dAdaGigiKekal}
                          onChange={(e) => {
                            setDAdaGigiKekal(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <p className='text-sm font-m '>M: </p>
                        <span className='text-user6'>*</span>
                        <input
                          required
                          min='0'
                          max='32'
                          type='number'
                          name='m-ada-status-gigi-kekal'
                          id='m-ada-status-gigi-kekal'
                          value={mAdaGigiKekal}
                          onChange={(e) => {
                            setMAdaGigiKekal(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <p className='text-sm font-m '>F: </p>
                        <span className='text-user6'>*</span>
                        <input
                          required
                          min='0'
                          max='32'
                          type='number'
                          name='f-ada-status-gigi-kekal'
                          id='f-ada-status-gigi-kekal'
                          value={fAdaGigiKekal}
                          onChange={(e) => {
                            setFAdaGigiKekal(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <p className='text-sm font-m '>E: </p>
                        <span className='text-user6'>*</span>
                        <input
                          required
                          min='0'
                          max='32'
                          type='number'
                          name='e-ada-status-gigi-kekal'
                          id='e-ada-status-gigi-kekal'
                          value={eAdaGigiKekal}
                          onChange={(e) => {
                            setEAdaGigiKekal(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <p className='text-sm font-m '>X: </p>
                        <span className='text-user6'>*</span>
                        <input
                          required
                          min='0'
                          max='32'
                          type='number'
                          name='x-ada-status-gigi-kekal'
                          id='x-ada-status-gigi-kekal'
                          value={xAdaGigiKekal}
                          onChange={(e) => {
                            setXAdaGigiKekal(e.target.value);
                          }}
                          className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                        />
                      </div>
                    </div>
                  </div>
                  {sumDMFXKekal > 32 && (
                    <p className='text-user6 font-semibold'>
                      jumlah DMFX tidak boleh melebihi 32
                    </p>
                  )}
                </article>
                <article className='border border-userBlack pl-3 p-2 rounded-md'>
                  <div className='grid grid-cols-1'>
                    <h4 className='font-bold flex flex-row pl-5'>
                      Risiko Karies
                    </h4>
                    <div className='flex flex-row'>
                      <p className='flex items-center flex-row pl-5'>
                        Jumlah Faktor Risiko:
                      </p>
                      <select
                        name='jumlah-faktor-risiko'
                        id='jumlah-faktor-risiko'
                        value={jumlahFaktorRisiko}
                        onChange={(e) => {
                          setJumlahFaktorRisiko(e.target.value);
                        }}
                        className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                      >
                        <option value=''></option>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                      </select>
                    </div>
                  </div>
                </article>
              </div>
              <div className='grid grid-cols-2 2xl:grid-cols-1 gap-2 auto-rows-min col-span-2 2xl:col-span-1'>
                <article className='grid grid-cols-2 auto-rows-min border border-userBlack pl-3 p-2 rounded-md '>
                  <h4
                    className='font-bold flex flex-row pl-5 col-span-2 hover:cursor-pointer'
                    onClick={() => setShowCleftLip(!showCleftLip)}
                  >
                    Cleft Lip/Palate
                  </h4>
                  <div
                    className={`grid grid-cols-2 transition-all ${
                      showCleftLip
                        ? 'max-h-min overflow-y-auto'
                        : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <div className='flex flex-row items-center pl-5 pt-1'>
                      <input
                        type='checkbox'
                        name='ada-cleft-lip'
                        id='ada-cleft-lip'
                        checked={adaCleftLip}
                        onChange={() => {
                          setAdaCleftLip(!adaCleftLip);
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500'
                      />
                      <label
                        htmlFor='ada-cleft-lip'
                        className='mx-2 text-sm font-m'
                      >
                        Ada
                      </label>
                    </div>
                    <div className='flex flex-row items-center pl-5 pt-1'>
                      <input
                        type='checkbox'
                        name='rujuk-cleft-lip-palate'
                        id='rujuk-cleft-lip-palate'
                        checked={rujukCleftLip}
                        onChange={() => {
                          setRujukCleftLip(!rujukCleftLip);
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                      <label
                        htmlFor='rujuk-cleft-lip-palate'
                        className='mx-2 text-sm font-m'
                      >
                        Rujuk
                      </label>
                    </div>
                  </div>
                </article>
                <article className='grid grid-cols-1 xl:grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4
                    className='font-bold flex flex-row pl-5 col-span-1 xl:col-span-2 hover:cursor-pointer'
                    onClick={() => {
                      setShowTrauma(!showTrauma);
                    }}
                  >
                    Trauma
                  </h4>
                  <div
                    className={`grid grid-cols-1 xl:grid-cols-2 col-span-1 xl:col-span-2 transition-all ${
                      showTrauma
                        ? 'max-h-min overflow-y-auto'
                        : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <div className='flex items-center flex-row pl-5'>
                      <input
                        type='checkbox'
                        name='tooth-surface-loss'
                        id='tooth-surface-loss'
                        checked={toothSurfaceLossTrauma}
                        onChange={() => {
                          setToothSurfaceLossTrauma(!toothSurfaceLossTrauma);
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                      <label
                        htmlFor='tooth-surface-loss'
                        className='m-2 text-sm font-m'
                      >
                        Tooth Surface Loss
                      </label>
                    </div>
                    <div className='flex items-center flex-row pl-5'>
                      <input
                        type='checkbox'
                        name='kecederaan-gigi-anterior'
                        id='kecederaan-gigi-anterior'
                        checked={kecederaanGigiAnteriorTrauma}
                        onChange={() => {
                          setKecederaanGigiAnteriorTrauma(
                            !kecederaanGigiAnteriorTrauma
                          );
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                      <label
                        htmlFor='kecederaan-gigi-anterior'
                        className='m-2 text-sm font-m'
                      >
                        Kecederaan Gigi Anterior
                      </label>
                    </div>
                    <div className='flex items-center flex-row pl-5'>
                      <input
                        type='checkbox'
                        name='tisu-lembut'
                        id='tisu-lembut'
                        checked={tisuLembutTrauma}
                        onChange={() => {
                          setTisuLembutTrauma(!tisuLembutTrauma);
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                      <label
                        htmlFor='tisu-lembut'
                        className='m-2 text-sm font-m'
                      >
                        Tisu Lembut
                      </label>
                    </div>
                    <div className='flex items-center flex-row pl-5'>
                      <input
                        type='checkbox'
                        name='tisu-keras'
                        id='tisu-keras'
                        checked={tisuKerasTrauma}
                        onChange={() => {
                          setTisuKerasTrauma(!tisuKerasTrauma);
                        }}
                        className='w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2 '
                      />
                      <label
                        htmlFor='tisu-keras'
                        className='m-2 text-sm font-m'
                      >
                        Tisu Keras
                      </label>
                    </div>
                  </div>
                </article>
                <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    Bilangan FS Dibuat 3 Tahun Lepas
                  </h4>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>GIC: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='gic-bilangan-fs-dibuat-3-tahun-lepas'
                      id='gic-bilangan-fs-dibuat-3-tahun-lepas'
                      value={gicBilanganFsDibuat3TahunLepas}
                      onChange={(e) => {
                        setGicBilanganFsDibuat3TahunLepas(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>Resin: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='resin-bilangan-fs-dibuat-3-tahun-lepas'
                      id='resin-bilangan-fs-dibuat-3-tahun-lepas'
                      value={resinBilanganFsDibuat3TahunLepas}
                      onChange={(e) => {
                        setResinBilanganFsDibuat3TahunLepas(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row pl-5 items-center col-span-2 md:col-span-1'>
                    <p className='text-sm font-m '>Lain-lain: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='lain-lain-bilangan-fs-dibuat-3-tahun-lepas'
                      id='lain-lain-bilangan-fs-dibuat-3-tahun-lepas'
                      value={lainLainBilanganFsDibuat3TahunLepas}
                      onChange={(e) => {
                        setLainLainBilanganFsDibuat3TahunLepas(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                </article>
                <article className='grid grid-cols-2 md:grid-cols-3 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2 md:col-span-3'>
                    Bilangan FS Dibuat 3 Tahun Lepas Terjadi
                  </h4>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>D: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='d-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      id='d-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      value={dBilanganFsDibuat3TahunLepasTerjadi}
                      onChange={(e) => {
                        setDBilanganFsDibuat3TahunLepasTerjadi(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>M: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='m-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      id='m-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      value={mBilanganFsDibuat3TahunLepasTerjadi}
                      onChange={(e) => {
                        setMBilanganFsDibuat3TahunLepasTerjadi(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>F: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='f-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      id='f-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      value={fBilanganFsDibuat3TahunLepasTerjadi}
                      onChange={(e) => {
                        setFBilanganFsDibuat3TahunLepasTerjadi(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>E: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='e-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      id='e-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      value={eBilanganFsDibuat3TahunLepasTerjadi}
                      onChange={(e) => {
                        setEBilanganFsDibuat3TahunLepasTerjadi(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>X: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='x-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      id='x-bilangan-fs-dibuat-3-tahun-lepas-terjadi'
                      value={xBilanganFsDibuat3TahunLepasTerjadi}
                      onChange={(e) => {
                        setXBilanganFsDibuat3TahunLepasTerjadi(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                </article>
                <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>D</h4>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>Class I: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='class-1-d'
                      id='class-1-d'
                      value={classID}
                      onChange={(e) => {
                        setClassID(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>Class II: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='class-2-d'
                      id='class-2-d'
                      value={classIID}
                      onChange={(e) => {
                        setClassIID(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  {sumClassD > dAdaGigiKekal && (
                    <p className='col-span-2 text-user6 font-semibold'>
                      jumlah class I + class II D tidak boleh melebihi D
                    </p>
                  )}
                </article>
                <article className='grid grid-cols-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>F</h4>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>Class I: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='class-1-f'
                      id='class-1-f'
                      value={classIF}
                      onChange={(e) => {
                        setClassIF(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row pl-5 items-center'>
                    <p className='text-sm font-m '>Class II: </p>
                    <input
                      min='0'
                      max='32'
                      type='number'
                      name='class-2-f'
                      id='class-2-f'
                      value={classIIF}
                      onChange={(e) => {
                        setClassIIF(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  {sumClassF > fAdaGigiKekal && (
                    <p className='col-span-2 text-user6 font-semibold'>
                      jumlah class I + class II F tidak boleh melebihi F
                    </p>
                  )}
                </article>
              </div>
            </section>
            <span className='flex bg-user3 p-2 w-full capitalize col-span-2'>
              <p className='ml-3 text-xl font-semibold'>Perlu Dibuat</p>
            </span>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 mb-3 w-full col-span-2'>
              <div className='grid gap-2'>
                <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    Fisur Sealan
                  </h4>
                  <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                    jumlah gigi kekal perlu FS
                  </p>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='baru-jumlah-gigi-kekal-perlu-fs'
                      className='text-sm font-m'
                    >
                      Baru
                      <span className='text-user6'>
                        {eAdaGigiKekal > 0 && '*'}
                      </span>
                    </label>
                    <input
                      min='0'
                      max='16'
                      required={eAdaGigiKekal > 0 ? true : false}
                      type='number'
                      name='baru-jumlah-gigi-kekal-perlu-fs'
                      id='baru-jumlah-gigi-kekal-perlu-fs'
                      value={baruJumlahGigiKekalPerluFs}
                      onChange={(e) => {
                        setBaruJumlahGigiKekalPerluFs(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='semula-jumlah-gigi-kekal-perlu-fs'
                      className='text-sm font-m'
                    >
                      Semula
                      <span className='text-user6'>
                        {eAdaGigiKekal > 0 && '*'}
                      </span>
                    </label>
                    <input
                      min='0'
                      max='16'
                      required={eAdaGigiKekal > 0 ? true : false}
                      type='number'
                      name='semula-jumlah-gigi-kekal-perlu-fs'
                      id='semula-jumlah-gigi-kekal-perlu-fs'
                      value={semulaJumlahGigiKekalPerluFs}
                      onChange={(e) => {
                        setSemulaJumlahGigiKekalPerluFs(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5 col-span-2'>
                    <label
                      htmlFor='jumlah-gigi-kekal-gagal-fs'
                      className='text-sm font-m'
                    >
                      Jumlah gigi FS gagal
                    </label>
                    <input
                      min='0'
                      max='16'
                      type='number'
                      name='jumlah-gigi-kekal-gagal-fs'
                      id='jumlah-gigi-kekal-gagal-fs'
                      value={jumlahGigiFsGagal}
                      onChange={(e) => {
                        setJumlahGigiFsGagal(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  {sumPerluFs > 16 && (
                    <p className='col-span-2 text-user6 font-semibold'>
                      jumlah baru & semula FS tidak boleh melebihi 16
                    </p>
                  )}
                  <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                    murid perlu FS
                  </p>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='baru-jumlah-murid-perlu-fs'
                      className='text-sm font-m'
                    >
                      Baru
                      {/* <span className='text-user6'>
                      {eAdaGigiKekal > 0 && '*'}
                    </span> */}
                    </label>
                    <input
                      min='0'
                      max='16'
                      // required={eAdaGigiKekal > 0 ? true : false}
                      type='checkbox'
                      name='baru-jumlah-murid-perlu-fs'
                      id='baru-jumlah-murid-perlu-fs'
                      value={baruJumlahMuridPerluFs}
                      onChange={(e) => {
                        setBaruJumlahMuridPerluFs(!baruJumlahMuridPerluFs);
                      }}
                      className='w-4 h-4 bg-user4 rounded focus:ring-user2 m-2'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='semula-jumlah-murid-perlu-fs'
                      className='text-sm font-m'
                    >
                      Semula
                      {/* <span className='text-user6'>
                      {eAdaGigiKekal > 0 && '*'}
                    </span> */}
                    </label>
                    <input
                      min='0'
                      max='16'
                      // required={eAdaGigiKekal > 0 ? true : false}
                      type='number'
                      name='semula-jumlah-murid-perlu-fs'
                      id='semula-jumlah-murid-perlu-fs'
                      value={semulaJumlahMuridPerluFs}
                      onChange={(e) => {
                        setSemulaJumlahMuridPerluFs(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                </article>
                <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    Fluoride Varnish
                  </h4>
                  <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                    jumlah gigi kekal perlu FV
                  </p>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='baru-jumlah-gigi-kekal-perlu-fv'
                      className='text-sm font-m'
                    >
                      Baru
                      <span className='text-user6'>
                        {eAdaGigiKekal > 0 && '*'}
                      </span>
                    </label>
                    <input
                      min='0'
                      max='16'
                      required={eAdaGigiKekal > 0 ? true : false}
                      type='number'
                      name='baru-jumlah-gigi-kekal-perlu-fv'
                      id='baru-jumlah-gigi-kekal-perlu-fv'
                      value={baruJumlahGigiKekalPerluFv}
                      onChange={(e) => {
                        setBaruJumlahGigiKekalPerluFv(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='semula-jumlah-gigi-kekal-perlu-fv'
                      className='text-sm font-m'
                    >
                      Semula
                      <span className='text-user6'>
                        {eAdaGigiKekal > 0 && '*'}
                      </span>
                    </label>
                    <input
                      min='0'
                      max='16'
                      required={eAdaGigiKekal > 0 ? true : false}
                      type='number'
                      name='semula-jumlah-gigi-kekal-perlu-fv'
                      id='semula-jumlah-gigi-kekal-perlu-fv'
                      value={semulaJumlahGigiKekalPerluFv}
                      onChange={(e) => {
                        setSemulaJumlahGigiKekalPerluFv(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  {sumPerluFv > 16 && (
                    <p className='col-span-2 text-user6 font-semibold'>
                      jumlah baru & semula FV tidak boleh melebihi 16
                    </p>
                  )}
                  <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                    murid perlu FV
                  </p>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='baru-jumlah-murid-perlu-fv'
                      className='text-sm font-m'
                    >
                      Baru
                      {/* <span className='text-user6'>
                      {eAdaGigiKekal > 0 && '*'}
                    </span> */}
                    </label>
                    <input
                      min='0'
                      max='16'
                      // required={eAdaGigiKekal > 0 ? true : false}
                      type='checkbox'
                      name='baru-jumlah-murid-perlu-fv'
                      id='baru-jumlah-murid-perlu-fv'
                      value={baruJumlahMuridPerluFv}
                      onChange={(e) => {
                        setBaruJumlahMuridPerluFv(!baruJumlahMuridPerluFv);
                      }}
                      className='w-4 h-4 bg-user4 rounded focus:ring-user2 m-2'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='semula-jumlah-murid-perlu-fv'
                      className='text-sm font-m'
                    >
                      Semula
                      {/* <span className='text-user6'>
                      {eAdaGigiKekal > 0 && '*'}
                    </span> */}
                    </label>
                    <input
                      min='0'
                      max='16'
                      // required={eAdaGigiKekal > 0 ? true : false}
                      type='number'
                      name='semula-jumlah-murid-perlu-fv'
                      id='semula-jumlah-murid-perlu-fv'
                      value={semulaJumlahMuridPerluFv}
                      onChange={(e) => {
                        setSemulaJumlahMuridPerluFv(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                </article>
                <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    PRR Jenis 1
                  </h4>
                  <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                    jumlah gigi kekal perlu PRR Jenis 1
                  </p>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='baru-jumlah-gigi-kekal-perlu-prr-jenis-1'
                      className='text-sm font-m'
                    >
                      Baru
                      <span className='text-user6'>
                        {eAdaGigiKekal > 0 && '*'}
                      </span>
                    </label>
                    <input
                      min='0'
                      max='16'
                      required={eAdaGigiKekal > 0 ? true : false}
                      type='number'
                      name='baru-jumlah-gigi-kekal-perlu-prr-jenis-1'
                      id='baru-jumlah-gigi-kekal-perlu-prr-jenis-1'
                      value={baruJumlahGigiKekalPerluPrrJenis1}
                      onChange={(e) => {
                        setBaruJumlahGigiKekalPerluPrrJenis1(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='semula-jumlah-gigi-kekal-perlu-prr-jenis-1'
                      className='text-sm font-m'
                    >
                      Semula
                      <span className='text-user6'>
                        {eAdaGigiKekal > 0 && '*'}
                      </span>
                    </label>
                    <input
                      min='0'
                      max='16'
                      required={eAdaGigiKekal > 0 ? true : false}
                      type='number'
                      name='semula-jumlah-gigi-kekal-perlu-prr-jenis-1'
                      id='semula-jumlah-gigi-kekal-perlu-prr-jenis-1'
                      value={semulaJumlahGigiKekalPerluPrrJenis1}
                      onChange={(e) => {
                        setSemulaJumlahGigiKekalPerluPrrJenis1(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                  {sumPerluPrr > 16 && (
                    <p className='col-span-2 text-user6 font-semibold'>
                      jumlah baru & semula PRR tidak boleh melebihi 16
                    </p>
                  )}
                  <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                    murid perlu PRR Jenis 1
                  </p>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='baru-jumlah-murid-perlu-prr-jenis-1'
                      className='text-sm font-m'
                    >
                      Baru
                      {/* <span className='text-user6'>
                      {eAdaGigiKekal > 0 && '*'}
                    </span> */}
                    </label>
                    <input
                      min='0'
                      max='16'
                      // required={eAdaGigiKekal > 0 ? true : false}
                      type='checkbox'
                      name='baru-jumlah-murid-perlu-prr-jenis-1'
                      id='baru-jumlah-murid-perlu-prr-jenis-1'
                      value={baruJumlahMuridPerluPrrJenis1}
                      onChange={(e) => {
                        setBaruJumlahMuridPerluPrrJenis1(
                          !baruJumlahMuridPerluPrrJenis1
                        );
                      }}
                      className='w-4 h-4 bg-user4 rounded focus:ring-user2 m-2'
                    />
                  </div>
                  <div className='flex flex-row items-center pl-5'>
                    <label
                      htmlFor='semula-jumlah-murid-perlu-prr-jenis-1'
                      className='text-sm font-m'
                    >
                      Semula
                      {/* <span className='text-user6'>
                      {eAdaGigiKekal > 0 && '*'}
                    </span> */}
                    </label>
                    <input
                      min='0'
                      max='16'
                      // required={eAdaGigiKekal > 0 ? true : false}
                      type='number'
                      name='semula-jumlah-murid-perlu-prr-jenis-1'
                      id='semula-jumlah-murid-perlu-prr-jenis-1'
                      value={semulaJumlahMuridPerluPrrJenis1}
                      onChange={(e) => {
                        setSemulaJumlahMuridPerluPrrJenis1(e.target.value);
                      }}
                      className='outline outline-1 outline-userBlack w-10 m-3 text-sm font-m'
                    />
                  </div>
                </article>
              </div>
              <div className='grid auto-rows-min gap-2'>
                <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    Silver Diamine Fluoride
                  </h4>
                  <p className='flex flex-row pl-5 text-sm font-m col-span-2'>
                    Perlu Sapuan<span className='text-user6'>*</span>
                  </p>
                  <div className='flex items-center justify-center'>
                    <input
                      required
                      type='radio'
                      name='silver-diamine-fluoride-perlu-sapuan'
                      id='ya-silver-diamine-fluoride-perlu-sapuan'
                      value='ya-silver-diamine-fluoride-perlu-sapuan'
                      checked={
                        yaTidakSilverDiamineFluoridePerluSapuan ===
                        'ya-silver-diamine-fluoride-perlu-sapuan'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        setYaTidakSilverDiamineFluoridePerluSapuan(
                          e.target.value
                        );
                      }}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='ya-silver-diamine-fluoride-perlu-sapuan'
                      className='m-2 text-sm font-m'
                    >
                      Ya
                    </label>
                    <input
                      required
                      type='radio'
                      name='silver-diamine-fluoride-perlu-sapuan'
                      id='tidak-silver-diamine-fluoride-perlu-sapuan'
                      value='tidak-silver-diamine-fluoride-perlu-sapuan'
                      checked={
                        yaTidakSilverDiamineFluoridePerluSapuan ===
                        'tidak-silver-diamine-fluoride-perlu-sapuan'
                          ? true
                          : false
                      }
                      onChange={(e) => {
                        setYaTidakSilverDiamineFluoridePerluSapuan(
                          e.target.value
                        );
                      }}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor='tidak-silver-diamine-fluoride-perlu-sapuan'
                      className='m-2 text-sm font-m'
                    >
                      Tidak
                    </label>
                  </div>
                </article>
                <article className='border border-userBlack pl-3 p-2 rounded-md'>
                  <h4 className='font-bold flex flex-row pl-5 col-span-2'>
                    Jumlah Tampalan Diperlukan
                  </h4>
                  <div className='grid grid-rows-2 gap-2'>
                    <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                      <h4 className='font-semibold flex flex-row pl-5 col-span-2'>
                        Anterior Sewarna
                      </h4>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gd-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                          id='gd-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                          value={baruGDAnteriorSewarnaJumlahTampalanDiperlukan}
                          onChange={(e) => {
                            setBaruGDAnteriorSewarnaJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gd-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GD Baru
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gd-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                          id='gd-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                          value={
                            semulaGDAnteriorSewarnaJumlahTampalanDiperlukan
                          }
                          onChange={(e) => {
                            setSemulaGDAnteriorSewarnaJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gd-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GD Semula
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gk-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                          id='gk-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                          value={baruGKAnteriorSewarnaJumlahTampalanDiperlukan}
                          onChange={(e) => {
                            setBaruGKAnteriorSewarnaJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gk-baru-anterior-sewarna-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GK Baru
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gk-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                          id='gk-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                          value={
                            semulaGKAnteriorSewarnaJumlahTampalanDiperlukan
                          }
                          onChange={(e) => {
                            setSemulaGKAnteriorSewarnaJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gk-semula-anterior-sewarna-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GK Semula
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                    </article>
                    <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                      <h4 className='font-semibold flex flex-row pl-5 col-span-2'>
                        Posterior Sewarna
                      </h4>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gd-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                          id='gd-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                          value={baruGDPosteriorSewarnaJumlahTampalanDiperlukan}
                          onChange={(e) => {
                            setBaruGDPosteriorSewarnaJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gd-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GD Baru
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gd-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                          id='gd-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                          value={
                            semulaGDPosteriorSewarnaJumlahTampalanDiperlukan
                          }
                          onChange={(e) => {
                            setSemulaGDPosteriorSewarnaJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gd-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GD Semula
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gk-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                          id='gk-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                          value={baruGKPosteriorSewarnaJumlahTampalanDiperlukan}
                          onChange={(e) => {
                            setBaruGKPosteriorSewarnaJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gk-baru-posterior-sewarna-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GK Baru
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gk-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                          id='gk-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                          value={
                            semulaGKPosteriorSewarnaJumlahTampalanDiperlukan
                          }
                          onChange={(e) => {
                            setSemulaGKPosteriorSewarnaJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gk-semula-posterior-sewarna-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GK Semula
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                    </article>
                    <article className='grid grid-cols-2 gap-2 border border-userBlack pl-3 p-2 rounded-md'>
                      <h4 className='font-semibold flex flex-row pl-5 col-span-2'>
                        Posterior Amalgam
                      </h4>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gd-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                          id='gd-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                          value={baruGDPosteriorAmalgamJumlahTampalanDiperlukan}
                          onChange={(e) => {
                            setBaruGDPosteriorAmalgamJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gd-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GD Baru
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gd-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                          id='gd-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                          value={
                            semulaGDPosteriorAmalgamJumlahTampalanDiperlukan
                          }
                          onChange={(e) => {
                            setSemulaGDPosteriorAmalgamJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gd-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GD Semula
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gk-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                          id='gk-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                          value={baruGKPosteriorAmalgamJumlahTampalanDiperlukan}
                          onChange={(e) => {
                            setBaruGKPosteriorAmalgamJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gk-baru-posterior-amalgam-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GK Baru
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                      <div className='flex flex-row items-center pl-5'>
                        <input
                          type='number'
                          name='gk-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                          id='gk-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                          value={
                            semulaGKPosteriorAmalgamJumlahTampalanDiperlukan
                          }
                          onChange={(e) => {
                            setSemulaGKPosteriorAmalgamJumlahTampalanDiperlukan(
                              e.target.value
                            );
                          }}
                          className='outline outline-1 outline-userBlack w-10 text-sm font-m'
                          min='0'
                          max='32'
                          required
                        />
                        <label
                          htmlFor='gk-semula-posterior-amalgam-jumlah-tampalan-diperlukan'
                          className='text-sm font-m ml-2 m-1'
                        >
                          GK Semula
                          <span className='text-user6'>*</span>
                        </label>
                      </div>
                    </article>
                  </div>
                </article>
              </div>
            </section>
            <div className='grid grid-cols-1 md:grid-cols-3 col-start-1 lg:col-start-2 gap-2 col-span-1 md:col-span-2 hover:cursor-pointer'>
              <span
                onClick={() => {
                  navigate(-1);
                }}
                className='flex bg-user3 p-2 w-full capitalize justify-center hover:bg-user1 hover:text-userWhite transition-all'
              >
                kembali
              </span>
              <input
                type='reset'
                value='reset'
                className='flex bg-user3 p-2 w-full capitalize justify-center hover:bg-user1 hover:text-userWhite transition-all hover:cursor-pointer'
              />
              <button
                type='submit'
                className='flex bg-user3 p-2 w-full capitalize justify-center hover:bg-user1 hover:text-userWhite transition-all'
              >
                hantar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserFormSekolahPemeriksaan;
