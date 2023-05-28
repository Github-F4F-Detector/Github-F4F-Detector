import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// app 다음에 실행됨.
// 공통적으로 활용할 <head>, <body> 태그 안에 들어갈 내용들을 커스텀

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />), //gets the styles from all the components inside <App>
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            <Html lang="en">
              <Head>
                {/* <title>깃허브 맞팔 탐지기</title> */}
                <meta charSet="utf-8"></meta>
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
