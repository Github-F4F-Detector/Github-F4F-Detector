import React from 'react';
import Image from 'next/image';
import { AllCheckboxIcon, AllNonCheckboxIcon } from 'public/icon';
import styled from 'styled-components';

function AllCheckBox() {
  return (
    <St.SelectContainer>
      <St.AllCheckboxWrapper>
        <Image src={AllCheckboxIcon} alt="모두선택 아이콘" width={11} height={11} />
        <St.AllCheckboxText>모두 선택</St.AllCheckboxText>
      </St.AllCheckboxWrapper>
      <St.AllNonCheckboxWrapper>
        <Image src={AllNonCheckboxIcon} alt="모두해지 아이콘" width={11} height={11} />
        <St.AllCheckboxText>모두 해지</St.AllCheckboxText>
      </St.AllNonCheckboxWrapper>
    </St.SelectContainer>
  );
}

export default AllCheckBox;
const St = {
  AllNonCheckboxWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.9rem;
    border: 1px solid #000000;
    border-radius: 4px;
    background: #f9dda0;
    width: 56px;
    height: 17px;
  `,
  AllCheckboxText: styled.p`
    margin-left: 0.4rem;
    font-size: 0.9rem;
  `,

  AllCheckboxWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    border-radius: 4px;
    background: #f9dda0;
    width: 56px;
    height: 17px;
  `,

  SelectContainer: styled.div`
    display: flex;
    position: absolute;
    top: 27rem;
    right: 4rem;
    z-index: 2;
  `,
};
