import React, { useEffect } from 'react'
import { AppAction, AppState } from '../../reducers/app'
import { Header } from '../molecules/Header'

type Props = {
  app: AppState
  setTitle: (v: string) => AppAction
}

export const App = (props: Props) => {
  useEffect(() => {
    props.setTitle('Client Side Rendering')
  }, [])

  return (
    <React.Fragment>
      <Header title={props.app.title} />
    </React.Fragment>
  )
}
