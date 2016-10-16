
import {AddTodo} from 'AddTodo'

var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should dispatch ADD_TODO when submited', () => {
    var sampleText = 'Some Text',
        action = {type: 'ADD_TODO', text: sampleText},
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch = {spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = sampleText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should not dispatch ADD_TODO when invalid input', () => {
    var sampleText = '',
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch = {spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = sampleText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })

})
