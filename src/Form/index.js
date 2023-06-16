import React, { useState, useRef } from "react";
import { StyledForm, StyledInput, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = newTaskContent.trim();
    if (newTask === "") {
      return;
    }
    addNewTask(newTask);
    setNewTaskContent("");
    inputRef.current.focus();
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
        autoFocus
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  )
}

export default Form;