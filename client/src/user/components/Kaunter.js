import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { useGlobalUserAppContext } from '../context/userAppContext';

import PatientData from './pt-registration/PatientData';
import FillableForm from './pt-registration/FillableForm';
import EditableForm from './pt-registration/EditableForm';

function Kaunter({
  jenisFasiliti,
  createdByKp,
  createdByDaerah,
  createdByNegeri,
}) {
  const { dateToday, toast, GET_PATIENT_BY_TARIKH_KEDATANGAN } =
    useGlobalUserAppContext();

  const [editId, setEditId] = useState('');
  const [editForm, setEditForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [philter, setPhilter] = useState('');

  const { data, loading, error, refetch } = useQuery(
    GET_PATIENT_BY_TARIKH_KEDATANGAN,
    {
      variables: {
        tarikhKedatangan: `${dateToday}`,
        jenisFasiliti: jenisFasiliti,
      },
      pollInterval: 500,
    }
  );

  return (
    <>
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
          jenisFasiliti={jenisFasiliti}
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
          jenisFasiliti={jenisFasiliti}
          refetch={refetch}
          toast={toast}
        />
      </div>
    </>
  );
}

export default Kaunter;
