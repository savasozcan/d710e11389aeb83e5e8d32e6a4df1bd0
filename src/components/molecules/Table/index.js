import React from "react";

import { Link } from "react-router-dom";
import { getProductDetail } from "../../../redux/actions/productDetailActions";
import { useDispatch } from "react-redux";

import {
  StyledTable,
  StyledRow,
  StyledThumb,
  StyledDetail,
  StyledDetailLink,
  StyledInfo,
  StyledInfoText,
  StyledTitle,
  StyledPrice,
} from "./styles";

const Table = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledTable>
        <tbody>
          {data.map((el) => (
            <StyledRow key={el.id}>
              <td>
                <StyledInfo>
                  <StyledThumb src={el.image.src} alt="" />
                  <StyledInfoText>
                    <StyledTitle>{el.title}</StyledTitle>
                    <StyledPrice> {el.variants[0].price}</StyledPrice>
                  </StyledInfoText>
                </StyledInfo>
              </td>
              <StyledDetail>
                <StyledDetailLink
                  onClick={() => dispatch(getProductDetail(el.id))}
                >
                  <Link to="/product-detail"> Ürün Detayı </Link>{" "}
                </StyledDetailLink>
              </StyledDetail>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
