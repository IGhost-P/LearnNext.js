import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <div id="portal-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
