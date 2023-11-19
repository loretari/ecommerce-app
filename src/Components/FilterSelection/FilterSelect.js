import Select from "react-select";
import { items } from "../../Data/AllData";
import React from "react";

const options = [
    { value: "Dresses", label: "Dresses" },
    { value: "Capes", label: "Capes" },
    { value: "Convertible Dresses", label: "Convertible Dresses" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#f2f2f2",
        color: "black",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#f2f2f2" : "white",
        color: state.isSelected ? "black" : "black",
        "&:hover": {
            backgroundColor: "#f2f2f2",
            color: "black",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "black",
    }),
};



const FilterSelect = ({setFilterList}) => {

    const handleChange = (selectedOption) => {
        setFilterList(items.filter(item => item.category ===selectedOption.value))
    }

    return (
   <Select
       options={options}
       defaultValue={{value: "", label: "Filter By Category"}}
       styles={customStyles}
       onCange = {handleChange}
   />


    )
}

export default FilterSelect;