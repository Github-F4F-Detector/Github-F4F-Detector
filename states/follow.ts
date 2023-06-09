import { atom } from 'recoil';

export const checkListState = atom<string[]>({
  key: 'checkListState',
  default: [],
});
