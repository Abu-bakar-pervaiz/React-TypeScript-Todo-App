import Todo from "./Model"
import SingleTodo from "./SingleTodo";
interface Props{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
const TodoList:React.FC<Props> = ({todos,setTodos})=>{
    return (
        <div className="todo-wrapper">
            {
                todos.map((element,i)=>(
                    <SingleTodo todos={todos} todo={element} setTodos={setTodos}  />
                ))
            }
        </div>
    )
}

export default TodoList