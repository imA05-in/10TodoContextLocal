import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleCompleted, deleteTodo,updateTodo } = useTodoContext();
  function handlgeComplted(e) {
    toggleCompleted(todo.id);
  }
  function handleDel() {
    deleteTodo(todo.id);
    console.log(todo.id, todo);
  }

  const [updateable, setUpdateAble] = useState(false);
  const [newText, setNewText] = useState([])

  function handleUpdate(e){
    setUpdateAble(!updateable)
    if(updateable === true){
        
    }
    updateTodo(todo.id, )

  }

  return (
    <>
      <div className="border">
        <input type="checkbox" onChange={handlgeComplted} />

        <input
          type="text"
          
          value={todo.text}
          className={todo.completed ? "line-through" : ""}
        />

        <button onClick={handleDel}>del</button>

        <button onClick={handleUpdate}>
          {updateable ? ". save" : ". edit"}
        </button>
      </div>
    </>
  );
}
