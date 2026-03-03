import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            text: "text",
            completed: false
        },
    ],
    addTodo: function(){},
    toggleCompleted: function(){},
    deleteTodo:function(){},
    updateTodo: function(){},
})

export  const TodoContextProvider = TodoContext.Provider

export function useTodoContext(){
    return useContext(TodoContext)
}