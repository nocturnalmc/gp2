import React from "react";
import styles from "../Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { getKP, addFacility } from "../controllers/Helper";

const Modal = ({ setAddOpen, jenisFacility }) => {
  const [facility, setFacility] = useState("");
  const [KP, setKP] = useState([]);
  const [currKp, setCurrKp] = useState("");

  const selectChangeKp = (event) => {
    const value = event.target.value;
    setCurrKp(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addFacility(
      {
        nama: facility,
        kp: currKp,
        jenisFacility: jenisFacility,
      },
      setAddOpen
    );
    console.log(response);
    window.location.reload();
  };

  useEffect(() => {
    getKP().then((res) => {
      setKP(res.data);
    });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.darkBG} onClick={() => setAddOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modalAdd}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Tambah {jenisFacility}</h5>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setAddOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              <div className="admin-pegawai-handler-container">
                <div className="admin-pegawai-handler-input">
                  <p>Nama {jenisFacility}</p>
                  <input
                    className="border-2"
                    type="text"
                    name="Nama"
                    id="nama"
                    onChange={(e) => setFacility(e.target.value)}
                  />
                </div>
                <p>Klinik Bertugas</p>
                <select className="border-2" onChange={selectChangeKp}>
                  <option selected disabled>
                    Pilih Klinik
                  </option>
                  {KP.map((k, index) => (
                    <option value={k.nama}>{k.nama}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} type="submit">
                  TAMBAH
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setAddOpen(false)}
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
