import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
`;

export const StyledButton = styled.span`
  background-color: ${(props) => (props.active ? "#f5f5f5" : "#ede1e1")};
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.4s ease;
  outline: none;
  float: left;
  margin: 10px 10px 0 0;
`;
