import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function UserFormSekolah () {
    return (
        <>
            <div className='container px-10'>
                    <div className='p-2'>
                        <article className='outline outline-1 outline-userBlack grid grid-cols-2'>
                            <div className='flex flex-wrap justify justify-between'>
                                <div >
                                    <h1 className='text-l font-bold flex flex-row pl-12'>BASIC DEMOGRAFIK</h1>
                                    <div className='text-s flex flex-row pl-12'>
                                        <h2 className='font-semibold'>NAMA:</h2>
                                        <p className=''>izzuddin</p>
                                    </div>
                                    <div className=' text-s flex flex-row pl-12'>
                                        <h2 className='font-semibold'>JANTINA:</h2>
                                        <p >Lelaki</p>
                                    </div>
                                    <div className=' text-s flex flex-row pl-12'>
                                        <h2 className='font-semibold'>UMUR:</h2>
                                        <p >28</p>
                                    </div>
                                    <div className=' text-s flex flex-row pl-12'>
                                        <h2 className='font-semibold'>NO IC:</h2>
                                        <p >123456-10-7891</p>
                                    </div>
                                </div>
                                <div className='pl-12 pt-5'>
                                    <div className=' text-s flex flex-row pl-12'>
                                        <h2 className='font-semibold'>NAMA SEKOLAH:</h2>
                                        <p >SEKOLAH SERI HOGWART</p>
                                    </div>
                                    <div className=' text-s flex flex-row pl-12'>
                                        <h2 className='font-semibold'>DARJAH/TINGKATAN:</h2>
                                        <p >1</p>
                                    </div>
                                    <div className=' text-s flex flex-row pl-12'>
                                        <h2 className='font-semibold'>KELAS:</h2>
                                        <p >1 ARIF</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='p-2'>
                        <form className='outline outline-1 outline-userBlack grid grid-cols-2'>
                            <div className='flex flex-wrap justify justify-between'>
                                
                            </div>
                        </form>
                    </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default UserFormSekolah;