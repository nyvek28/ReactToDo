var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todo state', () => {
    var sampleText = 'test',
        todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

      todoApp.setState({todos: []});
      todoApp.handleAddTodo(sampleText);

      expect(todoApp.state.todos[0].text).toBe(sampleText);

  });

  it('should toggle completed value', () => {
    var todoData = {
          id: 11,
          text: 'text',
          completed: false
        },
        todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});
    
    expect(todoData.completed).toBe(false);

    todoApp.handleToggle(11);
    expect(todoData.completed).toBe(true);

  });

});
