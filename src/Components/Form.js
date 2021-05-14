import React, { Component } from "react";
import TodoList from "./TodoList";

class Form extends Component {
  state = {
    text: "",
    mytodos: [],
  };

  handleText = (e) => {
    this.setState({ text: e.target.value });
  };

  handleDelete = (todo) => {
    this.setState({
      mytodos: this.state.mytodos.filter((element) => element.key !== todo.key),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text !== "") {
      let todoItem = {
        text: this.state.text,
        key: Date.now(),
      };

      this.setState((state) => {
        return {
          mytodos: state.mytodos.concat(todoItem),
        };
      });
    }
    this.setState({ text: "" });

    console.log(this.state.mytodos);
  };

  render() {
    return (
      <div className="flex justify-center">
        <form className="text-center w-10/12" onSubmit={this.handleSubmit}>
          <div className="flex justify-center ">
            <h1 className="font-semibold text-xl text-blue-500 w-52  bg-gray-100 bg-opacity-25 pt-3">
              Enter your Todo{" "}
              <i className="fas fa-hand-point-right text-red-400 animate-pulse"></i>
            </h1>
            <input
              onChange={this.handleText}
              className="w-8/12 h-14 p-5 text-lg"
              type="text"
              name="text"
              value={this.state.text}
              placeholder="@example: I have to go Shopping today at 7:00pm..."
            />
            <button
              type="submit"
              className=" h-14 w-16 mr-5 bg-green-400 focus:outline-none "
            >
              <i className="fas fa-plus-square text-green-800  "></i>
            </button>
          </div>
          <div>
            <TodoList
              mytodos={this.state.mytodos}
              text={this.state.text}
              handleDelete={this.handleDelete}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
