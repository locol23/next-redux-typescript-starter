import React from 'react'
import styled from '@emotion/styled'
import { Layout } from '../utils/Layout'
import { Button } from '../atoms/Button'

export const Menu = () => (
  <Layout>
    <ButtonLayout>
      <Button type="button" buttonText="index" href="/" />
    </ButtonLayout>
    <ButtonLayout>
      <Button type="button" buttonText="about" href="about" />
    </ButtonLayout>
    <ButtonLayout>
      <Button type="button" buttonText="dynamicImport" href="dynamicImport" />
    </ButtonLayout>
    <ButtonLayout>
      <Button type="button" buttonText="lazyLoad" href="lazyLoad" />
    </ButtonLayout>
  </Layout>
)

const ButtonLayout = styled.div`
  margin: 5px;
`
