import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import todosData from "./data/todosData"


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
      //console.log("changed", id)
      this.setState( prevState => {
        //We dont want to change todosData directly
        const updatedTodos = prevState.todos.map(todo => {
            if(todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              }
            }
            return todo
        })
        
        return {
          todos: updatedTodos
        }

      }) 
  }

  render() {
  const  todosData = this.state.todos.map(item => 
        <TodoItem handleChange={this.handleChange} key={item.id} item={item}
  />)

  return (
    <div className="todo-list">
      { todosData }
    </div>
  );
  }
}

export default App;
