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

function addWay(){

    return(
        <>
            <div className='flex flex-col gap-12 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className='col-span-2'>
                        <div className='card h-full rounded-3xl w-full p-6 bg-cardBg dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out mt-6'>
                            <div className='flex w-full flex-col'>
                                <h2 className='font-semibold text-xl pb-6'>Redemption Type</h2>
                                <div className='flex flex-col gap-7'>
                                    <div className='flex flex-col gap-3'>
                                        <label className='text-sm font-semibold uppercase'>redemption type</label>
                                        
                                        <select label="Select type" className="select text-black select-bordered w-full bg-gray-100 rounded-xl py-5 px-6 dark:bg-base-100">
                                            <option
                                                value="1"
                                                data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp">
                                                One
                                            </option>
                                            <option
                                                value="2"
                                                data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp">
                                                Two
                                            </option>
                                            <option
                                                value="3"
                                                data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp">
                                                Three
                                            </option>
                                            <option
                                                value="4"
                                                data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp">
                                                Four
                                            </option>
                                            <option
                                                value="5"
                                                data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp">
                                                Five
                                            </option>
                                        </select>

                                    </div>

                                    <div className='flex flex-col gap-3'>
                                        <label className='text-sm font-semibold uppercase'>Product name</label>
                                        <div className='flex items-center'></div>
                                        <input type='text' placeholder="Follow channel or profile" className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'></input>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <label className='text-sm font-semibold uppercase'>Amount value</label>
                                        <div className='flex items-center'></div>
                                        {/* <input type='text' placeholder="Follow channel or profile" className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'></input> */}
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            </div>
                                            <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="block w-full bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100"
                                            placeholder="0.00"
                                            />
                                            <div className="absolute inset-y-0 right-3 flex items-center">
                                            <label htmlFor="currency" className="sr-only">
                                                Currency
                                            </label>
                                            <select
                                                id="currency"
                                                name="currency"
                                                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                            >
                                                <option>USD</option>
                                                <option>CAD</option>
                                                <option>EUR</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 lg:col-span-1 h-full'>
                        <div className='card h-full rounded-3xl w-full p-6 bg-cardBg dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out mt-6'>
                            <div className='flex w-full h-full flex-col'>
                                <h2 className='font-semibold text-xl pb-6'>Summary</h2>
                                <div className='flex flex-col h-full items-center justify-center'>
                                    <div className='flex flex-col gap-3 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                                            <g opacity="0.11">
                                                <path opacity="0.5" d="M2.25 27C2.25 15.3327 2.25 9.49911 5.87455 5.87455C9.49911 2.25 15.3327 2.25 27 2.25C38.6673 2.25 44.5009 2.25 48.1254 5.87455C51.75 9.49911 51.75 15.3327 51.75 27C51.75 38.6673 51.75 44.5009 48.1254 48.1254C44.5009 51.75 38.6673 51.75 27 51.75C15.3327 51.75 9.49911 51.75 5.87455 48.1254C2.25 44.5009 2.25 38.6673 2.25 27Z" fill="#1C274C"/>
                                                <path d="M5.87455 48.1246C9.49911 51.7491 15.3327 51.7491 27 51.7491C38.6673 51.7491 44.5009 51.7491 48.1254 48.1246C51.4841 44.7659 51.7305 39.5104 51.7486 29.4741H43.9283C41.6881 29.4741 40.5679 29.4741 39.5833 29.927C38.5987 30.3798 37.8697 31.2303 36.4118 32.9312L36.4117 32.9313L34.9133 34.6795C33.4553 36.3804 32.7263 37.2309 31.7417 37.6838C30.7571 38.1366 29.6369 38.1366 27.3966 38.1366H26.6034C24.3631 38.1366 23.2429 38.1366 22.2583 37.6838C21.2737 37.2309 20.5447 36.3804 19.0867 34.6795L17.5883 32.9313C16.1303 31.2303 15.4013 30.3798 14.4167 29.927C13.4321 29.4741 12.3119 29.4741 10.0716 29.4741H2.25C2.26808 39.5104 2.5159 44.7659 5.87455 48.1246Z" fill="#1C274C"/>
                                            </g>
                                        </svg>
                                        <span className='text-lg font-semibold opacity-40'>No Details Yet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-between flex-wrap gap-3 items-center'>
                    <button 
                        className='py-4 px-5 dark:text-slate-300 dark:bg-base-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                        style={{
                            border: '1px solid #E2E2E2',
                            boxShadow: '0px 3px 0px 0px #E2E2E2',
                        }}
                    >
                    Cancel
                    </button>
                    <button 
                        className='py-4 px-10 text-white dark:text-slate-300 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                        style={{
                            boxShadow: '0px 3px 0px 0px #803CBC',
                            background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                        }}
                    >
                        Create
                    </button>
                </div>
            </div>
        </>
    )
}

export default addWay