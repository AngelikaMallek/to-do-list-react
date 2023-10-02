import { useState } from "react";
import { StyledForm, Button, Field } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimNewTaskContent = newTaskContent.trim()
        if(trimNewTaskContent !== ""){
            addNewTask(trimNewTaskContent);
        }
        setNewTaskContent("");
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Field
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
}

export default Form;