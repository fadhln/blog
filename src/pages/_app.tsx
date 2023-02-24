import themeAtom, { Theme } from '@/atom/themeAtom';
import '@/styles/globals.css';
import { api } from '@/utils/api';
import cx from '@/utils/cx';

import { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { type AppType } from 'next/app';
import { Toaster } from 'sonner';

const MyApp: AppType = ({ Component, pageProps }) => {
  const [theme] = useAtom(themeAtom);
  const [defaultTheme, setDefaultTheme] = useState<'light' | 'dark'>('light');
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
      </div>
    </div>
  );
};

export default api.withTRPC(MyApp);
