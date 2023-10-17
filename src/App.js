import Author from "./features/author/Author";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { List, StyledLink  } from "./styled";

const App = () => (
    <HashRouter>
        <nav>
            <List>
                <li>
                    <StyledLink  to="/zadania">Zadania</StyledLink >
                </li>
                <li>
                    <StyledLink  to="/autor">O autorze</StyledLink >
                </li>
            </List>
        </nav>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <Author />
            </Route>
            <Route path="/">
                <Redirect to="/zadania"/>
            </Route>
        </Switch>
    </HashRouter>
)
export default App;