
var $ = require('jquery');

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos'),
        todos = [];

    try{
      todos = JSON.parse(stringTodos);
    }catch(err){

    }

    return $.isArray(todos) ? todos : [];
  }
};
