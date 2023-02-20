import useTheme from '@/hooks/useTheme';
import React from 'react';

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav>
      Navbar
      <a onClick={() => setTheme('light')}>light</a>
      <a onClick={() => setTheme('dark')}>dark</a>
    </nav>
  );
};

export default Navbar;
