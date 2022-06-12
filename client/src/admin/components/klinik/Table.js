import { FaPlus } from "react-icons/fa";
import { getCurrentUser, getKP, deleteData } from "../../controllers/Helper.js";
import { useEffect, useState } from "react";
import styles from "../../../admin/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import AddModal from "../AddModalKlinik";

function KlinikTable() {
  const [KP, setKP] = useState([]);
  const [daerah, setDaerah] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [Id, setId] = useState("");

  useEffect(() => {
    getKP().then((res) => {
      setKP(res.data);
    });
    getCurrentUser().then((res) => {
      setDaerah(res.data.data.daerah);
    });
  }, []);

  function handleClick(e) {
    setId(e.target.id);
  }

  function AlternativeDelete() {
    useEffect(() => {
      console.log(Id);
    }, []);

    return (
      <>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>AWAS!</h5>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              Anda YAKIN untuk menghapus data ini?
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button
                  className={styles.deleteBtn}
                  onClick={async () => {
                    setIsOpen(false);
                    await deleteData(Id);
                    window.location.reload();
                  }}
                >
                  YA
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold">
        Senarai Klinik Pergigian Daerah {daerah}
      </h1>
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">Bil.</th>
            <th className="border border-slate-600">Nama KP</th>
            <th className="border border-slate-600">Manage</th>
          </tr>
        </thead>
        <tbody>
          {KP.map((kp, index) => (
            <tr>
              <td className="border border-slate-700">{index + 1}</td>
              <td className="border border-slate-700">{kp.nama}</td>
              <td className="border border-slate-700">
                <div>
                  <button
                    className="bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2 z-0"
                    id={kp._id}
                    onClick={(e) => {
                      setIsOpen(true);
                      // setEditOpen(false);
                      handleClick(e);
                    }}
                  >
                    Delete
                  </button>
                  {/* {isOpen && <DeleteModal setIsOpen={setIsOpen} setId={Id} />} */}
                  {isOpen && <AlternativeDelete />}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-admin3 absolute top-5 right-5 p-2 rounded-md text-white shadow-xl z-0"
        id="addFac"
        onClick={() => {
          setAddOpen(true);
          // setEditOpen(false);
          setIsOpen(false);
        }}
      >
        <div className="text-adminWhite text-7xl">
          <FaPlus />
        </div>
      </button>
      {addOpen && <AddModal setAddOpen={setAddOpen} />}
    </div>
  );
}

export default KlinikTable;
