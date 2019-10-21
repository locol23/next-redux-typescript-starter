import React, { useEffect } from 'react'
import { AppAction, AppState } from '../../reducers/app'
import { Header } from '../molecules/Header'

type Props = {
  app: AppState
  setTitle: (v: string) => AppAction
}

export const App: React.FC<Props> = ({ setTitle, app }) => {
  useEffect(
    () => {
      setTitle('Client Side Rendering')
    },
    [setTitle]
  )

  return (
    <>
      <Header title={app.title} />
    </>
  )
}
