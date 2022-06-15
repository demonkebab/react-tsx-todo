import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { MdEditNote, MdDelete, MdCheck } from "react-icons/md";
import TodoList from "./TodoList";

// Edit icon -> MdEditNote
// Delete icon -> MdDelete
// Complete icon -> MdCheck

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=> {
    inputRef.current?.focus();
  }, [edit])


  return (
    <form className="todosSingle" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todosSingleText"
        />
      ) : todo.isDone ? (
        <s className="todosSingleText">{todo.todo}</s>
      ) : (
        <span className="todosSingleText">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEditNote />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
