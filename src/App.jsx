
import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContextProvider } from './contexts/TodoContext'

function App() {

  const [text,setText] = useState("hi")
  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState(true)

  function addTodo(todo){
    setTodos((prev)=>[...prev,{ id:Date.now(), text: todo.text, completed: false}])
    console.log(todos);    
  }

  function toggleCompleted(id){
    setCompleted(!completed)
    todos.map((todo)=>{
      todo.id === id ? todo.completed = completed : "";
    })
  }
  
  function deleteTodo(id){
    setTodos((todos)=>todos.filter((todo)=>todo.id != id))
  }

  function updateTodo(id, text){
    todos.map((todo)=>(todo.id == id ? todo.text = text : ""))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if( todos && todos.length >0){
      setTodos(todos)
    }
  },[]
  )

  useEffect(
    ()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
    },[todos]
  )
  
  return(
    <>
    <TodoContextProvider value={{addTodo,todos,toggleCompleted, deleteTodo,updateTodo}}>

    <div
    className='flex flex-col gap-5 items-center text-white'>

    <TodoForm/>
    {todos.map((todo)=>(
      <TodoItem todo={todo} key={todo.id}/>
    ))}
    </div>
      </TodoContextProvider>
    </>
  )
}

export default App
