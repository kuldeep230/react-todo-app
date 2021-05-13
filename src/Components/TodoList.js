import React, { Component } from "react";

//Importing Components..
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="mt-20">
        <ul>
          {todos.map((todo) => (
            <Todo
              todoText={todo.text}
              todoCompleted={todo.completed}
              key={todo.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoList;
