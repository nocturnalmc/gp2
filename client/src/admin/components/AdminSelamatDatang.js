import AdminTable from "./AdminTable";
import AdminAdder from "./AdminAdder";

function AdminSelamatDatang() {
  function WelcomeText() {
    return (
      <div className="admin-selamat-datang-container-text">
        <h1>Selamat Datang Admin!</h1>
        <br />
        <p>Sila pilih fungsi di sidebar</p>
      </div>
    );
  }

  return (
    <div className="admin-selamat-datang">
      <div className="admin-selamat-datang-container">
        {/* <WelcomeText /> */}
        {/* <AdminTable /> */}
        <AdminAdder />
      </div>
    </div>
  );
}

export default AdminSelamatDatang;
