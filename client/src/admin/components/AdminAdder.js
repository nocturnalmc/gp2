function AdminAddStuff() {
  function TambahPegawai() {
    return (
      <div className="admin-pegawai-handler-container">
        <div className="admin-pegawai-handler-top-text">
          <h1>TAMBAH PEGAWAI</h1>
        </div>
        <div className="admin-pegawai-handler-input">
          <p>Nama</p>
          <input type="text" name="Nama" id="nama" />
          <br />
          <br />
          <p>Gred</p>
          <input type="text" name="Gred" id="gred" />
          <br />
          <br />
          <p>Tempat Bertugas</p>
          <input type="text" name="tBertugas" id="tBertugas" />
          <br />
          <br />
          <select name="" id="">
            Sila pilih
            <option value="">HeheBoi</option>
            <option value="">HeheBoi2</option>
            <option value="">HeheBoi2</option>
          </select>
        </div>
        <div className="admin-pegawai-handler-button">
          <button>Kembali</button>
          <br />
          <button>Simpan</button>
        </div>
        <div className="admin-pegawai-handler-legend">
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Gred</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hehe</td>
                <td>boi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function ManagePegawai() {
    return (
      <div className="admin-pegawai-handler-container">
        <div className="admin-pegawai-handler-top-text">
          <h1>MANAGE PEGAWAI</h1>
        </div>
        <div className="admin-pegawai-handler-input">
          <p>Nama</p>
          <input type="text" name="Nama" id="nama" />
          <br />
          <br />
          <p>Gred</p>
          <input type="text" name="Gred" id="gred" />
          <br />
          <br />
          <p>Tempat Bertugas</p>
          <input type="text" name="tBertugas" id="tBertugas" />
          <br />
          <br />
          <select name="" id="">
            Sila pilih
            <option value="">HeheBoi</option>
            <option value="">HeheBoi2</option>
            <option value="">HeheBoi2</option>
          </select>
        </div>
        <div className="admin-pegawai-handler-button">
          <button>Kembali</button>
          <br />
          <button>Kemaskini</button>
        </div>
        <div className="admin-pegawai-handler-legend">
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Gred</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hehe</td>
                <td>boi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function TambahFacility() {
    return (
      <div className="admin-pegawai-handler-container">
        <div className="admin-pegawai-handler-top-text">
          <h1>TAMBAH TASKA/SEKOLAH/INSTITUSI</h1>
        </div>
        <div className="admin-pegawai-handler-input">
          <p>Nama</p>
          <input type="text" name="Nama" id="nama" />
          <br />
          <br />
          <p>Nama Klinik Pergigian</p>
          <select name="" id="">
            Sila pilih
            <option value="">HeheBoi</option>
            <option value="">HeheBoi2</option>
            <option value="">HeheBoi2</option>
          </select>
        </div>
        <div className="admin-pegawai-handler-button">
          <button>Kembali</button>
          <br />
          <button>Simpan</button>
        </div>
      </div>
    );
  }

  function ManageFacility() {
    return (
      <div className="admin-pegawai-handler-container">
        <div className="admin-pegawai-handler-top-text">
          <h1>MANAGE TASKA/SEKOLAH/INSTITUSI</h1>
        </div>
        <div className="admin-pegawai-handler-input">
          <p>Nama</p>
          <input type="text" name="Nama" id="nama" />
          <br />
          <br />
          <p>Nama Klinik Pergigian</p>
          <select name="" id="">
            Sila pilih
            <option value="">HeheBoi</option>
            <option value="">HeheBoi2</option>
            <option value="">HeheBoi2</option>
          </select>
        </div>
        <div className="admin-pegawai-handler-button">
          <button>Kembali</button>
          <br />
          <button>Simpan</button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <TambahPegawai /> */}
      {/* <ManagePegawai /> */}
      <TambahFacility />
      {/* <ManageFacility /> */}
    </>
  );
}

export default AdminAddStuff;
