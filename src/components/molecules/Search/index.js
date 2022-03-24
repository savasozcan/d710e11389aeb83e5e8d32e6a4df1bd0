import React from "react";
import { StyledInput } from "./styles";

const Search = ({ value, placeholder, onChange }) => {
  return (
    <StyledInput value={value} placeholder={placeholder} onChange={onChange} />
  );
};

export default Search;
