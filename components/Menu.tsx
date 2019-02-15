import React from 'react'
import styled from 'styled-components'
import { Link as RoutesLink } from '../routes'
import { Layout } from './Layout'

export const Menu = () => (
  <Layout>
    <ButtonLayout>
      <RoutesLink route="index">
        <button type="button">index</button>
      </RoutesLink>
    </ButtonLayout>
    <ButtonLayout>
      <RoutesLink route="about">
        <button type="button">about</button>
      </RoutesLink>
    </ButtonLayout>
    <ButtonLayout>
      <RoutesLink route="dynamicImport">
        <button type="button">Dynamic Import</button>
      </RoutesLink>
    </ButtonLayout>
    <ButtonLayout>
      <RoutesLink route="lazyLoad">
        <button type="button">Lazy Load</button>
      </RoutesLink>
    </ButtonLayout>
  </Layout>
)

const ButtonLayout = styled.div`
  margin: 5px;
`
