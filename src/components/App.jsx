import React, { useState } from "react";
import ToDoItem from "./toDoItem";
import Header from "./Header";

function App() {
  const [inputText, setInput] = useState("");
  const [items, setItem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function handleItem() {
    setItem((prevItem) => [...prevItem, inputText]);
    setInput("");
  }

  return (
    <div className="container">
      <Header />
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <ToDoItem text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
