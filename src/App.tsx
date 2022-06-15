import React, { useState } from "react";
import { isDefaultClause } from "typescript";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model"

const App: React.FC = () => { // Functional Component

  const [todo, setTodo] = useState<string>(""); // Defining a string using useState
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) // Check if there's anything inside the to-do
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("");
  }

  console.log(todos);

  return <div className="App">
    <span className="heading">Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos} />
  </div>;
}

export default App;
