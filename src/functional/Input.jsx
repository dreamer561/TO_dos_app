import React, { useEffect, useState } from 'react'

export default function Input(props) {
   
    let [todo,setTodo] = useState('');
    let [error,setError] = useState(false);

    const changeInput = (event) => {
        setTodo(event.target.value);
        if(event.target.value.length === 0) {
            setError(true)
        }else {
            setError(false)
        }
    }

    const submit = (event) => {
        event.preventDefault();

        if(todo.length > 0) {
            if(props.editData.index !== '') {
                props.updateTodo(props.editData.index, todo);
            }else {
                props.addTodo(todo);
            }
        }else {
            setError(true);
        }

        setTodo('')
    }

    useEffect(() => {
        setTodo(props.editData.data);
        console.log("hi there");
    }, [props.editData.data])

    return (
        <form className="row mt-4" onSubmit={submit}>
            <div className="col-10">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Add todo"
                   
                    value={todo} onChange={changeInput} />
                    {
                        error &&  <p className='text-danger'>Please Enter the todo</p>
                    }
               
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">
                    {props.editData.index === '' ? 'ADD': "UPDATE"}
                </button>
            </div>
        </form>
    )
}
