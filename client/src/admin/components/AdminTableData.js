function AdminTableHeader() {
  function KlinikTableHeader() {
    return (
      <div className="admin-table-header-container">
        <div className="admin-table-header-container-text">
          <table>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Nama KP</th>
                <th>Username</th>
                <th>Password</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Calypso</td>
                <td>666</td>
                <td>Always</td>
                <td>
                  208 Taman Nilam Jalan Datuk Kumbar Alor Setar 05300 Kedah
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mariya</td>
                <td>999</td>
                <td>Female</td>
                <td>
                  434 Jalan Permai 2 Taman Permai Indah Alor Gajah 78500 Melaka
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  function StaffTableHeader() {
    return (
      <div className="admin-table-header-container">
        <div className="admin-table-header-container-text">
          <table>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Nama</th>
                <th>Gred</th>
                <th>KP</th>
                <th>Nama Klinik Pergigian</th>
                <th>Role</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Calypso</td>
                <td>666</td>
                <td>KPDK</td>
                <td>Klinik Pergigian Datuk Kumbar</td>
                <td>Driller</td>
                <td>Wewwww</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mariya</td>
                <td>999</td>
                <td>Female</td>
                <td>
                  434 Jalan Permai 2 Taman Permai Indah Alor Gajah 78500 Melaka
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  function EducationCenterTableHeader() {
    return (
      <div className="admin-table-header-container">
        <div className="admin-table-header-container-text">
          <table>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Nama</th>
                <th>Nama Klinik Pergigian</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Calypso</td>
                <td>666</td>
                <td>KPDK</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Calypso</td>
                <td>666</td>
                <td>KPDK</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <KlinikTableHeader /> */}
      <StaffTableHeader />
      {/* <EducationCenterTableHeader /> */}
    </>
  );
}

export default AdminTableHeader;
