
var React = require('react'),
    {connect} = require('react-redux'),
    actions = require('Actions')

export var TodoSearch = React.createClass({
  render: function(){

    var {dispatch, showCompleted, searchText} = this.props

    return (
      <div className = 'container__header'>
        <div>
          <input type = 'search' ref = 'searchText'
            placeholder = 'Search' value = {searchText} onChange = {() => {
              var text = this.refs.searchText.value
              dispatch(actions.setSearchText(text))
            }}/>
        </div>
        <div>
          <label>
            <input type = 'checkbox' ref = 'showCompleted' checked = {showCompleted}
              onChange = {() => {
                dispatch(actions.toggleShowCompleted())
              }}/>
            Show completed Todos
          </label>
        </div>
      </div>
    )
  }
})

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch)
