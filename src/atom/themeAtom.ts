import { atomWithStorage } from 'jotai/utils';

export type Theme = 'default' | 'light' | 'dark';

const themeAtom = atomWithStorage<Theme>('theme', 'default');

export default themeAtom;
