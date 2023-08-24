import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            todos: ['breakfast','lunch','snacks','Dinner'],
            editData: {
                index: '',
                data: ''
            }
        }
    }

    addTodo = (value) => {
        this.setState({
            todos: [...this.state.todos, value]
        })
    }

    deleteTodo = (data) => {
        let filterTodo = this.state.todos.filter((value) => value !== data)

        this.setState({
            todos: [...filterTodo]
        })
    }

    editTodo = (index, data) => {
        this.setState({
            editData: {
                index,
                data
            }
        })
    }

    updateTodo = (index,data) => {
        let updatedTodos = this.state.todos.map((value,ind) => {
            if(ind === index) return data

            return value
        })

        this.setState({
            todos: [...updatedTodos],
            editData: {
                index: '',
                data: ''
            }
        })
    }

    render() {
        return (
            <div className='container mt-4'>
                <Input 
                    editData={this.state.editData} 
                    addTodo={this.addTodo}
                    updateTodo={this.updateTodo} />
                <List 
                    todos={this.state.todos} 
                    deleteTodo={this.deleteTodo}
                    editTodo={this.editTodo}/>
            </div>
        )
    }
}
