import { useGlobalAdminAppContext } from '../context/adminAppContext';
import { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { RiCloseLine } from 'react-icons/ri';
import { Ring } from 'react-awesome-spinners';
import styles from '../Modal.module.css';

const Modal = ({
  setShowAddModal,
  daerah,
  negeri,
  jenisFacility,
  refetchFacilities,
  refetchOperators,
  toast,
}) => {
  const { GET_KLINIK_FOR_DAERAH, CREATE_OPERATOR, CREATE_FACILITY } =
    useGlobalAdminAppContext();

  const {
    data: klinikData,
    loading: klinikLoading,
    error: klinikError,
    refetch: klinikRefetch,
  } = useQuery(GET_KLINIK_FOR_DAERAH, {
    variables: { daerah: daerah },
  });

  const [createOperator] = useMutation(CREATE_OPERATOR);
  const [createFacility] = useMutation(CREATE_FACILITY);
  const currentName = useRef();
  const currentKp = useRef();
  const currentGred = useRef();
  const currentRole = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (jenisFacility !== 'pegawai') {
      await createFacility({
        variables: {
          nama: currentName.current,
          negeri: negeri,
          daerah: daerah,
          handler: currentKp.current,
          jenisFasiliti: jenisFacility,
        },
      });
      refetchFacilities();
    }
    if (jenisFacility === 'pegawai') {
      await createOperator({
        variables: {
          nama: currentName.current,
          negeri: negeri,
          daerah: daerah,
          kpSkrg: currentKp.current,
          gred: currentGred.current,
          role: currentRole.current,
        },
      });
      refetchOperators();
    }
    setShowAddModal(false);
    toast.info(`Data berjaya ditambah`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function AddKlinik() {
    klinikRefetch();
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div
            className={styles.darkBG}
            onClick={() => setShowAddModal(false)}
          />
          <div className={styles.centered}>
            <div className={styles.modalAdd}>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>TAMBAH KLINIK PERGIGIAN</h5>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setShowAddModal(false)}
              >
                <RiCloseLine style={{ marginBottom: '-3px' }} />
              </button>
              <div className={styles.modalContent}>
                <div className='admin-pegawai-handler-container'>
                  <div className='admin-pegawai-handler-input'>
                    <p>Nama Klinik Pergigian</p>
                    <input
                      className='border-2'
                      type='text'
                      name='Nama'
                      id='nama'
                      onChange={(e) => (currentName.current = e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.modalContent}>
                <input type='checkbox' name='checkbox' value='KEPP' />
                KEPP
                <br />
                <input type='checkbox' name='checkbox' value='UTC' />
                UTC
                <br />
                <input type='checkbox' name='checkbox' value='Visiting' />
                Visiting
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button className={styles.deleteBtn} type='submit'>
                    TAMBAH
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }

  function AddPegawai() {
    klinikRefetch();
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div
            className={styles.darkBG}
            onClick={() => setShowAddModal(false)}
          />
          <div className={styles.centered}>
            <div className={styles.modalAdd}>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>TAMBAH PEGAWAI</h5>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setShowAddModal(false)}
              >
                <RiCloseLine style={{ marginBottom: '-3px' }} />
              </button>
              <div className={styles.modalContent}>
                <div className='admin-pegawai-handler-container'>
                  <div className='admin-pegawai-handler-input'>
                    <p>Nama Pegawai</p>
                    <input
                      className='border-2 uppercase'
                      placeholder='nama seperti di IC'
                      type='text'
                      name='Nama'
                      id='nama'
                      onChange={(e) => (currentName.current = e.target.value)}
                    />
                    <br />
                    <p>Gred</p>
                    <input
                      className='border-2'
                      type='text'
                      name='Gred'
                      id='gred'
                      onChange={(e) => (currentGred.current = e.target.value)}
                    />
                    <br />
                    <p>Klinik Bertugas</p>
                    <select
                      className='border-2'
                      onChange={(e) => (currentKp.current = e.target.value)}
                    >
                      <option selected disabled>
                        Pilih Klinik
                      </option>
                      {klinikData.klinik.map((k, index) => (
                        <option value={k.nama}>{k.nama}</option>
                      ))}
                    </select>
                    {/* {currKp && <h2 className="hidden">{currKp}</h2>} */}
                    <br />
                    <p>Role</p>
                    <select
                      className='border-2'
                      onChange={(e) => (currentRole.current = e.target.value)}
                    >
                      <option selected disabled>
                        Pilih Role
                      </option>
                      <option value='admin'>Admin</option>
                      <option value='marhean'>Marhaen</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button className={styles.deleteBtn} type='submit'>
                    TAMBAH
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => setShowAddModal(false)(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }

  function AddFacility() {
    klinikRefetch();
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div
            className={styles.darkBG}
            onClick={() => setShowAddModal(false)}
          />
          <div className={styles.centered}>
            <div className={styles.modalAdd}>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>Tambah {jenisFacility}</h5>
              </div>
              <button
                className={styles.closeBtn}
                onClick={() => setShowAddModal(false)}
              >
                <RiCloseLine style={{ marginBottom: '-3px' }} />
              </button>
              <div className={styles.modalContent}>
                <div className='admin-pegawai-handler-container'>
                  <div className='admin-pegawai-handler-input'>
                    <p>Nama {jenisFacility}</p>
                    <input
                      className='border-2'
                      type='text'
                      name='Nama'
                      id='nama'
                      onChange={(e) => (currentName.current = e.target.value)}
                    />
                  </div>
                  <p>Klinik Bertugas</p>
                  <select
                    className='border-2'
                    onChange={(e) => (currentKp.current = e.target.value)}
                  >
                    <option selected disabled>
                      Pilih Klinik
                    </option>
                    {klinikData.klinik.map((k, index) => (
                      <option value={k.nama}>{k.nama}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button className={styles.deleteBtn} type='submit'>
                    TAMBAH
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }

  if (klinikLoading) {
    return (
      <div>
        <Ring />
      </div>
    );
  }

  if (klinikError) {
    return <div>Error!</div>;
  }

  return (
    <>
      {jenisFacility === 'klinik' && <AddKlinik />}
      {jenisFacility === 'pegawai' && <AddPegawai />}
      {jenisFacility !== 'klinik' && jenisFacility !== 'pegawai' && (
        <AddFacility />
      )}
    </>
  );
};

export default Modal;
