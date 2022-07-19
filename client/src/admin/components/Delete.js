import { useGlobalAdminAppContext } from '../context/adminAppContext';
import { useMutation } from '@apollo/client';
import { Ring } from 'react-awesome-spinners';
import styles from '../Modal.module.css';
import { RiCloseLine } from 'react-icons/ri';

const Modal = ({
  jenisFacility,
  setShowDeleteModal,
  id,
  deleteCandidate,
  refetchFacilities,
  refetchOperators,
  toast,
}) => {
  const { KILLITWITHFIRE } = useGlobalAdminAppContext();
  const [killItWithFire, { loading }] = useMutation(KILLITWITHFIRE);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await killItWithFire({
      variables: {
        _id: id,
        jenisFasiliti: jenisFacility,
      },
    });
    if (jenisFacility !== 'Pegawai') {
      refetchFacilities();
    }
    if (jenisFacility === 'Pegawai') {
      refetchOperators();
    }
    setShowDeleteModal(false);
    toast.info(`Data berjaya dipadam`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (loading) {
    return (
      <div>
        <Ring />
      </div>
    );
  }

  return (
    <>
      <div
        className={styles.darkBG}
        onClick={() => setShowDeleteModal(false)}
      />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>AWAS!</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setShowDeleteModal(false)}
          >
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>
            Anda YAKIN untuk menghapus {deleteCandidate}?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={handleSubmit}>
                YA
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setShowDeleteModal(false)}
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
