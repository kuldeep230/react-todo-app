import React, { useContext, useEffect } from "react";

//Importing Components..
import Todo from "./Todo";
import TodoContext from "../Context/TodoContext/TodoContext";

const TodoList = () => {
  const context = useContext(TodoContext);

  useEffect(() => {
    context.getTodosAPI();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="mt-20">
      <ul>
        {context.mytodos.map((todo) => (
          <Todo todoText={todo.text} key={todo.key} todo={todo} />
        ))}
        {context.todosAPI.map((todo) => (
          <Todo todoText={todo.title} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
