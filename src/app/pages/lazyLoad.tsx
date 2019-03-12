import React from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { Layout } from '../components/Layout'

const LazyLoadComponent = (props: { res: string[] }) => (
  <React.Fragment>
    <Layout>
      <h1>Lazy Load</h1>
    </Layout>
    <Layout>
      <Note>fetch Hacker News API</Note>
    </Layout>
    {props.res
      .filter((_, index: number) => index < 20)
      .map((item: string) => (
        <Layout key={item}>
          ID:
          {item}
        </Layout>
      ))}
  </React.Fragment>
)

LazyLoadComponent.getInitialProps = async () => {
  // lazy load
  const data = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  ).then(r => r.json())
  return { res: data }
}

export default LazyLoadComponent

const Note = styled.div`
  margin-bottom: 20px;
`
