import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/globalStyle';

// 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트.
// 공통 레이아웃 적용
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>깃허브 맞팔 탐지기</title>
        <meta charSet="utf-8"></meta>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
