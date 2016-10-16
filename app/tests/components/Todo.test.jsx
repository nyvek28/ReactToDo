var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    {Todo} = require('Todo')

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })

  it('should dispatch TOGGLE_TODO action on click', () => {
    var todoData = {
          id: 19,
          text: 'text',
          completed: true
        },
        spy = expect.createSpy(),
        todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch = {spy}/>),
        $el = $(ReactDOM.findDOMNode(todo))

    TestUtils.Simulate.click($el[0])
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    })

  })

})
