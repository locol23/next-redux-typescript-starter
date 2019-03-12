import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Layout } from './Layout'

export const Menu = () => (
  <Layout>
    <ButtonLayout>
      <Link href="index">
        <button type="button">index</button>
      </Link>
    </ButtonLayout>
    <ButtonLayout>
      <Link href="about">
        <button type="button">about</button>
      </Link>
    </ButtonLayout>
    <ButtonLayout>
      <Link href="dynamicImport">
        <button type="button">Dynamic Import</button>
      </Link>
    </ButtonLayout>
    <ButtonLayout>
      <Link href="lazyLoad">
        <button type="button">Lazy Load</button>
      </Link>
    </ButtonLayout>
  </Layout>
)

const ButtonLayout = styled.div`
  margin: 5px;
`
