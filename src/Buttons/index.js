import "./style.css";

const Buttons = ({ tasks, hideDoneTask}) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button
                className="buttons_button">
                {hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons_button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
}

export default Buttons;