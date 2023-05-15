import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDoneTasks, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "Zjeść obiad", done: false },
    { id: 2, content: "Zjeść zupę", done: true },
  ]);

  const toogleHideDone = () => {
    setHideDone(hideDoneTasks => !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
  };

  const toogleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  }

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks = {tasks}
            hideDoneTasks = {hideDoneTasks}
            removeTask = {removeTask}
            toogleTaskDone = {toogleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks = {tasks}
            hideDoneTasks = {hideDoneTasks}
            toogleHideDone = {toogleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
