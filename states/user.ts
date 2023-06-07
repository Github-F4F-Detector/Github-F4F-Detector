import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;
const { persistAtom } = recoilPersist({
  key: 'userToken',
  storage: sessionStorage,
});

export const userTokenState = atom({
  key: 'userTokenState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
