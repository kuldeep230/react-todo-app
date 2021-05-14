import React, { Component } from "react";

//Importing Components..
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { mytodos, handleDelete, handleCheck } = this.props;
    return (
      <div className="mt-20">
        <ul>
          {mytodos.map((todo) => (
            <Todo
              todoText={todo.text}
              key={todo.key}
              todo={todo}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoList;
