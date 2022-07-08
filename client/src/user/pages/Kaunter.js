import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useGlobalUserAppContext } from '../context/userAppContext';

import UserHeader from '../components/UserHeader';
import KaunterHeaderLoggedIn from '../components/KaunterHeaderLoggedIn';

import PatientData from '../components/pt-registration/PatientData';
import FillableForm from '../components/pt-registration/FillableForm';
import EditableForm from '../components/pt-registration/EditableForm';

import UserFooter from '../components/UserFooter';

function Kaunter() {
  const {
    dateToday,
    GET_PATIENT_BY_TARIKH_KEDATANGAN,
    kaunterToken,
    navigate,
    catchAxiosErrorAndLogout,
  } = useGlobalUserAppContext();
  const [editId, setEditId] = useState('');
  const [editForm, setEditForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [successEdit, setSuccessEdit] = useState('');
  const [createdByKp, setCreatedByKp] = useState('');
  const [createdByDaerah, setCreatedByDaerah] = useState('');
  const [createdByNegeri, setCreatedByNegeri] = useState('');
  const [philter, setPhilter] = useState('');

  const { data, loading, error, refetch } = useQuery(
    GET_PATIENT_BY_TARIKH_KEDATANGAN,
    {
      variables: {
        tarikhKedatangan: `${dateToday}`,
      },
      pollInterval: 500,
    }
  );

  // const form = useRef(null);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(form.current);
  //   axios
  //     .post('/api/v1/kaunter/postdata', formData)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    const fetchIdentity = async () => {
      try {
        const { data } = await axios.get('/api/v1/identity', {
          headers: { Authorization: `Bearer ${kaunterToken}` },
        });
        setCreatedByKp(data.kp);
        setCreatedByDaerah(data.daerah);
        setCreatedByNegeri(data.negeri);
      } catch (error) {
        catchAxiosErrorAndLogout();
        navigate('/kaunter');
      }
    };
    fetchIdentity();
    console.log('this is fetchidentity');
  }, []);

  const logout = () => {
    catchAxiosErrorAndLogout();
    navigate('/kaunter');
  };

  return (
    <>
      <UserHeader />
      {/* <form
        ref={form}
        onClick={(e) => e.preventDefault()}
        encType='multipart/form-data'
      > */}
      <div className='absolute inset-0 -z-10 bg-user5'></div>
      <KaunterHeaderLoggedIn namaKlinik={createdByKp} logout={logout} />
      <div className='absolute inset-10 top-44 -z-10 bg-userWhite text-center justify-center items-center outline outline-1 outline-userBlack rounded-md shadow-xl capitalize'>
        <div className='px-10 h-full p-3 overflow-y-auto'>
          <PatientData
            showForm={showForm}
            setShowForm={setShowForm}
            editForm={editForm}
            setEditForm={setEditForm}
            editId={editId}
            setEditId={setEditId}
            successEdit={successEdit}
            setSuccessEdit={setSuccessEdit}
            data={data}
            error={error}
            loading={loading}
            refetch={refetch}
            philter={philter}
            setPhilter={setPhilter}
          />
          <FillableForm
            showForm={showForm}
            setShowForm={setShowForm}
            createdByKp={createdByKp}
            createdByDaerah={createdByDaerah}
            createdByNegeri={createdByNegeri}
            dateToday={dateToday}
            refetch={refetch}
            toast={toast}
          />
          <EditableForm
            editForm={editForm}
            setEditForm={setEditForm}
            editId={editId}
            createdByKp={createdByKp}
            createdByDaerah={createdByDaerah}
            createdByNegeri={createdByNegeri}
            refetch={refetch}
            toast={toast}
          />
          {/* <input
              className='p-2 w-auto'
              type='text'
              name='carianPesakit'
              placeholder='Cari pesakit...'
            />
            <br />
            <button className='border border-1 border-userBlack bg-user3 p-2 mt-2 items-left'>
              Daftar Pesakit Baru
            </button>
            <div className='border mt-2'>
              <div className='justify-center items-center'>
                {allPesakit.map((p, index) => (
                  <>
                    <p>{p.nama}</p>
                    <p>{p.ic}</p>
                    <br />
                  </>
                ))}
              </div>
            </div> */}
          {/* <FillableForm /> */}
          {/* <strong>pendaftaran</strong>
            <br />
            <div className='text-right'>
              <p>tarikh kedatangan: </p>
              <input
                // onChange={(e) => setTarikhKedatangan(e.target.value)}
                required
                type='date'
                name='tarikhKedatangan'
              />
            </div>
            <div className='text-left'>
              <strong>nama: </strong>
              <input
                // onChange={(e) => setNama(e.target.value)}
                type='text'
                name='namaUmum'
              />
            </div>
            <br />
            <div className='text-left'>
              <select name='pengenalan' id='pengenalan'>
                <option value='mykad'>MyKad</option>
                <option value='passport'>Passport</option>
                <option value='tentera'>tentera</option>
                <option value='polis'>polis</option>
                <option value='sijil'>sijil lahir</option>
              </select>
              <input
                // onChange={(e) => setIc(e.target.value)}
                type='text'
                name='ic'
              />
            </div>
            <br />
            <div className='text-left'>
              <p>tarikh lahir: </p>
              <input
                // onChange={(e) => setTarikhLahir(e.target.value)}
                type='date'
                name='tarikhLahir'
              />
            </div>
            <button type='submit'>Submit</button> */}
        </div>
      </div>
      {/* </form> */}
      <ToastContainer />
      <UserFooter />
    </>
  );
}

export default Kaunter;
