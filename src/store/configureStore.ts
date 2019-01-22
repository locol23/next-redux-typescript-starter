import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { rootReducer, RootState } from '../reducers'

export const configureStore = (initialState: RootState) => {
  return createStore(rootReducer, initialState, devToolsEnhancer({}))
}
