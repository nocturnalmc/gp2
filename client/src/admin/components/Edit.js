import { useGlobalAdminAppContext } from '../context/adminAppContext';
import { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import { RiCloseLine } from 'react-icons/ri';
import styles from '../Modal.module.css';

const Modal = ({
  setShowEditModal,
  id,
  daerah,
  jenisFacility,
  refetchFacilities,
  refetchOperators,
  toast,
}) => {
  const {
    GET_KLINIK_FOR_DAERAH,
    GETFACORPEG,
    UPDATE_OPERATOR,
    UPDATE_FACILITY,
  } = useGlobalAdminAppContext();

  const { data, loading, error } = useQuery(GETFACORPEG, {
    variables: { id: id },
  });

  const {
    data: klinikData,
    loading: klinikLoading,
    error: klinikError,
  } = useQuery(GET_KLINIK_FOR_DAERAH, {
    variables: { daerah: daerah },
  });

  const [updateOperator] = useMutation(UPDATE_OPERATOR);
  const [updateFacility] = useMutation(UPDATE_FACILITY);
  const currentKp = useRef();
  const currentGred = useRef();
  const currentRole = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (jenisFacility !== 'Pegawai') {
      await updateFacility({
        variables: {
          _id: id,
          nama: data.facOrPeg.nama,
          negeri: data.facOrPeg.negeri,
          daerah: daerah,
          handler: currentKp.current,
          jenisFasiliti: jenisFacility,
        },
      });
      refetchFacilities();
    }
    if (jenisFacility === 'Pegawai') {
      await updateOperator({
        variables: {
          _id: id,
          nama: data.facOrPeg.nama,
          negeri: data.facOrPeg.negeri,
          daerah: data.facOrPeg.daerah,
          kpSkrg: currentKp.current,
          gred: currentGred.current,
          role: currentRole.current,
        },
      });
      refetchOperators();
    }
    setShowEditModal(false);
    toast.info(`Data berjaya dikemaskini`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function Facility() {
    return (
      <form onSubmit={handleSubmit}>
        <div
          className={styles.darkBG}
          onClick={() => setShowEditModal(false)}
        />
        <div className={styles.centered}>
          <div className={styles.modalEdit}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>MANAGE </h5>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setShowEditModal(false)}
            >
              <RiCloseLine style={{ marginBottom: '-3px' }} />
            </button>
            <div className={styles.modalContent}>
              <div className='admin-pegawai-handler-container'>
                <div className='admin-pegawai-handler-input'>
                  <p>Nama Fasiliti: {data.facOrPeg.nama} </p>
                  <br />
                  <p>Klinik Bertugas</p>
                  <select
                    className='border-2'
                    onChange={(e) => (currentKp.current = e.target.value)}
                  >
                    <option selected disabled>
                      Pilih Klinik Baru..
                    </option>
                    {klinikData.klinik.map((k, index) => (
                      <option value={k.nama}>{k.nama}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} type='submit'>
                  UBAH
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }

  function Pegawai() {
    return (
      <form onSubmit={handleSubmit}>
        <div
          className={styles.darkBG}
          onClick={() => setShowEditModal(false)}
        />
        <div className={styles.centered}>
          <div className={styles.modalEdit}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>MANAGE PEGAWAI</h5>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setShowEditModal(false)}
            >
              <RiCloseLine style={{ marginBottom: '-3px' }} />
            </button>
            <div className={styles.modalContent}>
              <div className='admin-pegawai-handler-container'>
                <div className='admin-pegawai-handler-input'>
                  <p>Nama Pegawai: {data.facOrPeg.nama}</p>
                  <br />
                  <p>Gred</p>
                  <input
                    key='gred-input01'
                    className='border-2'
                    type='text'
                    onChange={(e) => {
                      currentGred.current = e.target.value;
                    }}
                  />
                  <br />
                  <p>Klinik Bertugas</p>
                  <select
                    className='border-2'
                    onChange={(e) => {
                      currentKp.current = e.target.value;
                    }}
                  >
                    <option selected disabled>
                      Pilih Klinik
                    </option>
                    {klinikData.klinik.map((k, index) => (
                      <option value={k.nama}>{k.nama}</option>
                    ))}
                  </select>
                  <br />
                  <p>Role</p>
                  <select
                    className='border-2'
                    onChange={(e) => {
                      currentRole.current = e.target.value;
                    }}
                  >
                    <option selected disabled>
                      Pilih Role
                    </option>
                    <option>Admin</option>
                    <option>Marhaen</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} type='submit'>
                  UBAH
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }

  if (loading || klinikLoading) {
    return (
      <>
        <div className={styles.darkBG} />
        <div className={styles.centered}>
          <div className={styles.modalEdit}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Loading</h5>
            </div>
            <button className={styles.closeBtn}>
              <RiCloseLine style={{ marginBottom: '-3px' }} />
            </button>
            <div className={styles.modalContent}>
              <div className='admin-pegawai-handler-container'>
                <div className='admin-pegawai-handler-input'>
                  <Ring size={100} />
                </div>
              </div>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error || klinikError) {
    return <div>Error!</div>;
  }

  return (
    <>
      {jenisFacility !== 'Pegawai' && <Facility />}
      {jenisFacility === 'Pegawai' && <Pegawai />}
    </>
  );
};

export default Modal;
