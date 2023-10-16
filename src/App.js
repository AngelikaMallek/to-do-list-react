import Author from "./features/author/Author";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";

const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Zadania</Link>
                </li><li>
                    <Link to="/autor">O autorze</Link>
                </li>
            </ul>
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