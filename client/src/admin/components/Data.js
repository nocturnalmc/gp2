import { useState, useEffect } from 'react';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import { FaPlus } from 'react-icons/fa';
import { Ring } from 'react-awesome-spinners';
export default function Data({
  showData,
  daerah,
  negeri,
  facilityType,
  showFacility,
  showPegawai,
  showKlinik,
  loading,
  data,
  error,
  operators,
  loadingOperators,
  errorOperators,
  refetchFacilities,
  refetchOperators,
  toast,
}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteCandidate, setDeleteCandidate] = useState(null);
  const [id, setId] = useState('');

  function Klinik() {
    return (
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-bold'>
          Senarai Klinik Pergigian Daerah {daerah}
        </h1>
        <table className='table-auto border-collapse border border-slate-500'>
          <thead>
            <tr>
              <th className='border border-slate-600'>Bil.</th>
              <th className='border border-slate-600'>Nama KP</th>
              <th className='border border-slate-600'>Manage</th>
            </tr>
          </thead>
          <tbody>
            {data.fasilitisByType.map((kp, index) => (
              <tr>
                <td className='border border-slate-700'>{index + 1}</td>
                <td className='border border-slate-700'>{kp.nama}</td>
                <td className='border border-slate-700'>
                  <div>
                    <button
                      className='bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2 z-0'
                      id={kp._id}
                      onClick={(e) => {
                        setShowDeleteModal(true);
                        setId(kp._id);
                        setDeleteCandidate(kp.nama);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function Pegawai() {
    return (
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-bold'>
          Senarai Pegawai Pergigian Daerah {daerah}
        </h1>
        <div>
          <table className='table-auto border-collapse border border-slate-500'>
            <thead>
              <tr>
                <th className='border border-slate-600 px-3'>Bil.</th>
                <th className='border border-slate-600 px-20'>Nama</th>
                <th className='border border-slate-600 px-4'>Gred</th>
                <th className='border border-slate-600 px-5'>
                  Nama Klinik Pergigian
                </th>
                <th className='border border-slate-600 px-4'>Role</th>
                <th className='border border-slate-600 px-4'>Manage</th>
              </tr>
            </thead>
            <tbody>
              {operators.listOperatorByDaerah.map((o, index) => (
                <tr>
                  <td className='border border-slate-700'>{index + 1}</td>
                  <td className='border border-slate-700 px-3'>{o.nama}</td>
                  <td className='border border-slate-700'>{o.gred}</td>
                  <td className='border border-slate-700 px-3'>{o.kpSkrg}</td>
                  <td className='border border-slate-700'>{o.role}</td>
                  <td className='border border-slate-700'>
                    <button
                      className='bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2'
                      onClick={() => {
                        setShowEditModal(true);
                        setId(o._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className='bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2'
                      id={o._id}
                      onClick={(e) => {
                        setShowDeleteModal(true);
                        setId(o._id);
                        setDeleteCandidate(o.nama);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function Facility() {
    const [pilihanKlinik, setPilihanKlinik] = useState('');

    const namaKliniks = data.fasilitisByType.reduce(
      (arrNamaKliniks, singleFasilitis) => {
        if (!arrNamaKliniks.includes(singleFasilitis.handler)) {
          arrNamaKliniks.push(singleFasilitis.handler);
        }
        return arrNamaKliniks.filter((valid) => valid);
      },
      ['']
    );

    return (
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-bold'>
          Senarai {facilityType} Daerah {daerah}
        </h1>
        <table className='table-auto border-collapse border border-slate-500'>
          <thead>
            <tr>
              <th className='border border-slate-600 px-3'>Bil.</th>
              <th className='border border-slate-600 px-20'>
                Nama {facilityType}
              </th>
              <th className='border border-slate-600 px-10'>Nama Klinik</th>
              <th className='border border-slate-600 px-3'>Manage</th>
            </tr>
          </thead>
          <select
            value={pilihanKlinik}
            onChange={(e) => {
              setPilihanKlinik(e.target.value);
            }}
            className='border-2 absolute top-40 right-5 w-24'
          >
            <option value=''>Filter..</option>
            {namaKliniks.map((k, index) => (
              <option key={index} value={k}>
                {k}
              </option>
            ))}
          </select>
          <tbody>
            {data.fasilitisByType
              .filter((fs) => {
                return fs.handler.includes(pilihanKlinik);
              })
              .map((f, index) => (
                <tr key={f._id}>
                  <td className='border border-slate-600 px-3'>{index + 1}</td>
                  <td className='border border-slate-600 px-20'>{f.nama}</td>
                  <td className='border border-slate-600 px-10'>{f.handler}</td>
                  <td className='border border-slate-600 px-3'>
                    <button
                      className='bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2'
                      id={f._id}
                      onClick={() => {
                        setShowEditModal(true);
                        setId(f._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className='bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2'
                      id={f._id}
                      onClick={(e) => {
                        setShowDeleteModal(true);
                        setId(f._id);
                        setDeleteCandidate(f.nama);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (loading || loadingOperators) {
    return (
      <div>
        <Ring />
      </div>
    );
  }

  if (error || errorOperators) {
    return <div>Error! Refer react dev tools under Query</div>;
  }

  if (showData) {
    return (
      <>
        {showKlinik && <Klinik />}
        {showPegawai && <Pegawai />}
        {showFacility && <Facility />}
        <button
          className='bg-admin3 absolute top-5 right-5 p-2 rounded-md text-white shadow-xl'
          onClick={() => {
            setShowAddModal(true);
            setShowEditModal(false);
            setShowDeleteModal(false);
          }}
        >
          <div className='text-adminWhite text-7xl'>
            <FaPlus />
          </div>
        </button>
        {showAddModal && (
          <Add
            setShowAddModal={setShowAddModal}
            jenisFacility={facilityType}
            daerah={daerah}
            negeri={negeri}
            refetchFacilities={refetchFacilities}
            toast={toast}
            refetchOperators={refetchOperators}
          />
        )}
        {showEditModal && (
          <Edit
            setShowEditModal={setShowEditModal}
            jenisFacility={facilityType}
            id={id}
            daerah={daerah}
            refetchFacilities={refetchFacilities}
            refetchOperators={refetchOperators}
            toast={toast}
          />
        )}
        {showDeleteModal && (
          <Delete
            setShowDeleteModal={setShowDeleteModal}
            jenisFacility={facilityType}
            deleteCandidate={deleteCandidate}
            id={id}
            refetchFacilities={refetchFacilities}
            refetchOperators={refetchOperators}
            toast={toast}
          />
        )}
      </>
    );
  }
}
