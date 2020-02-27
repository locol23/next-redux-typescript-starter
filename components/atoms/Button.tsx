import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

type Props = {
  type: string
  buttonText: string
  href: string
}

export const Button: React.FC<Props> = ({ href, buttonText }) => (
  <Link href={href}>
    <StyledButton type="button">{buttonText}</StyledButton>
  </Link>
)

const StyledButton = styled.button({
  margin: '5px',
  padding: '10px',
  borderRadius: '4px',
  backgroundColor: '#fff',
})
