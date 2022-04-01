import "./sass/style.scss";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Browse from "./components/browse/Browse";
import GameDetails from "./components/browse/GameDetails";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<GameDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
