import { List, StyledLink  } from "./styled";

const Navigation = () => (
    <nav>
        <List>
            <li>
                <StyledLink  to="/zadania">Zadania</StyledLink >
            </li>
            <li>
                <StyledLink  to="/autor">O autorze</StyledLink >
            </li>
        </List>
    </nav>
)

export default Navigation;