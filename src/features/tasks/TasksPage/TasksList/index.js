import {  selectHideDone, toogleTaskDone, removeTask, selectTaskByQuery } from "../../taskSlice";
import { List, RemoveButton, Item, Content, ToggleDoneButton, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const TasksList = () => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");

    const tasks = useSelector(state => selectTaskByQuery(state, query));

    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item 
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <ToggleDoneButton
                        onClick={() => dispatch(toogleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </ToggleDoneButton>
                    <Content toogleDone={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        ✗
                    </RemoveButton>
                </Item>
            ))}
        </List>
    )
}

export default TasksList;