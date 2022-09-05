import React from 'react';
import Logo from '../../assets/logo.png';
import { getUser } from '../../utils';

const Navigation = (): JSX.Element => {
  const user = getUser();
  return (
    <>
      <div className='flex  justify-between mt-5 ml-5'>
        <a href='/' className='flex'>
          <img src={Logo} alt='Mario Todo' className='w-10 pr-2' />
          <h1 className='text-2xl text-green-700 uppercase font-bold'>Todo</h1>
        </a>
        <div className=' bg-slate-100/[0.4] flex justify-center items-center px-12 rounded mr-5 cursor-pointer transition-all	 hover:bg-slate-100/[0.6]'>
          <h5 className='text-white'>{user}</h5>
        </div>
      </div>
    </>
  );
};

export default Navigation;
