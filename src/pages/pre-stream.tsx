import * as React from 'react'
import { NextPage } from 'next'

import Layout from '../components/Layout'
import Logo from '../components/Logo'

const PreStreamScreen: NextPage = () => (
  <Layout>
    <main className="content">
      <div className="inner">
        <Logo height={200} fill="#fff" />
        <h1 className="title">ReactJS Indonesia</h1>
        <p className="subtitle">Komunitas Pengembang ReactJS Indonesia</p>
      </div>
      <div className="footer">reactjs.id</div>
    </main>
    <style jsx>{`
      .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1.5rem;
        background-color: #282c34;
        color: #fff;
      }

      .inner {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 12px 24px;
      }

      .footer {
        padding: 12px 24px;
        font-weight: 600;
        font-size: 44px;
        line-height: 48px;
        color: #61dafb;
      }

      .title {
        margin-top: 48px;
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 96px;
        line-height: 104px;
      }

      .subtitle {
        margin: 0;
        font-size: 56px;
        line-height: 60px;
      }
    `}</style>
  </Layout>
)

export default PreStreamScreen
