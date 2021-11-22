import type { AppProps } from 'next/app'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import '../styles/variables.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          @import url('https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@400;500;700&display=swap');

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }

          body {
            background-color: var(--body-background-color);
            color: var(--body-text-color);
            font-family: 'M PLUS 2', sans-serif;
          }

          p {
            line-height: 1.8rem;
            font-size: 1.2rem;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
