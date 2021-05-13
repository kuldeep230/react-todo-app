import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todoText } = this.props;

    return (
      <div className="flex justify-center mb-3">
        <li className="bg-gray-100 w-6/12 h-14 pt-3.5 flex pl-5 text-lg font-semibold text-gray-600 ">
          {todoText}
        </li>
        <button
          className="h-14 w-16 bg-green-400 focus:outline-none"
          type="button"
        >
          <i className="fas fa-check text-white" />
        </button>
        <button
          className="h-14 w-16 mr-5 bg-red-400 focus:outline-none"
          type="button"
        >
          <i className="fas fa-trash text-white" />
        </button>
      </div>
    );
  }
}
export default Todo;
