import React from "react";
import { Header } from ".";

function Layout({ children }) {
  return (
    // <body className="max-w-7xl mx-auto">
    <>
      <Header />
      {children}
    </>
    //</body>
  );
}

export default Layout;
