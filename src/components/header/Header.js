import React from "react";
import icCoin from "../../assets/icCoin.svg";
import avatar from "../../assets/avatar.png";
import avatarMain from "../../assets/avatarMain.png";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useApp } from "../../services/AppContext";
import Notifications from "../Notifications/Notifications";

export default function Header({ handleOnParticipate }) {
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
      <section className="h-[136px] bg-no-repeat bg-[center_left_-18.75rem] bg-cover xl:bg-center relative flex flex-col w-full gap-14 items-center justify-center px-5 xl:px-0">
        <div className="navbar my-7 max-w-7xl">
          <div className="navbar-start">
            <Link to="/">
              <span className="normal-case text-xl text-main font-semibold text-white">
                Coflow
              </span>
            </Link>
            <div className="divider lg:divider-horizontal "></div>
            <div className="hidden xl:flex gap-2 items-center">
              <div className="avatar">
                <div className="w-12 rounded-full ring-2 ring-gray-200">
                  <img
                    src={
                      currentUser?.avatar ? currentUser.avatar : avatar
                    }
                    alt="avatar"
                  />
                </div>
              </div>
              {currentUser && (
                <div className="flex flex-col">
                  <select
                    className="select select-bordered custom-select select-xs w-full h-8 max-w-xs text-lg font-medium text-white-90 bg-mainCard pr-4"
                    onChange={handleLogout}
                    defaultValue="username"
                  >
                    <option value="username" className="bg-dialog">{currentUser?.username}</option>
                    <option value="logout" className="bg-dialog">Logout</option>
                  </select>
                  <span className="text-gray-500 font-medium text-xs">
                    @{currentUser?.username}prod
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="navbar-end">
            {currentUser && <Notifications />}
            <div className="hidden xl:flex gap-10 items-center">
              {currentUser && (
                <div className="flex justify-center items-center">
                  <span className="badge bg-white border-neutral text-gray-900 relative -top-3 left-20">
                    {currentUser?.points}
                  </span>
                  <img src={icCoin} alt="Circles" />
                </div>
              )}
              {!currentUser && (
                <button
                  className="btn btn-primary px-8 py-4 text-white"
                  onClick={onClickSignin}
                >
                  Se connecter
                </button>
              )}
            </div>
            <div className="flex xl:hidden gap-4">
              <div className="w-12 rounded-full ring-2 ring-gray-200">
                <img src={avatarMain} alt="avatar" />
              </div>
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 text-primary stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col text-white gap-1 items-center">
          <button
            className="btn btn-primary text-white block xl:hidden w-36 mt-6"
            onClick={handleOnParticipate}
          >
            Participer
          </button>
        </div> */}
      </section>
    </>
  );
}
