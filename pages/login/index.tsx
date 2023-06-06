import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GithubIcon, InfoIcon } from 'public/icon';
import { useSetRecoilState } from 'recoil';
import { userTokenState } from 'states/user';
import styled from 'styled-components';

import { COLOR } from '@/styles/colors';

function Login() {
  const router = useRouter();
  const [tokenInput, setTokenInput] = useState('');
  const setUserToken = useSetRecoilState(userTokenState);

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTokenInput(value);
  };

  const handleOnClickDetect = () => {
    setUserToken(tokenInput);
    router.push('/home');
  };

  const handleOnClickInfo = () => {};

  return (
    <St.LoginPageContainer>
      <St.LoginBox>
        <St.CreateToken href="https://github.com/settings/tokens" target="_blank">
          Github Token 만들러 가기
        </St.CreateToken>
        <St.CreateTokenContainer>
          <Image src={InfoIcon} alt="정보 아이콘" width={20} height={20} onClick={handleOnClickInfo} />
          토큰 발급시 권한 user(Update ALL user data)를 체크해주세요!
        </St.CreateTokenContainer>
        <St.TokenInput placeholder="Github Token을 입력해주세요" value={tokenInput} onChange={handleOnChangeInput} />
        <St.DetectButton type="button" onClick={handleOnClickDetect}>
          나의 맞팔 확인하기
        </St.DetectButton>
        <span>or</span>
        <St.LoginContainer>
          <span>깃허브 로그인으로 간단하게 확인하기 👉</span>
          <St.LoginButton type="button">
            <Image src={GithubIcon} alt="깃허브 로고" width={19} height={18} />
            깃허브 로그인
          </St.LoginButton>
        </St.LoginContainer>
      </St.LoginBox>
    </St.LoginPageContainer>
  );
}

export default Login;

const St = {
  LoginPageContainer: styled.div`
    display: flex;
    align-items: center;

    padding: 0 1rem;

    width: 100vw;
    height: 100vh;
  `,
  LoginBox: styled.section`
    display: flex;
    flex-direction: column;
    border: 0.3rem solid ${COLOR.main_black};

    border-radius: 1.4rem;

    background-color: ${COLOR.main_white};

    padding: 1.2rem 1.1rem;

    width: 100%;

    & > span {
      margin: 0.9rem auto;
      font-size: 1.4rem;
    }

    & > a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  CreateTokenContainer: styled.div`
    display: flex;
    gap: 0.2rem;
    align-items: center;
    margin-top: 0.7rem;

    height: 2.5rem;

    font-size: 1.1rem;
  `,
  CreateToken: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9rem;
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

    background-color: ${COLOR.main_green};
    width: 15rem;
    height: 2.5rem;

    color: ${COLOR.main_white};
    font-size: 1.3rem;
  `,
  TokenInput: styled.input`
    margin-top: 0.8rem;
    border: 0.2rem solid ${COLOR.side_grey};

    border-radius: 0.3rem;

    background: none;

    padding: 0 1.6rem;
    width: 100%;
    height: 4.3rem;

    font-size: 1.3rem;

    &::placeholder {
      color: ${COLOR.side_grey};
    }
    &:focus {
      outline: 0.2rem solid ${COLOR.main_black};
    }
  `,
  DetectButton: styled.button`
    margin-top: 0.7rem;
    border: 0.2rem solid ${COLOR.main_black};

    border-radius: 0.3rem;

    background-color: ${COLOR.main_yellow};
    width: 100%;
    height: 4rem;

    font-size: 1.2rem;
  `,
  LoginButton: styled.button`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${COLOR.main_black};

    border-radius: 2rem;

    background-color: ${COLOR.sub_yellow};

    width: 12.3rem;
    height: 4rem;

    font-size: 1.2rem;
  `,
  LoginContainer: styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-end;

    width: 100%;

    & > span {
      font-size: 1.1rem;
    }
  `,
};
