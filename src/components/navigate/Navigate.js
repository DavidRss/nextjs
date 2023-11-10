import React, { useState, useEffect } from "react";
import Container from "../../layouts/Container/Container";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../assets/avatar.png";

const Navigate = ({ handleOnParticipate }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "border-b-2 border-primary text-primary"
      : "text-white";
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 370;
      if (window.scrollY >= threshold) {
        console.log("===== sticky true =====")
        setIsSticky(true);
      } else {
        console.log("===== sticky false =====")
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
      className={`bg-dialog w-full h-[106px] mt-[86px] flex items-center justify-center sticky navbar top-0 z-50 p-0 ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <Container>
        <div className="flex w-full gap-10 justify-center xl:justify-between items-center">
          <div
            className={`relative hidden xl:block ${
              isSticky ? "hidden-on-sticky" : ""
            }`}
          >
            <div className="avatar">
              <div className="w-48 rounded-full ring-2 ring-gray-200 bg-white">
                <img src={avatar} alt="main avatar" />
              </div>
            </div>
          </div>
          <div className="w-full h-[106px] flex items-center justify-center xl:justify-between">
            <div className="flex gap-10 items-center h-full">
              <nav className="h-full">
                <ul className="flex items-center w-full justify-center gap-5 xl:gap-10 h-full">
                  <Link to="/" className="h-full">
                    <li
                      className={`hover:text-primary font-semibold transition-all cursor-pointer hover:border-b-2 hover:border-primary ${isActive(
                        "/"
                      )} h-full sm:w-28 sm:text-center flex items-center justify-center`}
                    >
                      Présentation
                    </li>
                  </Link>
                  <Link to="/leaderboard" className="h-full">
                    <li
                      className={`hover:text-primary font-semibold transition-all cursor-pointer hover:border-b-2 hover:border-primary ${isActive(
                        "/leaderboard"
                      )} h-full sm:w-28 sm:text-center flex items-center justify-center`}
                    >
                      Leaderboard
                    </li>
                  </Link>
                  <Link to="/chat" className="h-full">
                    <li
                      className={`hover:text-primary font-semibold transition-all cursor-pointer hover:border-b-2 hover:border-primary ${isActive(
                        "/chat"
                      )} h-full sm:w-28 sm:text-center flex items-center justify-center`}
                    >
                      Chat
                    </li>
                  </Link>
                  <Link to="/reward" className="h-full">
                    <li
                      className={`hover:text-primary font-semibold transition-all cursor-pointer hover:border-b-2 hover:border-primary ${isActive(
                        "/reward"
                      )} h-full sm:w-28 sm:text-center flex items-center justify-center`}
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
