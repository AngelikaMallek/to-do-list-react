import { selectTasks, toogleHideDone } from "../taskSlice";
import { StyledButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ setAllDone }) => {

    const {tasks, hideDone} = useSelector(selectTasks);

    const dispatch = useDispatch()

    if (tasks.length === 0) {
        return null;
    }
    return (
        <StyledButtons>
            <Button 
                onClick={() => dispatch(toogleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone               
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