import React from "react";
import ToDoItem from './ToDoItem';

const ToDoList = props => {  
    return (
        <ul>
            {props.todos.map(todo => (
                <ToDoItem 
                    key={todo.id} 
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteToDoProps={props.deleteToDoProps}
                    setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
    
}
export default ToDoList