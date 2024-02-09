/* eslint-disable no-unused-vars */
// import DashboardStats from './components/DashboardStats'
// import AmountStats from './components/AmountStats'
// import PageStats from './components/PageStats'
import { Link } from 'react-router-dom' 

import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
// import UserChannels from './components/UserChannels'
// import LineChart from './components/LineChart'
// import BarChart from './components/BarChart'
// import DashboardTopBar from './components/DashboardTopBar'
// import { useDispatch } from 'react-redux'
// import {showNotification} from '../common/headerSlice'
// import DoughnutChart from './components/DoughnutChart'
// import Integration from './components/Integration'
// import { useState } from 'react'
import TitleCard from '../../../components/Cards/TitleCard'

const statsData = [
    {title : "New Users", value : "34.7k", icon : <UserGroupIcon className='w-8 h-8'/>, description : "↗︎ 2300 (22%)"},
    {title : "Total Sales", value : "$34,545", icon : <CreditCardIcon className='w-8 h-8'/>, description : "Current month"},
    {title : "Pending Leads", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : "50 in hot leads"},
    {title : "Active Users", value : "5.6k", icon : <UsersIcon className='w-8 h-8'/>, description : "↙ 300 (18%)"},
]



function addWay(){

    return(
        <>
            <div className='flex flex-col w-full my-8 gap-10'>
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            Facebook
                        </h2>
                    </div>         
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                        <TitleCard>
                            <div className='w-full h-full flex flex-col relative gap-7'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fillRule="evenodd" clip-rule="evenodd" d="M35 18.4959V26.8182C35 31.9792 35 34.5596 33.7765 35.6872C33.193 36.225 32.4564 36.5628 31.6718 36.6526C30.0266 36.8409 28.1054 35.1416 24.2631 31.7431C22.5646 30.2409 21.7154 29.4897 20.7329 29.2918C20.249 29.1944 19.751 29.1944 19.2671 29.2918C18.2846 29.4897 17.4354 30.2409 15.7369 31.7431C11.8946 35.1416 9.97337 36.8409 8.32819 36.6526C7.54358 36.5628 6.80702 36.225 6.22351 35.6872C5 34.5596 5 31.9792 5 26.8182V18.4959C5 11.3482 5 7.77438 7.1967 5.55388C9.3934 3.33337 12.9289 3.33337 20 3.33337C27.0711 3.33337 30.6066 3.33337 32.8033 5.55388C35 7.77438 35 11.3482 35 18.4959ZM13.75 10C13.75 9.30969 14.3096 8.75004 15 8.75004H25C25.6904 8.75004 26.25 9.30969 26.25 10C26.25 10.6904 25.6904 11.25 25 11.25H15C14.3096 11.25 13.75 10.6904 13.75 10Z" fill="#3D4057"/>
                                </svg>
                                <h3 className='text-base font-semibold'>
                                    Follow channel<br/> or profile
                                </h3>
                                <div className="rounded-full bg-blue-400 bg-opacity-10 py-2 px-5 text-blue-500 absolute right-0 top-0 text-sm">Facebook</div>
                            </div>
                        </TitleCard>
                        <TitleCard>
                            <div className='w-full h-full flex flex-col relative gap-7'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M3.3335 15.2285C3.3335 23.3334 10.0325 27.6523 14.9364 31.5181C16.6668 32.8823 18.3335 34.1667 20.0002 34.1667C21.6668 34.1667 23.3335 32.8823 25.0639 31.5181C29.9678 27.6523 36.6668 23.3334 36.6668 15.2285C36.6668 7.12361 27.4999 1.37577 20.0002 9.16772C12.5004 1.37577 3.3335 7.12361 3.3335 15.2285Z" fill="#3D4057"/>
                                </svg>
                                <h3 className='text-base font-semibold'>
                                    Like a specific 
                                    <br/> content
                                </h3>
                                <div className="rounded-full bg-blue-400 bg-opacity-10 py-2 px-5 text-blue-500 absolute right-0 top-0 text-sm">Facebook</div>
                            </div>
                        </TitleCard>
                        <TitleCard>
                            <div className='w-full h-full flex flex-col relative gap-7'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0002 36.6667C29.2049 36.6667 36.6668 29.2048 36.6668 20C36.6668 10.7953 29.2049 3.33337 20.0002 3.33337C10.7954 3.33337 3.3335 10.7953 3.3335 20C3.3335 22.6662 3.95952 25.1861 5.0726 27.4208C5.36839 28.0147 5.46685 28.6935 5.29536 29.3344L4.30268 33.0445C3.87175 34.655 5.34519 36.1284 6.95574 35.6975L10.6658 34.7048C11.3067 34.5334 11.9855 34.6318 12.5794 34.9276C14.8141 36.0407 17.334 36.6667 20.0002 36.6667ZM13.3335 22.0834C12.6431 22.0834 12.0835 22.643 12.0835 23.3334C12.0835 24.0237 12.6431 24.5834 13.3335 24.5834H22.5002C23.1905 24.5834 23.7502 24.0237 23.7502 23.3334C23.7502 22.643 23.1905 22.0834 22.5002 22.0834H13.3335ZM12.0835 17.5C12.0835 16.8097 12.6431 16.25 13.3335 16.25H26.6668C27.3572 16.25 27.9168 16.8097 27.9168 17.5C27.9168 18.1904 27.3572 18.75 26.6668 18.75H13.3335C12.6431 18.75 12.0835 18.1904 12.0835 17.5Z" fill="#3D4057"/>
                                </svg>
                                <h3 className='text-base font-semibold'>
                                    Comment <br/> a specific content
                                </h3>
                                <div className="rounded-full bg-blue-400 bg-opacity-10 py-2 px-5 text-blue-500 absolute right-0 top-0 text-sm">Facebook</div>
                            </div>
                        </TitleCard>
                        <TitleCard>
                            <div className='w-full h-full flex flex-col relative gap-7'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M34.2261 34.2258C36.6668 31.7851 36.6668 27.8567 36.6668 20C36.6668 18.9975 36.6668 18.0589 36.6618 17.1793C35.9772 17.8504 35.1583 18.5599 34.2807 19.3204L30.1325 22.9155C29.6255 23.3553 29.0573 23.8483 28.543 24.1784C28.0404 24.5009 26.7609 25.2155 25.2821 24.5403C23.8034 23.8651 23.5055 22.4301 23.42 21.8391C23.3348 21.2495 23.333 20.5198 23.3333 19.8616C21.1181 20.2459 19.0064 21.1177 17.4558 22.3298L17.3727 22.3947C16.759 22.8746 16.171 23.3344 15.6977 23.6418C15.4578 23.7976 15.0914 24.0199 14.6624 24.1647C14.2703 24.2971 13.3 24.5402 12.3 23.9538C11.3983 23.425 11.0862 22.5838 10.9788 22.1101C10.8751 21.6525 10.8841 21.2216 10.8987 20.9502C10.9269 20.4261 11.0307 19.7561 11.1323 19.1002L11.1487 18.9941C11.9402 13.8758 14.1687 10.3836 17.0638 8.2053C19.0628 6.70119 21.2717 5.90353 23.3334 5.56283L23.3333 5.18871C23.333 4.58338 23.3326 3.91211 23.3967 3.34253C22.3538 3.33329 21.2247 3.33329 20.0002 3.33329C12.1434 3.33329 8.21505 3.33329 5.77427 5.77407C3.3335 8.21485 3.3335 12.1432 3.3335 20C3.3335 27.8567 3.3335 31.7851 5.77427 34.2258C8.21505 36.6666 12.1434 36.6666 20.0002 36.6666C27.8569 36.6666 31.7853 36.6666 34.2261 34.2258Z" fill="#3D4057"/>
                                <path d="M28.5916 4.05688L32.5204 7.46183C35.2249 9.80572 36.5771 10.9777 36.5771 12.4998C36.5771 14.0219 35.2249 15.1938 32.5204 17.5377L28.5916 20.9426C27.4024 21.9733 26.8078 22.4886 26.3206 22.2662C25.8334 22.0437 25.8334 21.2569 25.8334 19.6832V17.1426C22.2927 17.1426 18.5431 18.3067 15.9161 20.3602C14.5439 21.4328 13.8578 21.9691 13.5646 21.7972C13.2715 21.6253 13.3874 20.8756 13.6193 19.3762C15.027 10.2733 21.3338 7.8569 25.8334 7.8569V5.31636C25.8334 3.74266 25.8334 2.95581 26.3206 2.73335C26.8078 2.51089 27.4024 3.02622 28.5916 4.05688Z" fill="#3D4057"/>
                                </svg>
                                <h3 className='text-base font-semibold'>
                                    Share a content<br/> with friends
                                </h3>
                                <div className="rounded-full bg-blue-400 bg-opacity-10 py-2 px-5 text-blue-500 absolute right-0 top-0 text-sm">Facebook</div>
                            </div>
                        </TitleCard>
                        <TitleCard>
                            <div className='w-full h-full flex flex-col relative gap-7'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M20.0002 3.33337C23.0755 3.33337 25.549 3.33337 27.567 3.47976L21.8312 12.0834H14.0025L19.8358 3.33337H20.0002Z" fill="#3D4057"/>
                                <path d="M5.77427 5.77415C7.86155 3.68687 11.0367 3.38457 16.8263 3.34079L10.9979 12.0834H3.50713C3.75254 9.14325 4.34483 7.20359 5.77427 5.77415Z" fill="#3D4057"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3335 20C3.3335 17.9388 3.3335 16.148 3.37757 14.5834H36.6228C36.6668 16.148 36.6668 17.9388 36.6668 20C36.6668 27.8568 36.6668 31.7852 34.2261 34.2259C31.7853 36.6667 27.8569 36.6667 20.0002 36.6667C12.1434 36.6667 8.21505 36.6667 5.77427 34.2259C3.3335 31.7852 3.3335 27.8568 3.3335 20ZM21.6901 20.9754C23.8968 22.3992 25.0002 23.1111 25.0002 24.1667C25.0002 25.2223 23.8968 25.9342 21.6901 27.358C19.4533 28.8013 18.3348 29.5229 17.5008 28.9931C16.6668 28.4632 16.6668 27.031 16.6668 24.1667C16.6668 21.3024 16.6668 19.8702 17.5008 19.3403C18.3348 18.8105 19.4533 19.5321 21.6901 20.9754Z" fill="#3D4057"/>
                                <path d="M36.4932 12.0834C36.2478 9.14325 35.6555 7.20359 34.2261 5.77415C33.2305 4.77861 31.9875 4.18913 30.3314 3.84009L24.8358 12.0834H36.4932Z" fill="#3D4057"/>
                                </svg>
                                <h3 className='text-base font-semibold'>
                                    Become<br/> a content creator
                                </h3>
                                <div className="rounded-full bg-blue-400 bg-opacity-10 py-2 px-5 text-blue-500 absolute right-0 top-0 text-sm">Facebook</div>
                            </div>
                        </TitleCard>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            Instagram
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fillRule="evenodd" clip-rule="evenodd" d="M35 18.4959V26.8182C35 31.9792 35 34.5596 33.7765 35.6872C33.193 36.225 32.4564 36.5628 31.6718 36.6526C30.0266 36.8409 28.1054 35.1416 24.2631 31.7431C22.5646 30.2409 21.7154 29.4897 20.7329 29.2918C20.249 29.1944 19.751 29.1944 19.2671 29.2918C18.2846 29.4897 17.4354 30.2409 15.7369 31.7431C11.8946 35.1416 9.97337 36.8409 8.32819 36.6526C7.54358 36.5628 6.80702 36.225 6.22351 35.6872C5 34.5596 5 31.9792 5 26.8182V18.4959C5 11.3482 5 7.77438 7.1967 5.55388C9.3934 3.33337 12.9289 3.33337 20 3.33337C27.0711 3.33337 30.6066 3.33337 32.8033 5.55388C35 7.77438 35 11.3482 35 18.4959ZM13.75 10C13.75 9.30969 14.3096 8.75004 15 8.75004H25C25.6904 8.75004 26.25 9.30969 26.25 10C26.25 10.6904 25.6904 11.25 25 11.25H15C14.3096 11.25 13.75 10.6904 13.75 10Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Follow channel<br/> or profile
                                    </h3>
                                    <div className="rounded-full bg-pink-400 bg-opacity-10 py-2 px-5 text-pink-500 absolute right-0 top-0 text-sm">Instagram</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M3.3335 15.2285C3.3335 23.3334 10.0325 27.6523 14.9364 31.5181C16.6668 32.8823 18.3335 34.1667 20.0002 34.1667C21.6668 34.1667 23.3335 32.8823 25.0639 31.5181C29.9678 27.6523 36.6668 23.3334 36.6668 15.2285C36.6668 7.12361 27.4999 1.37577 20.0002 9.16772C12.5004 1.37577 3.3335 7.12361 3.3335 15.2285Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Like a specific 
                                        <br/> content
                                    </h3>
                                    <div className="rounded-full bg-pink-400 bg-opacity-10 py-2 px-5 text-pink-500 absolute right-0 top-0 text-sm">Instagram</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0002 36.6667C29.2049 36.6667 36.6668 29.2048 36.6668 20C36.6668 10.7953 29.2049 3.33337 20.0002 3.33337C10.7954 3.33337 3.3335 10.7953 3.3335 20C3.3335 22.6662 3.95952 25.1861 5.0726 27.4208C5.36839 28.0147 5.46685 28.6935 5.29536 29.3344L4.30268 33.0445C3.87175 34.655 5.34519 36.1284 6.95574 35.6975L10.6658 34.7048C11.3067 34.5334 11.9855 34.6318 12.5794 34.9276C14.8141 36.0407 17.334 36.6667 20.0002 36.6667ZM13.3335 22.0834C12.6431 22.0834 12.0835 22.643 12.0835 23.3334C12.0835 24.0237 12.6431 24.5834 13.3335 24.5834H22.5002C23.1905 24.5834 23.7502 24.0237 23.7502 23.3334C23.7502 22.643 23.1905 22.0834 22.5002 22.0834H13.3335ZM12.0835 17.5C12.0835 16.8097 12.6431 16.25 13.3335 16.25H26.6668C27.3572 16.25 27.9168 16.8097 27.9168 17.5C27.9168 18.1904 27.3572 18.75 26.6668 18.75H13.3335C12.6431 18.75 12.0835 18.1904 12.0835 17.5Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Comment <br/> a specific content
                                    </h3>
                                    <div className="rounded-full bg-pink-400 bg-opacity-10 py-2 px-5 text-pink-500 absolute right-0 top-0 text-sm">Instagram</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M34.2261 34.2258C36.6668 31.7851 36.6668 27.8567 36.6668 20C36.6668 18.9975 36.6668 18.0589 36.6618 17.1793C35.9772 17.8504 35.1583 18.5599 34.2807 19.3204L30.1325 22.9155C29.6255 23.3553 29.0573 23.8483 28.543 24.1784C28.0404 24.5009 26.7609 25.2155 25.2821 24.5403C23.8034 23.8651 23.5055 22.4301 23.42 21.8391C23.3348 21.2495 23.333 20.5198 23.3333 19.8616C21.1181 20.2459 19.0064 21.1177 17.4558 22.3298L17.3727 22.3947C16.759 22.8746 16.171 23.3344 15.6977 23.6418C15.4578 23.7976 15.0914 24.0199 14.6624 24.1647C14.2703 24.2971 13.3 24.5402 12.3 23.9538C11.3983 23.425 11.0862 22.5838 10.9788 22.1101C10.8751 21.6525 10.8841 21.2216 10.8987 20.9502C10.9269 20.4261 11.0307 19.7561 11.1323 19.1002L11.1487 18.9941C11.9402 13.8758 14.1687 10.3836 17.0638 8.2053C19.0628 6.70119 21.2717 5.90353 23.3334 5.56283L23.3333 5.18871C23.333 4.58338 23.3326 3.91211 23.3967 3.34253C22.3538 3.33329 21.2247 3.33329 20.0002 3.33329C12.1434 3.33329 8.21505 3.33329 5.77427 5.77407C3.3335 8.21485 3.3335 12.1432 3.3335 20C3.3335 27.8567 3.3335 31.7851 5.77427 34.2258C8.21505 36.6666 12.1434 36.6666 20.0002 36.6666C27.8569 36.6666 31.7853 36.6666 34.2261 34.2258Z" fill="#3D4057"/>
                                    <path d="M28.5916 4.05688L32.5204 7.46183C35.2249 9.80572 36.5771 10.9777 36.5771 12.4998C36.5771 14.0219 35.2249 15.1938 32.5204 17.5377L28.5916 20.9426C27.4024 21.9733 26.8078 22.4886 26.3206 22.2662C25.8334 22.0437 25.8334 21.2569 25.8334 19.6832V17.1426C22.2927 17.1426 18.5431 18.3067 15.9161 20.3602C14.5439 21.4328 13.8578 21.9691 13.5646 21.7972C13.2715 21.6253 13.3874 20.8756 13.6193 19.3762C15.027 10.2733 21.3338 7.8569 25.8334 7.8569V5.31636C25.8334 3.74266 25.8334 2.95581 26.3206 2.73335C26.8078 2.51089 27.4024 3.02622 28.5916 4.05688Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Share a content<br/> with friends
                                    </h3>
                                    <div className="rounded-full bg-pink-400 bg-opacity-10 py-2 px-5 text-pink-500 absolute right-0 top-0 text-sm">Instagram</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M20.0002 3.33337C23.0755 3.33337 25.549 3.33337 27.567 3.47976L21.8312 12.0834H14.0025L19.8358 3.33337H20.0002Z" fill="#3D4057"/>
                                    <path d="M5.77427 5.77415C7.86155 3.68687 11.0367 3.38457 16.8263 3.34079L10.9979 12.0834H3.50713C3.75254 9.14325 4.34483 7.20359 5.77427 5.77415Z" fill="#3D4057"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3335 20C3.3335 17.9388 3.3335 16.148 3.37757 14.5834H36.6228C36.6668 16.148 36.6668 17.9388 36.6668 20C36.6668 27.8568 36.6668 31.7852 34.2261 34.2259C31.7853 36.6667 27.8569 36.6667 20.0002 36.6667C12.1434 36.6667 8.21505 36.6667 5.77427 34.2259C3.3335 31.7852 3.3335 27.8568 3.3335 20ZM21.6901 20.9754C23.8968 22.3992 25.0002 23.1111 25.0002 24.1667C25.0002 25.2223 23.8968 25.9342 21.6901 27.358C19.4533 28.8013 18.3348 29.5229 17.5008 28.9931C16.6668 28.4632 16.6668 27.031 16.6668 24.1667C16.6668 21.3024 16.6668 19.8702 17.5008 19.3403C18.3348 18.8105 19.4533 19.5321 21.6901 20.9754Z" fill="#3D4057"/>
                                    <path d="M36.4932 12.0834C36.2478 9.14325 35.6555 7.20359 34.2261 5.77415C33.2305 4.77861 31.9875 4.18913 30.3314 3.84009L24.8358 12.0834H36.4932Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Become<br/> a content creator
                                    </h3>
                                    <div className="rounded-full bg-pink-400 bg-opacity-10 py-2 px-5 text-pink-500 absolute right-0 top-0 text-sm">Instagram</div>
                                </div>
                            </TitleCard>
                        </div>
                    </div>         
                </div> 
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            TikTok
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fillRule="evenodd" clip-rule="evenodd" d="M35 18.4959V26.8182C35 31.9792 35 34.5596 33.7765 35.6872C33.193 36.225 32.4564 36.5628 31.6718 36.6526C30.0266 36.8409 28.1054 35.1416 24.2631 31.7431C22.5646 30.2409 21.7154 29.4897 20.7329 29.2918C20.249 29.1944 19.751 29.1944 19.2671 29.2918C18.2846 29.4897 17.4354 30.2409 15.7369 31.7431C11.8946 35.1416 9.97337 36.8409 8.32819 36.6526C7.54358 36.5628 6.80702 36.225 6.22351 35.6872C5 34.5596 5 31.9792 5 26.8182V18.4959C5 11.3482 5 7.77438 7.1967 5.55388C9.3934 3.33337 12.9289 3.33337 20 3.33337C27.0711 3.33337 30.6066 3.33337 32.8033 5.55388C35 7.77438 35 11.3482 35 18.4959ZM13.75 10C13.75 9.30969 14.3096 8.75004 15 8.75004H25C25.6904 8.75004 26.25 9.30969 26.25 10C26.25 10.6904 25.6904 11.25 25 11.25H15C14.3096 11.25 13.75 10.6904 13.75 10Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Follow channel<br/> or profile
                                    </h3>
                                    <div className="rounded-full bg-gray-400 bg-opacity-10 py-2 px-5 text-base-900 absolute right-0 top-0 text-sm">TikTok</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M3.3335 15.2285C3.3335 23.3334 10.0325 27.6523 14.9364 31.5181C16.6668 32.8823 18.3335 34.1667 20.0002 34.1667C21.6668 34.1667 23.3335 32.8823 25.0639 31.5181C29.9678 27.6523 36.6668 23.3334 36.6668 15.2285C36.6668 7.12361 27.4999 1.37577 20.0002 9.16772C12.5004 1.37577 3.3335 7.12361 3.3335 15.2285Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Like a specific 
                                        <br/> content
                                    </h3>
                                    <div className="rounded-full bg-gray-400 bg-opacity-10 py-2 px-5 text-base-900 absolute right-0 top-0 text-sm">TikTok</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0002 36.6667C29.2049 36.6667 36.6668 29.2048 36.6668 20C36.6668 10.7953 29.2049 3.33337 20.0002 3.33337C10.7954 3.33337 3.3335 10.7953 3.3335 20C3.3335 22.6662 3.95952 25.1861 5.0726 27.4208C5.36839 28.0147 5.46685 28.6935 5.29536 29.3344L4.30268 33.0445C3.87175 34.655 5.34519 36.1284 6.95574 35.6975L10.6658 34.7048C11.3067 34.5334 11.9855 34.6318 12.5794 34.9276C14.8141 36.0407 17.334 36.6667 20.0002 36.6667ZM13.3335 22.0834C12.6431 22.0834 12.0835 22.643 12.0835 23.3334C12.0835 24.0237 12.6431 24.5834 13.3335 24.5834H22.5002C23.1905 24.5834 23.7502 24.0237 23.7502 23.3334C23.7502 22.643 23.1905 22.0834 22.5002 22.0834H13.3335ZM12.0835 17.5C12.0835 16.8097 12.6431 16.25 13.3335 16.25H26.6668C27.3572 16.25 27.9168 16.8097 27.9168 17.5C27.9168 18.1904 27.3572 18.75 26.6668 18.75H13.3335C12.6431 18.75 12.0835 18.1904 12.0835 17.5Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Comment <br/> a specific content
                                    </h3>
                                    <div className="rounded-full bg-gray-400 bg-opacity-10 py-2 px-5 text-base-900 absolute right-0 top-0 text-sm">TikTok</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M34.2261 34.2258C36.6668 31.7851 36.6668 27.8567 36.6668 20C36.6668 18.9975 36.6668 18.0589 36.6618 17.1793C35.9772 17.8504 35.1583 18.5599 34.2807 19.3204L30.1325 22.9155C29.6255 23.3553 29.0573 23.8483 28.543 24.1784C28.0404 24.5009 26.7609 25.2155 25.2821 24.5403C23.8034 23.8651 23.5055 22.4301 23.42 21.8391C23.3348 21.2495 23.333 20.5198 23.3333 19.8616C21.1181 20.2459 19.0064 21.1177 17.4558 22.3298L17.3727 22.3947C16.759 22.8746 16.171 23.3344 15.6977 23.6418C15.4578 23.7976 15.0914 24.0199 14.6624 24.1647C14.2703 24.2971 13.3 24.5402 12.3 23.9538C11.3983 23.425 11.0862 22.5838 10.9788 22.1101C10.8751 21.6525 10.8841 21.2216 10.8987 20.9502C10.9269 20.4261 11.0307 19.7561 11.1323 19.1002L11.1487 18.9941C11.9402 13.8758 14.1687 10.3836 17.0638 8.2053C19.0628 6.70119 21.2717 5.90353 23.3334 5.56283L23.3333 5.18871C23.333 4.58338 23.3326 3.91211 23.3967 3.34253C22.3538 3.33329 21.2247 3.33329 20.0002 3.33329C12.1434 3.33329 8.21505 3.33329 5.77427 5.77407C3.3335 8.21485 3.3335 12.1432 3.3335 20C3.3335 27.8567 3.3335 31.7851 5.77427 34.2258C8.21505 36.6666 12.1434 36.6666 20.0002 36.6666C27.8569 36.6666 31.7853 36.6666 34.2261 34.2258Z" fill="#3D4057"/>
                                    <path d="M28.5916 4.05688L32.5204 7.46183C35.2249 9.80572 36.5771 10.9777 36.5771 12.4998C36.5771 14.0219 35.2249 15.1938 32.5204 17.5377L28.5916 20.9426C27.4024 21.9733 26.8078 22.4886 26.3206 22.2662C25.8334 22.0437 25.8334 21.2569 25.8334 19.6832V17.1426C22.2927 17.1426 18.5431 18.3067 15.9161 20.3602C14.5439 21.4328 13.8578 21.9691 13.5646 21.7972C13.2715 21.6253 13.3874 20.8756 13.6193 19.3762C15.027 10.2733 21.3338 7.8569 25.8334 7.8569V5.31636C25.8334 3.74266 25.8334 2.95581 26.3206 2.73335C26.8078 2.51089 27.4024 3.02622 28.5916 4.05688Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Share a content<br/> with friends
                                    </h3>
                                    <div className="rounded-full bg-gray-400 bg-opacity-10 py-2 px-5 text-base-900 absolute right-0 top-0 text-sm">TikTok</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M20.0002 3.33337C23.0755 3.33337 25.549 3.33337 27.567 3.47976L21.8312 12.0834H14.0025L19.8358 3.33337H20.0002Z" fill="#3D4057"/>
                                    <path d="M5.77427 5.77415C7.86155 3.68687 11.0367 3.38457 16.8263 3.34079L10.9979 12.0834H3.50713C3.75254 9.14325 4.34483 7.20359 5.77427 5.77415Z" fill="#3D4057"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3335 20C3.3335 17.9388 3.3335 16.148 3.37757 14.5834H36.6228C36.6668 16.148 36.6668 17.9388 36.6668 20C36.6668 27.8568 36.6668 31.7852 34.2261 34.2259C31.7853 36.6667 27.8569 36.6667 20.0002 36.6667C12.1434 36.6667 8.21505 36.6667 5.77427 34.2259C3.3335 31.7852 3.3335 27.8568 3.3335 20ZM21.6901 20.9754C23.8968 22.3992 25.0002 23.1111 25.0002 24.1667C25.0002 25.2223 23.8968 25.9342 21.6901 27.358C19.4533 28.8013 18.3348 29.5229 17.5008 28.9931C16.6668 28.4632 16.6668 27.031 16.6668 24.1667C16.6668 21.3024 16.6668 19.8702 17.5008 19.3403C18.3348 18.8105 19.4533 19.5321 21.6901 20.9754Z" fill="#3D4057"/>
                                    <path d="M36.4932 12.0834C36.2478 9.14325 35.6555 7.20359 34.2261 5.77415C33.2305 4.77861 31.9875 4.18913 30.3314 3.84009L24.8358 12.0834H36.4932Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Become<br/> a content creator
                                    </h3>
                                    <div className="rounded-full bg-gray-400 bg-opacity-10 py-2 px-5 text-base-900 absolute right-0 top-0 text-sm">TikTok</div>
                                </div>
                            </TitleCard>
                        </div>
                    </div>         
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            Youtube
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fillRule="evenodd" clip-rule="evenodd" d="M35 18.4959V26.8182C35 31.9792 35 34.5596 33.7765 35.6872C33.193 36.225 32.4564 36.5628 31.6718 36.6526C30.0266 36.8409 28.1054 35.1416 24.2631 31.7431C22.5646 30.2409 21.7154 29.4897 20.7329 29.2918C20.249 29.1944 19.751 29.1944 19.2671 29.2918C18.2846 29.4897 17.4354 30.2409 15.7369 31.7431C11.8946 35.1416 9.97337 36.8409 8.32819 36.6526C7.54358 36.5628 6.80702 36.225 6.22351 35.6872C5 34.5596 5 31.9792 5 26.8182V18.4959C5 11.3482 5 7.77438 7.1967 5.55388C9.3934 3.33337 12.9289 3.33337 20 3.33337C27.0711 3.33337 30.6066 3.33337 32.8033 5.55388C35 7.77438 35 11.3482 35 18.4959ZM13.75 10C13.75 9.30969 14.3096 8.75004 15 8.75004H25C25.6904 8.75004 26.25 9.30969 26.25 10C26.25 10.6904 25.6904 11.25 25 11.25H15C14.3096 11.25 13.75 10.6904 13.75 10Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Follow channel<br/> or profile
                                    </h3>
                                    <div className="rounded-full bg-red-400 bg-opacity-10 py-2 px-5 text-red-500 absolute right-0 top-0 text-sm">Youtube</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M3.3335 15.2285C3.3335 23.3334 10.0325 27.6523 14.9364 31.5181C16.6668 32.8823 18.3335 34.1667 20.0002 34.1667C21.6668 34.1667 23.3335 32.8823 25.0639 31.5181C29.9678 27.6523 36.6668 23.3334 36.6668 15.2285C36.6668 7.12361 27.4999 1.37577 20.0002 9.16772C12.5004 1.37577 3.3335 7.12361 3.3335 15.2285Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Like a specific 
                                        <br/> content
                                    </h3>
                                    <div className="rounded-full bg-red-400 bg-opacity-10 py-2 px-5 text-red-500 absolute right-0 top-0 text-sm">Youtube</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0002 36.6667C29.2049 36.6667 36.6668 29.2048 36.6668 20C36.6668 10.7953 29.2049 3.33337 20.0002 3.33337C10.7954 3.33337 3.3335 10.7953 3.3335 20C3.3335 22.6662 3.95952 25.1861 5.0726 27.4208C5.36839 28.0147 5.46685 28.6935 5.29536 29.3344L4.30268 33.0445C3.87175 34.655 5.34519 36.1284 6.95574 35.6975L10.6658 34.7048C11.3067 34.5334 11.9855 34.6318 12.5794 34.9276C14.8141 36.0407 17.334 36.6667 20.0002 36.6667ZM13.3335 22.0834C12.6431 22.0834 12.0835 22.643 12.0835 23.3334C12.0835 24.0237 12.6431 24.5834 13.3335 24.5834H22.5002C23.1905 24.5834 23.7502 24.0237 23.7502 23.3334C23.7502 22.643 23.1905 22.0834 22.5002 22.0834H13.3335ZM12.0835 17.5C12.0835 16.8097 12.6431 16.25 13.3335 16.25H26.6668C27.3572 16.25 27.9168 16.8097 27.9168 17.5C27.9168 18.1904 27.3572 18.75 26.6668 18.75H13.3335C12.6431 18.75 12.0835 18.1904 12.0835 17.5Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Comment <br/> a specific content
                                    </h3>
                                    <div className="rounded-full bg-red-400 bg-opacity-10 py-2 px-5 text-red-500 absolute right-0 top-0 text-sm">Youtube</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M34.2261 34.2258C36.6668 31.7851 36.6668 27.8567 36.6668 20C36.6668 18.9975 36.6668 18.0589 36.6618 17.1793C35.9772 17.8504 35.1583 18.5599 34.2807 19.3204L30.1325 22.9155C29.6255 23.3553 29.0573 23.8483 28.543 24.1784C28.0404 24.5009 26.7609 25.2155 25.2821 24.5403C23.8034 23.8651 23.5055 22.4301 23.42 21.8391C23.3348 21.2495 23.333 20.5198 23.3333 19.8616C21.1181 20.2459 19.0064 21.1177 17.4558 22.3298L17.3727 22.3947C16.759 22.8746 16.171 23.3344 15.6977 23.6418C15.4578 23.7976 15.0914 24.0199 14.6624 24.1647C14.2703 24.2971 13.3 24.5402 12.3 23.9538C11.3983 23.425 11.0862 22.5838 10.9788 22.1101C10.8751 21.6525 10.8841 21.2216 10.8987 20.9502C10.9269 20.4261 11.0307 19.7561 11.1323 19.1002L11.1487 18.9941C11.9402 13.8758 14.1687 10.3836 17.0638 8.2053C19.0628 6.70119 21.2717 5.90353 23.3334 5.56283L23.3333 5.18871C23.333 4.58338 23.3326 3.91211 23.3967 3.34253C22.3538 3.33329 21.2247 3.33329 20.0002 3.33329C12.1434 3.33329 8.21505 3.33329 5.77427 5.77407C3.3335 8.21485 3.3335 12.1432 3.3335 20C3.3335 27.8567 3.3335 31.7851 5.77427 34.2258C8.21505 36.6666 12.1434 36.6666 20.0002 36.6666C27.8569 36.6666 31.7853 36.6666 34.2261 34.2258Z" fill="#3D4057"/>
                                    <path d="M28.5916 4.05688L32.5204 7.46183C35.2249 9.80572 36.5771 10.9777 36.5771 12.4998C36.5771 14.0219 35.2249 15.1938 32.5204 17.5377L28.5916 20.9426C27.4024 21.9733 26.8078 22.4886 26.3206 22.2662C25.8334 22.0437 25.8334 21.2569 25.8334 19.6832V17.1426C22.2927 17.1426 18.5431 18.3067 15.9161 20.3602C14.5439 21.4328 13.8578 21.9691 13.5646 21.7972C13.2715 21.6253 13.3874 20.8756 13.6193 19.3762C15.027 10.2733 21.3338 7.8569 25.8334 7.8569V5.31636C25.8334 3.74266 25.8334 2.95581 26.3206 2.73335C26.8078 2.51089 27.4024 3.02622 28.5916 4.05688Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Share a content<br/> with friends
                                    </h3>
                                    <div className="rounded-full bg-red-400 bg-opacity-10 py-2 px-5 text-red-500 absolute right-0 top-0 text-sm">Youtube</div>
                                </div>
                            </TitleCard>
                            <TitleCard>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M20.0002 3.33337C23.0755 3.33337 25.549 3.33337 27.567 3.47976L21.8312 12.0834H14.0025L19.8358 3.33337H20.0002Z" fill="#3D4057"/>
                                    <path d="M5.77427 5.77415C7.86155 3.68687 11.0367 3.38457 16.8263 3.34079L10.9979 12.0834H3.50713C3.75254 9.14325 4.34483 7.20359 5.77427 5.77415Z" fill="#3D4057"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.3335 20C3.3335 17.9388 3.3335 16.148 3.37757 14.5834H36.6228C36.6668 16.148 36.6668 17.9388 36.6668 20C36.6668 27.8568 36.6668 31.7852 34.2261 34.2259C31.7853 36.6667 27.8569 36.6667 20.0002 36.6667C12.1434 36.6667 8.21505 36.6667 5.77427 34.2259C3.3335 31.7852 3.3335 27.8568 3.3335 20ZM21.6901 20.9754C23.8968 22.3992 25.0002 23.1111 25.0002 24.1667C25.0002 25.2223 23.8968 25.9342 21.6901 27.358C19.4533 28.8013 18.3348 29.5229 17.5008 28.9931C16.6668 28.4632 16.6668 27.031 16.6668 24.1667C16.6668 21.3024 16.6668 19.8702 17.5008 19.3403C18.3348 18.8105 19.4533 19.5321 21.6901 20.9754Z" fill="#3D4057"/>
                                    <path d="M36.4932 12.0834C36.2478 9.14325 35.6555 7.20359 34.2261 5.77415C33.2305 4.77861 31.9875 4.18913 30.3314 3.84009L24.8358 12.0834H36.4932Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Become<br/> a content creator
                                    </h3>
                                    <div className="rounded-full bg-red-400 bg-opacity-10 py-2 px-5 text-red-500 absolute right-0 top-0 text-sm">Youtube</div>
                                </div>
                            </TitleCard>
                        </div>
                    </div>         
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            Acquire
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.25 23C41.25 33.3553 32.8553 41.75 22.5 41.75C12.1447 41.75 3.75 33.3553 3.75 23C3.75 12.6447 12.1447 4.25 22.5 4.25C32.8553 4.25 41.25 12.6447 41.25 23ZM28.125 17.375C28.125 20.4816 25.6066 23 22.5 23C19.3934 23 16.875 20.4816 16.875 17.375C16.875 14.2684 19.3934 11.75 22.5 11.75C25.6066 11.75 28.125 14.2684 28.125 17.375ZM22.5 38.9375C25.8451 38.9375 28.9495 37.9069 31.513 36.146C32.6452 35.3682 33.1291 33.8867 32.4708 32.6811C31.1062 30.1817 28.2942 28.625 22.4999 28.625C16.7057 28.625 13.8937 30.1817 12.529 32.6809C11.8707 33.8866 12.3546 35.3681 13.4868 36.1459C16.0503 37.9069 19.1548 38.9375 22.5 38.9375Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Create Account
                                    </h3>
                                    <div className="rounded-full bg-yellow-800 bg-opacity-10 py-2 px-5 text-yellow-500 absolute right-0 top-0 text-sm">Acuire</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75021 8.02474C9.75005 8.01649 9.74997 8.00821 9.74997 7.99992V6.33325C9.74997 2.88147 12.5482 0.083252 16 0.083252C19.4518 0.083252 22.25 2.88147 22.25 6.33325V7.99992C22.25 8.00821 22.2499 8.01649 22.2497 8.02474C24.3952 8.08914 25.7079 8.32058 26.7102 9.15237C28.0988 10.3048 28.4646 12.2556 29.1961 16.157L30.4461 22.8237C31.4748 28.3099 31.9891 31.0529 30.4896 32.8598C28.99 34.6666 26.1991 34.6666 20.6174 34.6666H11.3826C5.8008 34.6666 3.00992 34.6666 1.51039 32.8598C0.0108641 31.0529 0.525192 28.3099 1.55385 22.8237L2.80385 16.157C3.53537 12.2556 3.90114 10.3048 5.28976 9.15237C6.29201 8.32058 7.60479 8.08914 9.75021 8.02474ZM12.25 6.33325C12.25 4.26218 13.9289 2.58325 16 2.58325C18.071 2.58325 19.75 4.26218 19.75 6.33325V7.99992C19.75 7.99991 19.75 7.99993 19.75 7.99992C19.6245 7.99988 19.497 7.99992 19.3674 7.99992H12.6326C12.5029 7.99992 12.3754 7.99992 12.25 7.99996C12.25 7.99995 12.25 7.99997 12.25 7.99996V6.33325Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        First Order
                                    </h3>
                                    <div className="rounded-full bg-yellow-800 bg-opacity-10 py-2 px-5 text-yellow-500 absolute right-0 top-0 text-sm">Acuire</div>
                                </div>
                            </TitleCard>
                        </div>
                    </div>         
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            Retain
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75021 8.02474C9.75005 8.01649 9.74997 8.00821 9.74997 7.99992V6.33325C9.74997 2.88147 12.5482 0.083252 16 0.083252C19.4518 0.083252 22.25 2.88147 22.25 6.33325V7.99992C22.25 8.00821 22.2499 8.01649 22.2497 8.02474C24.3952 8.08914 25.7079 8.32058 26.7102 9.15237C28.0988 10.3048 28.4646 12.2556 29.1961 16.157L30.4461 22.8237C31.4748 28.3099 31.9891 31.0529 30.4896 32.8598C28.99 34.6666 26.1991 34.6666 20.6174 34.6666H11.3826C5.8008 34.6666 3.00992 34.6666 1.51039 32.8598C0.0108641 31.0529 0.525192 28.3099 1.55385 22.8237L2.80385 16.157C3.53537 12.2556 3.90114 10.3048 5.28976 9.15237C6.29201 8.32058 7.60479 8.08914 9.75021 8.02474ZM12.25 6.33325C12.25 4.26218 13.9289 2.58325 16 2.58325C18.071 2.58325 19.75 4.26218 19.75 6.33325V7.99992C19.75 7.99991 19.75 7.99993 19.75 7.99992C19.6245 7.99988 19.497 7.99992 19.3674 7.99992H12.6326C12.5029 7.99992 12.3754 7.99992 12.25 7.99996C12.25 7.99995 12.25 7.99997 12.25 7.99996V6.33325Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Second Order
                                    </h3>
                                    <div className="rounded-full bg-green-300 bg-opacity-10 py-2 px-5 text-green-400 absolute right-0 top-0 text-sm">Retain</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75021 8.02474C9.75005 8.01649 9.74997 8.00821 9.74997 7.99992V6.33325C9.74997 2.88147 12.5482 0.083252 16 0.083252C19.4518 0.083252 22.25 2.88147 22.25 6.33325V7.99992C22.25 8.00821 22.2499 8.01649 22.2497 8.02474C24.3952 8.08914 25.7079 8.32058 26.7102 9.15237C28.0988 10.3048 28.4646 12.2556 29.1961 16.157L30.4461 22.8237C31.4748 28.3099 31.9891 31.0529 30.4896 32.8598C28.99 34.6666 26.1991 34.6666 20.6174 34.6666H11.3826C5.8008 34.6666 3.00992 34.6666 1.51039 32.8598C0.0108641 31.0529 0.525192 28.3099 1.55385 22.8237L2.80385 16.157C3.53537 12.2556 3.90114 10.3048 5.28976 9.15237C6.29201 8.32058 7.60479 8.08914 9.75021 8.02474ZM12.25 6.33325C12.25 4.26218 13.9289 2.58325 16 2.58325C18.071 2.58325 19.75 4.26218 19.75 6.33325V7.99992C19.75 7.99991 19.75 7.99993 19.75 7.99992C19.6245 7.99988 19.497 7.99992 19.3674 7.99992H12.6326C12.5029 7.99992 12.3754 7.99992 12.25 7.99996C12.25 7.99995 12.25 7.99997 12.25 7.99996V6.33325Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Third Order
                                    </h3>
                                    <div className="rounded-full bg-green-300 bg-opacity-10 py-2 px-5 text-green-400 absolute right-0 top-0 text-sm">Retain</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75021 8.02474C9.75005 8.01649 9.74997 8.00821 9.74997 7.99992V6.33325C9.74997 2.88147 12.5482 0.083252 16 0.083252C19.4518 0.083252 22.25 2.88147 22.25 6.33325V7.99992C22.25 8.00821 22.2499 8.01649 22.2497 8.02474C24.3952 8.08914 25.7079 8.32058 26.7102 9.15237C28.0988 10.3048 28.4646 12.2556 29.1961 16.157L30.4461 22.8237C31.4748 28.3099 31.9891 31.0529 30.4896 32.8598C28.99 34.6666 26.1991 34.6666 20.6174 34.6666H11.3826C5.8008 34.6666 3.00992 34.6666 1.51039 32.8598C0.0108641 31.0529 0.525192 28.3099 1.55385 22.8237L2.80385 16.157C3.53537 12.2556 3.90114 10.3048 5.28976 9.15237C6.29201 8.32058 7.60479 8.08914 9.75021 8.02474ZM12.25 6.33325C12.25 4.26218 13.9289 2.58325 16 2.58325C18.071 2.58325 19.75 4.26218 19.75 6.33325V7.99992C19.75 7.99991 19.75 7.99993 19.75 7.99992C19.6245 7.99988 19.497 7.99992 19.3674 7.99992H12.6326C12.5029 7.99992 12.3754 7.99992 12.25 7.99996C12.25 7.99995 12.25 7.99997 12.25 7.99996V6.33325Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Fifth Order
                                    </h3>
                                    <div className="rounded-full bg-green-300 bg-opacity-10 py-2 px-5 text-green-400 absolute right-0 top-0 text-sm">Retain</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75021 8.02474C9.75005 8.01649 9.74997 8.00821 9.74997 7.99992V6.33325C9.74997 2.88147 12.5482 0.083252 16 0.083252C19.4518 0.083252 22.25 2.88147 22.25 6.33325V7.99992C22.25 8.00821 22.2499 8.01649 22.2497 8.02474C24.3952 8.08914 25.7079 8.32058 26.7102 9.15237C28.0988 10.3048 28.4646 12.2556 29.1961 16.157L30.4461 22.8237C31.4748 28.3099 31.9891 31.0529 30.4896 32.8598C28.99 34.6666 26.1991 34.6666 20.6174 34.6666H11.3826C5.8008 34.6666 3.00992 34.6666 1.51039 32.8598C0.0108641 31.0529 0.525192 28.3099 1.55385 22.8237L2.80385 16.157C3.53537 12.2556 3.90114 10.3048 5.28976 9.15237C6.29201 8.32058 7.60479 8.08914 9.75021 8.02474ZM12.25 6.33325C12.25 4.26218 13.9289 2.58325 16 2.58325C18.071 2.58325 19.75 4.26218 19.75 6.33325V7.99992C19.75 7.99991 19.75 7.99993 19.75 7.99992C19.6245 7.99988 19.497 7.99992 19.3674 7.99992H12.6326C12.5029 7.99992 12.3754 7.99992 12.25 7.99996C12.25 7.99995 12.25 7.99997 12.25 7.99996V6.33325Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Tenth Order
                                    </h3>
                                    <div className="rounded-full bg-green-300 bg-opacity-10 py-2 px-5 text-green-400 absolute right-0 top-0 text-sm">Retain</div>
                                </div>
                            </TitleCard>
                        </div>
                    </div>         
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            Engage
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M27.5466 3.33325H12.4538C10.4491 3.33325 9.44679 3.33325 8.64128 3.83108C7.83578 4.32891 7.38751 5.22544 6.49099 7.01849L4.15163 12.9321C3.61115 14.2983 3.13825 15.9087 4.04805 17.0624C4.65842 17.8364 5.60456 18.3333 6.6668 18.3333C8.50774 18.3333 10.0001 16.8409 10.0001 14.9999C10.0001 16.8409 11.4925 18.3333 13.3335 18.3333C15.1744 18.3333 16.6668 16.8409 16.6668 14.9999C16.6668 16.8409 18.1592 18.3333 20.0001 18.3333C21.8411 18.3333 23.3335 16.8409 23.3335 14.9999C23.3335 16.8409 24.8258 18.3333 26.6668 18.3333C28.5077 18.3333 30.0001 16.8409 30.0001 14.9999C30.0001 16.8409 31.4925 18.3333 33.3335 18.3333C34.3957 18.3333 35.3419 17.8364 35.9523 17.0624C36.8621 15.9087 36.3893 14.2983 35.8488 12.9321L33.5094 7.01849C32.6129 5.22544 32.1646 4.32891 31.3591 3.83108C30.5536 3.33325 29.5513 3.33325 27.5466 3.33325Z" fill="#3D4057"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3335 35.4167H36.6668C37.3572 35.4167 37.9168 35.9764 37.9168 36.6667C37.9168 37.3571 37.3572 37.9167 36.6668 37.9167H3.3335C2.64314 37.9167 2.0835 37.3571 2.0835 36.6667C2.0835 35.9764 2.64314 35.4167 3.3335 35.4167H6.66683L6.66683 20.8334C7.90621 20.8334 9.05531 20.4469 10.0002 19.7878C10.945 20.4469 12.0941 20.8334 13.3335 20.8334C14.5729 20.8334 15.722 20.4469 16.6668 19.7878C17.6117 20.4469 18.7608 20.8334 20.0002 20.8334C21.2395 20.8334 22.3886 20.4469 23.3335 19.7878C24.2784 20.4469 25.4275 20.8334 26.6668 20.8334C27.9062 20.8334 29.0553 20.4469 30.0002 19.7878C30.945 20.4469 32.0941 20.8334 33.3335 20.8334L33.3335 35.4167ZM15.8335 35.4167H24.1668V30.8334C24.1668 29.2757 24.1668 28.4969 23.8319 27.9167C23.6125 27.5367 23.2969 27.2211 22.9168 27.0017C22.3367 26.6667 21.5579 26.6667 20.0002 26.6667C18.4425 26.6667 17.6636 26.6667 17.0835 27.0017C16.7034 27.2211 16.3879 27.5367 16.1684 27.9167C15.8335 28.4969 15.8335 29.2757 15.8335 30.8334V35.4167Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Visit a specific product
                                    </h3>
                                    <div className="rounded-full bg-sky-300 bg-opacity-10 py-2 px-5 text-sky-500 absolute right-0 top-0 text-sm">Engage</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M27.6238 31.9999L21.0599 25.4361L19.0555 27.4405C17.0035 29.4925 15.9774 30.5186 14.8747 30.2764C13.7719 30.0342 13.2703 28.6726 12.267 25.9495L8.92101 16.8675C6.91962 11.4352 5.91893 8.71901 7.31885 7.31909C8.71877 5.91917 11.4349 6.91987 16.8673 8.92126L25.9492 12.2672C28.6724 13.2705 30.0339 13.7721 30.2761 14.8749C30.5183 15.9777 29.4923 17.0037 27.4403 19.0558L25.4358 21.0602L31.9997 27.624C32.6793 28.3037 33.0191 28.6435 33.1761 29.0226C33.3855 29.528 33.3855 30.0959 33.1761 30.6014C33.0191 30.9805 32.6793 31.3203 31.9997 31.9999C31.32 32.6796 30.9802 33.0194 30.6011 33.1764C30.0957 33.3858 29.5278 33.3858 29.0223 33.1764C28.6432 33.0194 28.3034 32.6796 27.6238 31.9999Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Visit Our Website Daily
                                    </h3>
                                    <div className="rounded-full bg-sky-300 bg-opacity-10 py-2 px-5 text-sky-500 absolute right-0 top-0 text-sm">Engage</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.28612 8.61937C3.3335 10.572 3.3335 13.7147 3.3335 20.0001C3.3335 26.2855 3.3335 29.4282 5.28612 31.3808C7.23874 33.3334 10.3814 33.3334 16.6668 33.3334H23.3335C29.6189 33.3334 32.7616 33.3334 34.7142 31.3808C36.6668 29.4282 36.6668 26.2855 36.6668 20.0001C36.6668 13.7147 36.6668 10.572 34.7142 8.61937C32.7616 6.66675 29.6189 6.66675 23.3335 6.66675H16.6668C10.3814 6.66675 7.23874 6.66675 5.28612 8.61937ZM30.9604 12.5332C31.4024 13.0635 31.3307 13.8517 30.8004 14.2937L27.1396 17.3444C25.6623 18.5755 24.465 19.5733 23.4082 20.253C22.3074 20.961 21.2353 21.4082 20.0002 21.4082C18.765 21.4082 17.693 20.961 16.5921 20.253C15.5354 19.5733 14.338 18.5755 12.8608 17.3444L9.19993 14.2937C8.66959 13.8517 8.59793 13.0635 9.03989 12.5332C9.48184 12.0028 10.27 11.9312 10.8004 12.3731L14.3986 15.3716C15.9535 16.6674 17.033 17.5641 17.9445 18.1503C18.8267 18.7177 19.425 18.9082 20.0002 18.9082C20.5753 18.9082 21.1736 18.7177 22.0559 18.1503C22.9673 17.5641 24.0468 16.6674 25.6018 15.3716L29.1999 12.3731C29.7303 11.9312 30.5185 12.0028 30.9604 12.5332Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Subscribe to newsletter
                                    </h3>
                                    <div className="rounded-full bg-sky-300 bg-opacity-10 py-2 px-5 text-sky-500 absolute right-0 top-0 text-sm">Engage</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M15.8333 3.33325C14.4526 3.33325 13.3333 4.45254 13.3333 5.83325V7.49992C13.3333 8.88063 14.4526 9.99992 15.8333 9.99992H24.1667C25.5474 9.99992 26.6667 8.88063 26.6667 7.49992V5.83325C26.6667 4.45254 25.5474 3.33325 24.1667 3.33325H15.8333Z" fill="#3D4057"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 6.72761C8.73682 6.84524 7.4133 7.17932 6.46447 8.12816C5 9.59262 5 11.9496 5 16.6637V26.6637C5 31.3777 5 33.7348 6.46447 35.1992C7.92893 36.6637 10.286 36.6637 15 36.6637H25C29.714 36.6637 32.0711 36.6637 33.5355 35.1992C35 33.7348 35 31.3777 35 26.6637V16.6637C35 11.9496 35 9.59262 33.5355 8.12816C32.5867 7.17932 31.2632 6.84524 29.1667 6.72761V7.49992C29.1667 10.2613 26.9281 12.4999 24.1667 12.4999H15.8333C13.0719 12.4999 10.8333 10.2613 10.8333 7.49992V6.72761ZM25.8529 20.9137C26.3576 20.4427 26.3849 19.6517 25.9138 19.147C25.4428 18.6423 24.6518 18.6151 24.1471 19.0861L17.8571 24.9567L15.8529 23.0861C15.3482 22.6151 14.5572 22.6423 14.0862 23.147C13.6151 23.6517 13.6424 24.4427 14.1471 24.9137L17.0042 27.5804C17.4845 28.0287 18.2298 28.0287 18.71 27.5804L25.8529 20.9137Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Take a survey
                                    </h3>
                                    <div className="rounded-full bg-sky-300 bg-opacity-10 py-2 px-5 text-sky-500 absolute right-0 top-0 text-sm">Engage</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <div className='rounded-full w-11 h-11 p-2 flex items-center justify-center' style={{background: '#3D4057'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                            <path d="M13.25 13.4062H15.5938L16.5312 9.65625H13.25V7.78125C13.25 6.81563 13.25 5.90625 15.125 5.90625H16.5312V2.75625C16.2256 2.71594 15.0716 2.625 13.8528 2.625C11.3075 2.625 9.5 4.17844 9.5 7.03125V9.65625H6.6875V13.4062H9.5V21.375H13.25V13.4062Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <h3 className='text-base font-semibold'>
                                        Facebook
                                    </h3>
                                    <div className="rounded-full bg-sky-300 bg-opacity-10 py-2 px-5 text-sky-500 absolute right-0 top-0 text-sm">Engage</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <div className='rounded-full w-11 h-11 p-2 flex items-center justify-center' style={{background: '#3D4057'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                        <path d="M11.3674 2.5625C12.3166 2.56503 12.7984 2.57009 13.2143 2.58191L13.378 2.58781C13.567 2.59456 13.7535 2.603 13.9788 2.61312C14.8765 2.65531 15.4891 2.79706 16.0266 3.00547C16.5834 3.21978 17.0526 3.51003 17.5217 3.97831C17.9507 4.4001 18.2827 4.91031 18.4945 5.47344C18.7029 6.01091 18.8447 6.62347 18.8869 7.52206C18.897 7.7465 18.9054 7.93297 18.9122 8.12281L18.9172 8.2865C18.9299 8.70162 18.935 9.18341 18.9367 10.1326L18.9375 10.7621V11.8674C18.9396 12.4828 18.9331 13.0982 18.9181 13.7135L18.913 13.8772C18.9063 14.067 18.8978 14.2535 18.8877 14.4779C18.8455 15.3765 18.7021 15.9882 18.4945 16.5266C18.2833 17.09 17.9513 17.6003 17.5217 18.0217C17.0998 18.4506 16.5896 18.7825 16.0266 18.9945C15.4891 19.2029 14.8765 19.3447 13.9788 19.3869C13.7786 19.3963 13.5783 19.4047 13.378 19.4122L13.2143 19.4172C12.7984 19.4291 12.3166 19.435 11.3674 19.4367L10.7379 19.4375H9.63347C9.01775 19.4396 8.40203 19.4332 7.7865 19.4181L7.62281 19.413C7.42251 19.4054 7.22226 19.3967 7.02206 19.3869C6.12431 19.3447 5.51175 19.2029 4.97344 18.9945C4.41038 18.7831 3.90037 18.451 3.47915 18.0217C3.04972 17.6001 2.71744 17.0898 2.50547 16.5266C2.29706 15.9891 2.15531 15.3765 2.11312 14.4779C2.10372 14.2777 2.09529 14.0775 2.08781 13.8772L2.08359 13.7135C2.06804 13.0983 2.06101 12.4828 2.0625 11.8674V10.1326C2.06014 9.51719 2.06633 8.90176 2.08106 8.2865L2.08697 8.12281C2.09372 7.93297 2.10215 7.7465 2.11228 7.52206C2.15447 6.62347 2.29622 6.01175 2.50462 5.47344C2.7165 4.90973 3.04945 4.39936 3.48 3.97831C3.90111 3.54924 4.41078 3.21724 4.97344 3.00547C5.51175 2.79706 6.12347 2.65531 7.02206 2.61312C7.2465 2.603 7.43381 2.59456 7.62281 2.58781L7.7865 2.58275C8.40175 2.56776 9.01719 2.56129 9.63262 2.56334L11.3674 2.5625ZM10.5 6.78125C9.38112 6.78125 8.30806 7.22572 7.51689 8.01689C6.72572 8.80806 6.28125 9.88112 6.28125 11C6.28125 12.1189 6.72572 13.1919 7.51689 13.9831C8.30806 14.7743 9.38112 15.2187 10.5 15.2187C11.6189 15.2187 12.6919 14.7743 13.4831 13.9831C14.2743 13.1919 14.7187 12.1189 14.7187 11C14.7187 9.88112 14.2743 8.80806 13.4831 8.01689C12.6919 7.22572 11.6189 6.78125 10.5 6.78125ZM10.5 8.46875C10.8324 8.46869 11.1616 8.53411 11.4687 8.66127C11.7758 8.78842 12.0549 8.97483 12.29 9.20984C12.5251 9.44485 12.7116 9.72386 12.8388 10.0309C12.9661 10.338 13.0316 10.6672 13.0317 10.9996C13.0317 11.332 12.9663 11.6612 12.8392 11.9683C12.712 12.2754 12.5256 12.5545 12.2906 12.7896C12.0556 13.0247 11.7766 13.2111 11.4695 13.3384C11.1624 13.4657 10.8333 13.5312 10.5008 13.5312C9.82951 13.5312 9.18568 13.2646 8.71098 12.7899C8.23628 12.3152 7.96959 11.6713 7.96959 11C7.96959 10.3287 8.23628 9.68484 8.71098 9.21013C9.18568 8.73543 9.82951 8.46875 10.5008 8.46875M14.9305 5.51562C14.6508 5.51562 14.3825 5.62674 14.1848 5.82454C13.987 6.02233 13.8758 6.29059 13.8758 6.57031C13.8758 6.85003 13.987 7.1183 14.1848 7.31609C14.3825 7.51388 14.6508 7.625 14.9305 7.625C15.2102 7.625 15.4785 7.51388 15.6763 7.31609C15.8741 7.1183 15.9852 6.85003 15.9852 6.57031C15.9852 6.29059 15.8741 6.02233 15.6763 5.82454C15.4785 5.62674 15.2102 5.51562 14.9305 5.51562Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <h3 className='text-base font-semibold'>
                                        Instagram
                                    </h3>
                                    <div className="rounded-full bg-sky-300 bg-opacity-10 py-2 px-5 text-sky-500 absolute right-0 top-0 text-sm">Engage</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <div className='rounded-full w-11 h-11 p-2 flex items-center justify-center' style={{background: '#3D4057'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                        <path d="M15.8124 6.20625C15.1715 5.47465 14.8184 4.53509 14.8187 3.5625H11.9218V15.1875C11.8994 15.8166 11.6338 16.4125 11.1809 16.8496C10.728 17.2868 10.1231 17.5312 9.49365 17.5312C8.1624 17.5312 7.05615 16.4438 7.05615 15.0938C7.05615 13.4812 8.6124 12.2719 10.2155 12.7687V9.80625C6.98115 9.375 4.1499 11.8875 4.1499 15.0938C4.1499 18.2156 6.7374 20.4375 9.48428 20.4375C12.428 20.4375 14.8187 18.0469 14.8187 15.0938V9.19688C15.9933 10.0405 17.4037 10.4931 18.8499 10.4906V7.59375C18.8499 7.59375 17.0874 7.67813 15.8124 6.20625Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <h3 className='text-base font-semibold'>
                                        Tiktok
                                    </h3>
                                    <div className="rounded-full bg-sky-300 bg-opacity-10 py-2 px-5 text-sky-500 absolute right-0 top-0 text-sm">Engage</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <div className='rounded-full w-11 h-11 p-2 flex items-center justify-center' style={{background: '#3D4057'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                        <path d="M9.625 14.25L14.4906 11.4375L9.625 8.625V14.25ZM20.4625 6.90938C20.5844 7.35 20.6687 7.94063 20.725 8.69063C20.7906 9.44063 20.8187 10.0875 20.8187 10.65L20.875 11.4375C20.875 13.4906 20.725 15 20.4625 15.9656C20.2281 16.8094 19.6844 17.3531 18.8406 17.5875C18.4 17.7094 17.5937 17.7938 16.3562 17.85C15.1375 17.9156 14.0219 17.9438 12.9906 17.9438L11.5 18C7.57187 18 5.125 17.85 4.15937 17.5875C3.31562 17.3531 2.77187 16.8094 2.5375 15.9656C2.41563 15.525 2.33125 14.9344 2.275 14.1844C2.20938 13.4344 2.18125 12.7875 2.18125 12.225L2.125 11.4375C2.125 9.38438 2.275 7.875 2.5375 6.90938C2.77187 6.06563 3.31562 5.52188 4.15937 5.2875C4.6 5.16563 5.40625 5.08125 6.64375 5.025C7.8625 4.95937 8.97812 4.93125 10.0094 4.93125L11.5 4.875C15.4281 4.875 17.875 5.025 18.8406 5.2875C19.6844 5.52188 20.2281 6.06563 20.4625 6.90938Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <h3 className='text-base font-semibold'>
                                        YouTube
                                    </h3>
                                    <div className="rounded-full bg-sky-300 bg-opacity-10 py-2 px-5 text-sky-500 absolute right-0 top-0 text-sm">Engage</div>
                                </div>
                            </TitleCard>
                        </div>
                    </div>         
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            Personalize
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M18.7498 3.33325C11.7192 3.34011 8.08163 3.46588 5.77388 5.77363C3.46613 8.08138 3.34035 11.719 3.3335 18.7495H11.5227C10.9377 18.0189 10.5007 17.157 10.2623 16.2037C9.36526 12.6154 12.6156 9.36501 16.204 10.2621C17.1573 10.5004 18.0191 10.9375 18.7498 11.5224V3.33325Z" fill="#3D4057"/>
                                    <path d="M3.3335 21.2495C3.34035 28.2801 3.46613 31.9177 5.77388 34.2254C8.08163 36.5332 11.7192 36.6589 18.7498 36.6658V23.5389C17.4504 26.1343 14.7665 27.9162 11.6664 27.9162C10.9761 27.9162 10.4164 27.3565 10.4164 26.6662C10.4164 25.9758 10.9761 25.4162 11.6664 25.4162C14.2278 25.4162 16.3739 23.6384 16.9382 21.2495H3.3335Z" fill="#3D4057"/>
                                    <path d="M21.2498 36.6658C28.2803 36.6589 31.9179 36.5332 34.2257 34.2254C36.5334 31.9177 36.6592 28.2801 36.666 21.2495H23.0614C23.6257 23.6384 25.7718 25.4162 28.3331 25.4162C29.0235 25.4162 29.5831 25.9758 29.5831 26.6662C29.5831 27.3565 29.0235 27.9162 28.3331 27.9162C25.233 27.9162 22.5492 26.1343 21.2498 23.5389V36.6658Z" fill="#3D4057"/>
                                    <path d="M36.666 18.7495C36.6592 11.719 36.5334 8.08138 34.2257 5.77363C31.9179 3.46588 28.2803 3.34011 21.2498 3.33325V11.5224C21.9804 10.9375 22.8423 10.5004 23.7956 10.2621C27.3839 9.36501 30.6343 12.6154 29.7372 16.2037C29.4989 17.157 29.0618 18.0189 28.4768 18.7495H36.666Z" fill="#3D4057"/>
                                    <path d="M15.5976 12.6875C17.4502 13.1506 18.7498 14.8151 18.7498 16.7247V18.7495H16.7249C14.8153 18.7495 13.1508 17.4499 12.6877 15.5974C12.2483 13.84 13.8402 12.2481 15.5976 12.6875Z" fill="#3D4057"/>
                                    <path d="M21.2498 16.7247V18.7495H23.2746C25.1842 18.7495 26.8487 17.4499 27.3118 15.5974C27.7512 13.84 26.1593 12.2481 24.4019 12.6875C22.5494 13.1506 21.2498 14.8151 21.2498 16.7247Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                    Birthday
                                    </h3>
                                    <div className="rounded-full bg-purple-400 bg-opacity-10 py-2 px-5 text-purple-400 absolute right-0 top-0 text-sm">Personalize</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M16.977 3.56475C17.566 3.92483 17.7516 4.69422 17.3915 5.28324C17.1302 5.71065 17.1957 6.26143 17.5499 6.61566L17.713 6.77879C18.6941 7.75989 19.0559 9.20118 18.6544 10.5293C18.4547 11.1901 17.757 11.5639 17.0962 11.3642C16.4354 11.1644 16.0616 10.4668 16.2614 9.80594C16.3962 9.35997 16.2747 8.876 15.9453 8.54656L15.7821 8.38343C14.6113 7.21256 14.3948 5.39205 15.2585 3.97927C15.6186 3.39026 16.3879 3.20468 16.977 3.56475Z" fill="#3D4057"/>
                                        <path d="M29.4819 7.86887C30.1589 8.00426 30.5979 8.66279 30.4625 9.33974L30.2225 10.5396C29.8923 12.191 28.7025 13.5388 27.1048 14.0713C26.3583 14.3202 25.8023 14.9499 25.648 15.7216L25.408 16.9215C25.2726 17.5984 24.6141 18.0374 23.9371 17.9021C23.2602 17.7667 22.8212 17.1081 22.9566 16.4312L23.1965 15.2313C23.5268 13.5799 24.7166 12.2322 26.3143 11.6996C27.0608 11.4508 27.6168 10.821 27.7711 10.0493L28.0111 8.84945C28.1464 8.1725 28.805 7.73348 29.4819 7.86887Z" fill="#3D4057"/>
                                        <path d="M35.681 22.5987C35.0782 22.3351 34.3771 22.4458 33.8848 22.8823C32.536 24.0783 30.5733 24.2771 29.0121 23.3758L28.6574 23.171C28.0595 22.8258 27.8547 22.0613 28.1999 21.4634C28.545 20.8656 29.3095 20.6607 29.9074 21.0059L30.2621 21.2107C30.8914 21.574 31.6825 21.4939 32.2261 21.0118C33.4475 19.9288 35.1869 19.6541 36.6826 20.308L37.1684 20.5205C37.8009 20.797 38.0895 21.534 37.8129 22.1665C37.5363 22.7991 36.7994 23.0876 36.1668 22.8111L35.681 22.5987Z" fill="#3D4057"/>
                                        <path d="M11.5462 6.56753C11.8953 6.21842 12.4613 6.21842 12.8104 6.56753C13.1595 6.91665 13.1595 7.48267 12.8104 7.83179C12.4613 8.1809 11.8953 8.1809 11.5462 7.83179C11.1971 7.48267 11.1971 6.91665 11.5462 6.56753Z" fill="#3D4057"/>
                                        <path d="M21.5263 11.928C21.1771 11.5789 20.6111 11.5789 20.262 11.928C19.9129 12.2772 19.9129 12.8432 20.262 13.1923C20.6111 13.5414 21.1771 13.5414 21.5263 13.1923C21.8754 12.8432 21.8754 12.2772 21.5263 11.928Z" fill="#3D4057"/>
                                        <path d="M28.5953 16.928C28.9444 16.5789 29.5105 16.5789 29.8596 16.928C30.2087 17.2772 30.2087 17.8432 29.8596 18.1923C29.5105 18.5414 28.9444 18.5414 28.5953 18.1923C28.2462 17.8432 28.2462 17.2772 28.5953 16.928Z" fill="#3D4057"/>
                                        <path d="M33.0277 25.5218C32.6786 25.1727 32.1126 25.1727 31.7635 25.5218C31.4143 25.8709 31.4143 26.4369 31.7635 26.7861C32.1126 27.1352 32.6786 27.1352 33.0277 26.7861C33.3768 26.4369 33.3768 25.8709 33.0277 25.5218Z" fill="#3D4057"/>
                                        <path d="M12.4527 33.7353C8.68341 34.9779 6.69747 35.498 5.5989 34.3994C4.38243 33.1829 5.1506 30.8784 6.68694 26.2694L9.50277 17.8219C10.5561 14.6618 11.1749 12.8054 12.2075 12.0523L12.1988 12.0953C12.1868 12.1552 12.1694 12.2427 12.1475 12.3552C12.1037 12.5801 12.0419 12.9055 11.9689 13.3108C11.8229 14.1208 11.6317 15.2528 11.4507 16.5426C11.0922 19.098 10.7601 22.363 10.9312 24.972C11.0347 26.5507 11.3631 28.5092 11.6563 30.0395C11.8042 30.8118 11.9458 31.4887 12.0505 31.9728C12.1029 32.215 12.1462 32.4093 12.1764 32.5437L12.2117 32.6989L12.4527 33.7353Z" fill="#3D4057"/>
                                        <path d="M21.7316 30.6438L22.1764 30.4955C26.0065 29.2188 27.9215 28.5805 28.2781 27.07C28.6346 25.5596 27.2072 24.1322 24.3525 21.2775L21.537 18.462L21.5292 18.4867C21.4965 18.5897 21.4492 18.7414 21.3921 18.9321C21.2778 19.314 21.1252 19.8489 20.973 20.4586C20.6613 21.7066 20.3784 23.1618 20.3784 24.2584C20.3784 25.355 20.6613 26.8102 20.973 28.0582C21.1252 28.6679 21.2778 29.2028 21.3921 29.5847C21.4492 29.7753 21.4965 29.9271 21.5292 30.0301C21.5455 30.0816 21.5582 30.1208 21.5666 30.1466L21.5759 30.175L21.5779 30.1813L21.7316 30.6438Z" fill="#3D4057"/>
                                        <path d="M14.6663 12.5068L14.7507 12.098C15.772 12.697 16.9814 13.9064 18.7208 15.6458L19.5589 16.4839L19.2043 17.5506L19.1891 17.597C19.179 17.6282 19.1645 17.673 19.1463 17.7304C19.1099 17.8452 19.0585 18.0101 18.9971 18.2152C18.8745 18.6247 18.7111 19.1976 18.5475 19.8529C18.2273 21.1349 17.8784 22.8387 17.8784 24.2584C17.8784 25.6781 18.2273 27.3819 18.5475 28.6639C18.7111 29.3192 18.8745 29.8921 18.9971 30.3016C19.0585 30.5067 19.1099 30.6716 19.1463 30.7864C19.1645 30.8437 19.179 30.8886 19.1891 30.9198L19.3599 31.4343L14.835 32.9426L14.657 32.1774L14.6485 32.1405L14.6153 31.9944C14.5865 31.8662 14.5448 31.6788 14.494 31.4443C14.3925 30.9748 14.2551 30.3178 14.1116 29.5691C13.8221 28.0574 13.5187 26.2249 13.4258 24.8084C13.2724 22.4687 13.5721 19.4156 13.9265 16.89C14.102 15.6394 14.2876 14.5402 14.4292 13.7542C14.5 13.3614 14.5597 13.0475 14.6015 12.8328C14.6224 12.7254 14.6388 12.6429 14.6499 12.5877L14.6624 12.5258L14.6655 12.5108L14.6663 12.5068Z" fill="#3D4057"/>
                                        <path d="M24.9227 3.68359C25.1755 3.65006 25.6363 3.63395 26.0026 4.00023C26.3689 4.3665 26.3528 4.82731 26.3193 5.08011C26.2876 5.31901 26.2061 5.60524 26.1285 5.87791L26.0688 6.08792L26.1766 6.25868C26.3225 6.48963 26.4792 6.73774 26.5751 6.95844C26.6833 7.20738 26.8064 7.62758 26.5744 8.06906C26.3468 8.50212 25.9393 8.64463 25.68 8.70358C25.4441 8.75722 25.1491 8.78014 24.8685 8.80194L24.656 8.81852L24.6383 8.81992L24.4852 9.00586C24.3024 9.22802 24.1128 9.45858 23.934 9.62209C23.7446 9.79531 23.3888 10.0624 22.8934 9.99452C22.3811 9.92437 22.1155 9.55338 21.9869 9.32155C21.8705 9.11163 21.7685 8.83529 21.6735 8.57779L21.6065 8.39634L21.4251 8.32932C21.1675 8.23431 20.8912 8.13236 20.6813 8.01594C20.4495 7.88737 20.0785 7.62173 20.0083 7.10941C19.9405 6.61401 20.2075 6.25822 20.3807 6.06885C20.5443 5.89009 20.7748 5.7004 20.997 5.51762L21.1829 5.36454L21.1843 5.34683L21.2009 5.13431C21.2227 4.85375 21.2456 4.55872 21.2993 4.32281C21.3582 4.06353 21.5007 3.65608 21.9338 3.42848C22.3753 3.19644 22.7955 3.31955 23.0444 3.42774C23.2651 3.52367 23.5132 3.68039 23.7442 3.82627L23.9149 3.934L24.1249 3.87432C24.3976 3.79673 24.6838 3.71527 24.9227 3.68359Z" fill="#3D4057"/>
                                        <path d="M36.8996 17.4867C37.6782 16.7081 37.966 15.66 37.5395 14.7369C37.2161 14.0366 36.5614 13.5811 35.7576 13.4096C35.5861 12.6057 35.1306 11.9511 34.4303 11.6276C33.5071 11.2012 32.4591 11.489 31.6805 12.2676C31.229 12.719 31.0245 13.324 30.9287 13.8628C30.8307 14.414 30.8288 14.9966 30.8615 15.507C30.8945 16.0224 30.9649 16.495 31.0263 16.8367C31.0572 17.0085 31.0861 17.1493 31.1077 17.2487C31.1185 17.2983 31.1275 17.3378 31.134 17.3656C31.2083 17.6657 31.454 17.9475 31.7541 18.0218L31.756 18.0223L31.8016 18.0332C31.8294 18.0397 31.8688 18.0486 31.9185 18.0595C32.0178 18.0811 32.1587 18.11 32.3304 18.1409C32.6721 18.2023 33.1448 18.2727 33.6602 18.3057C34.1706 18.3384 34.7532 18.3365 35.3044 18.2385C35.8431 18.1426 36.4482 17.9381 36.8996 17.4867Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                    Anniversary
                                    </h3>
                                    <div className="rounded-full bg-purple-400 bg-opacity-10 py-2 px-5 text-purple-500 absolute right-0 top-0 text-sm">Personalize</div>
                                </div>
                            </TitleCard>
                        </div>
                    </div>         
                </div>
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            Grow
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7502 10.0247C13.7501 10.0165 13.75 10.0082 13.75 9.99992V8.33325C13.75 4.88147 16.5482 2.08325 20 2.08325C23.4518 2.08325 26.25 4.88147 26.25 8.33325V9.99992C26.25 10.0082 26.2499 10.0165 26.2498 10.0247C28.3952 10.0891 29.7079 10.3206 30.7102 11.1524C32.0988 12.3048 32.4646 14.2556 33.1961 18.157L34.4461 24.8237C35.4748 30.3099 35.9891 33.0529 34.4896 34.8598C32.99 36.6666 30.1991 36.6666 24.6174 36.6666H15.3826C9.8008 36.6666 7.00992 36.6666 5.51039 34.8598C4.01086 33.0529 4.52519 30.3099 5.55385 24.8237L6.80385 18.157C7.53537 14.2556 7.90114 12.3048 9.28976 11.1524C10.292 10.3206 11.6048 10.0891 13.7502 10.0247ZM16.25 8.33325C16.25 6.26218 17.9289 4.58325 20 4.58325C22.0711 4.58325 23.75 6.26218 23.75 8.33325V9.99992C23.75 9.99991 23.75 9.99993 23.75 9.99992C23.6245 9.99988 23.497 9.99992 23.3674 9.99992H16.6326C16.5029 9.99992 16.3754 9.99992 16.25 9.99996C16.25 9.99995 16.25 9.99997 16.25 9.99996V8.33325ZM25.7808 18.1905C26.3199 18.6218 26.4073 19.4084 25.9761 19.9475L19.3094 28.2808C19.0873 28.5585 18.7574 28.7284 18.4024 28.7481C18.0474 28.7677 17.7008 28.6353 17.4494 28.3838L14.1161 25.0505C13.6279 24.5624 13.6279 23.7709 14.1161 23.2827C14.6042 22.7946 15.3957 22.7946 15.8839 23.2827L18.2291 25.628L24.0239 18.3858C24.4552 17.8467 25.2418 17.7593 25.7808 18.1905Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Buy a specific product
                                    </h3>
                                    <div className="rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 text-purple-700 absolute right-0 top-0 text-sm">Grow</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7502 10.0247C13.7501 10.0165 13.75 10.0082 13.75 9.99992V8.33325C13.75 4.88147 16.5482 2.08325 20 2.08325C23.4518 2.08325 26.25 4.88147 26.25 8.33325V9.99992C26.25 10.0082 26.2499 10.0165 26.2498 10.0247C28.3952 10.0891 29.7079 10.3206 30.7102 11.1524C32.0988 12.3048 32.4646 14.2556 33.1961 18.157L34.4461 24.8237C35.4748 30.3099 35.9891 33.0529 34.4896 34.8598C32.99 36.6666 30.1991 36.6666 24.6174 36.6666H15.3826C9.8008 36.6666 7.00992 36.6666 5.51039 34.8598C4.01086 33.0529 4.52519 30.3099 5.55385 24.8237L6.80385 18.157C7.53537 14.2556 7.90114 12.3048 9.28976 11.1524C10.292 10.3206 11.6048 10.0891 13.7502 10.0247ZM16.25 8.33325C16.25 6.26218 17.9289 4.58325 20 4.58325C22.0711 4.58325 23.75 6.26218 23.75 8.33325V9.99992C23.75 9.99991 23.75 9.99993 23.75 9.99992C23.6245 9.99988 23.497 9.99992 23.3674 9.99992H16.6326C16.5029 9.99992 16.3754 9.99992 16.25 9.99996C16.25 9.99995 16.25 9.99997 16.25 9.99996V8.33325ZM25.7808 18.1905C26.3199 18.6218 26.4073 19.4084 25.9761 19.9475L19.3094 28.2808C19.0873 28.5585 18.7574 28.7284 18.4024 28.7481C18.0474 28.7677 17.7008 28.6353 17.4494 28.3838L14.1161 25.0505C13.6279 24.5624 13.6279 23.7709 14.1161 23.2827C14.6042 22.7946 15.3957 22.7946 15.8839 23.2827L18.2291 25.628L24.0239 18.3858C24.4552 17.8467 25.2418 17.7593 25.7808 18.1905Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Buy from a specific <br/> collection
                                    </h3>
                                    <div className="rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 text-purple-700 absolute right-0 top-0 text-sm">Grow</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7502 10.0247C13.7501 10.0165 13.75 10.0082 13.75 9.99992V8.33325C13.75 4.88147 16.5482 2.08325 20 2.08325C23.4518 2.08325 26.25 4.88147 26.25 8.33325V9.99992C26.25 10.0082 26.2499 10.0165 26.2498 10.0247C28.3952 10.0891 29.7079 10.3206 30.7102 11.1524C32.0988 12.3048 32.4646 14.2556 33.1961 18.157L34.4461 24.8237C35.4748 30.3099 35.9891 33.0529 34.4896 34.8598C32.99 36.6666 30.1991 36.6666 24.6174 36.6666H15.3826C9.8008 36.6666 7.00992 36.6666 5.51039 34.8598C4.01086 33.0529 4.52519 30.3099 5.55385 24.8237L6.80385 18.157C7.53537 14.2556 7.90114 12.3048 9.28976 11.1524C10.292 10.3206 11.6048 10.0891 13.7502 10.0247ZM16.25 8.33325C16.25 6.26218 17.9289 4.58325 20 4.58325C22.0711 4.58325 23.75 6.26218 23.75 8.33325V9.99992C23.75 9.99991 23.75 9.99993 23.75 9.99992C23.6245 9.99988 23.497 9.99992 23.3674 9.99992H16.6326C16.5029 9.99992 16.3754 9.99992 16.25 9.99996C16.25 9.99995 16.25 9.99997 16.25 9.99996V8.33325ZM25.7808 18.1905C26.3199 18.6218 26.4073 19.4084 25.9761 19.9475L19.3094 28.2808C19.0873 28.5585 18.7574 28.7284 18.4024 28.7481C18.0474 28.7677 17.7008 28.6353 17.4494 28.3838L14.1161 25.0505C13.6279 24.5624 13.6279 23.7709 14.1161 23.2827C14.6042 22.7946 15.3957 22.7946 15.8839 23.2827L18.2291 25.628L24.0239 18.3858C24.4552 17.8467 25.2418 17.7593 25.7808 18.1905Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                    Exceed your highest <br/> order value
                                    </h3>
                                    <div className="rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 text-purple-700 absolute right-0 top-0 text-sm">Grow</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7502 10.0247C13.7501 10.0165 13.75 10.0082 13.75 9.99992V8.33325C13.75 4.88147 16.5482 2.08325 20 2.08325C23.4518 2.08325 26.25 4.88147 26.25 8.33325V9.99992C26.25 10.0082 26.2499 10.0165 26.2498 10.0247C28.3952 10.0891 29.7079 10.3206 30.7102 11.1524C32.0988 12.3048 32.4646 14.2556 33.1961 18.157L34.4461 24.8237C35.4748 30.3099 35.9891 33.0529 34.4896 34.8598C32.99 36.6666 30.1991 36.6666 24.6174 36.6666H15.3826C9.8008 36.6666 7.00992 36.6666 5.51039 34.8598C4.01086 33.0529 4.52519 30.3099 5.55385 24.8237L6.80385 18.157C7.53537 14.2556 7.90114 12.3048 9.28976 11.1524C10.292 10.3206 11.6048 10.0891 13.7502 10.0247ZM16.25 8.33325C16.25 6.26218 17.9289 4.58325 20 4.58325C22.0711 4.58325 23.75 6.26218 23.75 8.33325V9.99992C23.75 9.99991 23.75 9.99993 23.75 9.99992C23.6245 9.99988 23.497 9.99992 23.3674 9.99992H16.6326C16.5029 9.99992 16.3754 9.99992 16.25 9.99996C16.25 9.99995 16.25 9.99997 16.25 9.99996V8.33325ZM25.7808 18.1905C26.3199 18.6218 26.4073 19.4084 25.9761 19.9475L19.3094 28.2808C19.0873 28.5585 18.7574 28.7284 18.4024 28.7481C18.0474 28.7677 17.7008 28.6353 17.4494 28.3838L14.1161 25.0505C13.6279 24.5624 13.6279 23.7709 14.1161 23.2827C14.6042 22.7946 15.3957 22.7946 15.8839 23.2827L18.2291 25.628L24.0239 18.3858C24.4552 17.8467 25.2418 17.7593 25.7808 18.1905Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                    Buy X get Y on your <br/> next order
                                    </h3>
                                    <div className="rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 text-purple-700 absolute right-0 top-0 text-sm">Grow</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7502 10.0247C13.7501 10.0165 13.75 10.0082 13.75 9.99992V8.33325C13.75 4.88147 16.5482 2.08325 20 2.08325C23.4518 2.08325 26.25 4.88147 26.25 8.33325V9.99992C26.25 10.0082 26.2499 10.0165 26.2498 10.0247C28.3952 10.0891 29.7079 10.3206 30.7102 11.1524C32.0988 12.3048 32.4646 14.2556 33.1961 18.157L34.4461 24.8237C35.4748 30.3099 35.9891 33.0529 34.4896 34.8598C32.99 36.6666 30.1991 36.6666 24.6174 36.6666H15.3826C9.8008 36.6666 7.00992 36.6666 5.51039 34.8598C4.01086 33.0529 4.52519 30.3099 5.55385 24.8237L6.80385 18.157C7.53537 14.2556 7.90114 12.3048 9.28976 11.1524C10.292 10.3206 11.6048 10.0891 13.7502 10.0247ZM16.25 8.33325C16.25 6.26218 17.9289 4.58325 20 4.58325C22.0711 4.58325 23.75 6.26218 23.75 8.33325V9.99992C23.75 9.99991 23.75 9.99993 23.75 9.99992C23.6245 9.99988 23.497 9.99992 23.3674 9.99992H16.6326C16.5029 9.99992 16.3754 9.99992 16.25 9.99996C16.25 9.99995 16.25 9.99997 16.25 9.99996V8.33325ZM25.7808 18.1905C26.3199 18.6218 26.4073 19.4084 25.9761 19.9475L19.3094 28.2808C19.0873 28.5585 18.7574 28.7284 18.4024 28.7481C18.0474 28.7677 17.7008 28.6353 17.4494 28.3838L14.1161 25.0505C13.6279 24.5624 13.6279 23.7709 14.1161 23.2827C14.6042 22.7946 15.3957 22.7946 15.8839 23.2827L18.2291 25.628L24.0239 18.3858C24.4552 17.8467 25.2418 17.7593 25.7808 18.1905Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Buy X get Y on your <br/> next order
                                    </h3>
                                    <div className="rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 text-purple-700 absolute right-0 top-0 text-sm">Grow</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7502 10.0247C13.7501 10.0165 13.75 10.0082 13.75 9.99992V8.33325C13.75 4.88147 16.5482 2.08325 20 2.08325C23.4518 2.08325 26.25 4.88147 26.25 8.33325V9.99992C26.25 10.0082 26.2499 10.0165 26.2498 10.0247C28.3952 10.0891 29.7079 10.3206 30.7102 11.1524C32.0988 12.3048 32.4646 14.2556 33.1961 18.157L34.4461 24.8237C35.4748 30.3099 35.9891 33.0529 34.4896 34.8598C32.99 36.6666 30.1991 36.6666 24.6174 36.6666H15.3826C9.8008 36.6666 7.00992 36.6666 5.51039 34.8598C4.01086 33.0529 4.52519 30.3099 5.55385 24.8237L6.80385 18.157C7.53537 14.2556 7.90114 12.3048 9.28976 11.1524C10.292 10.3206 11.6048 10.0891 13.7502 10.0247ZM16.25 8.33325C16.25 6.26218 17.9289 4.58325 20 4.58325C22.0711 4.58325 23.75 6.26218 23.75 8.33325V9.99992C23.75 9.99991 23.75 9.99993 23.75 9.99992C23.6245 9.99988 23.497 9.99992 23.3674 9.99992H16.6326C16.5029 9.99992 16.3754 9.99992 16.25 9.99996C16.25 9.99995 16.25 9.99997 16.25 9.99996V8.33325ZM25.7808 18.1905C26.3199 18.6218 26.4073 19.4084 25.9761 19.9475L19.3094 28.2808C19.0873 28.5585 18.7574 28.7284 18.4024 28.7481C18.0474 28.7677 17.7008 28.6353 17.4494 28.3838L14.1161 25.0505C13.6279 24.5624 13.6279 23.7709 14.1161 23.2827C14.6042 22.7946 15.3957 22.7946 15.8839 23.2827L18.2291 25.628L24.0239 18.3858C24.4552 17.8467 25.2418 17.7593 25.7808 18.1905Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                    Buy from 3 different <br/> collections
                                    </h3>
                                    <div className="rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 text-purple-700 absolute right-0 top-0 text-sm">Grow</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6585 6.66675H23.3418C29.6428 6.66675 32.7934 6.66675 34.7509 8.61937C36.0986 9.9638 36.5184 11.8724 36.6492 14.9825C36.6751 15.5993 36.6881 15.9077 36.5729 16.1135C36.4577 16.3192 35.9979 16.576 35.0784 17.0895C34.0571 17.6598 33.3667 18.7495 33.3667 20.0001C33.3667 21.2506 34.0571 22.3403 35.0784 22.9107C35.9979 23.4242 36.4577 23.681 36.5729 23.8867C36.6881 24.0925 36.6751 24.4008 36.6492 25.0176C36.5184 28.1278 36.0986 30.0364 34.7509 31.3808C32.7934 33.3334 29.6428 33.3334 23.3418 33.3334H16.6585C10.3575 33.3334 7.20694 33.3334 5.24946 31.3808C3.90168 30.0364 3.48188 28.1278 3.35112 25.0176C3.32519 24.4008 3.31223 24.0925 3.4274 23.8867C3.54258 23.681 4.00238 23.4242 4.92197 22.9107C5.94325 22.3403 6.63361 21.2506 6.63361 20.0001C6.63361 18.7495 5.94325 17.6598 4.92197 17.0895C4.00237 16.576 3.54258 16.3192 3.4274 16.1135C3.31223 15.9077 3.32519 15.5993 3.35112 14.9825C3.48188 11.8724 3.90168 9.9638 5.24946 8.61937C7.20694 6.66675 10.3575 6.66675 16.6585 6.66675ZM25.9132 14.1162C26.4026 14.6044 26.4026 15.3958 25.9132 15.884L15.8883 25.884C15.3989 26.3721 14.6055 26.3721 14.1161 25.884C13.6268 25.3958 13.6268 24.6044 14.1161 24.1162L24.1411 14.1162C24.6304 13.628 25.4239 13.628 25.9132 14.1162ZM24.1917 25.8334C25.1145 25.8334 25.8625 25.0872 25.8625 24.1667C25.8625 23.2463 25.1145 22.5001 24.1917 22.5001C23.269 22.5001 22.5209 23.2463 22.5209 24.1667C22.5209 25.0872 23.269 25.8334 24.1917 25.8334ZM15.8376 17.5001C16.7604 17.5001 17.5085 16.7539 17.5085 15.8334C17.5085 14.9129 16.7604 14.1667 15.8376 14.1667C14.9149 14.1667 14.1668 14.9129 14.1668 15.8334C14.1668 16.7539 14.9149 17.5001 15.8376 17.5001Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                    Get 20% coupon after <br/> spending $1000
                                    </h3>
                                    <div className="rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 text-purple-700 absolute right-0 top-0 text-sm">Grow</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7502 10.0247C13.7501 10.0165 13.75 10.0082 13.75 9.99992V8.33325C13.75 4.88147 16.5482 2.08325 20 2.08325C23.4518 2.08325 26.25 4.88147 26.25 8.33325V9.99992C26.25 10.0082 26.2499 10.0165 26.2498 10.0247C28.3952 10.0891 29.7079 10.3206 30.7102 11.1524C32.0988 12.3048 32.4646 14.2556 33.1961 18.157L34.4461 24.8237C35.4748 30.3099 35.9891 33.0529 34.4896 34.8598C32.99 36.6666 30.1991 36.6666 24.6174 36.6666H15.3826C9.8008 36.6666 7.00992 36.6666 5.51039 34.8598C4.01086 33.0529 4.52519 30.3099 5.55385 24.8237L6.80385 18.157C7.53537 14.2556 7.90114 12.3048 9.28976 11.1524C10.292 10.3206 11.6048 10.0891 13.7502 10.0247ZM16.25 8.33325C16.25 6.26218 17.9289 4.58325 20 4.58325C22.0711 4.58325 23.75 6.26218 23.75 8.33325V9.99992C23.75 9.99991 23.75 9.99993 23.75 9.99992C23.6245 9.99988 23.497 9.99992 23.3674 9.99992H16.6326C16.5029 9.99992 16.3754 9.99992 16.25 9.99996C16.25 9.99995 16.25 9.99997 16.25 9.99996V8.33325ZM25.7808 18.1905C26.3199 18.6218 26.4073 19.4084 25.9761 19.9475L19.3094 28.2808C19.0873 28.5585 18.7574 28.7284 18.4024 28.7481C18.0474 28.7677 17.7008 28.6353 17.4494 28.3838L14.1161 25.0505C13.6279 24.5624 13.6279 23.7709 14.1161 23.2827C14.6042 22.7946 15.3957 22.7946 15.8839 23.2827L18.2291 25.628L24.0239 18.3858C24.4552 17.8467 25.2418 17.7593 25.7808 18.1905Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                    Buy over 50$ and <br/> get 5$ on the next order
                                    </h3>
                                    <div className="rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 text-purple-700 absolute right-0 top-0 text-sm">Grow</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M15.9407 14.5508L16.7981 17.6543C17.6064 20.5802 18.0106 22.0432 19.1989 22.7086C20.3872 23.374 21.8956 22.982 24.9124 22.198L28.1122 21.3664C31.129 20.5824 32.6374 20.1904 33.3234 19.0379C34.0095 17.8854 33.6053 16.4224 32.797 13.4965L31.9396 10.393C31.1313 7.46705 30.7271 6.00407 29.5388 5.33866C28.3505 4.67324 26.8421 5.06524 23.8253 5.84925L20.6255 6.68081C17.6087 7.46482 16.1003 7.85682 15.4143 9.00936C14.7282 10.1619 15.1324 11.6249 15.9407 14.5508Z" fill="#3D4057"/>
                                    <path d="M3.79582 8.74491C3.98038 8.07968 4.66928 7.69003 5.3345 7.87459L8.174 8.66241C9.70214 9.08639 10.9115 10.2644 11.3334 11.7915L14.9184 24.7682L15.1822 25.6791C16.2375 26.073 17.1438 26.8111 17.7191 27.7912L18.2357 27.6317L33.0192 23.7898C33.6874 23.6161 34.3698 24.017 34.5435 24.6852C34.7171 25.3533 34.3162 26.0357 33.6481 26.2094L18.9192 30.0371L18.3714 30.2063C18.3601 32.3246 16.8987 34.2591 14.6873 34.8338C12.0365 35.5227 9.31181 33.997 8.60154 31.426C7.89126 28.855 9.46435 26.2124 12.1151 25.5235C12.2465 25.4893 12.378 25.4606 12.5095 25.4372L8.92365 12.4572C8.7432 11.804 8.21496 11.2682 7.50563 11.0714L4.66613 10.2836C4.0009 10.099 3.61125 9.41013 3.79582 8.74491Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                    Free shipping for <br/> orders over 500$
                                    </h3>
                                    <div className="rounded-full bg-purple-500 bg-opacity-10 py-2 px-5 text-purple-700 absolute right-0 top-0 text-sm">Grow</div>
                                </div>
                            </TitleCard>
                        </div>
                    </div>         
                </div>  
                <div className='flex flex-col w-full'>
                    <div className='mb-6'>
                        <h2 className='text-xl font-semibold'>
                            Occasions
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4 mt-4'>
                            <TitleCard hover={true}>
                                <Link to='/app/follow-channel' className='w-full h-full text-center flex flex-col items-center justify-center gap-4 text-accent text-base font-semibold dark:text-slate-300'>
                                    <div className='rounded-full p-1 flex items-center justify-center bg-accent'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <path d="M15.4253 11.3193H11.3203V15.4242C11.3203 15.642 11.2338 15.8508 11.0799 16.0048C10.9259 16.1587 10.7171 16.2452 10.4994 16.2452C10.2816 16.2452 10.0728 16.1587 9.91883 16.0048C9.76486 15.8508 9.67837 15.642 9.67837 15.4242V11.3193H5.57343C5.35569 11.3193 5.14687 11.2328 4.9929 11.0788C4.83894 10.9249 4.75244 10.7161 4.75244 10.4983C4.75244 10.2806 4.83894 10.0718 4.9929 9.91779C5.14687 9.76383 5.35569 9.67733 5.57343 9.67733H9.67837V5.57239C9.67837 5.35465 9.76486 5.14583 9.91883 4.99187C10.0728 4.8379 10.2816 4.7514 10.4994 4.7514C10.7171 4.7514 10.9259 4.8379 11.0799 4.99187C11.2338 5.14583 11.3203 5.35465 11.3203 5.57239V9.67733H15.4253C15.643 9.67733 15.8518 9.76383 16.0058 9.91779C16.1598 10.0718 16.2463 10.2806 16.2463 10.4983C16.2463 10.7161 16.1598 10.9249 16.0058 11.0788C15.8518 11.2328 15.643 11.3193 15.4253 11.3193Z" fill="white"/>
                                        </svg>
                                    </div>
                                    Add ways to earn 
                                </Link>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9875 5.3337C15.5816 5.67959 15.3787 5.85255 15.1619 5.99782C14.6651 6.33082 14.1071 6.56194 13.5203 6.67779C13.2643 6.72833 12.9986 6.74954 12.467 6.79196C11.1313 6.89854 10.4635 6.95184 9.90634 7.14863C8.61768 7.6038 7.60405 8.61743 7.14888 9.9061C6.95208 10.4633 6.89879 11.1311 6.7922 12.4667C6.74978 12.9983 6.72857 13.2641 6.67803 13.5201C6.56219 14.1069 6.33107 14.6648 5.99806 15.1617C5.85279 15.3784 5.67984 15.5814 5.33395 15.9873C4.46489 17.0071 4.03034 17.517 3.77552 18.0501C3.18615 19.2832 3.18615 20.7167 3.77552 21.9497C4.03034 22.4829 4.46488 22.9928 5.33395 24.0126C5.6798 24.4184 5.8528 24.6214 5.99806 24.8381C6.33107 25.335 6.56219 25.893 6.67803 26.4797C6.72857 26.7357 6.74978 27.0015 6.7922 27.5331C6.89879 28.8688 6.95208 29.5366 7.14888 30.0937C7.60405 31.3824 8.61768 32.396 9.90634 32.8512C10.4635 33.048 11.1313 33.1013 12.467 33.2079C12.9986 33.2503 13.2643 33.2715 13.5203 33.322C14.1071 33.4379 14.6651 33.669 15.1619 34.002C15.3787 34.1473 15.5816 34.3202 15.9875 34.6661C17.0073 35.5352 17.5172 35.9697 18.0503 36.2246C19.2834 36.8139 20.7169 36.8139 21.95 36.2246C22.4831 35.9697 22.993 35.5352 24.0128 34.6661C24.4187 34.3202 24.6217 34.1473 24.8384 34.002C25.3352 33.669 25.8932 33.4379 26.48 33.322C26.736 33.2715 27.0018 33.2503 27.5334 33.2079C28.869 33.1013 29.5368 33.048 30.094 32.8512C31.3826 32.396 32.3963 31.3824 32.8514 30.0937C33.0482 29.5366 33.1015 28.8688 33.2081 27.5331C33.2505 27.0015 33.2718 26.7357 33.3223 26.4797C33.4381 25.893 33.6693 25.335 34.0023 24.8382C34.1475 24.6214 34.3205 24.4185 34.6664 24.0126C35.5354 22.9928 35.97 22.4829 36.2248 21.9497C36.8142 20.7167 36.8142 19.2832 36.2248 18.0501C35.97 17.517 35.5354 17.0071 34.6664 15.9873C34.3205 15.5814 34.1475 15.3784 34.0023 15.1617C33.6693 14.6648 33.4381 14.1069 33.3223 13.5201C33.2718 13.2641 33.2505 12.9983 33.2081 12.4667C33.1015 11.1311 33.0482 10.4633 32.8514 9.9061C32.3963 8.61743 31.3826 7.6038 30.094 7.14863C29.5368 6.95184 28.869 6.89854 27.5334 6.79196C27.0018 6.74954 26.736 6.72833 26.48 6.67779C25.8932 6.56194 25.3352 6.33082 24.8384 5.99782C24.6216 5.85255 24.4187 5.6796 24.0128 5.3337C22.993 4.46463 22.4831 4.03009 21.95 3.77528C20.7169 3.18591 19.2834 3.18591 18.0503 3.77528C17.5172 4.03009 17.0073 4.46464 15.9875 5.3337ZM26.385 13.6159C26.9147 14.1456 26.9147 15.0045 26.385 15.5342L15.5336 26.3857C15.0038 26.9154 14.145 26.9154 13.6153 26.3857C13.0855 25.8559 13.0855 24.9971 13.6153 24.4674L24.4667 13.6159C24.9965 13.0862 25.8553 13.0862 26.385 13.6159ZM26.3302 24.5222C26.3302 25.5211 25.5204 26.3308 24.5216 26.3308C23.5227 26.3308 22.713 25.5211 22.713 24.5222C22.713 23.5234 23.5227 22.7136 24.5216 22.7136C25.5204 22.7136 26.3302 23.5234 26.3302 24.5222ZM15.4787 17.2879C16.4775 17.2879 17.2873 16.4782 17.2873 15.4793C17.2873 14.4805 16.4775 13.6708 15.4787 13.6708C14.4798 13.6708 13.6701 14.4805 13.6701 15.4793C13.6701 16.4782 14.4798 17.2879 15.4787 17.2879Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Black friday
                                    </h3>
                                    <div className="rounded-full bg-rose-400 bg-opacity-10 py-2 px-5 text-rose-500 absolute right-0 top-0 text-sm">Occasions</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M15.2554 9.01388C17.3665 5.22679 18.4221 3.33325 20.0002 3.33325C21.5783 3.33325 22.6338 5.22679 24.7449 9.01388L25.2911 9.99364C25.891 11.0698 26.1909 11.6079 26.6586 11.9629C27.1263 12.318 27.7087 12.4498 28.8737 12.7133L29.9343 12.9533C34.0337 13.8808 36.0835 14.3446 36.5711 15.9128C37.0588 17.481 35.6614 19.115 32.8667 22.3831L32.1436 23.2286C31.3495 24.1573 30.9524 24.6217 30.7737 25.1961C30.5951 25.7706 30.6551 26.3901 30.7752 27.6292L30.8845 28.7572C31.307 33.1176 31.5183 35.2978 30.2416 36.2669C28.9649 37.2361 27.0457 36.3525 23.2074 34.5852L22.2144 34.128C21.1236 33.6258 20.5783 33.3747 20.0002 33.3747C19.4221 33.3747 18.8767 33.6258 17.786 34.128L16.793 34.5852C12.9546 36.3525 11.0355 37.2361 9.75874 36.2669C8.48203 35.2978 8.6933 33.1176 9.11582 28.7572L9.22514 27.6292C9.34521 26.3901 9.40524 25.7706 9.2266 25.1961C9.04796 24.6217 8.65087 24.1573 7.85669 23.2286L7.13366 22.3831C4.33891 19.115 2.94154 17.481 3.4292 15.9128C3.91686 14.3446 5.96659 13.8808 10.0661 12.9533L11.1266 12.7133C12.2916 12.4498 12.8741 12.318 13.3417 11.9629C13.8094 11.6079 14.1094 11.0698 14.7093 9.99364L15.2554 9.01388Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Christmas
                                    </h3>
                                    <div className="rounded-full bg-rose-400 bg-opacity-10 py-2 px-5 text-rose-500 absolute right-0 top-0 text-sm">Occasions</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7783 10.224L16.9418 9.63195C15.7479 8.78701 14.3212 8.33325 12.8586 8.33325H11.8378C11.1641 8.33325 10.4836 8.37573 9.84874 8.60091C5.87758 10.0094 3.14598 15.1583 3.34356 26.8376C3.38337 29.1908 3.93399 31.7916 6.05721 32.807C6.71885 33.1234 7.49461 33.3333 8.37801 33.3333C9.43804 33.3333 10.2798 33.0311 10.9296 32.6052C11.6109 32.1587 12.2107 31.5783 12.8104 30.9982C13.5513 30.2813 14.292 29.5648 15.1856 29.1014C16.1588 28.5967 17.2391 28.3333 18.3354 28.3333H21.6649C22.7612 28.3333 23.8415 28.5967 24.8147 29.1014C25.7083 29.5648 26.449 30.2813 27.19 30.9982C27.7896 31.5783 28.3895 32.1587 29.0708 32.6052C29.7205 33.0311 30.5623 33.3333 31.6223 33.3333C32.5057 33.3333 33.2815 33.1234 33.9431 32.807C36.0663 31.7916 36.617 29.1908 36.6568 26.8376C36.8543 15.1583 34.1227 10.0093 30.1516 8.60091C29.5167 8.37573 28.8362 8.33325 28.1626 8.33325H27.1417C25.6791 8.33325 24.2525 8.78701 23.0586 9.63195L22.2221 10.2239C21.5724 10.6837 20.7961 10.9307 20.0002 10.9307C19.2043 10.9307 18.428 10.6837 17.7783 10.224ZM27.9168 14.9999C28.6072 14.9999 29.1668 15.5596 29.1668 16.2499C29.1668 16.9403 28.6072 17.4999 27.9168 17.4999C27.2265 17.4999 26.6668 16.9403 26.6668 16.2499C26.6668 15.5596 27.2265 14.9999 27.9168 14.9999ZM12.5002 15.4166C13.1905 15.4166 13.7502 15.9762 13.7502 16.6666V17.9166H15.0002C15.6905 17.9166 16.2502 18.4762 16.2502 19.1666C16.2502 19.8569 15.6905 20.4166 15.0002 20.4166H13.7502V21.6666C13.7502 22.3569 13.1905 22.9166 12.5002 22.9166C11.8098 22.9166 11.2502 22.3569 11.2502 21.6666V20.4166H10.0002C9.30981 20.4166 8.75016 19.8569 8.75016 19.1666C8.75016 18.4762 9.30981 17.9166 10.0002 17.9166H11.2502V16.6666C11.2502 15.9762 11.8098 15.4166 12.5002 15.4166ZM31.6668 18.7499C31.6668 19.4403 31.1072 19.9999 30.4168 19.9999C29.7265 19.9999 29.1668 19.4403 29.1668 18.7499C29.1668 18.0596 29.7265 17.4999 30.4168 17.4999C31.1072 17.4999 31.6668 18.0596 31.6668 18.7499ZM25.4168 19.9999C26.1072 19.9999 26.6668 19.4403 26.6668 18.7499C26.6668 18.0596 26.1072 17.4999 25.4168 17.4999C24.7265 17.4999 24.1668 18.0596 24.1668 18.7499C24.1668 19.4403 24.7265 19.9999 25.4168 19.9999ZM29.1668 21.2499C29.1668 20.5596 28.6072 19.9999 27.9168 19.9999C27.2265 19.9999 26.6668 20.5596 26.6668 21.2499C26.6668 21.9403 27.2265 22.4999 27.9168 22.4999C28.6072 22.4999 29.1668 21.9403 29.1668 21.2499Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Cyber Monday
                                    </h3>
                                    <div className="rounded-full bg-rose-400 bg-opacity-10 py-2 px-5 text-rose-500 absolute right-0 top-0 text-sm">Occasions</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M15.2554 9.01388C17.3665 5.22679 18.4221 3.33325 20.0002 3.33325C21.5783 3.33325 22.6338 5.22679 24.7449 9.01388L25.2911 9.99364C25.891 11.0698 26.1909 11.6079 26.6586 11.9629C27.1263 12.318 27.7087 12.4498 28.8737 12.7133L29.9343 12.9533C34.0337 13.8808 36.0835 14.3446 36.5711 15.9128C37.0588 17.481 35.6614 19.115 32.8667 22.3831L32.1436 23.2286C31.3495 24.1573 30.9524 24.6217 30.7737 25.1961C30.5951 25.7706 30.6551 26.3901 30.7752 27.6292L30.8845 28.7572C31.307 33.1176 31.5183 35.2978 30.2416 36.2669C28.9649 37.2361 27.0457 36.3525 23.2074 34.5852L22.2144 34.128C21.1236 33.6258 20.5783 33.3747 20.0002 33.3747C19.4221 33.3747 18.8767 33.6258 17.786 34.128L16.793 34.5852C12.9546 36.3525 11.0355 37.2361 9.75874 36.2669C8.48203 35.2978 8.6933 33.1176 9.11582 28.7572L9.22514 27.6292C9.34521 26.3901 9.40524 25.7706 9.2266 25.1961C9.04796 24.6217 8.65087 24.1573 7.85669 23.2286L7.13366 22.3831C4.33891 19.115 2.94154 17.481 3.4292 15.9128C3.91686 14.3446 5.96659 13.8808 10.0661 12.9533L11.1266 12.7133C12.2916 12.4498 12.8741 12.318 13.3417 11.9629C13.8094 11.6079 14.1094 11.0698 14.7093 9.99364L15.2554 9.01388Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        New Year
                                    </h3>
                                    <div className="rounded-full bg-rose-400 bg-opacity-10 py-2 px-5 text-rose-500 absolute right-0 top-0 text-sm">Occasions</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M15.2554 9.01388C17.3665 5.22679 18.4221 3.33325 20.0002 3.33325C21.5783 3.33325 22.6338 5.22679 24.7449 9.01388L25.2911 9.99364C25.891 11.0698 26.1909 11.6079 26.6586 11.9629C27.1263 12.318 27.7087 12.4498 28.8737 12.7133L29.9343 12.9533C34.0337 13.8808 36.0835 14.3446 36.5711 15.9128C37.0588 17.481 35.6614 19.115 32.8667 22.3831L32.1436 23.2286C31.3495 24.1573 30.9524 24.6217 30.7737 25.1961C30.5951 25.7706 30.6551 26.3901 30.7752 27.6292L30.8845 28.7572C31.307 33.1176 31.5183 35.2978 30.2416 36.2669C28.9649 37.2361 27.0457 36.3525 23.2074 34.5852L22.2144 34.128C21.1236 33.6258 20.5783 33.3747 20.0002 33.3747C19.4221 33.3747 18.8767 33.6258 17.786 34.128L16.793 34.5852C12.9546 36.3525 11.0355 37.2361 9.75874 36.2669C8.48203 35.2978 8.6933 33.1176 9.11582 28.7572L9.22514 27.6292C9.34521 26.3901 9.40524 25.7706 9.2266 25.1961C9.04796 24.6217 8.65087 24.1573 7.85669 23.2286L7.13366 22.3831C4.33891 19.115 2.94154 17.481 3.4292 15.9128C3.91686 14.3446 5.96659 13.8808 10.0661 12.9533L11.1266 12.7133C12.2916 12.4498 12.8741 12.318 13.3417 11.9629C13.8094 11.6079 14.1094 11.0698 14.7093 9.99364L15.2554 9.01388Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Easter
                                    </h3>
                                    <div className="rounded-full bg-rose-400 bg-opacity-10 py-2 px-5 text-rose-500 absolute right-0 top-0 text-sm">Occasions</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M13.5106 30.4116C8.83047 26.8058 3.3335 22.5705 3.3335 15.2287C3.3335 7.12385 12.5004 1.37602 20.0002 9.16796L23.3335 12.499C23.8217 12.9871 24.6132 12.987 25.1013 12.4987C25.5893 12.0105 25.5892 11.219 25.1009 10.731L21.8809 7.51211C28.9476 2.33872 36.6668 7.79132 36.6668 15.2287C36.6668 22.5705 31.1699 26.8058 26.4897 30.4116C26.0033 30.7864 25.5256 31.1544 25.0639 31.5184C23.3335 32.8825 21.6668 34.1669 20.0002 34.1669C18.3335 34.1669 16.6668 32.8825 14.9364 31.5184C14.4747 31.1544 13.9971 30.7864 13.5106 30.4116Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Valentine’s Day
                                    </h3>
                                    <div className="rounded-full bg-rose-400 bg-opacity-10 py-2 px-5 text-rose-500 absolute right-0 top-0 text-sm">Occasions</div>
                                </div>
                            </TitleCard>
                            <TitleCard hover={true}>
                                <div className='w-full h-full flex flex-col relative gap-7'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M27.5002 22.1451C23.3753 17.6189 18.3335 20.9577 18.3335 25.6658C18.3335 29.9305 21.3568 32.3907 23.9309 34.4853L24.0032 34.5441C24.2458 34.7415 24.4841 34.9358 24.7151 35.1282C25.6668 35.9206 26.5835 36.6667 27.5002 36.6667C28.4168 36.6667 29.3335 35.9206 30.2852 35.1282C32.9824 32.8826 36.6668 30.3738 36.6668 25.6658C36.6668 24.1191 36.1227 22.7202 35.2457 21.6994C33.4532 19.6128 30.27 19.1058 27.5002 22.1451Z" fill="#3D4057"/>
                                    <path d="M13.5106 30.4116C8.83047 26.8058 3.3335 22.5705 3.3335 15.2287C3.3335 7.12385 12.5004 1.37602 20.0002 9.16797C27.4999 1.37602 36.6668 7.12385 36.6668 15.2287C36.6668 16.618 36.47 17.8961 36.1191 19.0797C34.9208 18.1171 33.4185 17.5096 31.7534 17.5003C30.2702 17.492 28.8228 17.9577 27.4981 18.8504C25.1833 17.2957 22.5716 17.0866 20.2831 18.1914C17.5577 19.5072 15.8335 22.4511 15.8335 25.6659C15.8335 29.5079 17.7476 32.203 19.736 34.1563C18.1572 34.031 16.5754 32.8104 14.9364 31.5184C14.4747 31.1544 13.9971 30.7864 13.5106 30.4116Z" fill="#3D4057"/>
                                    </svg>
                                    <h3 className='text-base font-semibold'>
                                        Mother’s day
                                    </h3>
                                    <div className="rounded-full bg-rose-400 bg-opacity-10 py-2 px-5 text-rose-500 absolute right-0 top-0 text-sm">Occasions</div>
                                </div>
                            </TitleCard>
                        </div>
                    </div>         
                </div>                
            </div>
        </>
    )
}

export default addWay