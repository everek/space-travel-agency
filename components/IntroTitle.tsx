/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const container = css`
  display: flex;
  justify-content: center;
  max-width: var(--inner-container-width);
  margin: 50px auto 0;
`

const left = css`
    padding-right: 2rem;
`

const right = css`
    padding-left: 2rem;
`

const moon = css`
  width: 500px;
  height: 500px;
  background: linear-gradient(
    180deg,
    var(--accent-1) 0%,
    var(--accent-2) 49.48%,
    var(--accent-3) 77.08%
  );
  border-radius: 100%;
`

const title = css`
  margin: 4rem 0 1rem 0;
  font-size: 4rem;
  font-weight: 700;
`

const subtitle = css`
  font-size: 1.3rem;
`

export default function IntroTitle() {
  return (
    <div css={container}>
      <div css={left}>
        <div css={moon} />
      </div>
      <div css={right}>
        <h1 css={title}>SpaceWay</h1>
        <p css={subtitle}>Your space travel agency.</p>
      </div>
    </div>
  )
}
