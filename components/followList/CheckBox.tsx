import React from 'react';
import styled from 'styled-components';

import { COLOR } from '@/styles/colors';

function Checkbox({ text }: any) {
  return (
    <St.Label htmlFor={text}>
      <St.Input type="checkbox" id={text} name={text} />
      <St.Text>{text}</St.Text>
    </St.Label>
  );
}

export default Checkbox;

const St = {
  Input: styled.input`
    appearance: none;
    width: 2.5rem;
    height: 2.5rem;
    border: 0.3rem solid ${COLOR.main_black};
    border-radius: 6rem;

    &:checked {
      border: 0.3rem solid ${COLOR.main_black};
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 100% 100%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: ${COLOR.main_pink};
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
