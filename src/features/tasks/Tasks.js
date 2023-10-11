import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  return (
    <div>
      <Container>
        <Header />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form/>}
        />
        <Section
          title="Lista zadań"
          body={<TasksList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
    </div>
  );
}

export default Tasks;
