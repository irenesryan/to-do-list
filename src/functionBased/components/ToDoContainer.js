import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './ToDosList';
import Header from './Header';
import InputToDo from './InputToDo';

const ToDoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos)

    useEffect(() => {
        //storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    function getInitialTodos() {
        //getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    const handleChange = id => {
        setTodos(prevState => prevState.map((todo) => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        }));
    };

    const delToDo = id => {
        setTodos([...todos.filter(todo => {return todo.id !== id})]);
    };

    const addToDoItem = title => {
        const newToDo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newToDo]);
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.title = updatedTitle
            }
            return todo
        }))
    }
    
    return (
        <div className='container'>
            <div className='inner'>
                <Header />
                <InputToDo addToDoProps={addToDoItem}/>
                <ToDoList 
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteToDoProps={delToDo}
                    setUpdate={setUpdate}
                />
            </div>
        </div>
    )
}
export default ToDoContainer