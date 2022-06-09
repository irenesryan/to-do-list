import React, { Component } from "react";

class ToDoItem extends Component {
    render() {
        return(
            <li>
                <input 
                    type='checkbox' 
                    checked={this.props.todo.completed} 
                    onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                />
                <button onClick={() => this.props.deleteToDoProps(this.props.todo.id)}>Delete</button>
                {this.props.todo.title}
            </li>
        )
    }
}
export default ToDoItem