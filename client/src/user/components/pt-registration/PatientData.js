export default function PatientData({
  showForm,
  setShowForm,
  setEditId,
  editForm,
  setEditForm,
  data,
  loading,
  error,
  philter,
  setPhilter,
}) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!showForm && !editForm) {
    return (
      <>
        <input
          className='p-2 w-auto'
          type='text'
          name='carianPesakit'
          placeholder='Cari pesakit...'
          onChange={(e) => setPhilter(e.target.value.toLowerCase())}
        />
        <br />
        <button
          className='border border-1 border-userBlack bg-user3 p-2 mt-2 items-left'
          onClick={() => setShowForm(true)}
        >
          Daftar Pesakit Baru
        </button>
        <div className='border mt-2'>
          <div className='justify-center items-center'>
            <div className='mt-2'>
              <table className='m-auto mb-5 w-11/12 outline outline-1 outline-userBlack'>
                <tbody>
                  <tr className='bg-user3 p-2'>
                    <th className='outline outline-1 outline-userBlack'>BIL</th>
                    <th className='outline outline-1 outline-userBlack'>
                      NAMA
                    </th>
                    <th className='outline outline-1 outline-userBlack'>
                      NO I/C
                    </th>
                    <th className='outline outline-1 outline-userBlack'>
                      TARIKH RAWATAN TERAKHIR
                    </th>
                    <th className='outline outline-1 outline-userBlack'>
                      AKTIFKAN???
                    </th>
                  </tr>
                  {data.listPatientByTarikhKedatangan
                    .filter((pt) => pt.nama.includes(philter))
                    .map((p, index) => (
                      <>
                        <tr key={p._id}>
                          <td className='outline outline-1 outline-userBlack'>
                            {index + 1}
                          </td>
                          <td className='outline outline-1 outline-userBlack'>
                            {p.nama}
                          </td>
                          <td className='outline outline-1 outline-userBlack'>
                            {p.ic}
                          </td>
                          <td className='outline outline-1 outline-userBlack'>
                            {p.tarikhKedatangan}
                          </td>
                          <td className='outline outline-1 outline-userBlack'>
                            <button
                              className='border border-1 border-userBlack bg-user3 items-left text-xs'
                              onClick={(e) => {
                                setEditId(p._id);
                                setTimeout(() => {
                                  setEditForm(true);
                                }, 300);
                              }}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
