import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import { Button, StyledButtons } from "./Button";
import { fetchExampleTasks, selectIsLoading } from "../taskSlice";
import { useDispatch, useSelector } from "react-redux";

function TasksPage() {

  const dispatch = useDispatch()

  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <Container>
        <Header title="Lista zadań"/>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form/>}
          extraHeaderContent={
            <StyledButtons>
              <Button 
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={isLoading}
              >
                {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
              </Button>
            </StyledButtons>
          }
        />
        <Section
          title="Wyszukiwarka"
          body={<Search />}
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

export default TasksPage;
