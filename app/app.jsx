var React = require('react'),
    ReactDOM = require('react-dom'),
    TodoApp = require('TodoApp'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    actions = require('Actions'),
    store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(actions.addTodo('Clean yard'))
store.dispatch(actions.setSearchText('yard'))
store.dispatch(actions.toggleShowCompleted())

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!AppStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
