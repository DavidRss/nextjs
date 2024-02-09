/* eslint-disable no-unused-vars */
import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";
import { Link } from "react-router-dom";

import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DashboardTopBar from "./components/DashboardTopBar";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import DoughnutChart from "./components/DoughnutChart";
import Integration from "./components/Integration";
import { useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";

const statsData = [
    {
        title: "New Users",
        value: "34.7k",
        icon: <UserGroupIcon className="w-8 h-8" />,
        description: "↗︎ 2300 (22%)",
    },
    {
        title: "Total Sales",
        value: "$34,545",
        icon: <CreditCardIcon className="w-8 h-8" />,
        description: "Current month",
    },
    {
        title: "Pending Leads",
        value: "450",
        icon: <CircleStackIcon className="w-8 h-8" />,
        description: "50 in hot leads",
    },
    {
        title: "Active Users",
        value: "5.6k",
        icon: <UsersIcon className="w-8 h-8" />,
        description: "↙ 300 (18%)",
    },
];

function Dashboard() {
    const dispatch = useDispatch();

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(
            showNotification({
                message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
                status: 1,
            })
        );
    };

    return (
        <>
            {/** ---------------------- Select Period Content ------------------------- */}
            {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/> */}

            {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="w-full flex justify-between items-center my-10">
                <div className="flex items-center gap-6">
                    <h3 className="text-xl font-semibold">
                        Number of ways
                        <span>(2)</span>
                    </h3>
                    <button className="flex items-center text-base font-semibold gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.145 11.3624L20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z"
                                fill="#3D4057"
                            />
                        </svg>
                        Filter
                    </button>
                    <button className="flex items-center text-base font-semibold gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM14.75 16C14.75 16.4142 14.4142 16.75 14 16.75H10C9.58579 16.75 9.25 16.4142 9.25 16C9.25 15.5858 9.58579 15.25 10 15.25H14C14.4142 15.25 14.75 15.5858 14.75 16ZM16 12.75C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75H16ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z"
                                fill="#3D4057"
                            />
                        </svg>
                        Sort
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <button className="btn"></button>
                </div>
            </div>

            <Integration />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <TitleCard>
                    <Link
                        to="/app/add-way-to-earn"
                        className="w-full h-40 text-center flex flex-col items-center justify-center gap-4 text-accent text-base font-semibold dark:text-slate-500"
                    >
                        <div className="rounded-full p-1 flex items-center justify-center bg-accent">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                            >
                                <path
                                    d="M15.4253 11.3193H11.3203V15.4242C11.3203 15.642 11.2338 15.8508 11.0799 16.0048C10.9259 16.1587 10.7171 16.2452 10.4994 16.2452C10.2816 16.2452 10.0728 16.1587 9.91883 16.0048C9.76486 15.8508 9.67837 15.642 9.67837 15.4242V11.3193H5.57343C5.35569 11.3193 5.14687 11.2328 4.9929 11.0788C4.83894 10.9249 4.75244 10.7161 4.75244 10.4983C4.75244 10.2806 4.83894 10.0718 4.9929 9.91779C5.14687 9.76383 5.35569 9.67733 5.57343 9.67733H9.67837V5.57239C9.67837 5.35465 9.76486 5.14583 9.91883 4.99187C10.0728 4.8379 10.2816 4.7514 10.4994 4.7514C10.7171 4.7514 10.9259 4.8379 11.0799 4.99187C11.2338 5.14583 11.3203 5.35465 11.3203 5.57239V9.67733H15.4253C15.643 9.67733 15.8518 9.76383 16.0058 9.91779C16.1598 10.0718 16.2463 10.2806 16.2463 10.4983C16.2463 10.7161 16.1598 10.9249 16.0058 11.0788C15.8518 11.2328 15.643 11.3193 15.4253 11.3193Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        Add ways to earn
                    </Link>
                </TitleCard>
            </div>
            {/* <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>
 */}

            {/** ---------------------- Different charts ------------------------- */}
            {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart />
                <BarChart />
            </div> */}

            {/** ---------------------- Different stats content 2 ------------------------- */}

            {/* <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                <AmountStats />
                <PageStats />
            </div> */}

            {/** ---------------------- User source channels table  ------------------------- */}

            {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannels />
                <DoughnutChart />
            </div> */}
        </>
    );
}

export default Dashboard;
