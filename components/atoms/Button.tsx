import React from 'react'
import Link from 'next/link'

type Props = {
  type: string
  buttonText: string
  href: string
}

export const Button: React.FC<Props> = ({ href, buttonText }) => (
  <Link href={href}>
    <button
      css={{
        margin: '5px',
        padding: '10px',
        borderRadius: '4px',
        backgroundColor: '#fff',
      }}
      type="button"
    >
      {buttonText}
    </button>
  </Link>
)
