import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import axios from 'axios';

import { useGlobalUserAppContext } from '../context/userAppContext';

import UserHeader from '../components/UserHeader';
import KaunterHeaderLoggedIn from '../components/KaunterHeaderLoggedIn';

import PatientData from '../components/pt-registration/PatientData';
import FillableForm from '../components/pt-registration/FillableForm';
import EditableForm from '../components/pt-registration/EditableForm';

import UserFooter from '../components/UserFooter';

function Kaunter() {
  const {
    kaunterToken,
    navigate,
    catchAxiosErrorAndLogout,
    dateToday,
    ToastContainer,
    toast,
    GET_PATIENT_BY_TARIKH_KEDATANGAN,
  } = useGlobalUserAppContext();

  const [editId, setEditId] = useState('');
  const [editForm, setEditForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
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
  }, []);

  const logout = () => {
    catchAxiosErrorAndLogout();
    navigate('/kaunter');
  };

  return (
    <>
      <ToastContainer />
      <UserHeader />
      <div className='absolute inset-0 -z-10 bg-user5'></div>
      <KaunterHeaderLoggedIn namaKlinik={createdByKp} logout={logout} />
      <div className='absolute inset-10 top-44 -z-10 bg-userWhite text-center justify-center items-center outline outline-1 outline-userBlack rounded-md shadow-xl capitalize'>
        <div className='px-10 h-full p-3 overflow-y-auto'>
          <PatientData
            showForm={showForm}
            setShowForm={setShowForm}
            setEditId={setEditId}
            editForm={editForm}
            setEditForm={setEditForm}
            data={data}
            loading={loading}
            error={error}
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
            editId={editId}
            editForm={editForm}
            setEditForm={setEditForm}
            createdByKp={createdByKp}
            createdByDaerah={createdByDaerah}
            createdByNegeri={createdByNegeri}
            refetch={refetch}
            toast={toast}
          />
        </div>
      </div>
      <UserFooter />
    </>
  );
}

export default Kaunter;
