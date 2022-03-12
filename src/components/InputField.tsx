// ES7+ React/Redux/React-Native snippets
import React from 'react'

interface Props{
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd:(e:React.FormEvent)=>void
}
const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  return (
    <form onSubmit={handleAdd}>
      <div className='mainDiv'>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} className='input_box' placeholder='Enter a Task' />
        <button className='submit_button'>Go</button>
      </div>
    </form>
  )
}

export default InputField