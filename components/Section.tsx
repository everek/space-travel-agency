/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type SectionProps = {
  colored?: boolean
  children: React.ReactNode
}

export default function Section({ colored, children }: SectionProps) {
  const container = css`
    background: ${colored ? 'var(--body-background-color)' : 'var(--white)'};
    color: ${colored ? 'var(--body-text-color)' : 'var(--body-background-color)'};
  `

  const innerContainer = css`
    max-width: var(--inner-container-width);
    margin: 0 auto;
    padding: 5rem 0;
  `

  return (
    <div css={container}>
      <div css={innerContainer}>{children}</div>
    </div>
  )
}
