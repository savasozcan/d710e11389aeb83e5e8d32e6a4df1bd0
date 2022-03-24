import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

import TableContainer from "../../components/organisms/TableContainer";
import Loader from "../../components/atoms/Loader";
import Header from "../../components/organisms/Header";

import { getProducts } from "../../redux/actions/productActions";
import { debounce } from "../../helpers/debounce";
import { StyledWrapper } from "./styles";

const Home = ({ itemsPerPage, ...props }) => {
  const { products } = props;

  useEffect(() => {
    props.getProducts();
  }, []);

  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const data = useSelector(() => products || []);

  const changeSearchData = debounce((text) => {
    setSearchData(
      data.filter((el) => {
        return el.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      })
    );
  }, 500);

  const handleSearch = (text) => {
    setSearch(text);
    changeSearchData(text);
  };

  return (
    <StyledWrapper>
      <Header
        value={search}
        placeholder="Ürün Ara"
        onChange={(e) => handleSearch(e.target.value)}
      />
      {data.length > 0 ? (
        <TableContainer data={search ? searchData : data} />
      ) : (
        <Loader />
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  products: state.productsReducer,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
