
import Todo from 'Todo'

var React = require('react'),
    {connect} = require('react-redux'),
    TodoAPI = require('TodoAPI')

export var TodoList = React.createClass({
  render: function(){

    var {todos, showCompleted, searchText} = this.props,
        renderTodos = () => {
          if(todos.length === 0){
            return (
              <p className = 'container__message'>Nothing to do</p>
            )
          }
          return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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
    return state
  }
)(TodoList)
