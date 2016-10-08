var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    var text = this.refs.todoText.value;

    if(text){
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
    }else{
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return(
      <div>
        <form ref = 'form' onSubmit = {this.onSubmit}>
          <input type = 'text' ref = 'todoText'/>
          <button className = "button expanded">Add</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;