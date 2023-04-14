import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "layout/navbar/index.jsx";
import Footer from "layout/footer/index.jsx";
import ScrollTop from "layout/scrollTop/scrollTop.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <div style={{ marginTop: "100px", paddingTop: "0.2rem", height: "80vh" }}>
        {children}
      </div>
      <ScrollTop />
    </>
  );
};

export default Layout;
