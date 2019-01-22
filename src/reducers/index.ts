import { combineReducers } from 'redux'
import * as app from './app'

export type RootState = { app: app.AppState }
export type AllAction = app.AppAction

export const rootReducer = combineReducers({
  app: app.reducer,
})
