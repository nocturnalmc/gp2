import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function UserDashboard() {
  const [showAccordian1, setShowAccordian1] = useState(true);
  const [showAccordian2, setShowAccordian2] = useState(true);
  const [showAccordian3, setShowAccordian3] = useState(true);

  return (
    <>
      <div className='h-full p-3 overflow-y-auto'>
        <div className='grid grid-cols-2 mb-3'>
          <h3 className='text-xl font-semibold text-left px-3'>
            INFOGRAFIK STATUS KESIHATAN PERGIGIAN PELAJAR
          </h3>
          <select
            name='tahun-dashboard'
            id='tahun-dashboard'
            className=' mr-0 ml-auto w-60 px-2 py-1'
          >
            <option disabled>TAHUN</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
          </select>
        </div>
        <button
          className='flex bg-user3 p-2 w-full capitalize'
          onClick={() => setShowAccordian1(!showAccordian1)}
        >
          {showAccordian1 ? (
            <FaMinus className='pt-1' />
          ) : (
            <FaPlus className='pt-1' />
          )}
          <p className='ml-3'>jumlah data entri</p>
        </button>
        <section
          className={`grid grid-cols-4 gap-1 mt-3 mb-3 transition-all ${
            showAccordian1
              ? 'max-h-80 overflow-y-auto'
              : 'max-h-0 overflow-hidden'
          }`}
        >
          <article className='grid grid-cols-2 border border-userBlack pl-3 px-1 rounded-md'>
            <h4 className='font-bold pt-2'>jumlah kedatangan</h4>
            <div className='text-4xl'>6734</div>
            <div className=''>baru</div>
            <div className='text-2xl'>5389</div>
            <div className=''>ulangan</div>
            <div className='text-2xl'>1345</div>
          </article>
          <article className='grid grid-cols-2 border border-userBlack pl-3 px-1 rounded-md'>
            <h4 className='col-start-1 col-end-3 font-bold'>taska</h4>
            <div className=''>bilangan dilawati</div>
            <div className='text-2xl'>8/11</div>
            <div className=''>bilangan diperiksa</div>
            <div className='text-2xl'>234</div>
          </article>
          <article className='grid grid-cols-2 border border-userBlack pl-3 px-1 rounded-md'>
            <h4 className='col-start-1 col-end-3 font-bold'>pra sekolah</h4>
            <div className=''>bilangan dilawati</div>
            <div className='text-2xl'>8/12</div>
            <div className=''>bilangan diperiksa</div>
            <div className='text-2xl'>150</div>
          </article>
          <article className='grid grid-cols-2 border border-userBlack pl-3 px-1 rounded-md'>
            <h4 className='col-start-1 col-end-3 font-bold'>
              sekolah menengah
            </h4>
            <div className=''>bilangan dilawati</div>
            <div className='text-2xl'>8/9</div>
            <div className=''>bilangan diperiksa</div>
            <div className='text-2xl'>4234</div>
          </article>
          <article className='grid grid-rows-2 h-full border border-userBlack pl-3 px-1 rounded-md'>
            <h4 className='font-bold pt-2'>klinik pergigian</h4>
            <div className='text-4xl'>1/1</div>
          </article>
          <article className='grid grid-cols-2 border border-userBlack pl-3 px-1 rounded-md'>
            <h4 className='col-start-1 col-end-3 font-bold'>tadika</h4>
            <div className=''>bilangan dilawati</div>
            <div className='text-2xl'>14/20</div>
            <div className=''>bilangan diperiksa</div>
            <div className='text-2xl'>876</div>
          </article>
          <article className='grid grid-cols-2 border border-userBlack pl-3 px-1 rounded-md'>
            <h4 className='col-start-1 col-end-3 font-bold'>sekolah rendah</h4>
            <div className=''>bilangan dilawati</div>
            <div className='text-2xl'>13/16</div>
            <div className=''>bilangan diperiksa</div>
            <div className='text-2xl'>877</div>
          </article>
          <article className='grid grid-cols-2 border border-userBlack pl-3 px-1 rounded-md'>
            <h4 className='col-start-1 col-end-3 font-bold'>institusi</h4>
            <div className=''>bilangan dilawati</div>
            <div className='text-2xl'>1/2</div>
            <div className=''>bilangan diperiksa</div>
            <div className='text-2xl'>363</div>
          </article>
        </section>
        <button
          className='flex bg-user3 p-2 w-full capitalize'
          onClick={() => setShowAccordian2(!showAccordian2)}
        >
          {showAccordian2 ? (
            <FaMinus className='pt-1' />
          ) : (
            <FaPlus className='pt-1' />
          )}
          <p className='ml-3'>status kesihatan pergigian pelajar</p>
        </button>
        <section
          className={`grid grid-cols-5 gap-1 mt-3 mb-3 transition-all ${
            showAccordian2
              ? 'max-h-60 overflow-y-auto'
              : 'max-h-0 overflow-hidden'
          }`}
        >
          <select
            name='jenis-institusi'
            id='jenis-institusi'
            className='col-start-1 col-end-6 w-60 px-2 py-1'
          >
            <option disabled>INSTITUSI</option>
            <option value='taska'>TASKA</option>
            <option value='tadika'>TADIKA</option>
            <option value='pra sekolah'>PRA SEKOLAH</option>
            <option value='sekolah rendah'>SEKOLAH RENDAH</option>
            <option value='sekolah menengah'>SEKOLAH MENENGAH</option>
          </select>
          <article className='grid grid-rows-2 border border-userBlack pl-3 px-1 rounded-md h-36'>
            <h4 className='text-2xl pt-3'>MBK</h4>
            <div className='text-4xl'>78%</div>
          </article>
          <article className='grid grid-rows-2 border border-userBlack pl-3 px-1 rounded-md h-36'>
            <h4 className='text-2xl pt-3'>BK</h4>
            <div className='text-4xl'>---</div>
          </article>
          <article className='grid grid-rows-2 border border-userBlack pl-3 px-1 rounded-md h-36'>
            <h4 className='text-2xl pt-3'>MBG</h4>
            <div className='text-4xl'>---</div>
          </article>
          <article className='grid grid-rows-2 border border-userBlack pl-3 px-1 rounded-md h-36'>
            <h4 className='text-2xl pt-3'>TPR</h4>
            <div className='text-4xl'>76%</div>
          </article>
          <article className='grid grid-rows-2 border border-userBlack pl-3 px-1 rounded-md h-36'>
            <h4 className='text-2xl pt-3 lowercase'>dfx=0</h4>
            <div className='text-4xl'>76%</div>
          </article>
        </section>
        <button
          className='flex bg-user3 p-2 w-full capitalize'
          onClick={() => setShowAccordian3(!showAccordian3)}
        >
          {showAccordian3 ? (
            <FaMinus className='pt-1' />
          ) : (
            <FaPlus className='pt-1' />
          )}
          <p className='ml-3'>ranking pencapaian kesihatan pergigian sekolah</p>
        </button>
        <section
          className={`mt-3 mb-3 transition-all ${
            showAccordian3
              ? 'max-h-60 overflow-y-auto'
              : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className='flex text-left space-x-10'>
            <div>
              <input
                type='checkbox'
                value='sekolah rendah'
                id='sekolah-rendah'
                className='checked:ring-2 checked:ring-user1 checked:outline-none hover:cursor-pointer m-3'
              />
              <label htmlFor='sekolah-rendah' className='hover:cursor-pointer'>
                sekolah rendah
              </label>
            </div>
            <div>
              <input
                type='checkbox'
                value='sekolah menengah'
                id='sekolah-menengah'
                className='checked:ring-2 checked:ring-user1 checked:outline-none hover:cursor-pointer m-3'
              />
              <label
                htmlFor='sekolah-menengah'
                className='hover:cursor-pointer'
              >
                sekolah menengah
              </label>
            </div>
          </div>
          <table className='m-auto mb-5 w-11/12 outline outline-1 outline-userBlack'>
            <tr className='bg-user3'>
              <th className='outline outline-1 outline-userBlack'>BIL</th>
              <th className='outline outline-1 outline-userBlack'>NEGERI</th>
              <th className='outline outline-1 outline-userBlack'>DAERAH</th>
              <th className='outline outline-1 outline-userBlack'>SEKOLAH</th>
              <th className='outline outline-1 outline-userBlack'>
                % MURID DILIPUTI
              </th>
              <th className='outline outline-1 outline-userBlack'>% MBK</th>
              <th className='outline outline-1 outline-userBlack'>% BK</th>
              <th className='outline outline-1 outline-userBlack'>% MBG</th>
              <th className='outline outline-1 outline-userBlack'>% TPR</th>
            </tr>
            <tr>
              <td className='outline outline-1 outline-userBlack'>1</td>
              <td className='outline outline-1 outline-userBlack'>selangor</td>
              <td className='outline outline-1 outline-userBlack'>petaling</td>
              <td className='outline outline-1 outline-userBlack'>
                SK seksyen 19
              </td>
              <td className='outline outline-1 outline-userBlack'>98.0</td>
              <td className='outline outline-1 outline-userBlack'>70</td>
              <td className='outline outline-1 outline-userBlack'>75</td>
              <td className='outline outline-1 outline-userBlack'>75</td>
              <td className='outline outline-1 outline-userBlack'>75</td>
            </tr>
            <tr>
              <td className='outline outline-1 outline-userBlack'>2</td>
              <td className='outline outline-1 outline-userBlack'>WPKL & P</td>
              <td className='outline outline-1 outline-userBlack'>Cheras</td>
              <td className='outline outline-1 outline-userBlack'>
                SK bintang utara
              </td>
              <td className='outline outline-1 outline-userBlack'>90.2</td>
              <td className='outline outline-1 outline-userBlack'>69</td>
              <td className='outline outline-1 outline-userBlack'>71</td>
              <td className='outline outline-1 outline-userBlack'>71</td>
              <td className='outline outline-1 outline-userBlack'>71</td>
            </tr>
          </table>
        </section>
        <p className='text-user6 text-xs text-left pt-3'>
          <span className='uppercase'>* NOTA PENTING</span>: maklumat{' '}
          <span className='lowercase'>
            ini hanya untuk analisa pencapaian semasa sahaja
          </span>
        </p>
      </div>
    </>
  );
}

export default UserDashboard;
