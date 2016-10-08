
var React = require('react'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
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
  handleAddTodo: function(text){
    var todos = this.state.todos,
        todo = {
          id: this.state.todos.length + 1,
          text: text
        }

    todos.push(todo);

    this.setState({
      todos: todos
    });

  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function(){

    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch = {this.handleSearch}/>
        <TodoList todos = {todos}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
