import { selectTasks, selectHideDone, toogleTaskDone, removeTask } from "../../taskSlice";
import { List, RemoveButton, Item, Content, ToggleDoneButton, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {

    const tasks = useSelector(selectTasks);

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