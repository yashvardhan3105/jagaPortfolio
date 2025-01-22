import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="main">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header_container">
      <h1>JAGA</h1>
      <div>{/* Two SVG for the LinkedIn and GitHub */}</div>
      <div>{/* Dropdown menu */}</div>
    </div>
  );
}

function Body() {
  return (
    <div className="body_container">
      {/* Work Experience */}
      {/* Skills */}
      {/* Contacts */}
    </div>
  );
}

function Footer() {
  return (
    <div className="footer_container">
      <h4>Copywrite 2025 Jaga</h4>
    </div>
  );
}
