import React from "react";
import Home from "../src/pages/Home";
import Header from "./components/organisms/Header";


const App = () => {
  return (
    <>
      <Header />
      <Home itemsPerPage={10} />
    </>
  );
};

export default App;
