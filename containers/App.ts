import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { App as AppComponent } from '../components/App'
import { RootState } from '../reducers'
import { setTitle } from '../reducers/app'

const mapStateToProps = (state: RootState) => ({ app: state.app })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTitle: (v: string) => dispatch(setTitle(v)),
})

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
