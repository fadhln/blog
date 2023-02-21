import React from 'react';

import Link from 'next/link';

import Icon from '../icon';
import ThemeButton from './themeButton';

const navbarData = [
  {
    content: '.project()',
    href: '/#project',
  },
  {
    content: '.resume()',
    href: '/resume',
  },
  {
    content: '.contact()',
    href: '/contact',
  },
  {
    content: '.blog()',
    href: '/blog',
  },
];

const Navbar = () => {
  return (
    <nav className="w-full backdrop-blur-sm bg-warm-gray-100 dark:bg-warm-gray-800 border-b-[1px] border-warm-gray-300 dark:border-warm-gray-700 transition-colors">
      <div className="flex items-center justify-between container mx-auto px-2 py-4">
        <Link className="max-w-[3rem] max-h-[3rem]" href="/">
          <Icon />
        </Link>
        <div className="flex items-center gap-8">
          <div className="flex items-baseline gap-4">
            {navbarData.map((data) => {
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
