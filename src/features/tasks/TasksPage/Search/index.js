import { Field } from "../../Input";
import { StyledText } from "./styled";
import { useLocation, useHistory } from "react-router-dom";

const Search = () => {

    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

            if(target.value.trim() === "") {
                searchParams.delete("szukaj");
            } else {
                searchParams.set("szukaj",target.value);
            }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    return (
        <StyledText>
            <Field 
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledText>
    )
}

export default Search;