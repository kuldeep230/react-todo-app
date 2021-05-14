import React, { useContext, useEffect } from "react";
import TodoList from "./TodoList";
import TodoContext from "../Context/TodoContext/TodoContext";

const Form = () => {
  const context = useContext(TodoContext);

  // const handleInputText = (e) => {
  //   context.setInputText(e.target.value);
  // };

  useEffect(() => {
    context.getTodosAPI();
    //eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    context.submitHandler(context.inputText, context.mytodos);
  };

  return (
    <div className="flex justify-center">
      <form className="text-center w-10/12" onSubmit={handleSubmit}>
        <div className="flex justify-center ">
          <h1 className="font-semibold text-xl text-blue-500 w-52  bg-gray-100 bg-opacity-25 pt-3">
            Enter your Todo{" "}
            <i className="fas fa-hand-point-right text-red-400 animate-pulse"></i>
          </h1>
          <input
            onChange={context.setInputText}
            className="w-8/12 h-14 p-5 text-lg"
            type="text"
            name="text"
            value={context.inputText}
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
          <TodoList />
        </div>
      </form>
    </div>
  );
};
export default Form;
