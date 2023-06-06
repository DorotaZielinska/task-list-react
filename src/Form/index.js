import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = newTaskContent.trim();
    if (newTask === "") {
      return;
    }
    addNewTask(newTask);
    setNewTaskContent("");
  }

  return (
    <form
      className="form"
      onSubmit={onFormSubmit}
    >
      <input
        value={newTaskContent}
        className="form__field"
        name="newTask"
        type="any"
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button
        className="form__button"
        onClick={focusInput}
      >Dodaj zadanie</button>
    </form>
  )
}

export default Form;