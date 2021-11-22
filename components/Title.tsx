/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type TitleProps = {
  title: string
  gradientText?: boolean
}

const border = css`
  display: inline-block;
  padding: 1rem;
  border: 8px solid;
  border-image-slice: 1;
  border-width: 8px;
  border-image-source: linear-gradient(
    90deg,
    var(--accent-1) 0%,
    var(--accent-2) 49.48%,
    var(--accent-3) 77.08%
  );
`

const text = css`
  font-size: 3rem;
  font-weight: 700;
`

const gradientTextCss = css`
  ${text}

  background: linear-gradient(
    90deg,
    var(--accent-1) 0%,
    var(--accent-2) 49.48%,
    var(--accent-3) 77.08%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const whiteTextCss = css`
  ${text}
  color: var(--white);
`

export default function Title({ title, gradientText }: TitleProps) {
  return (
    <div css={border}>
      <h2 css={gradientText ? gradientTextCss : whiteTextCss}>{title}</h2>
    </div>
  )
}
