var React = require('react'),
    Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){

    var {todos, onToggle} = this.props,
        renderTodos = () => {
          return todos.map((todo) => {
            return (
              <Todo key = {todo.id} {...todo} onToggle = {onToggle}/>
            );
          });
        };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
