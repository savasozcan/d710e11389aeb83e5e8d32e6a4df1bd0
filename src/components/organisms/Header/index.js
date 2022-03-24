import React from "react";
import Search from "../../molecules/Search";

const Header = ({ value, placeholder, onChange }) => {
  return <Search value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Header;
