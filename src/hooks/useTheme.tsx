import useLocalStorage from './useLocalStorage';

type Theme = 'light' | 'dark' | 'default';

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'default');
  return { theme, setTheme };
};

export default useTheme;
