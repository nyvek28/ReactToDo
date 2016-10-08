
var React = require('react'),
    TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos: [
        {
          id: 1,
          text: 'Walk the dogg'
        },{
          id: 2,
          text: 'Watch daredevil'
        },{
          id: 3,
          text: 'Look for a job'
        },{
          id: 4,
          text: 'Enter swim competition'
        }
      ]
    }
  },
  render: function(){

    var {todos} = this.state;

    return (
      <div>
        <TodoList todos = {todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
