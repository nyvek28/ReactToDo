var React = require('react'),
    ReactDOM = require('react-dom'),
    TodoApp = require('TodoApp'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!AppStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
