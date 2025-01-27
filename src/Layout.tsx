import { Outlet } from 'react-router'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import React from 'react';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;