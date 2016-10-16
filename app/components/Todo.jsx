var React = require('react'),
    Todo = require('Todo'),
    moment = require('moment'),
    actions = require('Actions'),
    {connect} = require('react-redux')

export var Todo = React.createClass({
  render: function(){

    var {text, id, completed, createdAt, completedAt, dispatch} = this.props,
        todoClassName = completed ? 'todo todo-completed' : 'todo',
        renderDate = () => {
          var message = 'Created ',
              timestamp = createdAt

          if(completed){
            message = 'Completed '
            timestamp = completedAt
          }

          return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a')
        }

    return (
      <div className = {todoClassName} onClick = {() => {
          //this.props.onToggle(id)
          dispatch(actions.toggleTodo(id))
        }}>
        <div>
          <input type = 'checkbox' checked = {completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className = 'todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    )
  }
})

export default connect()(Todo) 
