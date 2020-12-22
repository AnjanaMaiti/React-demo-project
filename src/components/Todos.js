import { Component } from "react";
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

export class Todos extends Component { 
  
    render(){
        return(
            <div class="collection">
                <a href="#!" class="collection-item">
                { this.props.todoList.map((todo) => (
                    <Todoitem key={todo.id} todo={todo}
                    markComplete={this.props.markComplete}
                    deleteTodo={this.props.deleteTodo} />
                ))}
                </a>
            </div>
        ); 
    }
  } 
  Todos.propTypes={
    todoList: PropTypes.array.isRequired
  } 
  
  export default Todos;
  