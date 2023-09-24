'use client'
import Todo from "@/Components/Todo"
import { useCallback, useState, useEffect, useRef } from "react"

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

  // js code for password generator
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialAllowed, setSpecialAllowed] = useState(false)

  const generatePassword = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (specialAllowed) {
      str += "@#$%^&*!?/\|~[}]{()"
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)     
    }

    setPassword(pass)


  },[length,numberAllowed,specialAllowed,setPassword])

  useEffect(()=>{

    generatePassword()

  },[length,numberAllowed,specialAllowed,generatePassword])

  const passwordRef = useRef(null)

  const copyToClip = () => {
    window.navigator.clipboard.writeText(password)
    .then(() => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,length)
    })
    .catch((err) => {
      console.error('Could not copy text: ', err)
    });
  }

  
  return (
    <div className="py-5 px-3">
      <div className="container w-75 mx-auto text-center">
        <h1>My marks are {marks}</h1>
        <form action="" onSubmit={changeMarks}>
          <input type="text" name="marks" id="marks" value={inputMarks} onChange={getMarks} />
          <button type="submit">Change Marks</button>
        </form>
      </div>

      <hr />

      <div className="todo-container">
        <h1 className="heading">Todo List</h1>

        <form action="" id="todo-form" onSubmit={handleTodo}>
          <input type="text" name="todo" id="todo" value={todoinput} onChange={handleInputTodo}/>
          <button type="submit">ADD</button>
        </form>

        <Todo todos={todos} setTodos={setTodos} />
      </div>

      <hr />

      <div className="password-generator w-50 mx-auto text-center">
        <h1>Password Generator</h1>
        <div className="first-container row justify-content-center my-5">
          <input type="text" name="password" id="password" readOnly value={password} ref={passwordRef} className="w-75 mx-auto col-9 py-2 px-2" />
          <button type="button" className="col-2 mx-auto" onClick={copyToClip}>Copy</button>
        </div>
        <div className="second-containet row justify-content-between my-5">
          <div className="col-5">
            <input type="range" name="length" id="length" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} className="mx-2"  />
            <label htmlFor="length">Length {length}</label>
          </div>
          <div className="col-3">
            <input type="checkbox" name="numbers" id="numbers" className="mx-2" defaultChecked={numberAllowed} onClick={() => {setNumberAllowed((prev) => !prev)}} />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="col-3">
            <input type="checkbox" name="specialc" id="specialc" className="mx-2" defaultChecked={specialAllowed} onClick={()=>{setSpecialAllowed((prev) => !prev)}} />
            <label htmlFor="specialc">Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page