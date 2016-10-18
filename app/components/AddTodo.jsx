var React = require('react'),
    {connect} = require('react-redux'),
    actions = require('Actions')

export var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault()

    var text = this.refs.todoText.value,
        {dispatch} = this.props

    if(text){
      this.refs.todoText.value = ''
      dispatch(actions.startAddTodo(text))
    }else{
      this.refs.todoText.focus()
    }
  },
  render: function(){
    return(
      <div className = 'container__footer'>
        <form ref = 'form' onSubmit = {this.onSubmit}>
          <input type = 'text' ref = 'todoText' placeholder = 'What do you want to do?'/>
          <button className = "button expanded">Add</button>
        </form>
      </div>
    )
  }
})

export default connect()(AddTodo)
