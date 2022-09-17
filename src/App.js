import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/header/Nav";
import { About } from "./component/main/About";
import { Contact } from "./component/main/Contact";
import { Gallery } from "./component/main/Gallery";
import { Home } from "./component/main/Home";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="main absolute mt-16 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
