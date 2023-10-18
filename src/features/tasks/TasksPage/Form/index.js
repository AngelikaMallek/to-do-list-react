import { useState, useRef } from "react";
import { StyledForm, Button } from "./styled";
import { Field } from "../../Input";
import { useDispatch } from "react-redux";
import { addTask } from "../../taskSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimNewTaskContent = newTaskContent.trim()
        if(trimNewTaskContent !== ""){
            dispatch(addTask({
                content: trimNewTaskContent,
                done: false,
                id: nanoid(),
            }));
        }
        setNewTaskContent("");
    }

    const onFocusInput = () => {
        inputRef.current.focus();
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Field
                ref={inputRef}
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button
                onClick={onFocusInput}
            >
                Dodaj zadanie
            </Button>
        </StyledForm>
    )
}

export default Form;