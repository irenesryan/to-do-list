import React, { Component } from "react";
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <ToDoItem 
                        key={todo.id} 
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteToDoProps={this.props.deleteToDoProps}
                    />
                ))}
            </ul>
        )
    }
}
export default ToDoList