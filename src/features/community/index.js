/* eslint-disable no-unused-vars */
// import DashboardStats from './components/DashboardStats'
// import AmountStats from './components/AmountStats'
// import PageStats from './components/PageStats'

/* icons */
// import Star from '../../assets/icons/community/Star.svg'
// import Star2 from '../../assets/icons/community/Star Fall 2.svg'
// import Moon from '../../assets/icons/community/Moon Stars.svg'
// import Flag from '../../assets/icons/community/Flag.svg'
// import Cup from '../../assets/icons/community/Cup.svg'
// import Crow from '../../assets/icons/community/Crown.svg'
// import Chart2 from '../../assets/icons/community/Chart 2.svg'

// import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
// import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
// import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
// import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
// import UserChannels from './components/UserChannels'
// import LineChart from './components/LineChart'
// import BarChart from './components/BarChart'
// import DashboardTopBar from './components/DashboardTopBar'
// import { useDispatch } from 'react-redux'
// import {showNotification} from '../common/headerSlice'
// import DoughnutChart from './components/DoughnutChart'
// import { useState } from 'react'

// const statsData = [
//     {title : "Total Page Views", value : "89,400", icon : <UserGroupIcon className='w-8 h-8'/>, description : "21% more than last month"},
//     {title : "Total Page Views", value : "54,000", icon : <CreditCardIcon className='w-8 h-8'/>, description : "13% more than last month"},
//     {title : "Total Page Views", value : "32,800", icon : <CircleStackIcon className='w-8 h-8'/>, description : "27% more than last month"},
//     {title : "Total Page Views", value : "21,512", icon : <UsersIcon className='w-8 h-8'/>, description : "75% more than last month"},
// ]

