import * as React from 'react'

interface OverlayContentProps {
  noPadding?: boolean
}

const OverlayContent: React.SFC<OverlayContentProps> = ({ children, noPadding }) => (
  <main>
    {children}
    <style jsx>{`
      main {
        position: relative;
        flex: 1;
        padding: ${noPadding ? '0' : '1.5rem'};
      }
    `}</style>
  </main>
)

export default OverlayContent
