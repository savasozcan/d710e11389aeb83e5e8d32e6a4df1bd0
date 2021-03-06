import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  width: 85%;
  margin: 0 auto;
  background: linear-gradient(245deg, #0b80aa, #025e83);
  border-radius: 5px;
  padding: 20px;
  text-align: left;
  & h1,
  span,
  p,
  h3 {
    color: #ffffff;
  }
  p,
  span {
    @media screen and (min-width: 320px) and (max-width: 425px) {
      font-size: 14px;
    }
  }
`;

export const StyledTitle = styled.h1`
  color: #ffffff;

  @media screen and (min-width: 320px) and (max-width: 425px) {
    font-size: 18px;
    margin-top: 15%;
  }

  @media screen and (min-width: 425px) and (max-width: 768px) {
    margin-top: 18%;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 15%;
  }
`;

export const StyledStatus = styled.h3`
  display: inline-block;
  font-weight: 700;
  color: #ffffff;
  background: #0b80aa;
  padding: 5px 10px;
  border-radius: 5px;

  @media screen and (min-width: 320px) and (max-width: 425px) {
    font-size: 14px;
  }
`;

export const StyledDate = styled.span`
  background: #1db51d;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const StyledThumb = styled.img`
  position: absolute;
  width: 100px;
  right: 10px;
  bottom: 10px;

  @media screen and (min-width: 320px) and (max-width: 425px) {
    width: 50px;
  }
`;

export const StyledHome = styled.span`
  position: absolute;
  top: 2%;
  right: 10%;
  background: #4c3737;
  color: #ffffff;
  padding: 15px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: transform 0.4s;
  font-weight: 700;
  &:hover {
    transform: scale(1.1);
  }
  & span {
    @media screen and (min-width: 320px) and (max-width: 425px) {
      font-size: 12px;
    }
  }
  & a {
    text-decoration: none;
    color: #ffffff;
  }

  @media screen and (min-width: 320px) and (max-width: 425px) {
    top: 3%;
    right: 12%;
    padding: 10px 5px;
  }
`;
