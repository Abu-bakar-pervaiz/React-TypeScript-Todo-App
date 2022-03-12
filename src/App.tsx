import React, { useState } from "react";
import "./index.css";
import InputField from "./components/InputField";
import Todo from "./components/Model";
import TodoList from "./components/TodoList";
const App:React.FC = ()=>{
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if (todo) {
      setTodos([...todos,{id:Date.now(),content:todo,isDone:false}])
      setTodo("")
    }
    
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <h2>Taskify</h2>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList  todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}

export default App;
