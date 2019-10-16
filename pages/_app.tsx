import withRedux from 'next-redux-wrapper'
import { AppContext, AppInitialProps, AppProps, Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Global, css } from '@emotion/core'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { configureStore } from '../store/configureStore'
import { Menu } from '../components/molecules/Menu'
import { normalize } from '../constants/normalize'

type Props = { store: Store } & AppInitialProps & AppProps

const App = (props: Props) => {
  return (
    <Container>
      <Head>
        <title>SSR with Next</title>
      </Head>
      <Provider store={props.store}>
        <Global
          styles={css`
            ${normalize}
          `}
        />
        <Menu />
        <props.Component {...props.pageProps} />
      </Provider>
    </Container>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  }
}

export default withRedux(configureStore)(App)
