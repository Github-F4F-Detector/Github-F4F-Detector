import { Html, Head, Main, NextScript } from "next/document";

// app 다음에 실행됨.
// 공통적으로 활용할 <head>, <body> 태그 안에 들어갈 내용들을 커스텀
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>깃허브 맞팔 탐지기</title>
        <meta charSet="utf-8"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
