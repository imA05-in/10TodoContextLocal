import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

export default function TodoForm() {
  const [FormValue, setFormValue] = useState("");
  const { addTodo } = useTodoContext();
  function handleSubmit(e) {
    e.preventDefault()
    addTodo({text: FormValue, complted: false})
    
    setFormValue("")
    

  }
  return (
    <>
      <span className="border ">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={FormValue}
          onChange={(e)=>setFormValue(e.target.value)}
          />
          <button className="bg-blue-400">Add</button>
        </form>
      </span>
    </>
  );
}
