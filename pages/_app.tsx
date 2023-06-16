import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import GlobalStyle from '@/styles/globalStyle';
import ErrorPage from 'components/common/ErrorPage';
import LoadingPage from 'components/common/LoadingPage';

// 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트.
// 공통 레이아웃 적용
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        useErrorBoundary: true,
      },
      mutations: {
        useErrorBoundary: true,
      },
    },
  });
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<LoadingPage />}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Head>
              <title>깃허브 맞팔 탐지기</title>
              <meta charSet="utf-8"></meta>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
          </QueryClientProvider>
        </RecoilRoot>
      </Suspense>
    </ErrorBoundary>
  );
}
