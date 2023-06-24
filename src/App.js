import { HashRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import Tasks from "./features/tasks/TasksPage/Tasks";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/tasks/author/Author";
import Navigation from "./features/tasks/Navigation";

export default () => (
    <HashRouter> 
           <Navigation />
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
        

    </HashRouter>
)