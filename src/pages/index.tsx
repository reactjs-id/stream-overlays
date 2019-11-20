import * as React from 'react'
import { NextPage } from 'next'

import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import NonOverlayContent from '../components/NonOverlayContent'

const IndexPage: NextPage = () => (
  <Layout>
    <Navigation />
    <NonOverlayContent>
      <h1 className="title">Hello.</h1>
      <p>This is the homepage for ReactJS ID stream overlays. Click any of the menu above for your selected overlay.</p>
    </NonOverlayContent>
    <style jsx>{`
      .title {
        margin-top: 0;
      }
    `}</style>
  </Layout>
)

export default IndexPage
