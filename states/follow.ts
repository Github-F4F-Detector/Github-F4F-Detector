import { atom } from 'recoil';

export const checkListState = atom({
  key: 'checkListState',
  default: [] as string[],
});
