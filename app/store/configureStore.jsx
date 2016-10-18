
import * as redux from 'redux'
import thunk from 'redux-thunk'
import {searchTextReducer, showCompletedReducer, todosReducer} from 'Reducers'


export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
      }),
      store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ))

  return store
}
