import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useGlobalUserAppContext } from '../context/userAppContext';

function UserSekolah() {
  const { userToken } = useGlobalUserAppContext();

  const [isLoading, setIsLoading] = useState(true);
  const [allPersonSekolahs, setAllPersonSekolahs] = useState([]);
  const [namaSekolahs, setNamaSekolahs] = useState([]);
  const [darjah, setDarjah] = useState([]);
  const [tingkatan, setTingkatan] = useState([]);
  const [namaKelas, setNamaKelas] = useState([]);
  const [pilihanSekolah, setPilihanSekolah] = useState('');
  const [pilihanDarjah, setPilihanDarjah] = useState('');
  const [pilihanTingkatan, setPilihanTingkatan] = useState('');
  const [pilihanKelas, setPilihanKelas] = useState('');

  // init fetch allPersonSekolahs
  useEffect(() => {
    const fetchAllPersonSekolahs = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('/api/v1/sekolah', {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        const allPersonSekolahs = data.allPersonSekolahs;
        const namaSekolahs = allPersonSekolahs.reduce(
          (arrNamaSekolahs, singlePersonSekolah) => {
            if (!arrNamaSekolahs.includes(singlePersonSekolah.namaSekolah)) {
              arrNamaSekolahs.push(singlePersonSekolah.namaSekolah);
            }
            return arrNamaSekolahs.filter((valid) => valid);
          },
          ['']
        );
        const darjah = allPersonSekolahs.reduce(
          (arrDarjah, singlePersonSekolah) => {
            if (!arrDarjah.includes(singlePersonSekolah.darjah)) {
              arrDarjah.push(singlePersonSekolah.darjah);
            }
            return arrDarjah.filter((valid) => valid);
          },
          ['']
        );
        const tingkatan = allPersonSekolahs.reduce(
          (arrTingkatan, singlePersonSekolah) => {
            if (!arrTingkatan.includes(singlePersonSekolah.tingkatan)) {
              arrTingkatan.push(singlePersonSekolah.tingkatan);
            }
            return arrTingkatan.filter((valid) => valid);
          },
          ['']
        );
        const namaKelas = allPersonSekolahs.reduce(
          (arrNamaKelas, singlePersonSekolah) => {
            if (!arrNamaKelas.includes(singlePersonSekolah.kelas)) {
              arrNamaKelas.push(singlePersonSekolah.kelas);
            }
            return arrNamaKelas.filter((valid) => valid);
          },
          ['']
        );
        setAllPersonSekolahs(data.allPersonSekolahs);
        setNamaSekolahs(namaSekolahs);
        setDarjah(darjah);
        setTingkatan(tingkatan);
        setNamaKelas(namaKelas);
        if (pilihanSekolah === '') {
          setAllPersonSekolahs([]);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPersonSekolahs();
  }, []);

  // when query sekolah
  useEffect(() => {
    const query = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `/api/v1/query/sekolah?namaSekolah=${pilihanSekolah}`,
          { headers: { Authorization: `Bearer ${userToken}` } }
        );
        const allPersonSekolahs = data.sekolahResultQuery;
        const darjah = allPersonSekolahs.reduce(
          (arrDarjah, singlePersonSekolah) => {
            if (!arrDarjah.includes(singlePersonSekolah.darjah)) {
              arrDarjah.push(singlePersonSekolah.darjah);
            }
            return arrDarjah.filter((valid) => valid);
          },
          ['']
        );
        const tingkatan = allPersonSekolahs.reduce(
          (arrTingkatan, singlePersonSekolah) => {
            if (!arrTingkatan.includes(singlePersonSekolah.tingkatan)) {
              arrTingkatan.push(singlePersonSekolah.tingkatan);
            }
            return arrTingkatan.filter((valid) => valid);
          },
          ['']
        );
        const namaKelas = allPersonSekolahs.reduce(
          (arrNamaKelas, singlePersonSekolah) => {
            if (!arrNamaKelas.includes(singlePersonSekolah.kelas)) {
              arrNamaKelas.push(singlePersonSekolah.kelas);
            }
            return arrNamaKelas.filter((valid) => valid);
          },
          ['']
        );
        setAllPersonSekolahs(data.sekolahResultQuery);
        setDarjah(darjah);
        setTingkatan(tingkatan);
        setNamaKelas(namaKelas);
        setPilihanDarjah('');
        setPilihanTingkatan('');
        setPilihanKelas('');
        if (pilihanSekolah === '') {
          setAllPersonSekolahs([]);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    query();
  }, [pilihanSekolah]);

  // when query darjah / tingkatan
  useEffect(() => {
    const query = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `/api/v1/query/sekolah?namaSekolah=${pilihanSekolah}&darjah=${pilihanDarjah}&tingkatan=${pilihanTingkatan}`,
          { headers: { Authorization: `Bearer ${userToken}` } }
        );
        const allPersonSekolahs = data.sekolahResultQuery;
        const namaKelas = allPersonSekolahs.reduce(
          (arrNamaKelas, singlePersonSekolah) => {
            if (!arrNamaKelas.includes(singlePersonSekolah.kelas)) {
              arrNamaKelas.push(singlePersonSekolah.kelas);
            }
            return arrNamaKelas.filter((valid) => valid);
          },
          ['']
        );
        setAllPersonSekolahs(data.sekolahResultQuery);
        setNamaKelas(namaKelas);
        setPilihanKelas('');
        if (pilihanSekolah === '') {
          setAllPersonSekolahs([]);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    query();
  }, [pilihanDarjah, pilihanTingkatan]);

  // when query kelas
  useEffect(() => {
    const query = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `/api/v1/query/sekolah?namaSekolah=${pilihanSekolah}&darjah=${pilihanDarjah}&tingkatan=${pilihanTingkatan}&kelas=${pilihanKelas}`,
          { headers: { Authorization: `Bearer ${userToken}` } }
        );
        setAllPersonSekolahs(data.sekolahResultQuery);
        if (pilihanSekolah === '') {
          setAllPersonSekolahs([]);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    query();
  }, [pilihanKelas]);

  return (
    <>
      <div className='px-10 h-full p-3 overflow-y-auto'>
        <div>
          <h2 className='text-xl font-semibold flex flex-row pl-12 p-2'>
            SILA PILIH
          </h2>
          <p className='flex flex-row pl-12 p-2'>Nama Sekolah</p>
          <select
            value={pilihanSekolah}
            onChange={(e) => {
              setPilihanSekolah(e.target.value);
            }}
            className='capitalize m-auto mb-3 w-11/12 outline outline-1 outline-userBlack'
          >
            <option value=''>Sila pilih..</option>
            {namaSekolahs.map((singleNamaSekolah, index) => {
              return (
                <option
                  value={singleNamaSekolah}
                  key={index}
                  className='capitalize'
                >
                  {singleNamaSekolah}
                </option>
              );
            })}
          </select>
          {!pilihanSekolah.includes('menengah') && pilihanSekolah !== '' && (
            <>
              <p className='flex flex-row pl-12 p-2'>Darjah</p>
              <select
                value={pilihanDarjah}
                onChange={(e) => {
                  setPilihanDarjah(e.target.value);
                }}
                className='capitalize m-auto mb-3 w-11/12 outline outline-1 outline-userBlack'
              >
                <option value=''>Sila pilih..</option>
                {darjah.map((singleDarjah, index) => {
                  return (
                    <option
                      value={singleDarjah}
                      key={index}
                      className='capitalize'
                    >
                      {singleDarjah}
                    </option>
                  );
                })}
              </select>
            </>
          )}
          {pilihanSekolah.includes('menengah') && (
            <>
              <p className='flex flex-row pl-12 p-2'>Tingkatan</p>
              <select
                value={pilihanTingkatan}
                onChange={(e) => {
                  setPilihanTingkatan(e.target.value);
                }}
                className='capitalize m-auto mb-3 w-11/12 outline outline-1 outline-userBlack'
              >
                <option value=''>Sila pilih..</option>
                {tingkatan.map((singleTingkatan, index) => {
                  return (
                    <option
                      value={singleTingkatan}
                      key={index}
                      className='capitalize'
                    >
                      {singleTingkatan}
                    </option>
                  );
                })}
              </select>
            </>
          )}
          {(pilihanDarjah || pilihanTingkatan) && (
            <>
              <p className='flex flex-row pl-12 p-2'>Kelas</p>
              <select
                value={pilihanKelas}
                onChange={(e) => {
                  setPilihanKelas(e.target.value);
                }}
                className='capitalize m-auto mb-3 w-11/12 outline outline-1 outline-userBlack'
              >
                <option value=''>Sila pilih..</option>
                {namaKelas.map((singleNamaKelas, index) => {
                  return (
                    <option
                      value={singleNamaKelas}
                      key={index}
                      className='capitalize'
                    >
                      {singleNamaKelas}
                    </option>
                  );
                })}
              </select>
            </>
          )}
        </div>
        <div>
          <table className='m-auto mb-5 w-11/12 outline outline-1 outline-userBlack'>
            <tr className='bg-user3 p-2'>
              <th className='outline outline-1 outline-userBlack'>BIL</th>
              <th className='outline outline-1 outline-userBlack px-20'>
                NAMA
              </th>
              <th className='outline outline-1 outline-userBlack'>JANTINA</th>
              <th className='outline outline-1 outline-userBlack'>
                OPERATOR TERAKHIR
              </th>
              <th className='outline outline-1 outline-userBlack'>
                STATUS RAWATAN
              </th>
              <th className='outline outline-1 outline-userBlack'>
                STATUS KOTAK
              </th>
              <th className='outline outline-1 outline-userBlack'>ACTION</th>
            </tr>
            {!isLoading &&
              pilihanSekolah &&
              allPersonSekolahs.map((singlePersonSekolah, index) => {
                return (
                  <>
                    <tr>
                      <td className='outline outline-1 outline-userBlack'>
                        {index + 1}
                      </td>
                      <td className='outline outline-1 outline-userBlack'>
                        {singlePersonSekolah.nama}
                      </td>
                      <td className='outline outline-1 outline-userBlack'>
                        {singlePersonSekolah.jantina}
                      </td>
                      <td className='outline outline-1 outline-userBlack'>
                        {singlePersonSekolah.createdByUsername}
                      </td>
                      <td className='outline outline-1 outline-userBlack'>
                        {singlePersonSekolah.statusRawatan}
                      </td>
                      <td className='outline outline-1 outline-userBlack'>
                        BELUM MULA
                      </td>
                      <td className='outline outline-1 outline-userBlack p-2'>
                        <Link
                          to={`/user/form-sekolah/${singlePersonSekolah._id}`}
                          className={`${
                            singlePersonSekolah.statusRawatan === 'selesai'
                              ? 'bg-user7 hover:bg-user8'
                              : singlePersonSekolah.statusRawatan ===
                                'belum selesai'
                              ? 'bg-user3 hover:bg-user2'
                              : 'bg-user6 hover:bg-user9'
                          } text-userWhite rounded-sm shadow-xl p-1 m-1 transition-all`}
                        >
                          {singlePersonSekolah.statusRawatan === 'selesai'
                            ? 'Selesai'
                            : singlePersonSekolah.statusRawatan ===
                              'belum selesai'
                            ? 'kemaskini'
                            : 'tambah'}
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
          </table>
          {isLoading && <p className='text-xl font-semibold'>Loading...</p>}
        </div>
      </div>
    </>
  );
}

export default UserSekolah;
