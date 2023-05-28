import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <div>
      <Test>가나다라마바사</Test>
    </div>
  );
}

export default Home;

const Test = styled.p`
  color: ${props => props.theme.colors.main_pink};
  font-size: 10rem;
  font-family: 'BM-JUA';
`;
