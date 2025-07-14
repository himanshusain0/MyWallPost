// components/Layout.jsx
"use client"; // optional, only if using client-side interactivity like useState/useEffect

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Navbar from "../Navbar/Navbar"; // if needed

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}

      <main style={{ minHeight: "80vh" }}>{children}</main>

      <Footer />
    </div>
  );
}
