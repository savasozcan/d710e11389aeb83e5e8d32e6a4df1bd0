import React from "react";
import { StyledWrapper, StyledButton } from "./styles";

const Pagination = ({ pageNumbers, handleClick, current }) => {
  return (
    <StyledWrapper>
      {pageNumbers.map((number) => {
        return (
          <StyledButton
            key={number}
            onClick={() => handleClick(number)}
            active={current === number}
          >
            {number}
          </StyledButton>
        );
      })}
    </StyledWrapper>
  );
};

export default Pagination;
