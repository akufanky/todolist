import { useState } from "react";
import Box from "./Components/Box";
import Input from "./Components/Input";

function App() {
  const[todos,useTodo] = useState([]);
  return (
    <div className="h-screen p-3 text-center bg-indigo-900">
      <h3 className="font-semibold text-white font-mono text-xl">CATATANK👀H!</h3>
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-inner shadow-gray-700 bg-white">
        <Input/>
        <Box data={todos}/>
      </div>
    </div>
  );
};

export default App;