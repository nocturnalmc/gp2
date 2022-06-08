import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function UserSekolah() {
  return (
    <>
      <div className='container px-10'>
        <div >
          <h2 className='text-xl font-semibold flex flex-row pl-12 p-2'>PILIH</h2> 
          <p className='flex flex-row pl-12 p-2'>Nama Sekolah</p>
          <select className='m-auto mb-1 w-11/12 outline outline-1 outline-userBlack'>
            <option value=""></option>
            <option value="">Sekolah</option>
          </select>
          <p className='flex flex-row pl-12 p-2'>Darjah / Tingkatan / Pra Sekolah (KIV) /KKI(KIV)</p>
          <select className='m-auto mb-1 w-11/12 outline outline-1 outline-userBlack'>
            <option value=""></option>
            <option value="">Sekolah</option>
          </select>
          <p className='flex flex-row pl-12 p-2'>Kelas</p>
          <select className='m-auto mb-3 w-11/12 outline outline-1 outline-userBlack'>
            <option value=""></option>
            <option value="">Sekolah</option>
          </select>
        </div>
        <div>
        <table className='m-auto mb-5 w-11/12 outline outline-1 outline-userBlack'>
            <tr className='bg-user3 p-2'>
              <th className='outline outline-1 outline-userBlack'>BIL</th>
              <th className='outline outline-1 outline-userBlack px-20'>NAMA</th>
              <th className='outline outline-1 outline-userBlack'>JANTINA</th>
              <th className='outline outline-1 outline-userBlack'>OPERATOR TERAKHIR</th>
              <th className='outline outline-1 outline-userBlack'>
                STATUS RAWATAN
              </th>
              <th className='outline outline-1 outline-userBlack'>STATUS KOTAK</th>
              <th className='outline outline-1 outline-userBlack'>ACTION</th>
            </tr>
            <tr>
              <td className='outline outline-1 outline-userBlack'>1</td>
              <td className='outline outline-1 outline-userBlack'>IZUDIN</td>
              <td className='outline outline-1 outline-userBlack'>LELAKI</td>
              <td className='outline outline-1 outline-userBlack'>DR RONALDO</td>
              <td className='outline outline-1 outline-userBlack'>BELUM MULA</td>
              <td className='outline outline-1 outline-userBlack'>BELUM MULA</td>
              <td className='outline outline-1 outline-userBlack p-2'>
                <Link to='/user/form-sekolah' className='bg-user3 userWhite rounded-md shadow-xl p-1 m-1 hover:bg-user1 transition-all'>
                  Action
                </Link>
              </td>
            </tr>
            <tr>
              <td className='outline outline-1 outline-userBlack'>2</td>
              <td className='outline outline-1 outline-userBlack'>KEMBOJA</td>
              <td className='outline outline-1 outline-userBlack'>PEREMPUAN</td>
              <td className='outline outline-1 outline-userBlack'>DR BARRACK OBAMA</td>
              <td className='outline outline-1 outline-userBlack'>BELUM MULA</td>
              <td className='outline outline-1 outline-userBlack p-2'>BELUM MULA</td>
              <td className='outline outline-1 outline-userBlack p-2'></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserSekolah;
