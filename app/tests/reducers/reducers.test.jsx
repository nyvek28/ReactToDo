
var expect = require('expect'),
    reducers = require('Reducers'),
    df = require('deep-freeze-strict')

describe('Reducers', () => {

  it('should exist', () => {
    expect(reducers).toExist()
  })

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {type: 'SET_SEARCH_TEXT', searchText: 'dog'},
          res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {type: 'TOGGLE_SHOW_COMPLETED'},
          res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toBe(true)
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var text = 'Walk the dog',
          action = {type: 'ADD_TODO', text: text},
          res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toBe(1)
      expect(res[0].text).toEqual(action.text)
    })

    it('should toggle todo', () => {
      var id = 2,
          action = {type: 'TOGGLE_TODO', id: id},
          todo = {
            id: id,
            text: 'action.text',
            completed: false,
            createdAt: 0,
            completedAt: undefined
          },
          res = reducers.todosReducer(df([todo]), df(action))

      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toExist()

    })

  })

})
