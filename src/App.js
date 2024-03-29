import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/header/Nav";
import { About } from "./component/main/About";
import { Contact } from "./component/main/Contact";
import { Skills } from "./component/main/Skills";
import { Home } from "./component/main/Home";
import Footer from "./component/footer/Footer";
import background2 from "./assets/images/background2.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div
          className="main absolute mt-16 w-full"
          style={{ backgroundImage: `url(${background2})` }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<Home />} />
          </Routes>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
