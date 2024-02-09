/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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


function followChannel(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOption, setSelectedOption] = useState('fromLibrary');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-7'>
                        <TitleCard>
                            <div className='flex flex-col gap-16'>
                                <h2 className='font-semibold text-xl'>Details</h2>
                                <div className='flex flex-col gap-7'>
                                    <div className='flex flex-col gap-3'>
                                        <label className='text-sm font-semibold uppercase'>Challenge name</label>
                                        <input type='text' placeholder="Follow channel or profile" className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'></input>
                                        <span className='text-base opacity-40'>Example: The Achiever, The Reviewer...</span>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <label className='text-sm font-semibold uppercase'>Challenge description</label>
                                        <div className='flex items-center'></div>
                                        <input type='text' placeholder="Follow channel or profile" className='bg-gray-100 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'></input>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <label className='text-sm font-semibold uppercase'>Challenge icon</label>
                                        <div className='flex items-center gap-7'>
                                            <div class="form-control">
                                                <label class="label cursor-pointer gap-2 flex">
                                                    <input 
                                                        type="radio"
                                                        name="radio-10"
                                                        class="radio checked:bg-accent"
                                                        value="fromLibrary"
                                                        checked={selectedOption === 'fromLibrary'}
                                                        onChange={handleRadioChange} 
                                                    />
                                                    <span class="label-text">From Library</span> 
                                                </label>
                                            </div>
                                            <div class="form-control">
                                                <label class="label cursor-pointer gap-2 flex">
                                                    <input 
                                                        type="radio" 
                                                        name="radio-10" 
                                                        class="radio checked:bg-accent"
                                                        value="uploadImage"
                                                        checked={selectedOption === 'uploadImage'}
                                                        onChange={handleRadioChange}
                                                    />
                                                    <span class="label-text">Upload image</span>
                                                </label>
                                            </div>
                                        </div>
                                        {selectedOption === 'fromLibrary' ? (
                                            <select class="select select-bordered w-full bg-gray-100 rounded-xl py-5 px-6 dark:bg-base-100">
                                                <option disabled selected>
                                                    item
                                                </option>
                                                <option>
                                                    item
                                                </option>
                                                <option>
                                                    item
                                                </option>
                                            </select>
                                        ) : (
                                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                        )
                                        }
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <label className="label cursor-pointer w-52">
                                            <input type="checkbox" checked="checked" className="checkbox [--chkbg:theme(colors.accent)]" />
                                            <span className="label-text">Add redirection button</span> 
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </TitleCard>
                        <TitleCard>
                            <div className='flex flex-col gap-16'>
                                <h2 className='font-semibold text-xl'>Reward</h2>
                                <button className='flex gap-2 text-accent'>
                                    <span className='flex items-center justify-center p-1 bg-accent rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path d="M12.5458 9.17289H9.17387V12.5448C9.17387 12.7237 9.10282 12.8952 8.97635 13.0217C8.84988 13.1481 8.67835 13.2192 8.49949 13.2192C8.32063 13.2192 8.1491 13.1481 8.02263 13.0217C7.89616 12.8952 7.82511 12.7237 7.82511 12.5448V9.17289H4.45319C4.27433 9.17289 4.1028 9.10184 3.97633 8.97537C3.84986 8.8489 3.77881 8.67737 3.77881 8.49851C3.77881 8.31965 3.84986 8.14812 3.97633 8.02165C4.1028 7.89518 4.27433 7.82413 4.45319 7.82413H7.82511V4.45221C7.82511 4.27336 7.89616 4.10183 8.02263 3.97535C8.1491 3.84888 8.32063 3.77783 8.49949 3.77783C8.67835 3.77783 8.84988 3.84888 8.97635 3.97535C9.10282 4.10183 9.17387 4.27336 9.17387 4.45221V7.82413H12.5458C12.7246 7.82413 12.8962 7.89518 13.0226 8.02165C13.1491 8.14812 13.2202 8.31965 13.2202 8.49851C13.2202 8.67737 13.1491 8.8489 13.0226 8.97537C12.8962 9.10184 12.7246 9.17289 12.5458 9.17289Z" fill="white"/>
                                        </svg>
                                    </span>
                                    Add Point
                                </button>
                            </div>
                        </TitleCard>
                        <TitleCard>
                            <div className='flex flex-col gap-16'>
                                <h2 className='font-semibold text-xl'>Eligible customers</h2>
                                <button className='flex gap-2 text-accent'>
                                    <span className='flex items-center justify-center p-1 bg-accent rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path d="M12.5458 9.17289H9.17387V12.5448C9.17387 12.7237 9.10282 12.8952 8.97635 13.0217C8.84988 13.1481 8.67835 13.2192 8.49949 13.2192C8.32063 13.2192 8.1491 13.1481 8.02263 13.0217C7.89616 12.8952 7.82511 12.7237 7.82511 12.5448V9.17289H4.45319C4.27433 9.17289 4.1028 9.10184 3.97633 8.97537C3.84986 8.8489 3.77881 8.67737 3.77881 8.49851C3.77881 8.31965 3.84986 8.14812 3.97633 8.02165C4.1028 7.89518 4.27433 7.82413 4.45319 7.82413H7.82511V4.45221C7.82511 4.27336 7.89616 4.10183 8.02263 3.97535C8.1491 3.84888 8.32063 3.77783 8.49949 3.77783C8.67835 3.77783 8.84988 3.84888 8.97635 3.97535C9.10282 4.10183 9.17387 4.27336 9.17387 4.45221V7.82413H12.5458C12.7246 7.82413 12.8962 7.89518 13.0226 8.02165C13.1491 8.14812 13.2202 8.31965 13.2202 8.49851C13.2202 8.67737 13.1491 8.8489 13.0226 8.97537C12.8962 9.10184 12.7246 9.17289 12.5458 9.17289Z" fill="white"/>
                                        </svg>
                                    </span>
                                    Assign Tag
                                </button>
                            </div>
                        </TitleCard>
                    </div>
                </div>
                <div className='col-span-3 lg:col-span-1'>
                    <TitleCard>
                        <div className='flex flex-col gap-7 w-full'>
                            <h2 className='font-semibold text-xl border-b-slate-300 text-center'>Advanced Settings</h2>
                            <div className='flex flex-col w-full gap-7'>
                                <div className='flex w-full justify-between items-center py-4'>
                                    <h3 className='text-base font-semibold'>General settings</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className='cursor-pointer'>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 22.5C3.75 22.0858 4.08579 21.75 4.5 21.75H20.5C20.9142 21.75 21.25 22.0858 21.25 22.5C21.25 22.9142 20.9142 23.25 20.5 23.25H4.5C4.08579 23.25 3.75 22.9142 3.75 22.5Z" fill="#9B52DC"/>
                                        <path d="M12.0201 15.429L12.0201 15.4289L17.9368 9.51225C17.1315 9.1771 16.1777 8.62656 15.2757 7.72454C14.3736 6.82238 13.823 5.86846 13.4879 5.06312L7.57106 10.9799L7.57102 10.98C7.10933 11.4417 6.87846 11.6725 6.67992 11.9271C6.44571 12.2273 6.24491 12.5522 6.08107 12.896C5.94219 13.1874 5.83894 13.4972 5.63245 14.1167L4.54356 17.3833C4.44194 17.6882 4.52128 18.0243 4.7485 18.2515C4.97573 18.4787 5.31182 18.5581 5.61667 18.4564L8.88334 17.3675C9.50281 17.1611 9.81256 17.0578 10.104 16.9189C10.4478 16.7551 10.7727 16.5543 11.0729 16.3201C11.3275 16.1215 11.5584 15.8907 12.0201 15.429Z" fill="#9B52DC"/>
                                        <path d="M19.5786 7.87044C20.8071 6.64188 20.8071 4.64999 19.5786 3.42142C18.35 2.19286 16.3581 2.19286 15.1296 3.42142L14.4199 4.13105C14.4296 4.1604 14.4397 4.19015 14.4502 4.22028C14.7103 4.97 15.201 5.95281 16.1243 6.87602C17.0475 7.79923 18.0303 8.28999 18.78 8.55009C18.81 8.5605 18.8396 8.57054 18.8688 8.58021L19.5786 7.87044Z" fill="#9B52DC"/>
                                    </svg>
                                </div>
                                <ul className='flex flex-col gap-8'>
                                    <li>
                                        <div className='flex flex-col gap-3'>
                                            <h4 className='font-semibold text-sm uppercase'>Activation</h4>
                                            <span className='text-base'>Always active</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex flex-col gap-3'>
                                            <h4 className='font-semibold text-sm uppercase'>Visibility</h4>
                                            <span className='text-base'>Always visible</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex flex-col gap-3'>
                                            <h4 className='font-semibold text-sm uppercase'>Repeatability</h4>
                                            <span className='text-base'>Limited (1)</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex flex-col gap-3'>
                                            <h4 className='font-semibold text-sm uppercase'>Unlocking</h4>
                                            <span className='text-base'>All levels</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col w-full gap-7'>
                                <div className='flex w-full justify-between items-center py-4'>
                                    <h3 className='text-base font-semibold'>In-App-Notifications</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className='cursor-pointer'>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 22.5C3.75 22.0858 4.08579 21.75 4.5 21.75H20.5C20.9142 21.75 21.25 22.0858 21.25 22.5C21.25 22.9142 20.9142 23.25 20.5 23.25H4.5C4.08579 23.25 3.75 22.9142 3.75 22.5Z" fill="#9B52DC"/>
                                        <path d="M12.0201 15.429L12.0201 15.4289L17.9368 9.51225C17.1315 9.1771 16.1777 8.62656 15.2757 7.72454C14.3736 6.82238 13.823 5.86846 13.4879 5.06312L7.57106 10.9799L7.57102 10.98C7.10933 11.4417 6.87846 11.6725 6.67992 11.9271C6.44571 12.2273 6.24491 12.5522 6.08107 12.896C5.94219 13.1874 5.83894 13.4972 5.63245 14.1167L4.54356 17.3833C4.44194 17.6882 4.52128 18.0243 4.7485 18.2515C4.97573 18.4787 5.31182 18.5581 5.61667 18.4564L8.88334 17.3675C9.50281 17.1611 9.81256 17.0578 10.104 16.9189C10.4478 16.7551 10.7727 16.5543 11.0729 16.3201C11.3275 16.1215 11.5584 15.8907 12.0201 15.429Z" fill="#9B52DC"/>
                                        <path d="M19.5786 7.87044C20.8071 6.64188 20.8071 4.64999 19.5786 3.42142C18.35 2.19286 16.3581 2.19286 15.1296 3.42142L14.4199 4.13105C14.4296 4.1604 14.4397 4.19015 14.4502 4.22028C14.7103 4.97 15.201 5.95281 16.1243 6.87602C17.0475 7.79923 18.0303 8.28999 18.78 8.55009C18.81 8.5605 18.8396 8.57054 18.8688 8.58021L19.5786 7.87044Z" fill="#9B52DC"/>
                                    </svg>
                                </div>
                                <ul className='flex flex-col gap-8'>
                                    <li>
                                        <div className='flex flex-col gap-3'>
                                            <h4 className='font-semibold text-sm uppercase'>Achievement Notification</h4>
                                            <span className='text-base'>Global settings</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex flex-col gap-3'>
                                            <h4 className='font-semibold text-sm uppercase'>Event notifications</h4>
                                            <span className='text-base'>Global settings</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col w-full gap-7'>
                                <div className='flex w-full justify-between items-center py-4'>
                                    <h3 className='text-base font-semibold'>Email Notifications</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className='cursor-pointer'>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 22.5C3.75 22.0858 4.08579 21.75 4.5 21.75H20.5C20.9142 21.75 21.25 22.0858 21.25 22.5C21.25 22.9142 20.9142 23.25 20.5 23.25H4.5C4.08579 23.25 3.75 22.9142 3.75 22.5Z" fill="#9B52DC"/>
                                        <path d="M12.0201 15.429L12.0201 15.4289L17.9368 9.51225C17.1315 9.1771 16.1777 8.62656 15.2757 7.72454C14.3736 6.82238 13.823 5.86846 13.4879 5.06312L7.57106 10.9799L7.57102 10.98C7.10933 11.4417 6.87846 11.6725 6.67992 11.9271C6.44571 12.2273 6.24491 12.5522 6.08107 12.896C5.94219 13.1874 5.83894 13.4972 5.63245 14.1167L4.54356 17.3833C4.44194 17.6882 4.52128 18.0243 4.7485 18.2515C4.97573 18.4787 5.31182 18.5581 5.61667 18.4564L8.88334 17.3675C9.50281 17.1611 9.81256 17.0578 10.104 16.9189C10.4478 16.7551 10.7727 16.5543 11.0729 16.3201C11.3275 16.1215 11.5584 15.8907 12.0201 15.429Z" fill="#9B52DC"/>
                                        <path d="M19.5786 7.87044C20.8071 6.64188 20.8071 4.64999 19.5786 3.42142C18.35 2.19286 16.3581 2.19286 15.1296 3.42142L14.4199 4.13105C14.4296 4.1604 14.4397 4.19015 14.4502 4.22028C14.7103 4.97 15.201 5.95281 16.1243 6.87602C17.0475 7.79923 18.0303 8.28999 18.78 8.55009C18.81 8.5605 18.8396 8.57054 18.8688 8.58021L19.5786 7.87044Z" fill="#9B52DC"/>
                                    </svg>
                                </div>
                                <ul className='flex flex-col gap-8'>
                                    <li>
                                        <div className='flex flex-col gap-3'>
                                            <h4 className='font-semibold text-sm uppercase'>Email notifications</h4>
                                            <span className='text-base'>Global settings</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TitleCard>
                </div>
            </div>
            <div className='flex w-full justify-between items-center mt-7'>
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
                    Save
                </button>
            </div>
        </>
    )
}

export default followChannel