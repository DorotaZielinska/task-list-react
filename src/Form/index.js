import React, { useState, useRef } from "react";
import { StyledForm, StyledInput, Button } from "./styled";

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
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <StyledInput
        value={newTaskContent}
        name="newTask"
        type="any"
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button
        onClick={focusInput}
      >Dodaj zadanie</Button>
    </StyledForm>
  )
}

export default Form;