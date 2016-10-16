
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

var React = require('react'),
    TodoSearch = require('TodoSearch'),
    TodoAPI = require('TodoAPI'),
    uuid = require('node-uuid'),
    moment = require('moment')

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos)
  },
  handleAddTodo: function(text){
    var todo = {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }

    this.setState({
      todos: [
        ...this.state.todos,
        todo
      ]
    })

  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function(){

    var {todos, showCompleted, searchText} = this.state,
        filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

    return (
      <div>
        <h1 className = 'page-title'>Todo App</h1>
        <div className = 'row'>
          <div className = ' column small-centered small-11 medium-6 large-5'>
            <div className = 'container'>
              <TodoSearch onSearch = {this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo = {this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = TodoApp
