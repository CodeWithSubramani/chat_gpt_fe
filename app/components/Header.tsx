import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1 className='text-2xl text-center text-white p-3 bg-black'>{title}</h1>
    </header>
  );
}

export default Header;
