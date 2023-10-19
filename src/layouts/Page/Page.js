import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../Main/Main";
import Navigate from "../../components/navigate/Navigate";
import { useApp } from "../../services/AppContext";
import Spinner from "../../components/spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NOTIFY_OPTION } from "../../constants/constants";

export default function Page({ children }) {
  const { loading, notifyMessage, showNotifyMessage } = useApp();

  useEffect(() => {
    if (notifyMessage) {
      if (notifyMessage.type === "error") {
        toast.error(notifyMessage.message, NOTIFY_OPTION);
      }

      showNotifyMessage(null);
    }
  }, [notifyMessage]);

  return (
    <Main>
      <Header />
      <Navigate />
      {children}
      <Footer />
      {loading && <Spinner />}
      <ToastContainer />
    </Main>
  );
}