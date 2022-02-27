import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body data-bs-spy="scroll" data-bs-target="#scrollspynav" className="scroll" data-bs-offset="80" tabIndex="0">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}