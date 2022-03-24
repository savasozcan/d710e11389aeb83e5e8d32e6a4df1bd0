import { css } from "styled-components";

export const primary = css`
  background-color: #ffffff !important;
  color: #e64e41 !important;
  padding: 0 ${(props) => (props.hasChild ? "16px" : 0)}!important;
`;

export const secondary = css`
  background-color: rgba(255, 114, 94, 0.1) !important;
  color: rgba(255, 114, 94, 1) !important;
  border: 1px solid rgba(255, 114, 94, 0.3) !important;
  padding: 0 ${(props) => (props.hasChild ? "16px" : 0)}!important;

  &:hover {
    background-color: rgba(255, 114, 94, 0.2) !important;
  }
`;
