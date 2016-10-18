var React = require('react'),
    ReactDOM = require('react-dom'),
    TodoApp = require('TodoApp'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    {Provider} = require('react-redux'),
    actions = require('Actions'),
    store = require('configureStore').configure(),
    TodoAPI = require('TodoAPI')

store.subscribe(() => {
  var state = store.getState()
  TodoAPI.setTodos(state.todos)
})

var initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))

//Load foundation
$(document).foundation()

//App css
require('style!css!sass!AppStyles')

ReactDOM.render(
  <Provider store = {store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
)
