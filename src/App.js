import "./App.css";
import Login from "./components/Accounts/Login";
import Register from "./components/Accounts/Register";

import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import LoanRequest from "./components/Loan/LoanRequest";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <nav>
        <h3> Logo</h3>
        <div className="links">
          <Link className="list" to="/" element={<LoanRequest />}>
            {" "}
            Loan Request
          </Link>
          <Link className="list" to="/about">
            {" "}
            About
          </Link>
          <Link className="list" to="/contact">
            {" "}
            Contact
          </Link>
          <Link className="list" to="/login">
            {" "}
            Login
          </Link>
          <Link className="list" to="/signup">
            {" "}
            Sign Up
          </Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<LoanRequest />} />
        <Route path="/about" element={<Login />} />
        <Route path="/contact" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
