import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";
import Details from "./Details";

export default (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/details" element={<Details />} />
  </Routes>
);