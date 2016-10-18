
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

var expect = require('expect'),
    actions = require('Actions'),
    createMockStore = configureMockStore([thunk])

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
    var todo = {
          id: 'abc123',
          text: 'Something',
          completed: false,
          createdAt: 234534
        },
        action = {type: 'ADD_TODO', todo},
        res = actions.addTodo(action.todo)

    expect(res).toEqual(action)

  })

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({})
    const todoText = 'Text'

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      })
      expect(actions[0].todo).toInclude({
        text: todoText
      })
      done()
    }).catch(done)

  })

  it('should generate add todos action', () => {
    var todos = [{
          id: 11,
          text: 'Something',
          completed: false,
          completedAt: undefined,
          createdAt: 8000
        }],
        action = {type: 'ADD_TODOS', todos},
        res = actions.addTodos(todos)

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
