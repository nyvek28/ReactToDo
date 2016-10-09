var React = require('react'),
    moment = require('moment');

var Todo = React.createClass({
  render: function(){

    var {text, id, completed, createdAt, completedAt} = this.props,
        todoClassName = completed ? 'todo todo-completed' : 'todo',
        renderDate = () => {
          var message = 'Created ',
              timestamp = createdAt;

          if(completed){
            message = 'Completed ';
            timestamp = completedAt;
          }

          return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
        };

    return (
      <div className = {todoClassName} onClick = {() => {
          this.props.onToggle(id);
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
});

module.exports = Todo;
