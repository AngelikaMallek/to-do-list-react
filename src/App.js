import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Zjeść obiad", done: false },
  { id: 2, content: "Zjeść zupę", done: true },
]

function App() {
  const [hideDoneTasks, setHideDone] = useState(false);

  const toogleHideDone = () => {
    setHideDone(hideDoneTasks => !hideDoneTasks);
  };

  return (
    <Container>
      <Header />
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body = {<Tasks tasks = {tasks} hideDoneTasks = {hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks = {tasks} hideDoneTasks = {hideDoneTasks} toogleHideDone = {toogleHideDone} />}
      />
    </Container>
  );
}

export default App;
