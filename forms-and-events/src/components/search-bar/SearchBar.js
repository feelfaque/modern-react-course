import {useState} from "react";

const SearchBar = ({onSearchSubmit}) => {
    const [term, setTerm] = useState("");
    const onInputChange = (e) => {
        setTerm(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term);
    }

        return (<div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={term} onChange={onInputChange}/>
                </div>
            </form>
        </div>);
}

export default SearchBar;