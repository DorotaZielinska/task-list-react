import React from "react";
import { Container, StyledButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Container>
        {tasks.length > 0 && (
            <>
                <StyledButtons onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButtons>
                <StyledButtons
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </StyledButtons>
            </>
        )}
    </Container>

)

export default Buttons;