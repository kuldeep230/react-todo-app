import "./App.css";

//Importing Components..
import Form from "./Components/Form";
import TodoState from "./Context/TodoContext/TodoState";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500  ">
      <TodoState>
        <header className="text-center p-10">
          <h1 className="todo text-4xl font-semibold text-white   ">
            React Todo List
          </h1>
        </header>
        <Form />
      </TodoState>
    </div>
  );
};
export default App;
