import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todoText, todo } = this.props;

    const onhandleDelete = (e) => {
      e.preventDefault();
      this.props.handleDelete(todo);
    };

    return (
      <div className="flex justify-center pb-2 shadow-lg  ">
        <li className="bg-gray-100 w-6/12 h-14 pt-3.5 flex pl-5 text-lg font-semibold text-gray-600  ">
          {todoText}
        </li>
        <button
          onClick={onhandleDelete}
          className="h-14 w-16 mr-5 bg-red-400 focus:outline-none"
        >
          <i className="fas fa-trash text-white" />
        </button>
      </div>
    );
  }
}
export default Todo;
