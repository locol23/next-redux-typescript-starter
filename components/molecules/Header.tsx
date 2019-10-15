import React from 'react'
import styled from '@emotion/styled'

type Props = {
  title: string
}

export const Header = (props: Props) => (
  <div>
    <StyledHeader>{props.title}</StyledHeader>
  </div>
)

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  background-color: #fff;
`