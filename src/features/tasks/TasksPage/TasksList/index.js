import { useSelector, useDispatch } from "react-redux";
import { TaskList, Item, Content, Button, TaskLink } from "./styled";
import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../QueryParameter";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <TaskList>
            {tasks.map(task => (
                <Item key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content
                        done={task.done}
                    >
                        <TaskLink to={`/zadania/${task.id}`}>{task.content}</TaskLink>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >&#128465;
                    </Button>
                </Item>
            ))}
        </TaskList>
    );
};

export default TasksList;