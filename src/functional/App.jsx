import { useState } from "react";
import Input from "./Input";
import List from "./List";

function App() {
    let [todos, setTodos] = useState([
      'breakfast',
      'lunch',
      'snacks',
      'Dinner'
    ]);

    let [editData, setEditData] = useState({
      index: '',
      data: ''
    })
  
    const addTodo = (data) => {
    

    setTodos([...todos, data])
  }

  const deleteTodo = (data) => {

    let filterData = todos.filter((value, index, arr) => value !== data)

    setTodos([...filterData])
  }

  const editTodo = (index,data) => {
    console.log(index,data);

    setEditData({
      index,
      data
    })
   
    
  }

  const updateTodo = (index, data) => {

    let newTodosArray = todos.map((value,ind,arr) => {
      if(ind === index) {
        return data;
      }

      return value;
    })

    setTodos([...newTodosArray])

    setEditData({
      index: '',
      data: ''
    })
  }

  return (
    <div className="container">
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo}/>
      <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
