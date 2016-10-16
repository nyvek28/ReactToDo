
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo'
import {configure} from 'configureStore'

var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    {Provider} = require('react-redux')

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('should render one Todo component for each todo in list', () => {
    var todos = [
          {
            id: 1,
            text: 'Todo',
            completed: false,
            completedAt: undefined,
            createdAt: 500
          },{
            id: 2,
            text: 'Todo',
            completed: false,
            completedAt: undefined,
            createdAt: 500
          }],
        store = configure({todos}),
        provider = TestUtils.renderIntoDocument(
          <Provider store = {store}>
            <ConnectedTodoList/>
          </Provider>
        ),
        todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0],
        todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo)

        expect(todoComponents.length).toBe(todos.length)
  })

  it('should render empty message if no todos', () => {
    var todos = [],
        todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>),
        $el = $(ReactDOM.findDOMNode(todoList))

    expect($el.find('.container__message').length).toBe(1)
  })

})
