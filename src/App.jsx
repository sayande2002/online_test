import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import RenderPage from "utils/RenderPage";
import "styles/tailwind.css";
import "react-tippy/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";
const HomePage = lazy(() => import("pages/HomePage"));
const AboutPage = lazy(() => import("pages/AboutPage"));
const TestPage = lazy(() => import("pages/TestPage"));
const ResultPage = lazy(() => import("pages/ResultPage"));
const Login = lazy(() => import("pages/LoginPage"));
const Signup = lazy(() => import("pages/SignupPage"));
const Admin = lazy(() => import("pages/AminPage"));
const ErrorPage = lazy(() => import("pages/ErrorPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<RenderPage Page={HomePage} />} />
      <Route path="/about" element={<RenderPage Page={AboutPage} />} />
      <Route path="/test" element={<RenderPage Page={TestPage} />} />
      <Route path="/result" element={<RenderPage Page={ResultPage} />} />
      <Route path="/login" element={<RenderPage Page={Login} />} />
      <Route path="/signup" element={<RenderPage Page={Signup} />} />
      <Route path="/admin" element={<RenderPage Page={Admin} />} />
      <Route path="*" element={<RenderPage Page={ErrorPage} />} />
    </Routes>
  );
}

export default App;
