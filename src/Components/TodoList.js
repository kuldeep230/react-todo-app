import React, { useEffect } from "react";

//Importing Components..
import Todo from "./Todo";

const TodoList = ({ mytodos, handleDelete, getTodosAPI, todosAPI }) => {
  useEffect(() => {
    getTodosAPI();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="mt-20">
      <ul>
        {mytodos.map((todo) => (
          <Todo
            todoText={todo.text}
            key={todo.key}
            todo={todo}
            handleDelete={handleDelete}
          />
        ))}
        {todosAPI.map((todo) => (
          <Todo
            todoText={todo.title}
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
