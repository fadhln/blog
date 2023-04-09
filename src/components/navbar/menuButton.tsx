import navbarData from '@/data/navbarData';

import React, { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={(v) => setOpen(v)}>
      <Dialog.Trigger className="aspect-square p-2 border rounded border-warm-gray-500 border-opacity-40 hover:border-opacity-100 transition-all">
        <HiBars3 />
      </Dialog.Trigger>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              <Dialog.Overlay className="fixed inset-0" asChild>
                <motion.div
                  className="bg-warm-gray-800 backdrop-blur-sm w-full h-full bg-opacity-50 z-20"
                  initial={{
                    opacity: 0,
                    x: 100,
                  }}
                  animate={{
                    opacity: 80,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              </Dialog.Overlay>
              <Dialog.Content className="fixed pr-3 right-0 top-[50%] z-30 -translate-y-1/2 text-warm-gray-50">
                <motion.ul
                  animate={open ? 'open' : 'closed'}
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                  className={'flex flex-col items-end gap-6'}
                >
                  {navbarData.map((data, idx) => {
                    return (
                      <motion.li
                        key={idx}
                        className={
                          'font-mono opacity-80 hover:opacity-100 transition-opacity text-xl'
                        }
                        initial={{
                          opacity: 0,
                        }}
                        variants={{
                          open: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              y: { stiffness: 1000, velocity: -100 },
                            },
                          },
                          closed: {
                            y: 50,
                            opacity: 0,
                            transition: {
                              y: { stiffness: 1000 },
                            },
                          },
                        }}
                      >
                        <Link href={data.href} onClick={() => setOpen(false)}>
                          {data.content}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MenuButton;
