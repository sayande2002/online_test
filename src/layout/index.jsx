import React from 'react';
import {ToastContainer} from 'react-toastify';
import Navbar from 'layout/navbar/index.jsx';

const Layout = ({children}) => {
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <div>
        {children.type.name === 'TestPage' ? (
          <div>{children}</div>
        ) : (
          <>
            <Navbar />
            <div
              style={{
                marginTop: '100px',
                paddingTop: '0.2rem',
                height: '80vh',
              }}>
              {children}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
