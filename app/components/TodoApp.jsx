
var React = require('react'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    TodoSearch = require('TodoSearch'),
    uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dogg',
          completed: false
        },{
          id: uuid(),
          text: 'Watch daredevil',
          completed: false
        },{
          id: uuid(),
          text: 'Look for a job',
          completed: true
        },{
          id: uuid(),
          text: 'Enter swim competition',
          completed: false
        }
      ]
    }
  },
  handleAddTodo: function(text){
    var todo = {
          id: uuid(),
          text: text,
          completed: false
        }

    this.setState({
      todos: [
        ...this.state.todos,
        todo
      ]
    });

  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});

  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){

    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch = {this.handleSearch}/>
        <TodoList todos = {todos} onToggle = {this.handleToggle}/>
        <AddTodo onAddTodo = {this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
