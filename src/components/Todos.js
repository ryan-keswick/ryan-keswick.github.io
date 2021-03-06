import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} 
            markComplete={this.props.markComplete} 
            delTodo={this.props.delTodo}/>
        ));
    }
}

// PropTypes
Todos.PropTypes = { 
    todos: PropTypes.array.isRequred
}

export default Todos;
