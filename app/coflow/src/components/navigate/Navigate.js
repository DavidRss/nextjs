import React, { useState, useEffect } from "react";
import Container from "../../layouts/Container/Container";
import { Link, useLocation } from "react-router-dom";
import avatarMain from "../../assets/new/avatar.png";
import shop from "../../assets/new/Shop.svg";
import star from "../../assets/new/Star.svg";
import chat from "../../assets/new/chat.svg";
import faq from "../../assets/new/Faq.svg";
import rewards from "../../assets/new/Rewards.svg";
import { useApp } from "../../services/app.context";

const Navigate = () => {
  const location = useLocation();
  const { currentUser } = useApp();

  const subcribers = 736345;

  const isActive = (path) => {
    return location.pathname === path
      ? "border-b-2 border-main text-main"
      : "text-white";
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 900;
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

  const links = [
    { to: "/", label: "Shop", icon: shop },
    { to: "/reward", label: "Rewards", icon: rewards },
    { to: "/leaderboard", label: "Leaderboard", icon: star },
    { to: "/chat", label: "Chat", icon: chat },
    { to: "/faq", label: "FAQ", icon: faq },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <section className="w-full px-4 flex mdMax:hidden flex-col gap-6 items-center z-50 relative -top-3">
        <img
          src={avatarMain}
          alt="avatar"
          className="max-w-32 rounded-full ring-4 ring-gray-200"
        />
        {/* <div className="flex flex-col items-center gap-5">
          <h2
            className="text-3xl font-semibold"
            style={{ letterSpacing: "-1.28px" }}
          >
            {currentUser?.username}
          </h2>
          <span className="text-lg font-semibold">
            {subcribers.toLocaleString()} Subcribers
          </span>
        </div> */}
      </section>
      <section
        className={`bg-thrBg w-full py-5 flex items-center justify-center sticky navbar -top-0.5 z-60 ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <Container>
          <div className="flex w-full h-14 md:px-4 xl:px-0 xl:h-24 gap-10 justify-center xl:justify-between">
            <div
              className={`relative -top-24 hidden mdMax:block ${
                isSticky ? "hidden-on-sticky" : ""
              }`}
            >
              <div className="avatar">
                <div className="w-48 rounded-full ring-4 ring-gray-200 ">
                  <img src={avatarMain} alt="main avatar" />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center lg:justify-start xl:justify-between">
              <div className="flex gap-10 items-center h-full">
                <nav className="h-full">
                  <ul className="flex items-center w-full justify-center gap-5 xl:gap-10 h-full">
                    {links.map((link, index) => (
                      <Link
                        to={link.to}
                        className="h-full"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        key={index}
                      >
                        <li
                          className={`hover:text-main flex gap-3 justify-center items-start font-semibold transition-all cursor-pointer hover:border-b-2 hover:border-main ${isActive(
                            link.to
                          )} h-full pt-2 xl:pt-9 sm:w-28 sm:text-center`}
                        >
                          <img
                            src={link.icon}
                            className={`${
                              hoveredIndex === index ? "-translate-y-0.5" : ""
                            } hidden sm:block w-6 transition-all duration-300`}
                            alt={link.label}
                          />
                          <span
                            className={`${
                              hoveredIndex === index ? "-translate-x-0.5" : ""
                            } transition-all duration-300`}
                          >
                            {link.label}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navigate;
