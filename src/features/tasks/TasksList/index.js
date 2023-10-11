import { List, RemoveButton, Item, Content, ToggleDoneButton } from "./styled";

const TasksList = ({ tasks, hideDoneTasks, removeTask, toogleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item 
                key={task.id}
                hidden={task.done && hideDoneTasks}
            >
                <ToggleDoneButton
                    onClick={() => toogleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </ToggleDoneButton>
                <Content toogleDone={task.done}>
                    {task.content}
                </Content>
                <RemoveButton
                    onClick={() => removeTask(task.id)}
                >
                    ✗
                </RemoveButton>
            </Item>
        ))}
    </List>
)

export default TasksList;