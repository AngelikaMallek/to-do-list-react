import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toogleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <StyledButtons>
            <Button 
                onClick={toogleHideDone}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone               
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    )
}

export default Buttons;