import { FaPlus } from "react-icons/fa";

function JPTable() {
  function JP() {
    return (
      <h1 className="text-3xl font-bold">
        Senarai JP Pergigian Daerah Kota Setar / Pendang
      </h1>
    );
  }
  // function Juruterapi() {
  //   return (
  //     <h1 className="text-3xl font-bold">
  //       Senarai Juruterapi Pergigian Daerah Kota Setar / Pendang
  //     </h1>
  //   );
  // }
  return (
    <div className="flex flex-col items-center gap-5">
      <JP />
      {/* <Juruterapi /> */}
      <div>
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 px-3">Bil.</th>
              <th class="border border-slate-600 px-20">Nama</th>
              <th class="border border-slate-600 px-4">Gred</th>
              {/* <th>KP</th> */}
              <th class="border border-slate-600 px-10">Nama Klinik Pergigian</th>
              <th class="border border-slate-600 px-5">Role</th>
              <th class="border border-slate-600 ...">Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-700 ...">1</td>
              <td class="border border-slate-700 ...">Calypso</td>
              <td class="border border-slate-700 ...">666</td>
              <td class="border border-slate-700 ...">
                Klinik Pergigian Datuk Kumbar
              </td>
              {/* <td>KP Datuk Kumbar</td> */}
              <td class="border border-slate-700 ...">Driller</td>
              <td class="border border-slate-700 ...">
                <div className="admin-table-header-container-text-manage">
                  <button className="bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2">
                    Edit
                  </button>
                  <button className="bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border border-slate-700 ...">2</td>
              <td class="border border-slate-700 ...">Mariya</td>
              <td class="border border-slate-700 ...">999</td>
              <td class="border border-slate-700 ...">
                Klinik Pergigian Alor Janggus
              </td>
              {/* <td>KP Alor Janggus</td> */}
              <td class="border border-slate-700 ...">Driller</td>
              <td class="border border-slate-700 ...">
                <div className="admin-table-header-container-text-manage">
                  <button className="bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2">
                    Edit
                  </button>
                  <button className="bg-admin3 relative top-0 right-0 p-1 w-20 rounded-md text-white shadow-xl m-2">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="bg-admin3 absolute top-5 right-5 p-2 rounded-md text-white shadow-xl"
        id="addFac"
      >
        <div className="text-adminWhite text-7xl">
          <FaPlus />
        </div>
      </button>
    </div>
  );
}

export default JPTable;
