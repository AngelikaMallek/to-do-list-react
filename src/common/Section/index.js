import { StyledSection, Heading } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Heading>
            {title}
            {extraHeaderContent}
        </Heading>
        <div>
            {body}
        </div>
    </StyledSection>
);

export default Section;