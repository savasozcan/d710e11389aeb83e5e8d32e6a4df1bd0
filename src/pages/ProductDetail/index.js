import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/atoms/Loader";
import { getProductDetail } from "../../redux/actions/productDetailActions";
import { getProducts } from "../../redux/actions/productActions";
import { dateFormatter } from "../../helpers/dateFormatter";
import {
  StyledWrapper,
  StyledTitle,
  StyledStatus,
  StyledDate,
  StyledInfoWrapper,
  StyledThumb,
  StyledHome,
} from "./styles";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (props.products.length > 0) {
      const item = props.products.find((item) => item.id === props.product);
      setProduct(item);
    }
  }, []);

  return (
    <>
      {product ? (
        <div>
          <StyledWrapper>
            <StyledTitle>{product.title}</StyledTitle>
            <StyledInfoWrapper>
              <StyledStatus>{product.status.toUpperCase()}</StyledStatus>
              <StyledDate>{dateFormatter(product.updated_at)}</StyledDate>
              <StyledThumb src={product.image.src} />
            </StyledInfoWrapper>
          </StyledWrapper>
          <StyledHome>
            <Link to="/">Ana Sayfa</Link>
          </StyledHome>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.productsReducer,
  product: state.productDetailReducer,
});

const mapDispatchToProps = { getProducts, getProductDetail };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
