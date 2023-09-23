'use client'
import Todo from "@/Components/Todo"
import { useState } from "react"

const page = () => {
  const [inputMarks, setInputMarks] = useState("")
  const getMarks = (e) => {
    e.preventDefault()
    setInputMarks(e.target.value)
  }
  const [marks, setMarks] = useState(80)
  const changeMarks = (e) => {
    e.preventDefault()
    setMarks(inputMarks)
    // e.target.reset();
    setInputMarks("")
  }


  // js code for todo
  const [todoinput, setTodoinput] = useState("")
  const [todos, setTodos] = useState([])
  const handleInputTodo = (e) =>{
    e.preventDefault()
    setTodoinput(e.target.value)
  }
  const handleTodo = (e) =>{
    e.preventDefault()
    setTodos([...todos , todoinput])
    setTodoinput("")
  }

  
  return (
    <>
      <div className="container">
        <h1>My marks are {marks}</h1>
        <form action="" onSubmit={changeMarks}>
          <input type="text" name="marks" id="marks" value={inputMarks} onChange={getMarks} />
          <button type="submit">Change Marks</button>
        </form>
      </div>

      <div className="todo-container">
        <h1 className="heading">Todo List</h1>

        <form action="" id="todo-form" onSubmit={handleTodo}>
          <input type="text" name="todo" id="todo" value={todoinput} onChange={handleInputTodo}/>
          <button type="submit">ADD</button>
        </form>

        <Todo todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default page