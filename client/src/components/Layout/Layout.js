import React from 'react';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="Layout-page-container">
      <Header />
      <div className="Layout-content-wrap">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
