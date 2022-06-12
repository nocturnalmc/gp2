import React, { useEffect, useState } from "react";
import styles from "../Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { getKP, searchFacility, editFacility } from "../controllers/Helper";

const Modal = ({ setEditOpen, Id }) => {
  const [facility, setFacility] = useState([]);
  const [KP, setKP] = useState([]);
  const [currKp, setCurrKp] = useState("");

  const selectChangeKp = (event) => {
    const value = event.target.value;
    setCurrKp(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: Id,
      kp: currKp,
    };
    await editFacility(payload, setEditOpen);
    window.location.reload();
  };

  useEffect(() => {
    searchFacility(Id).then((res) => {
      setFacility(res.data);
    });
    getKP().then((res) => {
      setKP(res.data);
    });
  }, [Id]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.darkBG} onClick={() => setEditOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modalEdit}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>MANAGE </h5>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setEditOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              <div className="admin-pegawai-handler-container">
                <div className="admin-pegawai-handler-input">
                  <p>Nama Fasiliti: {facility.nama}</p>
                  <br />
                  <p>Klinik Bertugas</p>
                  <select className="border-2" onChange={selectChangeKp}>
                    <option selected disabled>
                      Pilih Klinik
                    </option>
                    {KP.map((k, index) => (
                      <option value={k.nama}>{k.nama}</option>
                    ))}
                  </select>
                  {/* {currKp && <h2 className="hidden">{currKp}</h2>} */}
                </div>
              </div>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} type="submit">
                  UBAH
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setEditOpen(false)}
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
};

export default Modal;
