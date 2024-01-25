import React from "react";
import { useState, useEffect } from "react";
import headerCover from "../../assets/new/header-bg.png";
import HeaderBg from "./HeaderBg";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../services/app.context";
import { Path } from "../../constants/constants";
import Coins from "../Icons/Coins";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { currentUser } = useApp();
  const { logout } = useAuth();

  const navigate = useNavigate();

  /* Btns triggers */
  const [hovered, setHovered] = useState(false);

  const [days, setDays] = useState(5);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds + 1) % 60);
      setMinutes(
        (prevMinutes) => (prevMinutes + Math.floor(seconds / 60)) % 60
      );
      setHours((prevHours) => (prevHours + Math.floor(minutes / 60)) % 24);
      setDays((prevDays) => prevDays + Math.floor(hours / 24));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, minutes, hours]);

  const handleLogout = () => {
    logout();

    navigate(`/${Path.SIGNIN}`);
  };

  const onClickSignin = () => {
    navigate(`/${Path.SIGNIN}`);
  };

  return (
    <>
      <div
        className="relative w-full flex justify-center items-center py-6 border-b border-sec overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #328019 0%, #5EAC0C 50.02%, #327F19 100%)",
          border: "16px",
        }}
      >
        <div className="flex gap-5 relative z-20">
          <div>
            <span className="countdown font-mono text-2xl md:text-4xl">
              <span style={{ "--value": days }}></span>
              Jours
            </span>
          </div>
          <div className="flex gap-1">
            <div>
              <span className="countdown font-mono text-2xl md:text-4xl">
                <span style={{ "--value": hours }}></span>:
              </span>
            </div>
            <div>
              <span className="countdown font-mono text-2xl md:text-4xl">
                <span style={{ "--value": minutes }}></span>:
              </span>
            </div>
            <div>
              <span className="countdown font-mono text-2xl md:text-4xl">
                <span style={{ "--value": seconds }}></span>
              </span>
            </div>
          </div>
        </div>
        <HeaderBg />
      </div>
      <div className="flex flex-col items-center relative w-full">
        <div className="flex w-full justify-between items-start max-w-8xl py-5 md:py-10 px-6 z-20">
          <Link to="/">
          <h1 className="text-4xl font-black pt-4">Briceshop</h1>
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {currentUser && (
              <button
                type="button"
                className="flex items-center justify-center text-2xl font-semibold gap-4 transition-all hover:scale-105 bg-transparent border-0 hover:shadow-lg rounded-full px-7 py-4"
              >
                {currentUser?.points}
                <Coins />
              </button>
            )}
            {!currentUser && (
              <button
                type="buttom"
                className="text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105"
                style={{
                  background:
                    "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
                  boxShadow: " 0px 4px 0px 0px #196700",
                }}
                onClick={onClickSignin}
              >
                Se connecter
              </button>
            )}
            {currentUser && (
              <button
                type="buttom"
                className="text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105"
                style={{
                  background:
                    "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
                  boxShadow: " 0px 4px 0px 0px #196700",
                }}
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
        <div className="relative z-30 sm:-bottom-5 max-h-720 w-full max-w-8xl px-4 3xl:px-0">
          <img src={headerCover} alt="cover" />
          <button
            type="button"
            className="flex md:hidden absolute items-center top-1/3 left-2/4 -translate-x-2/4 justify-start py-3 text-black bg-white bg-opacity-40 pl-3 pr-5 text-2xl font-semibold rounded-xl gap-5 transition-all hover:scale-105 hover:shadow-lg hover:shadow-main/50"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => document.getElementById("mainVideo").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className={`${hovered ? "translate-x-2" : ""} transition-all`}
            >
              <circle cx="25" cy="25" r="25" fill="#4E9D35" />
              <path
                d="M19 17.5281C19 15.1477 21.6392 13.7155 23.635 15.0127L35.1303 22.4847C36.9503 23.6677 36.9503 26.3323 35.1303 27.5153L23.635 34.9873C21.6392 36.2845 19 34.8523 19 32.4719V17.5281Z"
                fill="white"
              />
            </svg>
            <span
              className={`${
                hovered ? "-translate-y-1" : ""
              } transition-all whitespace-nowrap`}
            >
              Regarder la Vidéo
            </span>
          </button>
          <button
            type="button"
            className="hidden md:flex absolute right-16 bottom-14 items-center justify-start py-3 text-white bg-white bg-opacity-20 pl-3 pr-5 text-2xl font-semibold rounded-xl gap-5 transition-all hover:scale-105 hover:shadow-lg hover:shadow-main/50"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => document.getElementById("mainVideo").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className={`${hovered ? "translate-x-2" : ""} transition-all`}
            >
              <circle cx="25" cy="25" r="25" fill="#4E9D35" />
              <path
                d="M19 17.5281C19 15.1477 21.6392 13.7155 23.635 15.0127L35.1303 22.4847C36.9503 23.6677 36.9503 26.3323 35.1303 27.5153L23.635 34.9873C21.6392 36.2845 19 34.8523 19 32.4719V17.5281Z"
                fill="white"
              />
            </svg>
            <span
              className={`${
                hovered ? "-translate-y-1" : ""
              } transition-all whitespace-nowrap`}
            >
              Watch Video
            </span>
          </button>
        </div>
      </div>
      <dialog id="mainVideo" className="modal">
        <div className="modal-box max-w-7xl pt-11 pb-0 px-0">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-main text-main absolute right-2 top-2">
              ✕
            </button>
          </form>
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/4kLviL8XwAI`}
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </dialog>
    </>
  );
}
