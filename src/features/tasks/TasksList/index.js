import { useSelector, useDispatch } from "react-redux";
import { TaskList, Item, Content, Button } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
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
                        {task.content}
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