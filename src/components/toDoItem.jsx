import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function Rayar() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={Rayar}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
