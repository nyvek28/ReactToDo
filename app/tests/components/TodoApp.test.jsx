
import TodoList from 'TodoList'

var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoApp = require('TodoApp'),
    {Provider} = require('react-redux'),
    configureStore = require('configureStore')

describe('TodoApp', () => {

  beforeEach(function(){
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  it('should render todoList', () => {
    var store = configureStore.configure(),
        provider = TestUtils.renderIntoDocument(
          <Provider store = {store}>
            <TodoApp/>
          </Provider>
        ),
        todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0],
        todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList)

    expect(todoList.length).toEqual(1)
  })

})
