import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toogleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button
                onClick={toogleHideDone}
                className="buttons_button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                onClick={setAllDone}
                className="buttons_button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
}

export default Buttons;