import useTheme from '@/hooks/useTheme';
import '@/styles/globals.css';
import { api } from '@/utils/api';
import cx from '@/utils/cx';
import { useEffect, useState } from 'react';
import { type AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => {
  const { theme } = useTheme();
  const [defaultTheme, setDefaultTheme] = useState('light');
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
    <div className={cx(theme === 'default' ? defaultTheme : theme)}>
      <div className="bg-warm-gray-50 dark:bg-warm-gray-900 text-warm-gray-900 dark:text-warm-gray-50 transition-all">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default api.withTRPC(MyApp);
