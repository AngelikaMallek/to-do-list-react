import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../taskSlice";
import { StyledText } from "./styled";

function TaskPage() {
    const params = useParams();
    const task = useSelector(state => getTaskById(state, params.id));
    return (
        <div>
        <Container>
            <Header title="Szczegóły zadania"/>
                {
                    task ? (
                        <Section
                        title={task.content}
                        body={
                            <> 
                                <StyledText>
                                    <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                                </StyledText>
                            </> 
                            
                        }
                        />
                    )
                    :   <Section 
                            title={"Nie znaleziono zadania"} 
                            body={<StyledText> </StyledText>}
                        />
                }
        </Container>
        </div>
    );
}

export default TaskPage;
