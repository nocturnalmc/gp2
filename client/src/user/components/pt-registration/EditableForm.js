import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { useGlobalUserAppContext } from '../../context/userAppContext';

export default function EditableForm({
  editId,
  editForm,
  setEditForm,
  createdByKp,
  createdByDaerah,
  createdByNegeri,
  refetch,
  toast,
}) {
  const { GET_PATIENT, UPDATE_PATIENT } = useGlobalUserAppContext();

  const [editNama, setEditNama] = useState('');
  const [editJenisIc, setJenisIc] = useState('');
  const [editIc, setIc] = useState('');
  const [editUmur, setUmur] = useState('');
  const [editTarikhLahir, setTarikhLahir] = useState('');
  const [editTarikhKedatangan, setTarikhKedatangan] = useState('');
  const [editJantina, setJantina] = useState('');
  const [editAlamat, setAlamat] = useState('');
  const [editWaktuSampai, setWaktuSampai] = useState('');
  const [editKategoriPesakit, setKategoriPesakit] = useState('');
  const [editKumpulanEtnik, setKumpulanEtnik] = useState('');
  const [editRujukDaripada, setRujukDaripada] = useState('');

  const { data } = useQuery(GET_PATIENT, {
    variables: { id: editId },
  });

  const [UpdatePatient, { editError }] = useMutation(UPDATE_PATIENT);

  const handleEdit = (e) => {
    e.preventDefault();
    UpdatePatient({
      variables: {
        _id: editId,
        createdByKp: createdByKp,
        createdByDaerah: createdByDaerah,
        createdByNegeri: createdByNegeri,
        createdByUsername: 'AdminKaunter',
        nama: editNama,
        jenisIc: editJenisIc,
        ic: editIc,
        tarikhLahir: editTarikhLahir,
        // tarikhKedatangan: editTarikhKedatangan,
        jantina: editJantina,
        umur: editUmur,
        alamat: editAlamat,
        waktuSampai: editWaktuSampai,
        kategoriPesakit: editKategoriPesakit,
        kumpulanEtnik: editKumpulanEtnik,
        rujukDaripada: editRujukDaripada,
      },
    })
      .then((res) => {
        refetch();
        editDoneNotification();
        setEditForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editDoneNotification = () => {
    toast.info(`Pesakit berjaya dikemaskini`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (data) {
      setEditNama(data.patient.nama);
      setJenisIc(data.patient.jenisIc);
      setIc(data.patient.ic);
      setUmur(data.patient.umur);
      setTarikhLahir(data.patient.tarikhLahir);
      setTarikhKedatangan(data.patient.tarikhKedatangan);
      setJantina(data.patient.jantina);
      setAlamat(data.patient.alamat);
      setWaktuSampai(data.patient.waktuSampai);
      setKategoriPesakit(data.patient.kategoriPesakit);
      setKumpulanEtnik(data.patient.kumpulanEtnik);
      setRujukDaripada(data.patient.rujukDaripada);
    }
  }, [data]);

  if (editForm) {
    return (
      <>
        <form onSubmit={handleEdit}>
          <h1 className='bg-user3 font-bold text-2xl'>pendaftaran</h1>
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
                disabled
                required
                value={editTarikhKedatangan}
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
                onChange={(e) => setEditNama(e.target.value)}
                type='text'
                name='namaUmum'
                value={editNama}
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
                value={editJenisIc}
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
                onChange={(e) => setIc(e.target.value)}
                type='text'
                name='ic'
                placeholder='123456-09-0987'
                value={editIc}
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
                onChange={(e) => setTarikhLahir(e.target.value)}
                type='date'
                value={editTarikhLahir}
                name='tarikhLahir'
              />
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                umur: <span className='font-semibold text-user6'>*</span>
              </p>
              <input
                required
                onChange={(e) => setUmur(parseInt(e.target.value))}
                type='number'
                name='umur'
                value={editUmur}
                className='outline outline-1 outline-userBlack w-16 text-sm font-m'
              />
            </div>
            <div className='flex m-2'>
              <p className='mr-3 font-semibold'>
                jantina: <span className='font-semibold text-user6'>*</span>
              </p>
              <select
                required
                name='jantina'
                id='jantina'
                value={editJantina}
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
                onChange={(e) => setAlamat(e.target.value)}
                type='text'
                name='alamat'
                value={editAlamat}
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
                onChange={(e) => setWaktuSampai(e.target.value)}
                type='time'
                name='waktuSampai'
                value={editWaktuSampai}
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
                name='kategoriPesakit'
                id='kategoriPesakit'
                value={editKategoriPesakit}
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
                name='kumpulanEtnik'
                id='kumpulanEtnik'
                value={editKumpulanEtnik}
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
                onChange={(e) => setRujukDaripada(e.target.value)}
                type='text'
                name='rujukDaripada'
                value={editRujukDaripada}
                className='appearance-none leading-7 px-3 py-1 ring-2 focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-md'
              />
            </div>
          </div>
          <span
            className='m-2 p-2 capitalize bg-user3 hover:bg-user1 hover:text-userWhite hover:cursor-pointer transition-all'
            onClick={() => setEditForm(false)}
          >
            kembali
          </span>
          <button
            type='submit'
            className='m-2 p-2 capitalize bg-user3 hover:bg-user1 hover:text-userWhite transition-all'
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
