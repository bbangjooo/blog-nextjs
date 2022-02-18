import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link 
                    href="https://fonts.googleapis.com/css2?family=Bungee&family=Do+Hyeon&family=Gothic+A1&family=Merriweather:ital@1&family=Mochiy+Pop+P+One&family=Nanum+Myeongjo&family=Noto+Sans+KR&family=Ubuntu&display=swap" 
                    rel="stylesheet" 
                />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}