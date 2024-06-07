import React from 'react'
import  Form  from './Form'
import TodoList from './TodoList'

let id = 0;
let getId = () => ++id;

const initialTodoes = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completeed: true },
  { id: getId(), name: "Have Fun", completed: false },
]

export default class App extends React.Component {
  state = {
    todos: initialTodoes
  }

  addTodo = (name) => {
    this.setState ({
      ...this.state,
      todos: this.state.todos.concat({ id: getId(), completed: false, name })
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if (id == td.id) return { ...td, completed: !td.completed}
        return td;
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        <Form addTodo={this.addTodo} />
      </div>
    )
  }
}
