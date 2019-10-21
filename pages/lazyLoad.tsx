import React from 'react'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'
import styled from '@emotion/styled'
import { Layout } from '../components/utils/Layout'

type Props = {
  res: string[]
}

const LazyLoadComponent: NextPage<Props> = ({ res }) => (
  <>
    <Layout>
      <h1>Lazy Load</h1>
    </Layout>
    <Layout>
      <Note>fetch Hacker News API</Note>
    </Layout>
    {res
      .filter((_, index: number) => index < 20)
      .map((item: string) => (
        <Layout key={item}>
          ID:
          {item}
        </Layout>
      ))}
  </>
)

LazyLoadComponent.getInitialProps = async () => {
  // lazy load
  const data = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  ).then(r => r.json())
  return { res: data }
}

export default LazyLoadComponent

const Note = styled.div({ marginBottom: 20 })
