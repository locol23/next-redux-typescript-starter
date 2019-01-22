const SET_TITLE = 'app/set-title'

export const setTitle = (v: string) => ({
  type: SET_TITLE as typeof SET_TITLE,
  payload: v,
})

export type AppAction = ReturnType<typeof setTitle>

export type AppState = typeof initialState

export const initialState = {
  title: '',
}

export const reducer = (state = initialState, action: AppAction) => {
  if (action.type === SET_TITLE) {
    return { ...state, title: action.payload }
  }
  return state
}
