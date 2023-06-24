import { useSelector, useDispatch } from "react-redux";
import { Container, StyledButtons } from "./styled";
import { toggleHideDone, setAllDone, fetchExampleTasks, selectTasksState } from "../../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();
    return (
        <Container>
            <StyledButtons onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </StyledButtons>
            {tasks.length > 0 && (
                <>
                    <StyledButtons onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButtons>
                    <StyledButtons
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                    </StyledButtons>
                </>
            )}
        </Container>
    )
}

export default Buttons;