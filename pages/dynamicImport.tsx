import React from 'react'
import dynamic from 'next/dynamic'
import { Layout } from '../components/utils/Layout'

const Loading = () => (
  <>
    <div>Loading Component...</div>
  </>
)

const DynamicComponent = dynamic({
  loader: () => import('../components/organisms/Dynamic'),
  loading: Loading,
})

const MyDynamicComponent = () => (
  <>
    <Layout>
      <h1>Dynamic Import</h1>
    </Layout>
    <Layout>
      <DynamicComponent />
    </Layout>
  </>
)

export default MyDynamicComponent
