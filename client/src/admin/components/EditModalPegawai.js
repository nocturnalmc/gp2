import React, { useEffect, useState } from "react";
import styles from "../Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { searchPg, getKP, editPegawai } from "../controllers/Helper";

const Modal = ({ setEditOpen, Id }) => {
  const [Pegawai, setPegawai] = useState([]);
  const [KP, setKP] = useState([]);
  const [gred, setGred] = useState("");
  const [currKp, setCurrKp] = useState("");
  const [role, setRole] = useState("");

  const selectChangeKp = (event) => {
    const value = event.target.value;
    setCurrKp(value);
  };

  const selectChangeRole = (event) => {
    const value = event.target.value;
    setRole(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: Id,
      gred: gred,
      kp: currKp,
      role: role,
    };
    await editPegawai(payload, setEditOpen);
    window.location.reload();
  };

  useEffect(() => {
    searchPg(Id).then((res) => {
      setPegawai(res.data);
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
              <h5 className={styles.heading}>MANAGE PEGAWAI</h5>
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
                  <p>Nama Pegawai: {Pegawai.nama}</p>
                  <br />
                  <p>Gred</p>
                  <input
                    className="border-2"
                    type="text"
                    name="Gred"
                    id="gred"
                    placeholder={Pegawai.gred}
                    onChange={(e) => setGred(e.target.value)}
                  />
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
                  <br />
                  <p>Role</p>
                  <select className="border-2" onChange={selectChangeRole}>
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
