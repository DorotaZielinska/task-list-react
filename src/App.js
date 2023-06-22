import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import Tasks from "./features/tasks/TasksPage/Tasks";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/tasks/author/Author";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/zadania">
                        Zadania
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/autor">
                        O autorze
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/autor">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>

    </HashRouter>
)