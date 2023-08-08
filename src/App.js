import { useState } from "react";
import Box from "./Components/Box";
import Input from "./Components/Input";

function App() {
  const[todos,setTodo] = useState([]);

  const removeToDo = (id) => {
    const newTodos = todos.filter(
      (d, index) => {
        if (index !== id){
          return true;
        }else{
          return false;
        }
      }
    )
    setTodo(newTodos);
  }

  const addToDoHandler = (item) => {
    setTodo(
      [
        ...todos,
        {
          item,
          time: new Date().toTimeString()
        }
      ]
    )
  }
  return (
    <div className="h-screen p-3 text-center bg-indigo-900">
      <h3 className="font-semibold text-white font-mono text-xl">CATATANK👀H!</h3>
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-inner shadow-gray-700 bg-white">
        <Input handler = {addToDoHandler}/>
        <Box data={todos} removeHandler={removeToDo}/>
      </div>
    </div>
  );
};

export default App;