function Community(){

    // const dispatch = useDispatch()
 

    // const updateDashboardPeriod = (newRange) => {
    //     // Dashboard range changed, write code to refresh your values
    //     dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    // }

    return(
        <>

        <div className='w-full flex flex-col gap-6 bg-cardBg dark:bg-base-100 pt-8 px-6 pb-6 rounded-3xl'>
            <h2 className='text-primary dark:text-slate-500 text-xl font-semibold'>Segments</h2>
            <span className='text-primary dark:text-slate-500 text-base font-open-sans font-normal'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </span>
            <button 
                className='py-4 px-5 text-white dark:text-slate-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit transition-all hover:scale-105'
                style={{
                    boxShadow: '0px 3px 0px 0px #803CBC',
                    background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                }}
            >
                Discover Segments
            </button>
        </div>
        <div className='mt-8 mb-6'>
            <h2 className='text-primary dark:text-slate-500 text-xl font-semibold'>Analysis Overview</h2>
        </div>
            <div class="grid grid-cols-3 gap-4">
                <div 
                    class="p-4 col-span-3 md:col-span-3 lg:col-span-1 lg:row-span-3 rounded-xl bg-[#F5DAD1] dark:bg-base-100 lg:height-[571px] shadow hover:shadow-md transition-shadow ease-in-out">
                    <div className='flex flex-col gap-1 items-center justify-center h-full'>
                        <h3 className='text-4xl font-semibold'>16</h3>
                        <span className='text-lg font-normal font-open-sans'>Lost</span>
                    </div>
                </div>
                <div className='lg:flex col-span-3 sm:col-span-1 lg:col-span-1 lg:flex-col gap-3 grid'>
                    <div class="p-4 h-full rounded-xl bg-[#FDF3D8] dark:bg-base-100 row-span-2 shadow hover:shadow-md transition-shadow ease-in-out">
                        <div className='flex flex-col gap-1 items-center justify-center h-full'>
                            <h3 className='text-4xl font-semibold'>0</h3>
                            <span className='text-lg font-normal font-open-sans'>About to lose</span>
                        </div>
                    </div>
                    <div class="p-4 h-full rounded-xl bg-[#DBF3FD] dark:bg-base-100 row-span-2 shadow hover:shadow-md transition-shadow ease-in-out">
                        <div className='flex flex-col gap-1 items-center justify-center h-full rounded-xl'>
                            <h3 className='text-4xl font-semibold'>31</h3>
                            <span className='text-lg font-normal font-open-sans'>Can’t lose</span>
                        </div>    
                    </div>  
                </div>
                
                <div className='flex flex-col gap-3 col-span-3 sm:col-span-2 lg:col-span-1'>
                    <div class="p-4 rounded-xl h-full bg-[#E1ECD4] dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out">
                        <div className='flex flex-col gap-1 items-center justify-center h-full'>
                            <h3 className='text-4xl font-semibold'>62</h3>
                            <span className='text-lg font-normal font-open-sans'>Best Buyers</span>
                        </div>
                    </div>
                    <div class="p-4 rounded-xl h-full bg-[#E9D6F3] dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out">
                        <div className='flex flex-col gap-1 items-center justify-center h-full'>
                            <h3 className='text-4xl font-semibold'>2</h3>
                            <span className='text-lg font-normal font-open-sans'>Loyal</span>
                        </div>
                    </div>
                    <div class="p-4 rounded-xl h-full bg-[#CCCCF8] dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out">
                        <div className='flex flex-col gap-1 items-center justify-center h-full'>
                            <h3 className='text-4xl font-semibold'>21</h3>
                            <span className='text-lg font-normal font-open-sans'>New Players</span>
                        </div>
                    </div>
                </div>

                <div class="row-span-2 p-4 rounded-xl bg-[#DCD8F8] dark:bg-base-100 col-span-3 lg:col-span-2 shadow hover:shadow-md transition-shadow ease-in-out">
                    <div className='flex flex-col gap-1 items-center justify-center h-full'>
                        <h3 className='text-4xl font-semibold'>15</h3>
                        <span className='text-lg font-normal font-open-sans'>Promising</span>
                    </div>
                </div>
            </div>
        <div className="overflow-x-auto my-8 rounded-t-3xl">
                <table className="table w-full">
                    <thead>
                    <tr className='bg-cardBg dark:bg-base-100'>
                        <th className="normal-case text-center">Report</th>
                        <th className="normal-case">Players</th>
                        <th className="normal-case text-center">Tags</th>
                    </tr>
                    </thead>
                    <tbody className='bg-cardBg dark:bg-base-100'>
                        <tr className="text-lg font-semibold text-primary dark:text-slate-500 whitespace-nowrap">
                            <td>
                                <div className='flex items-top gap-2'>
                                    <div className="w-12 h-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <path opacity="0.5" d="M23.5002 31.3334C12.2203 31.3334 10.2221 20.0917 9.86808 11.1753C9.76961 8.69503 9.72037 7.45493 10.652 6.30755C11.5836 5.16016 12.6986 4.97204 14.9286 4.59578C17.1299 4.22438 20.0074 3.91675 23.5002 3.91675C26.993 3.91675 29.8705 4.22438 32.0718 4.59579C34.3018 4.97204 35.4168 5.16016 36.3484 6.30755C37.28 7.45493 37.2308 8.69503 37.1323 11.1753C36.7783 20.0917 34.7801 31.3334 23.5002 31.3334Z" fill="#9B52DC"/>
                                            <path d="M34.5455 24.3265L40.0613 21.2622C41.5347 20.4436 42.2715 20.0342 42.6772 19.3447C43.083 18.6551 43.083 17.8123 43.0831 16.1267L43.0831 15.9847C43.0831 13.9409 43.0831 12.9191 42.5287 12.1497C41.9742 11.3804 41.0048 11.0573 39.0659 10.411L37.2082 9.79175L37.175 9.9575C37.1659 10.3282 37.1499 10.7319 37.1323 11.1752C36.9593 15.5313 36.3939 20.4424 34.5455 24.3265Z" fill="#9B52DC"/>
                                            <path d="M9.86802 11.1753C10.041 15.5316 10.6064 20.4429 12.455 24.3271L6.93831 21.2622C5.46482 20.4436 4.72807 20.0342 4.32233 19.3447C3.91658 18.6551 3.91656 17.8123 3.91651 16.1267L3.9165 15.9847C3.91645 13.9409 3.91643 12.9191 4.4709 12.1497C5.02538 11.3804 5.99481 11.0573 7.93367 10.411L9.79139 9.79175L9.82535 9.96155C9.8345 10.3311 9.85048 10.7335 9.86802 11.1753Z" fill="#9B52DC"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2812 43.0833C10.2812 42.2721 10.9388 41.6145 11.75 41.6145H35.25C36.0612 41.6145 36.7187 42.2721 36.7187 43.0833C36.7187 43.8944 36.0612 44.552 35.25 44.552H11.75C10.9388 44.552 10.2812 43.8944 10.2812 43.0833Z" fill="#9B52DC"/>
                                            <path opacity="0.5" d="M30.2712 41.6147H16.729L17.3103 38.1879C17.4933 37.2725 18.2971 36.6136 19.2306 36.6136H27.7697C28.7032 36.6136 29.5069 37.2725 29.69 38.1879L30.2712 41.6147Z" fill="#9B52DC"/>
                                            <path d="M23.5003 31.3337C22.992 31.3337 22.5026 31.3109 22.0312 31.2665V36.6136H24.9688V31.2665C24.4976 31.3109 24.0084 31.3337 23.5003 31.3337Z" fill="#9B52DC"/>
                                            <path d="M21.8275 11.7942C22.5716 10.4592 22.9437 9.79175 23.5 9.79175C24.0563 9.79175 24.4284 10.4592 25.1725 11.7942L25.365 12.1395C25.5765 12.5189 25.6822 12.7086 25.8471 12.8337C26.012 12.9589 26.2173 13.0053 26.6279 13.0982L27.0018 13.1828C28.4468 13.5098 29.1694 13.6733 29.3413 14.226C29.5132 14.7788 29.0206 15.3548 28.0354 16.5068L27.7806 16.8049C27.5006 17.1322 27.3607 17.2959 27.2977 17.4984C27.2347 17.7009 27.2559 17.9193 27.2982 18.3561L27.3367 18.7537C27.4857 20.2907 27.5601 21.0592 27.1101 21.4009C26.6601 21.7425 25.9836 21.431 24.6305 20.8081L24.2805 20.6469C23.896 20.4699 23.7038 20.3813 23.5 20.3813C23.2962 20.3813 23.104 20.4699 22.7195 20.6469L22.3695 20.8081C21.0164 21.431 20.3399 21.7425 19.8899 21.4009C19.4399 21.0592 19.5143 20.2907 19.6633 18.7537L19.7018 18.3561C19.7441 17.9193 19.7653 17.7009 19.7023 17.4984C19.6393 17.2959 19.4994 17.1322 19.2194 16.8049L18.9646 16.5068C17.9794 15.3548 17.4868 14.7788 17.6587 14.226C17.8306 13.6733 18.5532 13.5098 19.9982 13.1828L20.3721 13.0982C20.7827 13.0053 20.988 12.9589 21.1529 12.8337C21.3178 12.7086 21.4235 12.5189 21.635 12.1395L21.8275 11.7942Z" fill="#9B52DC"/>
                                        </svg>
                                    </div>                                    
                                    <div className='flex flex-col items-start gap-1 max-w-2xl'>
                                        <h3 className='text-lg font-semibold'>Best Buyers</h3>
                                        <span className='text-base font-normal font-open-sans whitespace-normal'>
                                            Players who have the highest purchase frequency, recency, and amount spent
                                        </span>
                                        <button className='border-0 bg-transparent text-primary dark:text-slate-500 opacity-50 hover:opacity-100 text-base'>
                                            View Players
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>0 Players</td>
                            <td className="flex items-center justify-between gap-10">
                                <div class="badge badge-neutral py-3 px-6 border-0 text-primary h-10" style={{backgroundColor: '#E1ECD2'}}>best buyers</div>
                                <button 
                                    className='py-4 px-5 text-white dark:text-slate-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit'
                                    style={{
                                        boxShadow: '0px 3px 0px 0px #803CBC',
                                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                    }}
                                >
                                View Retention Strategy
                                </button>
                            </td>
                        </tr>
                        <tr className="text-lg font-semibold text-primary dark:text-slate-500 whitespace-nowrap">
                            <td>
                                <div className='flex items-top gap-2'>
                                    <div className="w-12 h-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M38.5543 27.599L38.9133 24.2607C39.1049 22.4795 39.2314 21.3034 39.1321 20.5623C38.2575 20.5522 37.4747 20.1598 36.9431 19.5444C36.3046 19.9385 35.4698 20.7701 34.2132 22.0218C33.2452 22.986 32.7612 23.4682 32.2212 23.5428C31.922 23.5842 31.6172 23.5417 31.3409 23.42C30.8423 23.2005 30.5099 22.6044 29.845 21.4124L26.3406 15.1289C25.9304 14.3935 25.5872 13.7781 25.2777 13.2827C24.7442 13.5549 24.1401 13.7084 23.5002 13.7084C22.8602 13.7084 22.2561 13.5549 21.7226 13.2827C21.4131 13.7781 21.0699 14.3935 20.6597 15.1289L17.1553 21.4124C16.4904 22.6044 16.158 23.2005 15.6594 23.42C15.3831 23.5417 15.0783 23.5842 14.7791 23.5428C14.2392 23.4682 13.7551 22.986 12.7871 22.0218C11.5305 20.7701 10.6957 19.9385 10.0572 19.5444C9.5256 20.1598 8.74283 20.5522 7.86818 20.5623C7.7689 21.3034 7.89541 22.4795 8.08699 24.2607L8.44607 27.599C8.50668 28.1626 8.5642 28.7178 8.6206 29.2623C9.11468 34.0325 9.52337 37.9782 11.1863 39.4666C13.0391 41.125 15.8159 41.125 21.3696 41.125H25.6307C31.1844 41.125 33.9612 41.125 35.814 39.4666C37.4769 37.9782 37.8856 34.0325 38.3797 29.2624C38.4361 28.7179 38.4936 28.1626 38.5543 27.599Z" fill="#9B52DC"/>
                                            <path d="M39.1668 20.5625C40.7892 20.5625 42.1043 19.2473 42.1043 17.625C42.1043 16.0027 40.7892 14.6875 39.1668 14.6875C37.5445 14.6875 36.2293 16.0027 36.2293 17.625C36.2293 18.3587 36.4983 19.0296 36.9431 19.5444C37.4747 20.1598 38.2575 20.5522 39.1321 20.5623L39.1668 20.5625Z" fill="#9B52DC"/>
                                            <path d="M23.5002 5.875C21.337 5.875 19.5835 7.62855 19.5835 9.79167C19.5835 11.3148 20.453 12.6349 21.7226 13.2827C22.2561 13.5549 22.8602 13.7083 23.5002 13.7083C24.1401 13.7083 24.7442 13.5549 25.2777 13.2827C26.5474 12.6349 27.4168 11.3148 27.4168 9.79167C27.4168 7.62855 25.6633 5.875 23.5002 5.875Z" fill="#9B52DC"/>
                                            <path d="M4.896 17.625C4.896 19.2473 6.21116 20.5625 7.8335 20.5625L7.86818 20.5623C8.74283 20.5522 9.5256 20.1598 10.0572 19.5444C10.502 19.0296 10.771 18.3587 10.771 17.625C10.771 16.0027 9.45583 14.6875 7.8335 14.6875C6.21116 14.6875 4.896 16.0027 4.896 17.625Z" fill="#9B52DC"/>
                                            <path d="M9.49583 35.7395C9.30394 34.8576 9.1505 33.8697 9.01392 32.802H37.986C37.8494 33.8697 37.696 34.8576 37.5041 35.7395H9.49583Z" fill="#9B52DC" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-col items-start gap-1 max-w-2xl'>
                                        <h3 className='text-lg font-semibold'>Loyal</h3>
                                        <span className='text-base font-normal font-open-sans whitespace-normal'>
                                            With high recency and monetary scores, these players purchase the most frequent
                                        </span>
                                        <button className='border-0 bg-transparent text-primary dark:text-slate-500 opacity-50 hover:opacity-100 text-base'>
                                        View Players
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>0 Players</td>
                            <td className="flex items-center gap-10 justify-between">
                                <div class="badge badge-neutral py-3 px-6 border-0 text-primary h-10" style={{backgroundColor: '#E8D6F1'}}>loyal</div>
                                <button 
                                    className='py-4 px-5 text-white dark:text-slate-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit'
                                    style={{
                                        boxShadow: '0px 3px 0px 0px #803CBC',
                                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                    }}
                                >
                                View Retention Strategy
                                </button>
                            </td>
                        </tr>
                        <tr className="text-lg font-semibold text-primary dark:text-slate-500 whitespace-nowrap">
                            <td>
                                <div className='flex items-top gap-2'>
                                    <div className="w-12 h-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <path d="M22.6779 9.35316C24.0384 5.88518 24.7187 4.15119 26.1413 3.93743C27.5639 3.72367 28.7868 5.1717 31.2325 8.06777L31.8652 8.81701C32.5602 9.63999 32.9077 10.0515 33.3802 10.2864C33.8527 10.5214 34.3966 10.5532 35.4846 10.6169L36.475 10.6749C40.3035 10.8989 42.2178 11.011 42.8821 12.2625C43.5464 13.5141 42.5208 15.0764 40.4696 18.2009L39.9389 19.0092C39.356 19.8971 39.0646 20.3411 38.9859 20.8479C38.9071 21.3548 39.05 21.8672 39.3358 22.8921L39.5959 23.8251C40.6016 27.4316 41.1044 29.2348 40.0923 30.2221C39.0802 31.2094 37.2235 30.7269 33.5101 29.7618L32.5494 29.5122C31.4942 29.2379 30.9666 29.1008 30.4454 29.1791C29.9243 29.2574 29.4687 29.5423 28.5573 30.112L27.7276 30.6307C24.5207 32.6355 22.9172 33.638 21.6274 32.9966C20.3376 32.3552 20.2157 30.4947 19.9719 26.7738L19.9088 25.8111C19.8395 24.7538 19.8048 24.2251 19.5615 23.7666C19.3182 23.3081 18.8937 22.9717 18.0447 22.299L17.2717 21.6865C14.2841 19.3191 12.7903 18.1355 13.0052 16.7518C13.2201 15.3681 15.0015 14.7007 18.5642 13.3661L19.4859 13.0208C20.4983 12.6416 21.0045 12.4519 21.3753 12.0903C21.746 11.7286 21.9393 11.2359 22.3259 10.2504L22.6779 9.35316Z" fill="#9B52DC"/>
                                            <g opacity="0.5">
                                                <path d="M10.3986 18.785C5.62598 23.345 2.49673 30.9522 4.5652 43.0829C6.41149 37.9842 11.4703 33.7622 17.4529 31.2401C17.2441 30.0794 17.1515 28.6621 17.0539 27.1678L16.9775 26.0023C16.9597 25.7312 16.9462 25.5255 16.9317 25.3485C16.9257 25.275 16.9201 25.2134 16.9148 25.1615C16.8693 25.1226 16.8139 25.0763 16.7459 25.0206C16.604 24.9046 16.4376 24.7727 16.2203 24.6004L15.2897 23.8631C13.9324 22.7879 12.668 21.7863 11.7987 20.863C11.303 20.3365 10.7487 19.6421 10.3986 18.785Z" fill="#9B52DC"/>
                                                <path d="M20.262 30.2028C20.2519 30.1295 20.2421 30.0548 20.2327 29.9785L20.3425 30.1772C20.3157 30.1857 20.2888 30.1942 20.262 30.2028Z" fill="#9B52DC"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className='flex flex-col items-start gap-1 max-w-2xl'>
                                        <h3 className='text-lg font-semibold'>New Players</h3>
                                        <span className='text-base font-normal font-open-sans whitespace-normal'>
                                            Players who just joined
                                        </span>
                                        <button className='border-0 bg-transparent text-primary dark:text-slate-500 opacity-50 hover:opacity-100 text-base'>
                                        View Players
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>0 Players</td>
                            <td className="flex items-center gap-10 justify-between">
                                <div class="badge badge-neutral py-3 px-6 border-0 text-primary h-10" style={{backgroundColor: '#CCCCF6'}}>new</div>
                                <button 
                                    className='py-4 px-5 text-white dark:text-slate-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit'
                                    style={{
                                        boxShadow: '0px 3px 0px 0px #803CBC',
                                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                    }}
                                >
                                View Retention Strategy
                                </button>
                            </td>
                        </tr>
                        <tr className="text-lg font-semibold text-primary dark:text-slate-500 whitespace-nowrap">
                            <td>
                                <div className='flex items-top gap-2'>
                                    <div className="w-12 h-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <path d="M6.44858 18.1986C5.875 18.7722 5.875 19.6953 5.875 21.5417V33.2917C5.875 35.138 5.875 36.0612 6.44858 36.6348C7.02217 37.2083 7.94533 37.2083 9.79167 37.2083C11.638 37.2083 12.5612 37.2083 13.1347 36.6348C13.7083 36.0612 13.7083 35.138 13.7083 33.2917V21.5417C13.7083 19.6953 13.7083 18.7722 13.1347 18.1986C12.5612 17.625 11.638 17.625 9.79167 17.625C7.94533 17.625 7.02217 17.625 6.44858 18.1986Z" fill="#9B52DC"/>
                                            <path opacity="0.4" d="M33.8651 4.49033C33.2915 5.06391 33.2915 5.98708 33.2915 7.83341V33.2917C33.2915 35.1381 33.2915 36.0613 33.8651 36.6348C34.4387 37.2084 35.3618 37.2084 37.2082 37.2084C39.0545 37.2084 39.9777 37.2084 40.5513 36.6348C41.1248 36.0613 41.1248 35.1381 41.1248 33.2917V7.83341C41.1248 5.98708 41.1248 5.06391 40.5513 4.49033C39.9777 3.91675 39.0545 3.91675 37.2082 3.91675C35.3618 3.91675 34.4387 3.91675 33.8651 4.49033Z" fill="#9B52DC"/>
                                            <path opacity="0.7" d="M19.5835 13.7084C19.5835 11.8621 19.5835 10.9389 20.1571 10.3653C20.7307 9.79175 21.6538 9.79175 23.5002 9.79175C25.3465 9.79175 26.2697 9.79175 26.8432 10.3653C27.4168 10.9389 27.4168 11.8621 27.4168 13.7084V33.2917C27.4168 35.1381 27.4168 36.0612 26.8432 36.6348C26.2697 37.2084 25.3465 37.2084 23.5002 37.2084C21.6538 37.2084 20.7307 37.2084 20.1571 36.6348C19.5835 36.0612 19.5835 35.1381 19.5835 33.2917V13.7084Z" fill="#9B52DC"/>
                                            <path d="M5.875 41.6145C5.06383 41.6145 4.40625 42.2721 4.40625 43.0833C4.40625 43.8944 5.06383 44.552 5.875 44.552H41.125C41.9362 44.552 42.5938 43.8944 42.5938 43.0833C42.5938 42.2721 41.9362 41.6145 41.125 41.6145H5.875Z" fill="#9B52DC"/>
                                        </svg>
                                    </div>                                    
                                    <div className='flex flex-col items-start gap-1 max-w-2xl'>
                                        <h3 className='text-lg font-semibold'>Promising</h3>
                                        <span className='text-base font-normal font-open-sans whitespace-normal'>
                                            Players who are active, but every now and then and respond to promotions
                                        </span>
                                        <button className='border-0 bg-transparent text-primary dark:text-slate-500 opacity-50 hover:opacity-100 text-base'>
                                        View Players
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>0 Players</td>
                            <td className="flex items-center gap-10 justify-between">
                                <div class="badge badge-neutral py-3 px-6 border-0 text-primary h-10" style={{backgroundColor: '#DBD7F6'}}>promising</div>
                                <button 
                                    className='py-4 px-5 text-white dark:text-slate-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit'
                                    style={{
                                        boxShadow: '0px 3px 0px 0px #803CBC',
                                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                    }}
                                >
                                View Retention Strategy
                                </button>
                            </td>
                        </tr>
                        <tr className="text-lg font-semibold text-primary dark:text-slate-500 whitespace-nowrap">
                            <td>
                                <div className='flex items-top gap-2'>
                                    <div className="w-12 h-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <path d="M36.1965 32.8361C34.9503 33.1339 33.6498 33.2917 32.3123 33.2917C23.1191 33.2917 15.6665 25.8391 15.6665 16.6458C15.6665 15.699 15.7456 14.7707 15.8974 13.8671C15.8265 13.9352 15.7533 13.998 15.6762 14.0566C15.1267 14.4737 14.4423 14.6286 13.0734 14.9383L11.8273 15.2202C7.01039 16.3101 4.60195 16.855 4.02895 18.6977C3.45595 20.5403 5.09787 22.4603 8.38169 26.3003L9.23126 27.2937C10.1644 28.3849 10.631 28.9306 10.8409 29.6055C11.0508 30.2805 10.9803 31.0085 10.8392 32.4644L10.7107 33.7899C10.2143 38.9133 9.96603 41.475 11.4662 42.6138C12.9663 43.7526 15.2213 42.7143 19.7313 40.6377L20.8982 40.1005C22.1798 39.5104 22.8206 39.2153 23.4998 39.2153C24.1791 39.2153 24.8199 39.5104 26.1015 40.1005L27.2683 40.6377C31.7783 42.7143 34.0334 43.7526 35.5335 42.6138C37.0336 41.475 36.7854 38.9133 36.2889 33.7899L36.1965 32.8361Z" fill="#9B52DC"/>
                                            <path opacity="0.5" d="M17.9247 10.5915L17.283 11.7427C16.5781 13.0072 16.2257 13.6395 15.6761 14.0566C15.7533 13.9981 15.8265 13.9353 15.8974 13.8671C15.7455 14.7708 15.6665 15.6991 15.6665 16.6459C15.6665 25.8392 23.1191 33.2918 32.3123 33.2918C33.6497 33.2918 34.9503 33.134 36.1965 32.8362L36.1605 32.4645C36.0194 31.0086 35.9488 30.2806 36.1587 29.6056C36.3686 28.9306 36.8352 28.385 37.7684 27.2938L38.6179 26.3003C41.9018 22.4604 43.5437 20.5403 42.9707 18.6977C42.3977 16.8551 39.9892 16.3102 35.1724 15.2203L33.9262 14.9383C32.5574 14.6286 31.873 14.4738 31.3235 14.0566C30.7739 13.6395 30.4215 13.0072 29.7166 11.7427L29.0749 10.5915C26.5943 6.14166 25.3541 3.91675 23.4998 3.91675C21.6455 3.91675 20.4053 6.14166 17.9247 10.5915Z" fill="#9B52DC"/>
                                        </svg>
                                    </div>                                   
                                    <div className='flex flex-col items-start gap-1 max-w-2xl'>
                                        <h3 className='text-lg font-semibold'>Can’t lose</h3>
                                        <span className='text-base font-normal font-open-sans whitespace-normal'>
                                            Players who made big purchases but very long time ago
                                        </span>
                                        <button className='border-0 bg-transparent text-primary dark:text-slate-500 opacity-50 hover:opacity-100 text-base'>
                                        View Players
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>0 Players</td>
                            <td className="flex items-center gap-10 justify-between">
                                <div class="badge badge-neutral py-3 px-6 border-0 text-primary h-10" style={{backgroundColor: '#D6F3FE'}}>can’t lose</div>
                                <button 
                                    className='py-4 px-5 text-white dark:text-slate-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit'
                                    style={{
                                        boxShadow: '0px 3px 0px 0px #803CBC',
                                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                    }}
                                >
                                View Retention Strategy
                                </button>
                            </td>
                        </tr>
                        <tr className="text-lg font-semibold text-primary dark:text-slate-500 whitespace-nowrap">
                            <td>
                                <div className='flex items-top gap-2'>
                                    <div className="w-12 h-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.729 3.427C12.729 2.61583 12.0714 1.95825 11.2603 1.95825C10.4491 1.95825 9.7915 2.61583 9.7915 3.427V42.5937C9.7915 43.4048 10.4491 44.0624 11.2603 44.0624C12.0714 44.0624 12.729 43.4048 12.729 42.5937V26.6333V7.04992V3.427Z" fill="#9B52DC"/>
                                            <path d="M26.1408 7.42102L25.742 7.26151C22.6815 6.03729 19.3309 5.72967 16.0987 6.37613L12.729 7.05006V26.6334L16.0987 25.9595C19.3309 25.313 22.6815 25.6206 25.742 26.8448C29.0585 28.1714 32.7088 28.4192 36.1741 27.5528L36.5941 27.4478C37.8182 27.1418 38.6769 26.042 38.6769 24.7802V10.3532C38.6769 8.82456 37.2404 7.70294 35.7574 8.07368C32.563 8.8723 29.1981 8.64393 26.1408 7.42102Z" fill="#9B52DC"/>
                                        </svg>
                                    </div>                                    
                                    <div className='flex flex-col items-start gap-1 max-w-2xl'>
                                        <h3 className='text-lg font-semibold'>About to lose</h3>
                                        <span className='text-base font-normal font-open-sans whitespace-normal'>
                                            Players who are inactive for a while with very low purchase frequency and very low mount spent
                                        </span>
                                        <button className='border-0 bg-transparent text-primary dark:text-slate-500 opacity-50 hover:opacity-100 text-base'>
                                        View Players
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>0 Players</td>
                            <td className="flex items-center gap-10 justify-between">
                                <div class="badge badge-neutral py-3 px-6 border-0 text-primary h-10" style={{backgroundColor: '#FDF3D4'}}>about to lose</div>
                                <button 
                                    className='py-4 px-5 text-white dark:text-slate-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit'
                                    style={{
                                        boxShadow: '0px 3px 0px 0px #803CBC',
                                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                    }}
                                >
                                View Retention Strategy
                                </button>
                            </td>
                        </tr>
                        <tr className="text-lg font-semibold text-primary dark:text-slate-500 whitespace-nowrap">
                            <td>
                                <div className='flex items-top gap-2'>
                                    <div className="w-12 h-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <path d="M38.9712 4.51833C38.656 3.71622 37.525 3.71622 37.2099 4.51833L36.367 6.66326C36.2708 6.90815 36.0777 7.10199 35.8337 7.19858L33.6966 8.04453C32.8975 8.36087 32.8975 9.49605 33.6966 9.81239L35.8337 10.6583C36.0777 10.7549 36.2708 10.9488 36.367 11.1937L37.2099 13.3386C37.525 14.1407 38.656 14.1407 38.9712 13.3386L39.814 11.1937C39.9103 10.9488 40.1034 10.7549 40.3474 10.6583L42.4844 9.81239C43.2836 9.49605 43.2836 8.36087 42.4844 8.04453L40.3474 7.19858C40.1034 7.10199 39.9103 6.90815 39.814 6.66326L38.9712 4.51833Z" fill="url(#paint0_linear_7291_693)"/>
                                            <path d="M31.3976 15.9207C31.0825 15.1186 29.9515 15.1186 29.6363 15.9207L29.329 16.7027C29.2328 16.9476 29.0396 17.1415 28.7956 17.2381L28.0165 17.5465C27.2173 17.8628 27.2173 18.998 28.0165 19.3144L28.7956 19.6228C29.0396 19.7194 29.2328 19.9132 29.329 20.1581L29.6363 20.9402C29.9515 21.7423 31.0825 21.7423 31.3976 20.9402L31.7049 20.1581C31.8012 19.9132 31.9943 19.7194 32.2383 19.6228L33.0175 19.3144C33.8166 18.998 33.8166 17.8628 33.0175 17.5465L32.2383 17.2381C31.9943 17.1415 31.8012 16.9476 31.7049 16.7027L31.3976 15.9207Z" fill="url(#paint1_linear_7291_693)"/>
                                            <path opacity="0.5" d="M23.4998 43.0834C34.3154 43.0834 43.0832 34.3157 43.0832 23.5001C43.0832 22.594 41.7251 22.4442 41.2565 23.2197C39.0274 26.9088 34.9787 29.3751 30.354 29.3751C23.3239 29.3751 17.6248 23.676 17.6248 16.6459C17.6248 12.0212 20.0911 7.97256 23.7802 5.7434C24.5557 5.27479 24.4059 3.91675 23.4998 3.91675C12.6843 3.91675 3.9165 12.6845 3.9165 23.5001C3.9165 34.3157 12.6843 43.0834 23.4998 43.0834Z" fill="url(#paint2_linear_7291_693)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_7291_693" x1="52.2519" y1="-7.88434" x2="27.4557" y2="-7.08324" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FD85FF"/>
                                                <stop offset="1" stop-color="#4E29BF"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_7291_693" x1="52.2519" y1="-7.88434" x2="27.4557" y2="-7.08324" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FD85FF"/>
                                                <stop offset="1" stop-color="#4E29BF"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_7291_693" x1="-19.0046" y1="-22.3079" x2="42.9688" y2="-20.0554" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FD85FF"/>
                                                <stop offset="1" stop-color="#4E29BF"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>                                    
                                    <div className='flex flex-col items-start gap-1 max-w-2xl'>
                                        <h3 className='text-lg font-semibold'>Lost</h3>
                                        <span className='text-base font-normal font-open-sans whitespace-normal'>
                                            Players who has the lowest purchase frequency, recency and amount spent
                                        </span>
                                        <button className='border-0 bg-transparent text-primary dark:text-slate-500 opacity-50 hover:opacity-100 text-base'>
                                        View Players
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>0 Players</td>
                            <td className="flex items-center gap-10 justify-between">
                                <div class="badge badge-neutral py-3 px-6 border-0 text-primary h-10" style={{backgroundColor: '#F5DAD0'}}>lost</div>
                                <button 
                                    className='py-4 px-5 text-white dark:text-slate-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit'
                                    style={{
                                        boxShadow: '0px 3px 0px 0px #803CBC',
                                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                    }}
                                >
                                View Retention Strategy
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>




        {/** ---------------------- Select Period Content ------------------------- */}
            {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/> */}
        
        {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {/* {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                } */}
                
                
            </div>
        </>
    )
}

export default Community