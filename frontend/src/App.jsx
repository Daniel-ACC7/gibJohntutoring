import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Tutors from "./components/pages/Tutors";
import Subjects from "./components/pages/Subjects";
// import Footer from "./components/Footer";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
