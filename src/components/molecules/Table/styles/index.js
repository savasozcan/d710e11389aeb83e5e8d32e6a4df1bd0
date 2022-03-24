import styled from "styled-components";

export const StyledTable = styled.table`
  position: relative;
  width: 100%;
`;

export const StyledRow = styled.tr`
  width: 100%;
  display: block;
  padding: 30px 20px;
  transition: background 0.4s ease;
  border-bottom: 1px solid #dbd0d0;
  color: #7f6d6d;
  &:nth-child(even) {
    &:hover {
      background: #ede1e1;
    }
  }
  &:nth-child(odd) {
    background: #f5f5f5;
    &:hover {
      background: #ede1e1;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 375px) {
    padding: 30px 15px;
  }

  @media screen and (min-width: 375px) and (max-width: 425px) {
    padding: 30px 20px;
  }
`;

export const StyledThumb = styled.img`
  width: 150px;

  @media screen and (min-width: 320px) and (max-width: 425px) {
    width: 100px;
  }

  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: 125px;
  }
`;

export const StyledDetail = styled.td`
  position: relative;
  float: right;
  right: 30px;
  margin-top: -110px;
  background: #7f6d6d;
  padding: 15px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 320px) and (max-width: 425px) {
    right: 0;
    padding: 0;
    margin-top: 4px;
    margin-right: -11px;
  }

  @media screen and (min-width: 425px) and (max-width: 768px) {
    margin-right: -14px;
    margin-top: -4px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    right: 8px;
    margin-top: -12px;
    padding: 5px 10px;
  }
`;

export const StyledDetailLink = styled.span`
  display: block;
  width: 65px;
  height: 25px;

  & a {
    position: absolute;
    left: 6px;
    top: 0;
    width: 100%;
    height: calc(100% - 16px);
    padding-top: 15px;
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;

    @media screen and (min-width: 320px) and (max-width: 425px) {
      font-size: 10px;
      padding-top: 6px;
      height: calc(100% - 6px);
    }

    @media screen and (min-width: 425px) and (max-width: 1024px) {
      font-size: 15px;
      padding-top: 8px;
      height: calc(100% - 8px);
    }
  }
`;

export const StyledInfo = styled.div`
  display: flex;
`;
export const StyledInfoText = styled.div`
  margin-left: 20px;
`;
export const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
export const StyledPrice = styled.div``;
