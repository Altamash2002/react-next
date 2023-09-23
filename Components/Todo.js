import './todo.css'

const Todo = (props) => {

    const { todos,setTodos } = props // destructuring of props good way {todos,prop2}
    const handleDelete = (index) =>{
        // when button is called arrow function is called and handleDelete is executed directly (mast yrrr)
        const updateTodo = [...todos]
        updateTodo.splice(index,1);
        setTodos(updateTodo)
    }
    // in react jsx in callback you can't give curly braces
  return (
    <>
        <ul className="todos">
            {
                todos.map((todo,index)=>(
                    <li key={index}>
                        <h2>{todo}</h2>
                        <div>
                            <button className="delete" onClick={()=> handleDelete(index)}>X</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default Todo