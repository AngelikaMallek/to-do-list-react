import { useState, useRef } from "react";
import { StyledForm, Button, Field } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimNewTaskContent = newTaskContent.trim()
        if(trimNewTaskContent !== ""){
            addNewTask(trimNewTaskContent);
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