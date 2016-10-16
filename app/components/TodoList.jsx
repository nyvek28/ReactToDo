
import Todo from 'Todo'

var React = require('react'),
    {connect} = require('react-redux')

export var TodoList = React.createClass({
  render: function(){

    var {todos, onToggle} = this.props,
        renderTodos = () => {
          if(todos.length === 0){
            return (
              <p className = 'container__message'>Nothing to do</p>
            )
          }
          return todos.map((todo) => {
            return (
              <Todo key = {todo.id} {...todo}/>
            )
          })
        }

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
})

export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList)
