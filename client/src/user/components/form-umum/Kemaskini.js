import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaWindowClose } from 'react-icons/fa';

import { useGlobalUserAppContext } from '../../context/userAppContext';

function Kemaskini({ showKemaskini, setShowKemaskini, toast }) {
  const { userToken, useParams } = useGlobalUserAppContext();

  const { personUmumId } = useParams();

  const [tarikhKedatangan, setTarikhKedatangan] = useState('');
  const [nama, setNama] = useState('');
  const [jenisIc, setJenisIc] = useState('');
  const [ic, setIc] = useState('');
  const [tarikhLahir, setTarikhLahir] = useState('');
  const [umur, setUmur] = useState('');
  const [jantina, setJantina] = useState('');
  const [alamat, setAlamat] = useState('');
  const [waktuSampai, setWaktuSampai] = useState('');
  const [kategoriPesakit, setKategoriPesakit] = useState('');
  const [kumpulanEtnik, setKumpulanEtnik] = useState('');
  const [rujukDaripada, setRujukDaripada] = useState('');

  const closeModal = () => {
    setShowKemaskini(false);
  };

  useEffect(() => {
    const fetchSinglePersonUmum = async () => {
      try {
        const { data } = await axios.get(`/api/v1/umum/${personUmumId}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        setTarikhKedatangan(data.singlePersonUmum.tarikhKedatangan);
        setNama(data.singlePersonUmum.nama);
        setJenisIc(data.singlePersonUmum.jenisIc);
        setIc(data.singlePersonUmum.ic);
        setTarikhLahir(data.singlePersonUmum.tarikhLahir);
        setUmur(data.singlePersonUmum.umur);
        setJantina(data.singlePersonUmum.jantina);
        setAlamat(data.singlePersonUmum.alamat);
        setWaktuSampai(data.singlePersonUmum.waktuSampai);
        setKategoriPesakit(data.singlePersonUmum.kategoriPesakit);
        setKumpulanEtnik(data.singlePersonUmum.kumpulanEtnik);
        setRujukDaripada(data.singlePersonUmum.rujukDaripada);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSinglePersonUmum();
  }, [showKemaskini]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `/api/v1/umum/${personUmumId}`,
        {
          tarikhKedatangan,
          nama,
          jenisIc,
          ic,
          tarikhLahir,
          umur,
          jantina,
          alamat,
          waktuSampai,
          kategoriPesakit,
          kumpulanEtnik,
          rujukDaripada,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );
      toast.info(`Pesakit berjaya dikemaskini`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setShowKemaskini(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='absolute inset-16 bg-userWhite z-20 outline outline-1 outline-userBlack opacity-100 overflow-y-auto'>
        <div className='sticky top-0'>
          <FaWindowClose
            onClick={closeModal}
            className='absolute mr-1 mt-1 text-xl text-userBlack right-0 hover:cursor-pointer hover:text-user6 transition-all'
          />
          <h1 className='bg-user3 font-semibold text-xl'>kemaskini</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <p className='font-semibold text-user6 text-left mt-3 ml-3'>
            * required
          </p>
          <div className='grid'>
            <div className='flex m-2 ml-auto'>
              <p className='mr-3 font-semibold'>
                tarikh kedatangan:{' '}
                <span className='font-semibold text-user6'>*</span>
              </p>
              <input
                required
                value={tarikhKedatangan}
                onChange={(e) => setTarikhKedatangan(e.target.value)}
                type='date'
                name='tarikhKedatangan'
                className='outline outline-1 outline-userBlack'
              />
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                nama: <span className='font-semibold text-user6'>*</span>
              </p>
              <input
                required
                value={nama.toLowerCase()}
                onChange={(e) => setNama(e.target.value)}
                type='text'
                name='namaUmum'
                className='capitalize appearance-none w-7/12 leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-md'
              />
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                jenis pengenalan{' '}
                <span className='font-semibold text-user6'>*</span>
              </p>
              <select
                required
                name='pengenalan'
                id='pengenalan'
                value={jenisIc}
                onChange={(e) => setJenisIc(e.target.value)}
                className='mr-3'
              >
                <option value=''>Sila pilih..</option>
                <option value='mykad'>MyKad</option>
                <option value='passport'>Passport</option>
                <option value='tentera'>Tentera</option>
                <option value='polis'>Polis</option>
                <option value='sijil-lahir'>Sijil lahir</option>
              </select>
              <input
                required
                value={ic}
                onChange={(e) => setIc(e.target.value)}
                type='text'
                name='ic'
                placeholder='123456-09-0987'
                className='appearance-none leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-md'
              />
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                tarikh lahir:{' '}
                <span className='font-semibold text-user6'>*</span>
              </p>
              <input
                required
                value={tarikhLahir}
                onChange={(e) => setTarikhLahir(e.target.value)}
                type='date'
                name='tarikhLahir'
              />
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                umur: <span className='font-semibold text-user6'>*</span>
              </p>
              <input
                required
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
                type='number'
                name='umur'
                className='outline outline-1 outline-userBlack w-16 text-sm font-m'
              />
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                jantina: <span className='font-semibold text-user6'>*</span>
              </p>
              <select
                required
                value={jantina}
                name='jantina'
                id='jantina'
                onChange={(e) => setJantina(e.target.value)}
              >
                <option value=''>Sila pilih..</option>
                <option value='lelaki'>Lelaki</option>
                <option value='perempuan'>Perempuan</option>
              </select>
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                alamat: <span className='font-semibold text-user6'>*</span>
              </p>
              <input
                required
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                type='text'
                name='alamat'
                className='appearance-none w-10/12 leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-md'
              />
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                waktu sampai:{' '}
                <span className='font-semibold text-user6'>*</span>
              </p>
              <input
                required
                value={waktuSampai}
                onChange={(e) => setWaktuSampai(e.target.value)}
                type='time'
                name='waktuSampai'
                className='outline outline-1 outline-userBlack'
              />
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                kategori pesakit:{' '}
                <span className='font-semibold text-user6'>*</span>
              </p>
              <select
                required
                value={kategoriPesakit}
                name='kategoriPesakit'
                id='kategoriPesakit'
                onChange={(e) => setKategoriPesakit(e.target.value)}
              >
                <option value=''>Sila pilih..</option>
                <option value='toddler'>Toddler (0 - 4) tahun</option>
                <option value='prasekolah'>Prasekolah (5 - 6) tahun</option>
                <option value='sekolahrendah'>Sekolah rendah</option>
                <option value='sekolahmenengah'>Sekolah menengah</option>
                <option value='oku'>OKU</option>
                <option value='hamil'>Ibu mengandung</option>
                <option value='dewasa'>Dewasa</option>
                <option value='warga-tua'>Warga tua</option>
              </select>
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                kumpulan etnik:{' '}
                <span className='font-semibold text-user6'>*</span>
              </p>
              <select
                required
                value={kumpulanEtnik}
                name='kumpulanEtnik'
                id='kumpulanEtnik'
                onChange={(e) => {
                  setKumpulanEtnik(e.target.value);
                }}
              >
                <option value=''>Sila pilih..</option>
                <option value='melayu'>Melayu</option>
                <option value='cina'>Cina</option>
                <option value='india'>India</option>
                <option value='bajau'>Bajau</option>
                <option value='dusun'>Dusun</option>
                <option value='kadazan'>Kadazan</option>
                <option value='murut'>Murut</option>
                <option value='bumiputera sabah lain'>
                  Bumiputera sabah lain
                </option>
                <option value='melanau'>Melanau</option>
                <option value='kedayan'>Kedayan</option>
                <option value='iban'>Iban</option>
                <option value='bidayuh'>Bidayuh</option>
                <option value='bumiputera sarawak lain'>
                  Bumiputera sarawak lain
                </option>
                <option value='orang asli semenanjung'>
                  Orang asli semenanjung
                </option>
                <option value='lain-lain'>Lain-lain</option>
                <option value='bukan warganegara'>Bukan warganegara</option>
              </select>
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>rujuk daripada: </p>
              <input
                value={rujukDaripada}
                onChange={(e) => setRujukDaripada(e.target.value)}
                type='text'
                name='rujukDaripada'
                className='appearance-none leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-md'
              />
            </div>
          </div>
          <button
            type='submit'
            className='m-2 p-2 capitalize bg-user3 hover:bg-user1 hover:text-userWhite transition-all'
          >
            kemaskini
          </button>
        </form>
      </div>
      <div className='absolute inset-0 bg-user1 z-10 opacity-75'></div>
    </>
  );
}

export default Kemaskini;
