import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master Frontend" />
      <Todo text="Master Backend" />
    </div>
  );
}

export default App;
