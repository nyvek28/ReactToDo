var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call handleSearch on change (Text)', () => {
    var sampleText = 'Hey',
        spy = expect.createSpy(),
        todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch = {spy}/>);

    todoSearch.refs.searchText.value = sampleText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, sampleText);
  });

  it('should call handleSearch on change (Checkbox)', () => {
    var spy = expect.createSpy(),
        todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch = {spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });

});
