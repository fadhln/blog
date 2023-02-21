import themeAtom, { type Theme } from '@/atom/themeAtom';
import React, { useState } from 'react';
import {
  HiOutlineComputerDesktop,
  HiOutlineSun,
  HiOutlineMoon,
} from 'react-icons/hi2';
import * as Menu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';

const ThemeButton = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const [open, setOpen] = useState(false);
  const themeOptions: Theme[] = ['light', 'dark', 'default'];

  return (
    <>
      <Menu.Root open={open} onOpenChange={(v) => setOpen(v)}>
        <Menu.Trigger className='aspect-square p-2 border rounded-full border-warm-gray-500 border-opacity-40 hover:border-opacity-100 transition-all'>
          {theme === 'light' ? (
            <HiOutlineSun />
          ) : theme === 'dark' ? (
            <HiOutlineMoon />
          ) : (
            <HiOutlineComputerDesktop />
          )}
        </Menu.Trigger>
        <AnimatePresence>
          {open && (
            <Menu.Content
              forceMount
              className="bg-warm-gray-50 shadow-md dark:bg-warm-gray-700 overflow-hidden p-1 rounded-lg mt-2"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                transition={{ duration: 0.2 }}
                exit={{
                  height: 0,
                  transition: { duration: 0.2 },
                }}
                className={'flex flex-col space-y-1'}
              >
                {themeOptions.map((option) => {
                  return (
                    <Menu.Item
                      onClick={() => setTheme(option)}
                      key={option}
                      className={
                        'flex items-center gap-2 px-4 py-2 rounded-md text-sans cursor-pointer dark:hover:bg-warm-gray-800 transition-color hover:bg-warm-gray-200'
                      }
                    >
                      {option === 'light' ? (
                        <HiOutlineSun />
                      ) : option === 'dark' ? (
                        <HiOutlineMoon />
                      ) : (
                        <HiOutlineComputerDesktop />
                      )}
                      {option}
                    </Menu.Item>
                  );
                })}
              </motion.div>
            </Menu.Content>
          )}
        </AnimatePresence>
      </Menu.Root>
    </>
  );
};

export default ThemeButton;
