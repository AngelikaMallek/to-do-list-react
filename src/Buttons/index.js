import "./style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }
    return (
        <span className="section__element">
            <button
                className="section__button">
                {props.hideDoneTask ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="section__button"
                disabled={props.tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </span>
    )
}

export default Buttons;