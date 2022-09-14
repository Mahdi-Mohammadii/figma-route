import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import LoginPage from "../../login/loginPage"
import Menu from "../menu";
import TopSection from "../topSection";

const Navbar = () => {
  return (
    <>
    <header className="header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      </header>
    </>
  );
};

export default Navbar;
