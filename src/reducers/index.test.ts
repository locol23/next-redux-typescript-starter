import { createStore } from 'redux'
import { rootReducer } from '.'
import { reducer as appReducer } from './app'

const store = createStore(rootReducer)

test('should return rootReducer', () => {
  expect(store.getState().app).toEqual(
    appReducer(undefined, {
      type: undefined as any,
      payload: undefined as any,
    })
  )
})
