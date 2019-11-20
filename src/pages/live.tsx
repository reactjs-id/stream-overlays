import * as React from 'react'
import { NextPage } from 'next'
import { format } from 'date-fns'

import Layout from '../components/Layout'
import OverlayContent from '../components/OverlayContent'
import Logo from '../components/Logo'

import useClock from '../utils/useClock'

const LiveScreen: NextPage = () => {
  const time = useClock()

  return (
    <Layout>
      <OverlayContent noPadding>
        <div className="inner">
          <div className="block left">
            <Logo height={48} fill="#fff" />
          </div>
          <div className="block right">{format(time, 'HH:mm:ss')}</div>
        </div>
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
