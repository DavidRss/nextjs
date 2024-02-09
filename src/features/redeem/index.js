/* eslint-disable no-unused-vars */
import DashboardStats from './components/DashboardStats'
import AmountStats from './components/AmountStats'
import PageStats from './components/PageStats'

import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
import UserChannels from './components/UserChannels'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DashboardTopBar from './components/DashboardTopBar'
import { useDispatch } from 'react-redux'
import {showNotification} from '../common/headerSlice'
import DoughnutChart from './components/DoughnutChart'
import { useState } from 'react'
import TitleCard from '../../components/Cards/TitleCard'
import { Link } from 'react-router-dom'

const statsData = [
    {title : "New Users", value : "34.7k", icon : <UserGroupIcon className='w-8 h-8'/>, description : "↗︎ 2300 (22%)"},
    {title : "Total Sales", value : "$34,545", icon : <CreditCardIcon className='w-8 h-8'/>, description : "Current month"},
    {title : "Pending Leads", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : "50 in hot leads"},
    {title : "Active Users", value : "5.6k", icon : <UsersIcon className='w-8 h-8'/>, description : "↙ 300 (18%)"},
]



function Dashboard(){

    const dispatch = useDispatch()
 

    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>
        {/** ---------------------- Select Period Content ------------------------- */}
            {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/> */}
        
        {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                <TitleCard topMargin={"mt-2"}>
                    <div className='w-full h-full flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                                <path d="M7.7293 30.5C7.7293 24.6992 9.98984 19.1598 13.9895 15.0219V16.9355C13.9895 17.7441 14.6457 18.4004 15.4543 18.4004C16.2629 18.4004 16.9191 17.7441 16.9191 16.9355V11.743C16.9191 10.9344 16.2629 10.2781 15.4543 10.2781H10.2617C9.45312 10.2781 8.79687 10.9344 8.79687 11.743C8.79687 12.5516 9.45312 13.2078 10.2617 13.2078H11.6727C7.2793 17.8648 4.80078 24.0394 4.80078 30.5C4.80078 33.2645 5.24609 35.982 6.12383 38.5777C6.33008 39.1883 6.90078 39.5738 7.51133 39.5738C7.66719 39.5738 7.82539 39.5492 7.98125 39.4965C8.74766 39.2375 9.15898 38.4055 8.9 37.6391C8.12422 35.3469 7.73164 32.9445 7.73164 30.5H7.7293Z" fill="#1C274C"/>
                                <path d="M37.4599 51.4906C35.0704 52.3403 32.5603 52.7703 29.9997 52.7703C24.2364 52.7703 18.7228 50.5344 14.5931 46.5793H16.488C17.2966 46.5793 17.9528 45.9231 17.9528 45.1145C17.9528 44.3059 17.2966 43.6496 16.488 43.6496H11.2954C10.4868 43.6496 9.83057 44.3059 9.83057 45.1145V50.307C9.83057 51.1156 10.4868 51.7719 11.2954 51.7719C12.104 51.7719 12.7603 51.1156 12.7603 50.307V48.8774C17.4114 53.2379 23.5673 55.7 29.9997 55.7C32.8954 55.7 35.7349 55.2125 38.4407 54.2516C39.2024 53.9809 39.6009 53.143 39.3302 52.3813C39.0595 51.6196 38.2216 51.2211 37.4599 51.4918V51.4906Z" fill="#1C274C"/>
                                <path d="M22.6603 9.46718C25.0135 8.64686 27.4826 8.22968 29.9998 8.22968C35.9494 8.22968 41.5779 10.5828 45.7404 14.7476H43.7623C42.9537 14.7476 42.2975 15.4039 42.2975 16.2125C42.2975 17.0211 42.9537 17.6773 43.7623 17.6773H48.9549C49.7635 17.6773 50.4197 17.0211 50.4197 16.2125V11.0199C50.4197 10.2113 49.7635 9.55507 48.9549 9.55507C48.1463 9.55507 47.49 10.2113 47.49 11.0199V12.357C42.8131 7.84296 36.5799 5.29999 29.9998 5.29999C27.1533 5.29999 24.3596 5.77108 21.6959 6.70038C20.9318 6.96639 20.5287 7.80194 20.7959 8.566C21.0619 9.33007 21.8975 9.73319 22.6615 9.466L22.6603 9.46718Z" fill="#1C274C"/>
                                <path d="M49.4966 47.9774H48.1524C52.6583 43.3004 55.2001 37.0602 55.2001 30.5C55.2001 27.616 54.7161 24.7871 53.7634 22.0918C53.4938 21.3289 52.656 20.9293 51.8942 21.2C51.1313 21.4695 50.7317 22.3074 51.0024 23.0691C51.845 25.4492 52.2716 27.95 52.2716 30.5C52.2716 36.4285 49.922 42.0629 45.77 46.2266V44.2508C45.77 43.4422 45.1138 42.7859 44.3052 42.7859C43.4966 42.7859 42.8403 43.4422 42.8403 44.2508V49.4434C42.8403 50.252 43.4966 50.9082 44.3052 50.9082H49.4978C50.3063 50.9082 50.9626 50.252 50.9626 49.4434C50.9626 48.6348 50.3063 47.9785 49.4978 47.9785L49.4966 47.9774Z" fill="#1C274C"/>
                                <path d="M30 14.3867C21.1148 14.3867 13.8867 21.6148 13.8867 30.5C13.8867 39.3852 21.1148 46.6133 30 46.6133C38.8852 46.6133 46.1133 39.3852 46.1133 30.5C46.1133 21.6148 38.8852 14.3867 30 14.3867ZM31.4648 37.4973V38.7441C31.4648 39.5527 30.8086 40.209 30 40.209C29.1914 40.209 28.5352 39.5527 28.5352 38.7441V37.4961C27.3258 37.1094 26.3168 36.2551 25.793 35.1031C25.4578 34.3672 25.7836 33.4977 26.5195 33.1637C27.2555 32.8285 28.125 33.1531 28.4602 33.8902C28.7063 34.4316 29.325 34.7961 30 34.7961C30.9105 34.7961 31.6512 34.1609 31.6512 33.3805C31.6512 32.3551 30.048 32 29.727 31.9391C27.0703 31.4352 25.4191 29.7805 25.4191 27.6195C25.4191 25.7094 26.7258 24.084 28.5352 23.5027V22.2559C28.5352 21.4473 29.1914 20.791 30 20.791C30.8086 20.791 31.4648 21.4473 31.4648 22.2559V23.5039C32.6742 23.8906 33.6832 24.7461 34.207 25.898C34.5422 26.634 34.2164 27.5023 33.4805 27.8375C32.7445 28.1727 31.875 27.8469 31.5398 27.1109C31.2938 26.5684 30.675 26.2039 30 26.2039C29.0895 26.2039 28.3488 26.8391 28.3488 27.6195C28.3488 28.6449 29.952 29 30.273 29.0609C32.9297 29.5648 34.5809 31.2195 34.5809 33.3805C34.5809 35.2906 33.2742 36.916 31.4648 37.4973Z" fill="#1C274C"/>
                            </svg>
                            <h2 className='text-lg font-semibold dark:text-slate-300'>
                                Total Redemptions
                            </h2>
                        </div>
                        <span className='text-4xl font-semibold dark:text-slate-300'>0</span>
                    </div>    
                </TitleCard>
                <TitleCard topMargin={"mt-2"}>
                    <div className='w-full h-full flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                                <path d="M29.9992 7.52129C17.3283 7.52129 7.02051 17.8291 7.02051 30.5C7.02051 43.1709 17.3283 53.4787 29.9992 53.4787C42.6701 53.4787 52.978 43.1709 52.978 30.5C52.978 17.8291 42.6701 7.52129 29.9992 7.52129ZM32.0882 40.4786V42.2568C32.0882 43.4099 31.1523 44.3457 29.9992 44.3457C28.8461 44.3457 27.9103 43.4099 27.9103 42.2568V40.477C26.1856 39.9255 24.7467 38.7072 23.9997 37.0644C23.5217 36.0149 23.9863 34.7749 25.0358 34.2986C26.0853 33.8206 27.3253 34.2836 27.8033 35.3347C28.1542 36.1068 29.0366 36.6266 29.9992 36.6266C31.2977 36.6266 32.3539 35.7208 32.3539 34.6078C32.3539 33.1455 30.0677 32.6391 29.6098 32.5522C25.8213 31.8336 23.4666 29.4739 23.4666 26.3923C23.4666 23.6682 25.33 21.3503 27.9103 20.5214V18.7433C27.9103 17.5901 28.8461 16.6543 29.9992 16.6543C31.1523 16.6543 32.0882 17.5901 32.0882 18.7433V20.5231C33.8129 21.0746 35.2518 22.2945 35.9988 23.9373C36.4767 24.9868 36.0121 26.2251 34.9626 26.7031C33.9131 27.181 32.6731 26.7165 32.1952 25.667C31.8442 24.8932 30.9618 24.3735 29.9992 24.3735C28.7007 24.3735 27.6445 25.2792 27.6445 26.3923C27.6445 27.8545 29.9307 28.3609 30.3886 28.4478C34.1772 29.1664 36.5319 31.5261 36.5319 34.6078C36.5319 37.3318 34.6685 39.6497 32.0882 40.4786Z" fill="#1C274C"/>
                            </svg>
                            <h2 className='text-lg font-semibold dark:text-slate-300'>
                                Total Redeemed Points
                            </h2>
                        </div>
                        <div className='flex flex-col items-end'>
                            <span className='text-4xl font-semibold dark:text-slate-300'>0</span>
                            <span className='text-base dark:text-slate-500'>Equals USD 0</span>
                        </div>
                    </div>      
                </TitleCard>
            </div>

            <div className="flex flex-col gap-6 mt-11">
                <h2 className='text-xl font-semibold dark:text-slate-500'>
                    Settings
                </h2>
                <TitleCard topMargin={"mt-2"}>
                    <div className='w-full h-full flex justify-between items-start'>
                        <div className='flex flex-col gap-4'>
                            <span className='text-sm text-slate-500'>
                                Points Expiry Period
                            </span>
                            <h3 className='text-lg font-semibold dark:text-slate-300'>
                                1 years, 11 months and 25 days
                            </h3>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" className='transition-all hover:scale-105 cursor-pointer'>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z" fill="#9B52DC"/>
                            <path d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z" fill="#9B52DC"/>
                            <path d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z" fill="#9B52DC"/>
                        </svg>
                    </div>    
                </TitleCard>
            </div>
            <div className="flex flex-col gap-6 mt-11">
                <div className='flex items-center w-full justify-between'>
                    <h2 className='text-xl font-semibold dark:text-slate-500'>
                        Number of ways
                        <span>(2)</span>
                    </h2>
                    <Link to='/app/add-way-to-redeem' className='flex items-center gap-2 text-accent font-semibold text-base'>
                        <div className='flex justify-center items-center p-1 bg-accent rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                                <path d="M13.0458 9.17302H9.67387V12.5449C9.67387 12.7238 9.60282 12.8953 9.47635 13.0218C9.34988 13.1483 9.17835 13.2193 8.99949 13.2193C8.82063 13.2193 8.6491 13.1483 8.52263 13.0218C8.39616 12.8953 8.32511 12.7238 8.32511 12.5449V9.17302H4.95319C4.77433 9.17302 4.6028 9.10196 4.47633 8.97549C4.34986 8.84902 4.27881 8.67749 4.27881 8.49863C4.27881 8.31978 4.34986 8.14824 4.47633 8.02177C4.6028 7.8953 4.77433 7.82425 4.95319 7.82425H8.32511V4.45234C8.32511 4.27348 8.39616 4.10195 8.52263 3.97548C8.6491 3.849 8.82063 3.77795 8.99949 3.77795C9.17835 3.77795 9.34988 3.849 9.47635 3.97548C9.60282 4.10195 9.67387 4.27348 9.67387 4.45234V7.82425H13.0458C13.2246 7.82425 13.3962 7.8953 13.5226 8.02177C13.6491 8.14824 13.7202 8.31978 13.7202 8.49863C13.7202 8.67749 13.6491 8.84902 13.5226 8.97549C13.3962 9.10196 13.2246 9.17302 13.0458 9.17302Z" fill="white"/>
                            </svg>
                        </div>
                        Add ways to redeem
                    </Link>
                </div>
                
                <TitleCard topMargin={"mt-2"}>
                    <div className='w-full h-full flex justify-between items-start'>
                        <div className='flex items-center gap-8 md:gap-24'>
                            <div className='flex flex-col gap-4'>
                                <span className='text-sm text-slate-500'>
                                    Redemption Type
                                </span>
                                <h3 className='text-lg font-semibold dark:text-slate-300'>
                                    Flat Rate Discount
                                </h3>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='text-sm text-slate-500'>
                                    Point Value for Redemption
                                </span>
                                <h3 className='text-lg font-semibold dark:text-slate-300'>
                                    0.01 USD
                                </h3>
                            </div>    
                        </div> 
                        <div className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" className='transition-all hover:scale-105 cursor-pointer'>
                                <path d="M10.9688 13.5C10.9688 12.102 12.102 10.9687 13.5 10.9687C14.898 10.9687 16.0313 12.102 16.0313 13.5C16.0313 14.898 14.898 16.0312 13.5 16.0312C12.102 16.0312 10.9688 14.898 10.9688 13.5Z" fill="#9B52DC"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 13.5C2.25 15.3443 2.72808 15.9654 3.68425 17.2076C5.59346 19.688 8.79538 22.5 13.5 22.5C18.2046 22.5 21.4065 19.688 23.3157 17.2076C24.2719 15.9654 24.75 15.3443 24.75 13.5C24.75 11.6557 24.2719 11.0346 23.3157 9.79237C21.4065 7.312 18.2046 4.5 13.5 4.5C8.79538 4.5 5.59346 7.312 3.68425 9.79237C2.72808 11.0346 2.25 11.6557 2.25 13.5ZM13.5 9.28125C11.17 9.28125 9.28125 11.17 9.28125 13.5C9.28125 15.83 11.17 17.7187 13.5 17.7187C15.83 17.7187 17.7188 15.83 17.7188 13.5C17.7188 11.17 15.83 9.28125 13.5 9.28125Z" fill="#9B52DC"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" className='transition-all hover:scale-105 cursor-pointer'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z" fill="#9B52DC"/>
                                <path d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z" fill="#9B52DC"/>
                                <path d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z" fill="#9B52DC"/>
                            </svg>
                        </div>
                    </div>  
                </TitleCard>
            </div>



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
    )
}

export default Dashboard