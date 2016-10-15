
var redux = require('redux'),
    {searchTextReducer, showCompletedReducer, todosReducer} = require('Reducers')

export var configure = () => {
  var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
      }),
      store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ))

  return store
}
