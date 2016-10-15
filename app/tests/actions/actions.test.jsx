
var expect = require('expect'),
    actions = require('Actions')

describe('Actions', () => {
  it('should exist', () => {
    expect(actions).toExist()
  })

  it('should generate search text action', () => {
    var text = 'Something',
        action = {type: 'SET_SEARCH_TEXT', searchText: text},
        res = actions.setSearchText(text)

    expect(res).toEqual(action)

  })

  it('should generate add todo action', () => {
    var text = 'Something',
        action = {type: 'ADD_TODO', text: text},
        res = actions.addTodo(text)

    expect(res).toEqual(action)

  })

  it('should generate toggle show completed action', () => {
    var action = {type: 'TOGGLE_SHOW_COMPLETED'},
        res = actions.toggleShowCompleted()

    expect(res).toEqual(action)
  })

  it('should generate toggle todo action', () => {
    var id = 2,
        action = {type: 'TOGGLE_TODO', id: id},
        res = actions.toggleTodo(id)

    expect(res).toEqual(action)
  })

})
