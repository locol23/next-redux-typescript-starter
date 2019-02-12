import { reducer, setTitle } from './app'

test('should return the initial state', () => {
  expect(
    reducer(undefined, { type: undefined as any, payload: undefined as any })
  ).toMatchSnapshot()
})

test('should handle SET_TITLE', () => {
  expect(
    reducer(undefined, setTitle('Client Side Rendering'))
  ).toMatchSnapshot()
})
