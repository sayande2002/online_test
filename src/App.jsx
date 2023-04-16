import React, {lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import RenderPage from 'utils/RenderPage';
import 'styles/tailwind.css';
import 'react-tippy/dist/tippy.css';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from 'pages/HomePage';
import TestPage from 'pages/TestPage';
import ResultPage from 'pages/ResultPage';
import Login from 'pages/LoginPage';
import Signup from 'pages/SignupPage';
import Admin from 'pages/AminPage';
import Error from 'pages/ErrorPage';
import Layout from 'layout';
function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />

      <Route
        path='/test'
        element={
          <Layout>
            <TestPage />
          </Layout>
        }
      />
      <Route
        path='/result'
        element={
          <Layout>
            <ResultPage />
          </Layout>
        }
      />
      <Route
        path='/login'
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path='/signup'
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
      <Route
        path='*'
        element={
          <Layout>
            <Error />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
