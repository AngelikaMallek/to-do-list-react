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
                    Jestem absolwentem Technikum Informatycznego, jednak dalej zgłębiam poznaną mi więdzę, poprzez kurs <b>YouCode.</b> 
                    Pracuję w agencji reklamowej, projektuję strony internetowe oparte o CMS Wordpress. Mimo to wolę pisać w czystym kodzie,
                    ponieważ wydaje mi się to bardziej satysfakcjonujące. Dąże do tego, aby być w tym jak najlepsza. 😉
                </StyledText>
            </>
        }
        />
    </Container>
);

export default Author;