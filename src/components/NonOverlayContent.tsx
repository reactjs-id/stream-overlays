import * as React from 'react'

const NonOverlayContent: React.SFC = ({ children }) => (
  <main>
    {children}
    <style jsx>{`
      main {
        flex: 1;
        padding: 1.5rem;
        background-color: #fff;
      }
    `}</style>
  </main>
)

export default NonOverlayContent
