import { FaPlus } from "react-icons/fa";
import { getKP, getTaska, getCurrentUser } from "../../controllers/helper";
import { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModalFacility";
import AddModal from "../AddModalFacility";

function TaskaTable() {
  const [kp, setKP] = useState([]);
  const [taska, setTaska] = useState([]);
  const [daerah, setDaerah] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [Id, setId] = useState("");

  useEffect(() => {
    getTaska().then((res) => {
      setTaska(res.data);
    });
    getKP().then((res) => {
      setKP(res.data);
    });
    getCurrentUser().then((res) => {
      setDaerah(res.data.data.daerah);
    });
  }, []);
  function handleClick(e) {
    setId(e.target.id);
    console.log(e.target.id);
  }
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold">Senarai Taska Daerah {daerah}</h1>
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 px-3">Bil.</th>
            <th className="border border-slate-600 px-20">Nama Taska</th>
            <th className="border border-slate-600 px-10">Nama Klinik</th>
            <th className="border border-slate-600 px-3">Manage</th>
          </tr>
        </thead>
        <select className="border-2 absolute top-40 right-5 w-24">
          {kp.map((k, index) => (
            <option>{k.nama}</option>
          ))}
        </select>
        <tbody>
          {taska.map((t, index) => (
            <tr>
              <td className="border border-slate-700">{index + 1}</td>
              <td className="border border-slate-700">{t.nama}</td>
              <td className="border border-slate-700">{t.handler}</td>
              <td className="border border-slate-700">
                <button
                  className="bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2"
                  id={t._id}
                  onClick={() => {
                    setEditOpen(true);
                    setId(t._id);
                  }}
                >
                  Edit
                </button>
                {editOpen && <EditModal setEditOpen={setEditOpen} Id={Id} />}
                <button
                  className="bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2"
                  id={t._id}
                  onClick={(e) => {
                    setIsOpen(true);
                    // setEditOpen(false);
                    handleClick(e);
                  }}
                >
                  Delete
                </button>
                {isOpen && <DeleteModal setIsOpen={setIsOpen} Id={Id} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-admin3 absolute top-5 right-5 p-2 rounded-md text-white shadow-xl"
        id="addFac"
        onClick={() => {
          setAddOpen(true);
          setEditOpen(false);
          setIsOpen(false);
        }}
      >
        <div className="text-adminWhite text-7xl">
          <FaPlus />
        </div>
      </button>
      {addOpen && <AddModal setAddOpen={setAddOpen} jenisFacility="taska" />}
    </div>
  );
}

export default TaskaTable;
