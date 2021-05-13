import React, { Component } from "react";
import TodoList from "./TodoList";

class Form extends Component {
  state = {
    text: "",
    todos: [],
  };
  handleText = (e) => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { text: this.state.text, completed: false, id: Math.random() * 1000 },
      ],
    });
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="text-center p-10">
        <div className="flex justify-center ">
          <input
            onChange={this.handleText}
            className="w-5/12 h-14 p-5 text-lg"
            type="text"
            name="text"
            value={this.state.text}
            placeholder="@example: I Have to go Shopping today..."
          />
          <button
            type="submit"
            className=" h-14 w-16 mr-5 bg-green-400 focus:outline-none "
          >
            <i className="fas fa-plus-square text-green-800  "></i>
          </button>
          <select
            className="border-r-2 rounded
           border-red-400 pl-2 focus:outline-none "
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>
        <div>
          <TodoList todos={this.state.todos} text={this.state.text} />
        </div>
      </form>
    );
  }
}
export default Form;
