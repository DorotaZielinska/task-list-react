import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = newTaskContent.trim();
    if (newTask === "") {
      return;
    }

    dispatch(addTask({
      content: newTask,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    inputRef.current.focus();
  }

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <Input
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