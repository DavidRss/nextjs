import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../Main/Main";
import Navigate from "../../components/navigate/Navigate";
import Spinner from "../../components/spinner/Spinner";
import { useApp } from "../../services/app.context";

import "react-toastify/dist/ReactToastify.css";
import { Notify } from "../../constants/constants";

export default function Page({ children }) {
  const { loading, notifyMessage, showNotifyMessage } = useApp();

  useEffect(() => {
    if (notifyMessage) {
      if (notifyMessage.type === Notify.Type.SUCCESS) {
        toast.success(notifyMessage.message, Notify.Option);
      } else if (notifyMessage.type === Notify.Type.INFO) {
        toast.info(notifyMessage.message, Notify.Option);
      } else if (notifyMessage.type === Notify.Type.ERROR) {
        toast.error(notifyMessage.message, Notify.Option);
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
