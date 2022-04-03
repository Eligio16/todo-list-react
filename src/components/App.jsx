import React, { useState } from "react";
import ToDoItem from "./toDoItem";
import Header from "./Header";
import Input from "./Input";

function App() {
  const [items, setItem] = useState([]);

  function handleItem(inputText) {
    setItem((prevItem) => [...prevItem, inputText]);
  }

  function deleteItem(id) {
    setItem((prevItem) => {
      return prevItem.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <Header />
      <Input onAdd={handleItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
