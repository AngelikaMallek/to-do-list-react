import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { StyledText } from "./styled";

const Author = () => (
    <Container>
        <Header title="O autorze"/>
        <Section
          title="Angelika Mallek"
          body={
            <>
                <StyledText>
                    Jestem absolwentem Technikum Informatycznego, jednak dalej zgłębiam poznaną mi więdzę, poprzez kurs YouCode. 
                    Pracuję w agencji reklamowej. Interesuje się zdrowym stylem życia i muzyką, od wielu lat gram na skrzypcach. 
                </StyledText>
            </>
        }
        />
    </Container>
);

export default Author;