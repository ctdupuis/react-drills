import React from "react";
import { Route, Routes } from "react-router-dom";

import Products from "./Products";
import Details from "./Details";

export default (
  <Routes>
    <Route exact path="/" element={<Products />} />
    <Route path="/details/:id" element={<Details />} />
  </Routes>
);