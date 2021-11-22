/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type ImageBannerProps = {
  imageUrl: string
  children?: React.ReactNode
}

const innerContainer = css`
    max-width: var(--inner-container-width);
    margin: 0 auto;
    padding-top: 5rem;
`

export default function ImageBanner({ imageUrl, children }: ImageBannerProps) {
  const container = css`
    background: url(${imageUrl});
    min-height: 400px;
  `

  return (
    <div css={container}>
      <div css={innerContainer}>{children}</div>
    </div>
  )
}
