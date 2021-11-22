import React from 'react'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>SpaceWay</title>
        <meta name="description" content="The space travel agency" />
      </Head>
      <main>{children}</main>
    </div>
  )
}
