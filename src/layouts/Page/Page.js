import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Main from "../Main/Main";
import Navigate from "../../components/navigate/Navigate";
import { useApp } from "../../services/AppContext";
import Spinner from "../../components/spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Notify } from "../../constants/constants";
import LoginDialog from "../../components/dialog/LoginDialog";
import Topbar from "../../components/Topbar/Topbar";

export default function Page({ children, handleOnParticipate }) {
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
      <Header handleOnParticipate={handleOnParticipate} />
      <Topbar />
      <Navigate handleOnParticipate={handleOnParticipate} />
      {children}
      <Footer />
      <LoginDialog />
      {loading && <Spinner />}
      <ToastContainer />
    </Main>
  );
}
