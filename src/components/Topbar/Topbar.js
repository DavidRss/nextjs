import React from "react";
import imgHeader from "../../assets/header.png";
import imgRobot from "../../assets/robot.png";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useApp } from "../../services/AppContext";
import Notifications from "../Notifications/Notifications";

export default function Topbar({ handleOnParticipate }) {
  const { logout } = useAuth();
  const { currentUser } = useApp();

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("===== handleLogout =====");
    logout();

    navigate("/signin");
  };

  const onClickSignin = () => {
    navigate("/signin");
  };

  return (
    <>
      <section className="h-[366px] bg-[center_left_-18.75rem] bg-cover xl:bg-center relative flex w-full gap-14 items-center justify-center px-5 xl:px-0">
        <div className="navbar max-w-7xl relative h-full bg-img-header bg-no-repeat">
          <div className="block ml-20 z-10">
            <h1 className="text-4xl xl:text-6xl font-bold text-white">Hello there</h1>
            <h2 className="text-base xl:text-lg font-semibold w-full max-w-2xl mt-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </h2>
          </div>
        </div>
        <img className="absolute top-0 right-0" src={imgRobot} />
      </section>
    </>
  );
}
