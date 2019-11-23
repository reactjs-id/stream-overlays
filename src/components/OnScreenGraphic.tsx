import * as React from 'react'

import { format } from 'date-fns'

import useClock from '../utils/useClock'
import Logo from './Logo'

const OnScreenGraphic: React.FC = () => {
  const time = useClock()

  return (
    <section>
      <div className="block left">
        <Logo height={48} fill="#fff" />
      </div>
      <div className="block right">{format(time, 'HH:mm:ss')}</div>
      <style jsx>{`
        section {
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
    </section>
  )
}

export default OnScreenGraphic
