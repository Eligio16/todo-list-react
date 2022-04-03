import React, { useState } from "react";

function Input(props) {
  const [inputText, setInput] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
