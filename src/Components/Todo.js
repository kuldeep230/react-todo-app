import React from "react";

const Todo = ({ todoText, todo, handleDelete }) => {
  const onhandleDelete = (e) => {
    e.preventDefault();
    handleDelete(todo);
  };

  return (
    <div className="flex justify-center pb-2 shadow-lg truncate  ">
      <i className="fas fa-hand-point-right fa-3x pt-2 pr-5  text-blue-500 " />
      <li className="bg-gray-100 w-8/12 h-14 pt-3.5 flex pl-5 text-lg font-semibold text-gray-600  ">
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
};
export default Todo;
