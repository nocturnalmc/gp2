import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useGlobalUserAppContext } from '../context/userAppContext';

function UserUmum() {
  const { userToken, dateToday } = useGlobalUserAppContext();

  const [isLoading, setIsLoading] = useState(true);
  const [nama, setNama] = useState('');
  const [tarikhKedatangan, setTarikhKedatangan] = useState(dateToday);
  const [queryResult, setQueryResult] = useState([]);
  const [pilih, setPilih] = useState('');
  const [resultPilih, setResultPilih] = useState([]);

  useEffect(() => {
    const query = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `/api/v1/query/umum?nama=${nama}&tarikhKedatangan=${tarikhKedatangan}`,
          { headers: { Authorization: `Bearer ${userToken}` } }
        );
        setQueryResult(data.umumResultQuery);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    query();
  }, [nama, tarikhKedatangan]);

  useEffect(() => {
    const resultFilter = queryResult.filter((singlePersonUmum) => {
      return singlePersonUmum._id === pilih;
    });
    setResultPilih(resultFilter);
  }, [pilih]);

  return (
    <>
      <div className='px-10 h-full p-3 overflow-y-auto'>
        <form className='text-left'>
          <h2 className='text-xl font-semibold flex flex-row p-2'>CARIAN</h2>
          <label htmlFor='nama-pesakit' className='flex flex-row p-2'>
            nama pesakit
          </label>
          <input
            onChange={(e) => {
              setNama(e.target.value);
            }}
            value={nama}
            type='text'
            name='nama-pesakit'
            id='nama-pesakit'
            className='appearance-none leading-7 px-3 py-1 ring-2 w-full focus:ring-2 focus:ring-user1 focus:outline-none rounded-md shadow-md'
          />
          <label htmlFor='kad-pengenalan' className='flex flex-row p-2'>
            tarikh kedatangan
          </label>
          <input
            onChange={(e) => {
              setTarikhKedatangan(e.target.value);
            }}
            value={tarikhKedatangan}
            type='date'
            name='tarikh-kedatangan'
            id='tarikh-kedatangan'
            className='outline outline-1 outline-user1'
          />
        </form>
        <section className='my-5 p-1 outline outline-1 outline-user1'>
          <h2 className='text-xl font-semibold flex flex-row pl-12 p-2'>
            SENARAI CARIAN
          </h2>
          <table className='m-auto mb-3 w-11/12 outline outline-1 outline-userBlack'>
            <tr className='bg-user3 p-2'>
              <th className='outline outline-1 outline-userBlack'>BIL</th>
              <th className='outline outline-1 outline-userBlack w-3/6'>
                NAMA PESAKIT
              </th>
              <th className='outline outline-1 outline-userBlack'>
                KAD PENGENALAN
              </th>
              <th className='outline outline-1 outline-userBlack'>
                TARIKH LAWATAN TERAKHIR
              </th>
              <th className='outline outline-1 outline-userBlack'>AKTIFKAN</th>
            </tr>
            {!isLoading &&
              queryResult.map((singlePersonUmum, index) => {
                return (
                  <tr>
                    <td
                      className={`${
                        pilih === singlePersonUmum._id && 'bg-user4'
                      } outline outline-1 outline-userBlack`}
                    >
                      {index + 1}
                    </td>
                    <td
                      className={`${
                        pilih === singlePersonUmum._id && 'bg-user4'
                      } outline outline-1 outline-userBlack`}
                    >
                      {singlePersonUmum.nama}
                    </td>
                    <td
                      className={`${
                        pilih === singlePersonUmum._id && 'bg-user4'
                      } outline outline-1 outline-userBlack`}
                    >
                      {singlePersonUmum.ic}
                    </td>
                    <td
                      className={`${
                        pilih === singlePersonUmum._id && 'bg-user4'
                      } outline outline-1 outline-userBlack`}
                    >
                      {singlePersonUmum.tarikhKedatangan}
                    </td>
                    <td
                      onClick={() => setPilih(singlePersonUmum._id)}
                      className={`${
                        pilih === singlePersonUmum._id && 'bg-user4'
                      } outline outline-1 outline-userBlack hover:cursor-pointer text-user2`}
                    >
                      <u>PILIH</u>
                    </td>
                  </tr>
                );
              })}
          </table>
          {isLoading && <p className='text-xl font-semibold'>Loading...</p>}
        </section>
        <section className='outline outline-1 outline-userBlack grid grid-cols-1 md:grid-cols-2'>
          {resultPilih.map((singlePersonUmum) => {
            return (
              <>
                <div className='mb-3'>
                  <div className='text-l font-bold flex flex-row pl-5 p-2'>
                    <h1>MAKLUMAT AM PESAKIT</h1>
                  </div>
                  <div className='text-s flex flex-row pl-5'>
                    <h2 className='font-semibold'>NAMA :</h2>
                    <p className='ml-1'>{singlePersonUmum.nama}</p>
                  </div>
                  <div className='text-s flex flex-row pl-5'>
                    <h2 className='font-semibold'>UMUR :</h2>
                    <p className='ml-1'>{singlePersonUmum.umur} tahun</p>
                  </div>
                </div>
                <div className='md:pt-10'>
                  <div className='text-s flex flex-row pl-5'>
                    <h2 className='font-semibold'>JANTINA :</h2>
                    <p className='ml-1'>{singlePersonUmum.jantina}</p>
                  </div>
                  <div className='text-s flex flex-row pl-5'>
                    <h2 className='font-semibold'>IC/Passport :</h2>
                    <p className='ml-1'>{singlePersonUmum.ic}</p>
                  </div>
                  <Link
                    to={`/user/form-umum/${singlePersonUmum._id}`}
                    className='float-right m-2 p-2 capitalize bg-user3 hover:bg-user1 hover:text-userWhite transition-all'
                  >
                    masukkan reten
                  </Link>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default UserUmum;
