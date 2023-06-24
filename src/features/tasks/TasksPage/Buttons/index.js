import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styled";
import { toggleHideDone, setAllDone, selectTasksState } from "../../tasksSlice";
import Button from "../../Button";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();
    return (
        <Container>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Container>
    )
}

export default Buttons;