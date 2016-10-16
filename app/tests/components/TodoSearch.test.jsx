
import {TodoSearch} from 'TodoSearch'

var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils')

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist()
  })

  it('should dispatch SET_SEARCH_TEXT on change (Text)', () => {
    var sampleText = 'Hey',
        action = {type: 'SET_SEARCH_TEXT', searchText: sampleText},
        spy = expect.createSpy(),
        todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch = {spy}/>)

    todoSearch.refs.searchText.value = sampleText
    TestUtils.Simulate.change(todoSearch.refs.searchText)

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should dispatch TOGGLE_SHOW_COMPLETED on change (Checkbox)', () => {
    var spy = expect.createSpy(),
        action = {type: 'TOGGLE_SHOW_COMPLETED'},
        todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch = {spy}/>)

    todoSearch.refs.showCompleted.checked = true
    TestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(action)
  })

})
