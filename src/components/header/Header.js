import React from "react";
import Circles from "../../assets/Group.svg";
import avatarHeader from "../../assets/avatarHeader.png";
import avatarMain from "../../assets/avatarMain.png";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useApp } from "../../services/AppContext";

export default function Header() {
  const { logout } = useAuth();
  const { currentUser } = useApp();

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("===== handleLogout =====");
    logout();

    navigate("/signin");
  };

  return (
    <>
      <section className="h-471  bg-no-repeat bg-[center_left_-18.75rem] bg-cover xl:bg-center relative bg-img-header flex flex-col w-full gap-14 items-center px-5 xl:px-0">
        <div className="navbar bg-white my-7 max-w-7xl rounded-xl p-6">
          <div className="navbar-start">
            <Link to="/">
              <span className="normal-case text-xl text-main font-semibold text-gray-900">
                Coflow
              </span>
            </Link>
            <div className="divider lg:divider-horizontal "></div>
            <div className="hidden xl:flex gap-2 items-center">
              <div className="avatar">
                <div className="w-12 rounded-full ring-2 ring-gray-200">
                  <img src={currentUser?.avatar ? currentUser.avatar : avatarHeader} alt="avatar" />
                </div>
              </div>
              <div className="flex flex-col">
                <select className="select select-bordered custom-select select-xs w-full max-w-xs text-lg font-medium text-gray-900 bg-white pr-4" onChange={handleLogout}>
                  <option disabled selected>
                    {currentUser?.username}
                  </option>
                  <option>Logout</option>
                </select>
                <span className="text-gray-500 font-medium text-xs">
                  @{currentUser?.username}prod
                </span>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="hidden xl:flex gap-10 items-center">
              <div className="flex justify-center items-center">
                <span className="badge bg-white border-neutral text-gray-900 relative -top-3 left-12">
                  8
                </span>
                <img src={Circles} alt="Circles" />
              </div>
              <button className="btn btn-primary px-8 py-4 text-white">
                Se connecter
              </button>
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
        <div className="flex flex-col text-white gap-1 items-center">
          <h1 className="text-4xl xl:text-6xl font-bold">Hello there</h1>
          <h2 className="text-base xl:text-lg font-semibold w-full max-w-2xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </h2>
          <button className="btn btn-primary text-white block xl:hidden w-36 mt-6">
            Participer
          </button>
        </div>
      </section>
    </>
  );
}
