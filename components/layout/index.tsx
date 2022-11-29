import React from "react";
import ScrollToTop from "../scroll-to-top";
import Footer from "./footer";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <ScrollToTop />
      <Header />
      <div className="pb-[64px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
