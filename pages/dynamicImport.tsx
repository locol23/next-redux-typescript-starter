import React from 'react'
import dynamic from 'next/dynamic'
import { Layout } from '../components/utils/Layout'

const Loading = () => (
  <React.Fragment>
    <div>Loading Component...</div>
  </React.Fragment>
)

const DynamicComponent = dynamic({
  loader: () => import('../components/organisms/Dynamic') as any,
  loading: Loading,
})

const MyDynamicComponent = () => (
  <React.Fragment>
    <Layout>
      <h1>Dynamic Import</h1>
    </Layout>
    <Layout>
      <DynamicComponent />
    </Layout>
  </React.Fragment>
)

export default MyDynamicComponent
