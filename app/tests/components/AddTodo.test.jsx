var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo when submited', () => {
    var sampleText = 'Some Text',
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = sampleText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(sampleText);
  });

  it('should not call onAddTodo when invalid input', () => {
    var sampleText = '',
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = sampleText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
