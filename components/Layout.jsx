import React from "react";
import { Header, Footer } from ".";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      {children}
      <div className="flex justify-end">
        <Link href="#home">
          <ArrowUpCircleIcon className="w-14 h-14 mt-5 text-[#f08080] transition duration-500 ease hover:text-orange-300" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
