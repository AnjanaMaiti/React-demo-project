import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
   
    render() {
        const {id, title} = this.props.todo;
        return (
            <div>
                <p>
                <label>
                    <input type="checkbox" class="filled-in" 
                    onChange={this.props.markComplete.bind(this, id)} />
                    <span style={ this.getStyle() }>{ title }</span>
                
                    <a class="waves-effect waves-light btn"
                    style={ btnStyle } 
                    onClick={ this.props.deleteTodo.bind(this, id)}>Delete</a>
                   
                </label>
                    
                </p>
            </div>
        )
    }
}
Todoitem.propTypes={
    todo: PropTypes.array.isRequired
} 
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    margin: '15px' 
}
export default Todoitem
