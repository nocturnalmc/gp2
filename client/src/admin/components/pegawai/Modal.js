import React from "react";
import styles from "../../Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { getKP, addPp } from "../../controllers/Helper";

const Modal = ({ setAddOpen }) => {
  const [newPp, setnewPp] = useState("");
  const [gred, setGred] = useState("");
  const [currKp, setCurrKp] = useState("");
  const [role, setRole] = useState("");
  const [KP, setKP] = useState([]);

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
    const response = await addPp(
      {
        nama: newPp,
        gred: gred,
        kp: currKp,
        role: role,
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
              <h5 className={styles.heading}>TAMBAH PEGAWAI</h5>
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
                  <p>Nama Pegawai</p>
                  <input
                    className="border-2"
                    type="text"
                    name="Nama"
                    id="nama"
                    onChange={(e) => setnewPp(e.target.value)}
                  />
                  <br />
                  <p>Gred</p>
                  <input
                    className="border-2"
                    type="text"
                    name="Gred"
                    id="gred"
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
                  {/* {role && <h2 className="hidden">{role}</h2>} */}
                </div>
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
