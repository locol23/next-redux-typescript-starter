import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

interface Props {
  styleTags: React.ReactElement<{}>[]
}

export default class MyDocument extends Document<Props> {
  public render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" key="charSet" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            key="viewport"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
