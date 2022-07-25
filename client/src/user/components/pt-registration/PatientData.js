import { Spinner } from 'react-awesome-spinners';
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
  if (loading)
    return (
      <p>
        <Spinner />
      </p>
    );
  if (error) return <p>Error :(</p>;

  if (!showForm && !editForm) {
    return (
      <>
        <div class='flex justify-center'>
          <div class='mb-3 xl:w-96'>
            <input
              type='search'
              className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
              id='carianPesakit'
              placeholder='Cari pesakit...'
              onChange={(e) => setPhilter(e.target.value.toLowerCase())}
            />
          </div>
        </div>
        {/* <input
          className='p-2 w-auto'
          type='text'
          name='carianPesakit'
          placeholder='Cari pesakit...'
          onChange={(e) => setPhilter(e.target.value.toLowerCase())}
        /> */}
        {/* <button
          className='border border-1 border-kaunterBlack bg-user3 p-2 mt-2 items-left'
          onClick={() => setShowForm(true)}
        >
          Daftar Pesakit Baru
        </button> */}
        <button
          type='button'
          className='inline-block px-6 py-2.5 bg-kaunter3 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          onClick={(e) => setShowForm(true)}
        >
          Daftar Pesakit Baru
        </button>
        <div className='border mt-2'>
          <div className='justify-center items-center'>
            <div className='mt-2'>
              <table className='m-auto mb-5 w-11/12 outline outline-1 outline-kaunterBlack'>
                <tbody>
                  <tr className='bg-kaunter3 p-2'>
                    <th className='outline outline-1 outline-kaunterBlack'>
                      BIL
                    </th>
                    <th className='outline outline-1 outline-kaunterBlack'>
                      NAMA
                    </th>
                    <th className='outline outline-1 outline-kaunterBlack'>
                      NO I/C
                    </th>
                    <th className='outline outline-1 outline-kaunterBlack'>
                      TARIKH RAWATAN TERAKHIR
                    </th>
                    <th className='outline outline-1 outline-kaunterBlack'>
                      AKTIFKAN???
                    </th>
                  </tr>
                  {data.listPatientByTarikhKedatangan
                    .filter((pt) => pt.nama.includes(philter))
                    .map((p, index) => (
                      <>
                        <tr>
                          <td className='outline outline-1 outline-kaunterBlack'>
                            {index + 1}
                          </td>
                          <td className='outline outline-1 outline-kaunterBlack'>
                            {p.nama}
                          </td>
                          <td className='outline outline-1 outline-kaunterBlack'>
                            {p.ic}
                          </td>
                          <td className='outline outline-1 outline-kaunterBlack'>
                            {p.tarikhKedatangan}
                          </td>
                          <td className='outline outline-1 outline-kaunterBlack'>
                            <button
                              className='inline-block px-6 py-2.5 bg-kaunter3 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out p-1'
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
