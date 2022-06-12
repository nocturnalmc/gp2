import React from "react";
import styles from "../Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { addKp } from "../controllers/Helper";

const Modal = ({ setAddOpen }) => {
  const [newKp, setnewKp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newKp);
    await addKp(newKp);
    setAddOpen(false);
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.darkBG} onClick={() => setAddOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modalAdd}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>TAMBAH KLINIK PERGIGIAN</h5>
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
                  <p>Nama Klinik Pergigian</p>
                  <input
                    className="border-2"
                    type="text"
                    name="Nama"
                    id="nama"
                    onChange={(e) => setnewKp(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.modalContent}>
              <input type="checkbox" name="checkbox" value="KEPP" />
              KEPP
              <br />
              <input type="checkbox" name="checkbox" value="UTC" />
              UTC
              <br />
              <input type="checkbox" name="checkbox" value="Visiting" />
              Visiting
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
