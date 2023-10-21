import React, { useState, useEffect } from "react";
import Container from "../../layouts/Container/Container";
import { Link, useLocation } from "react-router-dom";
import avatarMain from "../../assets/avatarMain.png";

const Navigate = ({ handleOnParticipate }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "border-b-2 border-primary text-primary"
      : "";
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 370;
      if (window.scrollY >= threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`bg-secondary w-full py-5 flex items-center justify-center sticky navbar -top-0.5 z-50 ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <Container>
        <div className="flex w-full h-14 xl:h-24 gap-10 justify-center xl:justify-between">
          <div
            className={`relative -top-24 hidden xl:block ${
              isSticky ? "hidden-on-sticky" : ""
            }`}
          >
            <div className="avatar">
              <div className="w-48 rounded-full ring-2 ring-gray-200 bg-white">
                <img src={avatarMain} alt="main avatar" />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center xl:justify-between">
            <div className="flex gap-10 items-center h-full">
              <nav className="h-full">
                <ul className="flex items-center w-full justify-center gap-5 xl:gap-10 h-full">
                  <Link to="/" className="h-full">
                    <li
                      className={`text-gray-900 hover:text-primary font-semibold transition-all cursor-pointer hover:border-b-2 hover:border-primary ${isActive(
                        "/"
                      )} h-full pt-2 xl:pt-9 sm:w-28 sm:text-center`}
                    >
                      Présentation
                    </li>
                  </Link>
                  <Link to="/leaderboard" className="h-full">
                    <li
                      className={`text-gray-900 hover:text-primary font-semibold transition-all cursor-pointer hover:border-b-2 hover:border-primary ${isActive(
                        "/leaderboard"
                      )} h-full pt-2 xl:pt-9 sm:w-28 sm:text-center`}
                    >
                      Leaderboard
                    </li>
                  </Link>
                  <Link to="/chat" className="h-full">
                    <li
                      className={`text-gray-900 hover:text-primary font-semibold transition-all cursor-pointer hover:border-b-2 hover:border-primary ${isActive(
                        "/chat"
                      )} h-full pt-2 xl:pt-9 sm:w-28 sm:text-center`}
                    >
                      Chat
                    </li>
                  </Link>
                  <Link to="/reward" className="h-full">
                    <li
                      className={`text-gray-900 hover:text-primary font-semibold transition-all cursor-pointer hover:border-b-2 hover:border-primary ${isActive(
                        "/reward"
                      )} h-full pt-2 xl:pt-9 sm:w-28 sm:text-center`}
                    >
                      Reward
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>
            <button
              className="btn btn-primary px-8 py-4 text-white hidden xl:block"
              onClick={handleOnParticipate}
            >
              Participer
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navigate;
