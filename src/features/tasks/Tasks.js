import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import useTasks from "../../useTasks";

function Tasks() {
 
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
    <div>
      <Container>
        <Header />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask}/>}
        />
        <Section
          title="Lista zadań"
          body={
            <TasksList
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
    </div>
  );
}

export default Tasks;
