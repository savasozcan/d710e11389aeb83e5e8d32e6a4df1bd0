import React, { useEffect, useState } from "react";
import Table from "../../molecules/Table";
import Pagination from "../../molecules/Pagination";

const TableContainer = ({ data }) => {
  const [current, setCurrent] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const itemsPerPage = 10;
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrent(number);
    changePaginatedData(number);
  };

  const changePaginatedData = (index = current) => {
    pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    const indexOfLastTodo = index * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    setPaginatedData(data.slice(indexOfFirstTodo, indexOfLastTodo));
  };

  useEffect(() => {
    setCurrent(1);
    changePaginatedData(1);
  }, [data]);

  return (
    <>
      <Table data={paginatedData} />
      <Pagination
        pageNumbers={pageNumbers}
        handleClick={handleClick}
        current={current}
      />
    </>
  );
};

export default TableContainer;
