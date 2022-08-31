import React, { FC } from 'react';

type ContainerProps = {
  children: JSX.Element;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='h-full flex justify-center items-center'>
      <div className='h-80 bg-white w-full max-w-xl overflow-y-scroll	'>
        {children}
      </div>
    </div>
  );
};

export default Container;
