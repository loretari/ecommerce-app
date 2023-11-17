import React, {useState} from "react";
import "./SearchBar.css";
import { items } from "../../Data/AllData";

const SearchBar = ({setFilterList}) => {

    const [searchWord, setSearchWord] = useState(null);

    const handleChange = (input) => {
        setSearchWord(input.target.value);
        setFilterList(
            items.filter((item) =>
            item.description?.toLowerCase().includes(searchWord?.toLowerCase())
        )
        )
    }


    return (
        <div className= "search-container">
            <input type= "text" placeholder= "Search..." onChange={handleChange} />
            <ion-icon name="search-outline" className = "search-icon"></ion-icon>
        </div>
    )
}

export default SearchBar;