import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import useTasks from "./useTasks";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled";

function App() {
 
  const {
    tasks,
    hideDoneTasks, 
    toogleHideDone, 
    removeTask, 
    toogleTaskDone, 
    setAllDone, 
    addNewTask
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask}/>}
        />
        <Section
          title="Lista zadań"
          body={
            <Tasks
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              removeTask={removeTask}
              toogleTaskDone={toogleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              toogleHideDone={toogleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
