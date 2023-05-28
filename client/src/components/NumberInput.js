import React from "react";

const NumberInput = (props) => {
  function handleChange(event) {
    const value = event.target.value;
    const regex = /^([0-9\s]*)$/; // numbers and sapce and empty
    if (regex.test(value)) {
      props.onChange(value);
    }
  }

  function handleKeyDown(event) {
    if (event.ctrlKey && (event.key === "v" || event.key === "V")) {
      return;
    }

    if (
      event.key === "Delete" ||
      event.key === "Backspace" ||
      event.key === " " ||
      event.key.startsWith("Arrow")
    ) {
      return;
    }
    
    if (!/^\d*$/.test(event.key)) {
      event.preventDefault();
    }
  }

  return (
    <>
      <input
        type="text"
        name={props.name}
        id={props.id}
        className={props.className}
        value={props.value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default NumberInput;
