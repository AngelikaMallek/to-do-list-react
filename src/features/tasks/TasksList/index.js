import { selectTasksState, toogleTaskDone, removeTask } from "../taskSlice";
import { List, RemoveButton, Item, Content, ToggleDoneButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {

    const {tasks, hideDone} = useSelector(selectTasksState);

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
                        {task.content}
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