import { atom } from 'recoil';

export const allCheckedState = atom<string>({
  key: 'allCheckedState',
  default: '',
});
