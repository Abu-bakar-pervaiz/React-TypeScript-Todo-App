import React, { useState } from 'react'
import { AiFillEdit,AiFillDelete } from 'react-icons/ai'
import { MdDone } from "react-icons/md";
import Todo from './Model';

type Props={
  todos:Todo[],
  todo:Todo,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const SingleTodo = ({todos,todo,setTodos}:Props)=>{

const [edit, setEdit] = useState<boolean>(false);
const [editTodo, setEditTodo] = useState<string>(todo.content);

const handleDone = (id:number)=>{

  setTodos(
    todos.map(
      (todo)=>(
        todo.id===id?{...todo,isDone:!todo.isDone}:todo
      )
    )
  )
  
}

const handleDelete = (id:number)=>{

  setTodos(
    todos.filter(
      (todo)=> todo.id!==id
    )
  )
  
}

const handleEdit = (e:React.FormEvent,id:number)=>{

  e.preventDefault();
  setTodos(todos.map((todo)=>todo.id===id?{...todo,content:editTodo}:todo));
  console.log(todos);
  
  setEdit(false);

}

  return (
    <form className={todo.isDone?"todo bg-success":"todo"} onSubmit={(e)=>handleEdit(e,todo.id)}>
        <div className="content">
          {
            edit?(
              <input type="text" 
                value={editTodo}
                onChange={(e)=>setEditTodo(e.target.value)}
                className="input-edit" 
              />
            ):
            !todo.isDone?(
              <span>{todo.content}</span>
            ):(
              <s>{todo.content}</s>
            )
          }
        </div>
        <div className="actions">
            <AiFillEdit onClick={()=>{
              if (!edit && !todo.isDone) {
                 setEdit(!edit);
              }
            }} />
            <AiFillDelete onClick={()=>handleDelete(todo.id)}  />
            <MdDone onClick={()=>handleDone(todo.id)} />
        </div>
    </form>
  )
}
export default SingleTodo;