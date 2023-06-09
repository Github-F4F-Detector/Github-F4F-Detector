import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { checkListState } from 'states/follow';
import styled from 'styled-components';

import { COLOR } from '@/styles/colors';

function Checkbox({ text, login }: any) {
  const [checkList, setCheckList] = useRecoilState(checkListState);
  // check된 항목 배열에 추가/삭제 함수
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (checkList.includes(value)) {
      const newArr = checkList.filter(item => item !== value);
      setCheckList(newArr);
    } else {
      setCheckList([...checkList, value]);
    }
  };
  return (
    <St.Label htmlFor={text}>
      <St.Input type="checkbox" id={text} name={text} value={login} onChange={handleOnChange} />
      <St.Text>{text}</St.Text>
    </St.Label>
  );
}

export default Checkbox;

const St = {
  Input: styled.input`
    appearance: none;
    border: 0.3rem solid ${COLOR.main_black};
    border-radius: 6rem;
    width: 2.5rem;
    height: 2.5rem;

    &:checked {
      border: 0.3rem solid ${COLOR.main_black};
      background-color: ${COLOR.main_pink};
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  `,
  Label: styled.label`
    display: flex;
    align-items: center;
    user-select: none;
  `,
  Text: styled.p`
    margin-left: 0.25rem;
  `,
};
