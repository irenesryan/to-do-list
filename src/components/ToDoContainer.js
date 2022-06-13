import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './ToDosList';
import Header from './Header';
import InputToDo from './InputToDo';

class ToDoContainer extends Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: 'Setup development enviornment',
                completed: true
            },
            {
                id: uuidv4(),
                title: 'Develop website and add content',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Deploy to live server',
                completed: false
            }
        ]
    };

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if(todo.id === id) {
                   return {
                       ...todo,
                       completed: !todo.completed
                   }
                }
                return todo;
            })
        }));
    };

    delToDo = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    addToDoItem = title => {
        const newToDo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({ todos: [...this.state.todos, newToDo] });
    }

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='inner'>
                    <Header />
                    <InputToDo addToDoProps={this.addToDoItem}/>
                    <ToDoList 
                        todos={this.state.todos}
                        handleChangeProps={this.handleChange}
                        deleteToDoProps={this.delToDo}
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        )
    }
}
export default ToDoContainer