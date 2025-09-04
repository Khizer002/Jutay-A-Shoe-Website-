import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./shoeCom/Navbar";
import Search from "./shoeCom/Search";
import NavLinks from "./shoeCom/NavLinks";
import Home from "./shoeCom/Home";
import Men from "./shoeCom/Men";
import Women from "./shoeCom/Women";
import NewArrival from "./shoeCom/NewArrival";
import MajorLoafors from "./shoeCom/MajorLoafors";
import Caps from "./shoeCom/Caps";
import Belts from "./shoeCom/Belts";
import Card from "./shoeCom/Card";
import Shirts from "./shoeCom/Shirts";
import Sale from "./shoeCom/Sale";
import PageNotFound from "./shoeCom/PageNotFound";
import SearchResults from "./shoeCom/SearchResults";
import ProductItems from "./shoeCom/ProductItems";
import Footer1 from "./shoeCom/Footer1";
import Footer from "./shoeCom/Footer";
import Slides from "./shoeCom/Slides";
import CheckOut from "./shoeCom/CheckOut";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart,setCart]=useState(0);
  const [quantity, setQuantity] = useState(1)
  return (
    <Router>
      <Navbar />
      <Search input={searchTerm} setInput={setSearchTerm} count={cart}/>
      <NavLinks />
      {searchTerm.trim() !== "" ? <SearchResults res={searchTerm}  setRes={setSearchTerm}/> :(
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/new-arrival" element={<NewArrival />} />
        <Route exact path="/major-loafors" element={<MajorLoafors />} />
        <Route exact path="/caps" element={<Caps />} />
        <Route exact path="/wallets" element={<Belts />} />
        <Route exact path="/card-holders" element={<Card />} />
        <Route exact path="/t-shirts" element={<Shirts />} />
        <Route exact path="/flash-sale" element={<Sale />} />
        <Route exact path="/slides" element={<Slides />} />
        <Route exact path="/product/:id" element={<ProductItems  count={cart} setCount={setCart} quantity={quantity} setQuantity={setQuantity}/> }/>
        <Route exact path="/checkout/:id" element={<CheckOut quantity={quantity} />}/>
        <Route exact path="*" element={<PageNotFound/>} />
      </Routes>
      )}
      <Footer1 />
      <Footer /> 
    </Router>
  );
}

export default App;
