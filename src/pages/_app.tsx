import themeAtom from '@/atom/themeAtom';
import '@/styles/globals.css';
import { api } from '@/utils/api';
import cx from '@/utils/cx';

import { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { type AppType } from 'next/app';
import { Toaster } from 'sonner';

const MyApp: AppType = ({ Component, pageProps }) => {
  const [theme] = useAtom(themeAtom);
  const [defaultTheme, setDefaultTheme] = useState<'light' | 'dark'>('dark');
  const handleSetTheme = (e: MediaQueryListEvent) => {
    setDefaultTheme(e.matches ? 'dark' : 'light');
  };

  useEffect(() => {
    if (window !== undefined) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', handleSetTheme);

      return window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleSetTheme);
    }
  }, []);

  return (
    <div className={cx(theme === 'default' ? defaultTheme : theme)} id="root">
      <div className="bg-warm-gray-50 dark:bg-warm-gray-900 text-warm-gray-900 dark:text-warm-gray-50 max-w-screen overflow-hidden">
        <Toaster
          theme={theme === 'default' ? defaultTheme : theme}
          toastOptions={{
            className:
              'bg-warm-gray-50 dark:bg-warm-gray-900 text-warm-gray-900 dark:text-warm-gray-50',
          }}
        />
        <Component {...pageProps} />
        <svg
          id="texture"
          className="z-0 brightness-125 dark:brightness-[0.2]"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: '$max',
            width: '100%',
            height: 'calc(100vh + 200px)',
            pointerEvents: 'none',
            transform: 'translateY(0)',
          }}
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".8"
              numOctaves="4"
              stitchTiles="stitch"
            ></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
      </div>
    </div>
  );
};

export default api.withTRPC(MyApp);
