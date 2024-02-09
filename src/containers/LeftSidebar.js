/* eslint-disable no-unused-vars */
import routes from "../routes/sidebar";
import { NavLink, Routes, Link, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { useDispatch } from "react-redux";
import logo from "../assets/images/Logo.png";

function LeftSidebar() {
    const location = useLocation();
    const close = (e) => {
        document.getElementById("left-sidebar-drawer").click();
    };

    const renderSubMenuOrNavLink = (route, k) => {
        if (route.submenu) {
            return <SidebarSubmenu {...route} route={route} />;
        } else {
            return (
                <NavLink
                    end
                    to={route.path}
                    className={({ isActive }) =>
                        `${
                            isActive
                                ? "font-semibold  bg-base-200"
                                : "font-semibold"
                        }`
                    }
                >
                    {route.icon} {route.name}
                    {location.pathname === route.path ? (
                        <span
                            className="absolute inset-y-0 left-0 w-0.5 rounded-tr-md rounded-br-md bg-accent "
                            aria-hidden="true"
                        ></span>
                    ) : null}
                </NavLink>
            );
        }
    };

    return (
        <div className="drawer-side z-30 shadow-md">
            <label
                htmlFor="left-sidebar-drawer"
                className="drawer-overlay"
            ></label>
            <ul className="menu  pt-2 w-80 bg-base-100 min-h-full   text-base-content">
                <button
                    className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
                    onClick={() => close()}
                >
                    <XMarkIcon className="h-5 inline-block w-5" />
                </button>

                <li className="mb-2 font-semibold text-xl">
                    <Link to={"/"}>
                        <img
                            className="w-full"
                            src={logo}
                            alt="DashWind Logo"
                        />
                    </Link>
                </li>
                <li>
                    <button
                        className="py-4 w-56 text-white mb-4 dark:text-slate-300 font-semibold text-base flex items-center justify-between rounded-xl outline-offset-none outline-none hover:scale-105 transition-all"
                        style={{
                            boxShadow: "0px 3px 0px 0px #803CBC",
                            background:
                                "linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D",
                        }}
                    >
                        Invite a teammate
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                        >
                            <path
                                d="M10.4167 17.7083L15.625 12.5L10.4167 7.29167"
                                stroke="white"
                                strokeWidth="2.08333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </li>
                {routes.map((route, k) => (
                    <li className="" key={k}>
                        {renderSubMenuOrNavLink(route, k)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LeftSidebar;
