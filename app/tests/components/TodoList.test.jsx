var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoList = require('TodoList'),
    Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo in list', () => {
    var todos = [
          {
            id: 1,
            text: 'Todo'
          },{
            id: 2,
            text: 'Todo'
          }],
        todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>),
        todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [],
        todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>),
        $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });

});
