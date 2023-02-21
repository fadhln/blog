import navbarData from '@/data/navbarData';
import useMediaQuery from '@/hooks/useMediaQuery';

import React from 'react';

import Link from 'next/link';

import Icon from '../icon';
import MenuButton from './menuButton';
import ThemeButton from './themeButton';

const Navbar = () => {
  const sm = useMediaQuery('sm');

  return (
    <nav className="w-full backdrop-blur-sm bg-warm-gray-100 dark:bg-warm-gray-800 border-b-[1px] border-warm-gray-300 dark:border-warm-gray-700 transition-colors">
      <div className="flex items-center justify-between container mx-auto p-4">
        <Link className="max-w-[3rem] max-h-[3rem]" href="/">
          <Icon />
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-baseline gap-4">
            {sm &&
              navbarData.map((data) => {
                return (
                  <Link
                    href={data.href}
                    key={data.href}
                    className={
                      'font-mono opacity-80 hover:opacity-100 transition-opacity'
                    }
                  >
                    {data.content}
                  </Link>
                );
              })}
          </div>
          <ThemeButton />
          {!sm && <MenuButton />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
