import * as React from 'react'
import Head from 'next/head'

import normalize from '../styles/normalize'

interface LayoutProps {
  title?: string
}

const Layout: React.SFC<LayoutProps> = ({ children, title }) => (
  <div className="root">
    <Head>
      <title>{title || 'ReactJS Indonesia'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    {children}
    <style jsx global>
      {normalize}
    </style>
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow-x: hidden;
        background: #0f0;
      }
    `}</style>
  </div>
)

export default Layout
