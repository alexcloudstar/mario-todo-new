import React from 'react';
import Logo from '../../assets/logo.png';

const Navigation = (): JSX.Element => {
  return (
    <>
      <div className='flex items-center mt-5 ml-5'>
        <a href='/' className='flex'>
          <img src={Logo} alt='Mario Todo' className='w-10 pr-2' />
          <h1 className='text-2xl text-green-700 uppercase font-bold'>Todo</h1>
        </a>
      </div>
    </>
  );
};

export default Navigation;
