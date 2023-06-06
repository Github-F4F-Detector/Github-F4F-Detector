import React from 'react';
import styled from 'styled-components';

import { COLOR } from '@/styles/colors';

function Home() {
  return (
    <div>
      <Test>가나다라마바사</Test>
    </div>
  );
}

export default Home;

const Test = styled.p`
  color: ${COLOR.main_pink};
  font-size: 10rem;
`;
