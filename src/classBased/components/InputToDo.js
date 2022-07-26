import React, { Component } from "react";
import { FaPlusCircle } from "react-icons/fa"

class InputToDo extends Component {
    state={
        title:''
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.title.trim()) {
            this.props.addToDoProps(this.state.title)
            this.setState({title: ""})
        }
        else {
            alert("Please specify item.")
        }
    }
     
    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Add Todo..." 
                    value={this.state.title} 
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit"><FaPlusCircle /></button>
            </form>
        )
    }
}
export default InputToDo