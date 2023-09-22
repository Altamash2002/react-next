'use client'
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
  
  return (
    <>
      <h1>My marks are {marks}</h1>
      <form action="" onSubmit={changeMarks}>
        <input type="text" name="marks" id="marks" value={inputMarks} onChange={getMarks} />
        <button type="submit">Change Marks</button>
      </form>
    </>
  )
}

export default page