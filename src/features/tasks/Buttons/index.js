import { selectAreTasksEmpty, selectHideDone, selectIsEmptyTasksDone, toogleHideDone, setAllDone } from "../taskSlice";
import { StyledButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {

    const hideDone = useSelector(selectHideDone);

    const areTasksEmpty = useSelector(selectAreTasksEmpty);

    const isEmptyTasksDone = useSelector(selectIsEmptyTasksDone);

    const dispatch = useDispatch();

    if (areTasksEmpty) {
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
                onClick={() => dispatch(setAllDone())}
                disabled={isEmptyTasksDone}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    )
}

export default Buttons;