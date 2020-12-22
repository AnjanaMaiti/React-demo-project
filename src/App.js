import { Component } from "react";
import './App.css';
import Todos from './components/Todos'

class App extends Component { 
  state = {
    todos:[
        {
            id: 1,
            title: "Take out the trash",
            completed: false
        },
        {
            id: 2,
            title: "Make the bed",
            completed: false
        },
        {
            id: 3,
            title: "Do laundry",
            completed: false
        },
        {
            id: 4,
            title: "Make dinner",
            completed: false
        },
        {
            id: 5,
            title: "Get groceries",
            completed: false
        },
        {
            id: 6,
            title: "Car wash",
            completed: false
        }
    ]
  }
  //toggle complete
  markComplete = (id) => {
    console.log(id);
    this.setState({ todos: this.state.todos.map(each => {
      if(each.id === id){
        each.completed = !each.completed
      }
      return each;
    })});
  }
  deleteTodo = (id) => {
    console.log(id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id != id)]})
  }
  render(){
    return (
      <div className="App">
        <h1>App</h1>

        {/* render Todos component */}
        <Todos todoList={ this.state.todos } 
        markComplete={this.markComplete} 
        deleteTodo={this.deleteTodo} />    
      </div>
    );
  }
}

export default App;
