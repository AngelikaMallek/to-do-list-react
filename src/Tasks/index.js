import { List, Button, Item, Content } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toogleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item 
                key={task.id}
                hidden={task.done && hideDoneTasks}
            >
                <Button
                    toogleDone
                    onClick={() => toogleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content toogleDone={task.done}>
                    {task.content}
                </Content>
                <Button
                    onClick={() => removeTask(task.id)}
                >
                    ✗
                </Button>
            </Item>
        ))}
    </List>
)

export default Tasks;