import withRedux from 'next-redux-wrapper'
import { AppProps, Container, DefaultAppIProps, NextAppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { configureStore } from '../store/configureStore'

type Props = { store: Store } & DefaultAppIProps & AppProps

const App = (props: Props) => (
  <Container>
    <Head>
      <title>SSR with Next</title>
    </Head>
    <Provider store={props.store}>
      <props.Component {...props.pageProps} />
    </Provider>
  </Container>
)

App.getInitialProps = async ({ Component, ctx }: NextAppContext) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  }
}

export default withRedux(configureStore)(App)
