import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../Main/Main";
import Navigate from "../../components/navigate/Navigate";

export default function Page({ children }) {
  return (
    <Main>
      <Header />
      <Navigate />
      {children}
      <Footer />
    </Main>
  );
}
