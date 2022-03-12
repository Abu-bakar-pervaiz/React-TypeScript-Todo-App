import React from 'react'
import { AiFillEdit,AiFillDelete } from 'react-icons/ai'
import { MdDone } from "react-icons/md";
import Todo from './Model';

type Props={
  todos:Todo[],
  todo:Todo,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const SingleTodo = ({todos,todo,setTodos}:Props)=>{

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

  return (
    <div className={todo.isDone?"todo bg-success":"todo"}>
        <div className="content">
          {
            !todo.isDone?(
              <span>{todo.content}</span>
            ):(
              <s>{todo.content}</s>
            )
          }
        </div>
        <div className="actions">
            <AiFillEdit />
            <AiFillDelete onClick={()=>handleDelete(todo.id)}  />
            <MdDone onClick={()=>handleDone(todo.id)} />
        </div>
    </div>
  )
}
export default SingleTodo;