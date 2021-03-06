import * as React from 'react'
import { NextPage } from 'next'

import Layout from '../components/Layout'
import OverlayContent from '../components/OverlayContent'
import OnScreenGraphic from '../components/OnScreenGraphic'

const LiveScreen: NextPage = () => {
  return (
    <Layout>
      <OverlayContent noPadding>
        <OnScreenGraphic />
      </OverlayContent>
      <style jsx>{`
        .title {
          margin-top: 0;
        }

        .inner {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          position: absolute;
          bottom: 48px;
          width: 100%;
        }

        .block {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          background-color: #282c34;
          height: 80px;
          font-size: 44px;
          line-height: 48px;
          font-variant-numeric: tabular-nums;
          color: #fff;
        }
        .block.left {
          padding-left: 96px;
        }
        .block.right {
          padding-right: 96px;
        }
      `}</style>
    </Layout>
  )
}

export default LiveScreen
