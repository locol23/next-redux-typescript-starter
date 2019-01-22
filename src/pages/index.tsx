import React from 'react'
import { Store } from 'redux'
import { App } from '../containers/App'
import { AllAction, RootState } from '../reducers'
import { setTitle } from '../reducers/app'

const Index = () => <App />

Index.getInitialProps = async ({
  store,
}: {
  store: Store<RootState, AllAction>
}) => {
  store.dispatch(setTitle('Server Side Rendering'))
}

export default Index
