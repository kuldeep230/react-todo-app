import React from "react";
import TodoList from "./TodoList";

const Form = ({
  inputText,
  setInputText,
  mytodos,
  setMyTodos,
  getTodosAPI,
  todosAPI,
  setTodosAPI,
}) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleDelete = (todo) => {
    setMyTodos(mytodos.filter((element) => element.key !== todo.key));
    setTodosAPI(todosAPI.filter((element) => element.id !== todo.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      let todoItem = {
        text: inputText,
        key: Date.now(),
      };
      setMyTodos(mytodos.concat(todoItem).reverse());
    }
    setInputText("");
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
            onChange={handleInputText}
            className="w-8/12 h-14 p-5 text-lg"
            type="text"
            name="text"
            value={inputText}
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
            todosAPI={todosAPI}
            mytodos={mytodos}
            getTodosAPI={getTodosAPI}
            handleDelete={handleDelete}
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
