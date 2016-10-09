var expect = require('expect'),
    TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {

    it('should set valid todos array', () => {
      var todos = [{
            id: 3,
            text: 'A text',
            completed: false
          }];
          TodoAPI.setTodos(todos);

      var actual = JSON.parse(localStorage.getItem('todos'));
      expect(actual).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var todos = {
            id: 3,
            text: 'A text',
            completed: false
          };
          TodoAPI.setTodos(todos);

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
            id: 3,
            text: 'A text',
            completed: false
          }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actual = TodoAPI.getTodos();

      expect(actual).toEqual(todos);
    });

  });

});
