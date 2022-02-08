import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { SessionReducer } from './features/session'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  session: SessionReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
