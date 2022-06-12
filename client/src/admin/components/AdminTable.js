import AdminTableData from "./AdminTableData";

function AdminTable() {
  function KlinikListTable() {
    return (
      <div className="admin-table">
        <h1>Senarai Klinik Pergigian Daerah $$$</h1>
        <div className="admin-table-container">
          <AdminTableData />
        </div>
        <button id="addFac">Hehe Boi</button>
      </div>
    );
  }

  function StaffListTable() {
    function Pegawai() {
      return <h1>Senarai Pegawai Pergigian Daerah $$$</h1>;
    }
    function Juruterapi() {
      return <h1>Senarai Juruterapi Pergigian Daerah $$$</h1>;
    }
    return (
      <div className="admin-table">
        <Pegawai />
        {/* <Juruterapi /> */}
        <div className="admin-table-container">
          <AdminTableData />
        </div>
        <button id="addFac">Hehe Boi</button>
      </div>
    );
  }
  function EducationCenterListTable() {
    return (
      <div className="admin-table">
        <h1>Senarai Taska Daerah $$$</h1>
        <div className="admin-table-container">
          <AdminTableData />
        </div>
        <button id="addFac">Hehe Boi</button>
      </div>
    );
  }

  return (
    <div>
      {/* <KlinikListTable /> */}
      <StaffListTable />
      {/* <EducationCenterListTable /> */}
    </div>
  );
}

export default AdminTable;
