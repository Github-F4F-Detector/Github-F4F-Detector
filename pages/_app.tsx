import type { AppProps } from "next/app";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

// 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트.
// 공통 레이아웃 적용
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
