/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import DashboardStats from './components/DashboardStats'
// import AmountStats from './components/AmountStats'
// import PageStats from './components/PageStats'
import { Link, useNavigate  } from 'react-router-dom' 

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

import Avatar from '../../assets/images/Avatar.png';
import YouTube from 'react-youtube';
import foo from '../../assets/images/video-foo.png';


function Shop(){

    const [youtubeLink, setYoutubeLink] = useState('');
    const [videoId, setVideoId] = useState('');
    const [isInvalidLink, setIsInvalidLink] = useState(false);
  
    useEffect(() => {
      const storedVideoId = localStorage.getItem('savedYouTubeVideoId');
      if (storedVideoId) {
        setVideoId(storedVideoId);
      }
    }, []);
  
    const handleLinkChange = (event) => {
      const link = event.target.value;
      setYoutubeLink(link);
  
      const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
      setIsInvalidLink(!youtubeRegex.test(link));
  
      const videoIdMatch = link.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (videoIdMatch) {
        setVideoId(videoIdMatch[1]);
      }
    };
  
    const handleSave = () => {
      localStorage.setItem('savedYouTubeVideoId', videoId);
    };  

    const opts = {
        width: 1472,
        height: window.innerWidth >= 768 ? 450 : (window.innerWidth / 768) * 450,
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 0,
          rel: 0,
        },
    };

    // https://www.youtube.com/watch?v=4kLviL8XwAI

    /* SHORTS */

    const [shortLinks, setShortLinks] = useState(['', '', '', '']);
    const [modalIndex, setModalIndex] = useState(null);

    const handleModal = (index) => {
        document.getElementById('my_modal_2').showModal();
        setModalIndex(index);
    };

    const handleLinkShort = (event, index) => {
        setModalIndex(index);
        const linkShort = event.target.value;
    
        setShortLinks((prevShortLinks) => {
            const shortIdMatch = linkShort.match(/(?:youtube\.com\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    
            const newShortLinks = [...prevShortLinks];
            newShortLinks[index] = shortIdMatch ? shortIdMatch[1] : '';
            return newShortLinks;
        });
    };
    

    const handleSaveShort = () => {
        if (modalIndex !== null) {
            const shortLink = shortLinks[modalIndex];
            localStorage.setItem(`savedYouTubeShort${modalIndex}`, shortLink);
        }
    };

    const handleRemoveShort = (index) => {
        localStorage.removeItem(`savedYouTubeShort${index}`);
        setShortLinks((prevShortLinks) => {
            const newShortLinks = [...prevShortLinks];
            newShortLinks[index] = '';
            return newShortLinks;
        });
    };

    useEffect(() => {
        const storedShortLinks = Array.from({ length: 4 }, (_, index) =>
            localStorage.getItem(`savedYouTubeShort${index}`) || ''
        );

        setShortLinks(storedShortLinks);
    }, []);

    const optShorts = {
        height: 526,
        width: 320,
        borderRadius: 27,
        playerVars: {
            autoplay: 0,
            controls: 0,
            modestbranding: 0,
            rel: 0,
        },
    }

    // https://youtube.com/shorts/JB1v-XN_lAw?si=D9SQmXUtHmcFoB5v;

    /* Avatar */

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          setSelectedFile(file);
        }
    };

    const handleAvatar = () => {
        if (selectedFile) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            const imageBase64 = e.target.result;
            localStorage.setItem('avatar', imageBase64);
          };

          reader.readAsDataURL(selectedFile);
        }

        document.getElementById('my_modal_3').close();
    };
    

    return(
        <>
            <div className='flex flex-col w-full h-fit rounded-3xl bg-slate-100 dark:bg-base-100 border border-gray-200 dark:border-base-100'>
            <div
                className='h-96 lg:h-video w-full flex justify-center items-center video relative bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: !videoId ? `url(${foo})` : 'none',
                    borderRadius: !videoId ? '27px 27px 0 0' : 'initial',
                    backgroundPositionY: '-130px',
                    backgroundPositionX: 'center',
                  }}
            >

                    { !videoId ? 
                    '' :
                    <YouTube videoId={videoId} opts={opts} />   

                    }
                    <button 
                        className='absolute bg-white top-6 right-6 py-4 px-5 dark:text-slate-300 dark:bg-base-100 font-semibold text-sm flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                        style={{
                            border: '1px solid #E2E2E2',
                            boxShadow: '0px 3px 0px 0px #E2E2E2',
                        }}
                        onClick={()=>document.getElementById('my_modal_1').showModal()}
                    >
                    Upload video cover
                    </button>
                </div>
                <div className='flex w-full flex-col gap-4 px-9 relative z-10 mt-0 -top-9'>
                    <div className='flex items-center gap-4'>
                        <img src={!selectedFile ? Avatar : selectedFile} className='w-32 h-32 border-white dark:border-base-100 rounded-full bg-purple-400' alt='avatar' />
                        <div className='flex flex-col gap-4 mt-6'>
                            <h2 className='text-2xl font-semibold'>VodK</h2>
                            <span className='text-base'>@VodKprod</span>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-5'>
                        <button 
                            className='py-4 px-5 text-white dark:text-slate-300 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                            style={{
                                boxShadow: '0px 3px 0px 0px #803CBC',
                                background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                            }}
                            onClick={()=>document.getElementById('my_modal_3').showModal()}
                        >
                            Change avatar
                        </button>
                        <span className='text-sm font-semibold opacity-30'>JPG, GIF or PNG. 1MB max.</span>
                    </div>
                </div>
                <div className='flex flex-col gap-7 w-full px-9 pb-10 mt-6 lg:mt-0'>
                    <div className='flex flex-col md:flex-row w-full items-center gap-4'>
                        <div className='flex flex-col gap-3 w-full'>
                            <label className='text-sm font-semibold uppercase'>Name</label>
                            <input type='text' value={'VodK'} placeholder="Enter Name" className='bg-gray-100 border dark:border-gray-500 border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'></input>
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <label className='text-sm font-semibold uppercase'>YouTube Nickname</label>
                            <input type='text' value={'@VodKprod'} placeholder="Enter Nickname" className='bg-gray-100 border dark:border-gray-500 border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'></input>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-sm font-semibold uppercase'>Description du projet</label>
                        <textarea 
                            rows={5}
                            placeholder="Enter description" 
                            value={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                            className="textarea w-full bg-gray-100 dark:bg-base-100 dark:border-gray-500 border border-gray-300 rounded-xl text-sm py-5 px-6 dark:bg-base-100'" 
                        >
                        </textarea>
                    </div>
                    <button 
                        className='py-4 px-5 text-white dark:text-slate-300 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                        style={{
                            boxShadow: '0px 3px 0px 0px #803CBC',
                            background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>

            <div className='flex mt-8 gap-8 flex-col w-full px-7 py-9 h-fit rounded-3xl bg-slate-100 dark:bg-base-100 border border-gray-200 dark:border-base-100'>
                <div className='flex w-full justify-between'>
                    <h2 className='font-semibold text-xl'>Lorem Ipsum is simply dummy text</h2>
                    <button type='button' className='w-fit bg-transparent border-none hover:scale-105 transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z" fill="#9B52DC"/>
                            <path d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z" fill="#9B52DC"/>
                            <path d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z" fill="#9B52DC"/>
                        </svg>
                    </button>
                </div>
                <div className='flex items-center w-full gap-7'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full justify-items-center place-content-center gap-7'>
                        <>
                            {[0, 1, 2, 3].map((index) => (
                                <li
                                    key={index}
                                    className={`h-short w-full max-w-xs cursor-pointer flex flex-col items-center justify-center border rounded-3xl relative ${
                                        !shortLinks[index] ? 'border-dashed border-accent dark:border-slate-500' : ''
                                    }`}
                                >
                                    {!shortLinks[index] ? (
                                        <div onClick={() => handleModal(index)} className='flex flex-col items-center gap-4 transition-all hover:scale-105'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M19.5003 1.97913C19.6718 1.97902 19.8412 2.01604 19.997 2.08765C20.1528 2.15926 20.2913 2.26376 20.4028 2.39396L25.1528 7.93563C25.3577 8.17498 25.4592 8.48594 25.4348 8.8001C25.4105 9.11425 25.2624 9.40587 25.023 9.61079C24.7836 9.81572 24.4727 9.91716 24.1585 9.89281C23.8444 9.86847 23.5527 9.72032 23.3478 9.48096L20.6878 6.37763V23.75C20.6878 24.0649 20.5627 24.3669 20.34 24.5896C20.1173 24.8123 19.8153 24.9375 19.5003 24.9375C19.1854 24.9375 18.8833 24.8123 18.6606 24.5896C18.4379 24.3669 18.3128 24.0649 18.3128 23.75V6.37604L15.6528 9.48096C15.5514 9.59948 15.4275 9.69685 15.2884 9.76752C15.1493 9.83818 14.9977 9.88076 14.8421 9.89281C14.6866 9.90487 14.5302 9.88617 14.3818 9.83778C14.2335 9.78939 14.0962 9.71226 13.9777 9.61079C13.8591 9.50933 13.7618 9.38551 13.6911 9.24641C13.6204 9.10731 13.5779 8.95565 13.5658 8.8001C13.5537 8.64455 13.5724 8.48814 13.6208 8.33981C13.6692 8.19149 13.7464 8.05414 13.8478 7.93563L18.5978 2.39396C18.7094 2.26376 18.8478 2.15926 19.0036 2.08765C19.1594 2.01604 19.3289 1.97902 19.5003 1.97913ZM11.5773 13.0656C11.8923 13.0639 12.195 13.1874 12.4189 13.409C12.6428 13.6305 12.7695 13.9318 12.7712 14.2468C12.7728 14.5617 12.6493 14.8645 12.4278 15.0883C12.2063 15.3122 11.9049 15.4389 11.59 15.4406C9.85941 15.4501 8.63233 15.4945 7.69974 15.6655C6.80358 15.8317 6.28266 16.0961 5.89791 16.4809C5.45933 16.9195 5.17433 17.5354 5.01758 18.6975C4.85766 19.893 4.85449 21.4779 4.85449 23.75V25.3333C4.85449 27.607 4.85766 29.1919 5.01758 30.3873C5.17433 31.5495 5.46091 32.1638 5.89791 32.604C6.33649 33.041 6.95083 33.326 8.11458 33.4827C9.30841 33.6442 10.8949 33.6458 13.167 33.6458H25.8337C28.1057 33.6458 29.6907 33.6442 30.8877 33.4827C32.0498 33.326 32.6642 33.041 33.1027 32.6024C33.5413 32.1638 33.8263 31.5495 33.9831 30.3873C34.143 29.1919 34.1462 27.607 34.1462 25.3333V23.75C34.1462 21.4779 34.143 19.893 33.9831 18.696C33.8263 17.5354 33.5397 16.9195 33.1027 16.4809C32.7164 16.0961 32.1971 15.8317 31.3009 15.6655C30.3683 15.4945 29.1412 15.4501 27.4107 15.4406C27.2547 15.4398 27.1005 15.4083 26.9567 15.3478C26.8129 15.2874 26.6825 15.1992 26.5728 15.0883C26.4631 14.9775 26.3764 14.8461 26.3175 14.7017C26.2586 14.5573 26.2287 14.4027 26.2295 14.2468C26.2303 14.0908 26.2619 13.9366 26.3223 13.7928C26.3828 13.6491 26.4709 13.5186 26.5818 13.409C26.6926 13.2993 26.824 13.2125 26.9684 13.1536C27.1128 13.0947 27.2674 13.0648 27.4233 13.0656C29.1365 13.0751 30.5631 13.1163 31.73 13.33C32.9302 13.5517 33.9514 13.9713 34.7827 14.8025C35.7358 15.7541 36.1443 16.9559 36.3375 18.3809C36.5212 19.752 36.5212 21.4985 36.5212 23.6629V25.4204C36.5212 27.5864 36.5212 29.3312 36.3375 30.704C36.1443 32.129 35.7358 33.3291 34.7827 34.2823C33.8295 35.2355 32.6293 35.644 31.2043 35.8371C29.8316 36.0208 28.0852 36.0208 25.9207 36.0208H13.0799C10.9155 36.0208 9.16908 36.0208 7.79633 35.8371C6.37133 35.6455 5.17116 35.2355 4.21799 34.2823C3.26483 33.3291 2.85633 32.129 2.66474 30.704C2.47949 29.3312 2.47949 27.5848 2.47949 25.4204V23.6629C2.47949 21.4985 2.47949 19.752 2.66474 18.3793C2.85474 16.9543 3.26641 15.7541 4.21799 14.801C5.04924 13.9713 6.07049 13.5501 7.27066 13.33C8.43758 13.1163 9.86416 13.0751 11.5773 13.0656Z" fill="#9B52DC"/>
                                            </svg>
                                            <span className='text-accent text-base font-semibold'>Upload new story</span>
                                            <div className='flex flex-col opacity-30 text-sm font-semibold gap-3 items-center text-center'>
                                                <span>Dimension: 1080x1920 pixels</span>
                                                <span>Format: MPEG, MP4</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <YouTube videoId={shortLinks[index]} opts={optShorts} />
                                            <div className='flex gap-3 items-center absolute left-3 bottom-3'>
                                                <button type='button' className='hover:scale-105 transition-all' onClick={() => handleModal(index)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.65625 24.75C3.65625 24.284 4.03401 23.9062 4.5 23.9062H22.5C22.966 23.9062 23.3438 24.284 23.3438 24.75C23.3438 25.216 22.966 25.5938 22.5 25.5938H4.5C4.03401 25.5938 3.65625 25.216 3.65625 24.75Z" fill="white"/>
                                                        <path d="M12.9601 16.7951L12.9601 16.7951L19.6164 10.1388C18.7104 9.76173 17.6375 9.14238 16.6227 8.12761C15.6078 7.11268 14.9884 6.03952 14.6113 5.13351L7.95494 11.7899L7.95489 11.79C7.43549 12.3094 7.17576 12.5691 6.95241 12.8555C6.68892 13.1933 6.46302 13.5588 6.27871 13.9455C6.12246 14.2734 6.00631 14.6218 5.774 15.3187L4.549 18.9937C4.43469 19.3367 4.52394 19.7148 4.77957 19.9704C5.03519 20.2261 5.4133 20.3153 5.75626 20.201L9.43126 18.976C10.1282 18.7437 10.4766 18.6275 10.8045 18.4713C11.1912 18.287 11.5567 18.0611 11.8945 17.7976C12.1809 17.5742 12.4407 17.3145 12.9601 16.7951Z" fill="white"/>
                                                        <path d="M21.4634 8.29175C22.8455 6.90962 22.8455 4.66873 21.4634 3.2866C20.0813 1.90447 17.8404 1.90447 16.4583 3.2866L15.6599 4.08493C15.6708 4.11795 15.6822 4.15142 15.6939 4.18532C15.9866 5.02875 16.5387 6.13441 17.5773 7.17302C18.6159 8.21163 19.7216 8.76374 20.565 9.05636C20.5987 9.06806 20.632 9.07935 20.6649 9.09024L21.4634 8.29175Z" fill="white"/>
                                                    </svg>
                                                </button>
                                                <button type='button' className='hover:scale-105 transition-all' onClick={() => handleRemoveShort(index)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                        <g clipPath="url(#clip0_7310_2795)">
                                                            <path d="M22.5 5.625C22.7984 5.625 23.0845 5.74353 23.2955 5.9545C23.5065 6.16548 23.625 6.45163 23.625 6.75C23.625 7.04837 23.5065 7.33452 23.2955 7.5455C23.0845 7.75647 22.7984 7.875 22.5 7.875H21.375L21.3716 7.95487L20.322 22.6597C20.2816 23.2274 20.0276 23.7587 19.6111 24.1465C19.1947 24.5344 18.6467 24.75 18.0776 24.75H8.92125C8.35216 24.75 7.8042 24.5344 7.38775 24.1465C6.97129 23.7587 6.71728 23.2274 6.67687 22.6597L5.62725 7.956C5.62554 7.92904 5.62479 7.90202 5.625 7.875H4.5C4.20163 7.875 3.91548 7.75647 3.7045 7.5455C3.49353 7.33452 3.375 7.04837 3.375 6.75C3.375 6.45163 3.49353 6.16548 3.7045 5.9545C3.91548 5.74353 4.20163 5.625 4.5 5.625H22.5ZM15.75 2.25C16.0484 2.25 16.3345 2.36853 16.5455 2.5795C16.7565 2.79048 16.875 3.07663 16.875 3.375C16.875 3.67337 16.7565 3.95952 16.5455 4.1705C16.3345 4.38147 16.0484 4.5 15.75 4.5H11.25C10.9516 4.5 10.6655 4.38147 10.4545 4.1705C10.2435 3.95952 10.125 3.67337 10.125 3.375C10.125 3.07663 10.2435 2.79048 10.4545 2.5795C10.6655 2.36853 10.9516 2.25 11.25 2.25H15.75Z" fill="white"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_7310_2795">
                                                            <rect width="27" height="27" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))}

                            <dialog id='my_modal_2' className='modal'>
                                <div className='modal-box max-w-4xl'>
                                    <div className='flex flex-col gap-3'>
                                        <label className='text-sm font-semibold uppercase'>Add Youtube Shorts</label>
                                        <input
                                            type='text'
                                            placeholder='Enter Youtube Shorts link'
                                            className='bg-gray-100 border border-gray-300 dark:border-gray-500 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                                            onChange={(event) => handleLinkShort(event, modalIndex)}
                                        />
                                    </div>

                                    <div className='modal-action w-full flex items-center justify-between'>
                                        <form method='dialog'>
                                            <button
                                                className='py-4 px-5 dark:text-slate-300 dark:bg-base-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                                                style={{
                                                    border: '1px solid #E2E2E2',
                                                    boxShadow: '0px 3px 0px 0px #E2E2E2',
                                                }}
                                                onClick={() => document.getElementById('my_modal_2').close()}
                                            >
                                                Cancel
                                            </button>
                                        </form>
                                        <form method='dialog'>
                                            <button
                                                className='py-4 px-5 dark:text-slate-300 dark:bg-base-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                                                style={{
                                                    border: '1px solid #E2E2E2',
                                                    boxShadow: '0px 3px 0px 0px #E2E2E2',
                                                }}
                                                onClick={handleSaveShort}
                                            >
                                                Save
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </>                      
                    </ul>
                </div>
            </div>

            <div className='w-full mt-8 px-9 py-7 flex justify-center items-center rounded-3xl bg-slate-100 dark:bg-base-100 border border-gray-200 dark:border-base-100'>
                <button className='flex flex-col items-center gap-2 text-accent transition-all hover:scale-105'>
                    <span className='flex items-center justify-center p-1 bg-accent rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M12.5458 9.17289H9.17387V12.5448C9.17387 12.7237 9.10282 12.8952 8.97635 13.0217C8.84988 13.1481 8.67835 13.2192 8.49949 13.2192C8.32063 13.2192 8.1491 13.1481 8.02263 13.0217C7.89616 12.8952 7.82511 12.7237 7.82511 12.5448V9.17289H4.45319C4.27433 9.17289 4.1028 9.10184 3.97633 8.97537C3.84986 8.8489 3.77881 8.67737 3.77881 8.49851C3.77881 8.31965 3.84986 8.14812 3.97633 8.02165C4.1028 7.89518 4.27433 7.82413 4.45319 7.82413H7.82511V4.45221C7.82511 4.27336 7.89616 4.10183 8.02263 3.97535C8.1491 3.84888 8.32063 3.77783 8.49949 3.77783C8.67835 3.77783 8.84988 3.84888 8.97635 3.97535C9.10282 4.10183 9.17387 4.27336 9.17387 4.45221V7.82413H12.5458C12.7246 7.82413 12.8962 7.89518 13.0226 8.02165C13.1491 8.14812 13.2202 8.31965 13.2202 8.49851C13.2202 8.67737 13.1491 8.8489 13.0226 8.97537C12.8962 9.10184 12.7246 9.17289 12.5458 9.17289Z" fill="white"/>
                        </svg>
                    </span>
                    Add story sections
                </button>
            </div>
            
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-4xl">
                    <div className='flex w-full flex-col gap-6'>
                        <h2 className='font-semibold text-xl mb-4'>Upload video cover</h2>
                        <div className='flex flex-col gap-3'>
                            <label className='text-sm font-semibold uppercase'>upload format</label>
                            <select className="select w-full bg-gray-100 border border-gray-300 dark:border-gray-500 rounded-xl dark:text-slate-300 dark:bg-base-100">
                                <option selected>
                                    YouTube Video Link (1080p)
                                </option>
                                <option>
                                    Other
                                </option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label className='text-sm font-semibold uppercase'>YouTube link</label>
                            <input 
                                type='text' 
                                placeholder="Enter link" 
                                className='bg-gray-100 border border-gray-300 dark:border-gray-500 rounded-xl text-sm py-5 px-6 dark:bg-base-100'
                                value={youtubeLink}
                                onChange={handleLinkChange}
                                >
                            </input>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h2 className='font-semibold text-xl'>Preview</h2>
                            
                            {isInvalidLink ? (
                                <span className='dark:text-slate-300'>Incorrect link</span>
                            ) : (
                                <div className='w-full h-80 rounded-3xl' style={{ borderRadius: '27px' }}>
                                    <iframe
                                    width='100%'
                                    height='100%'
                                    src={`https://www.youtube.com/embed/${youtubeLink.split('v=')[1]}`}
                                    frameBorder='0'
                                    allowFullScreen
                                    title='YouTube Video'
                                    ></iframe>
                                </div>
                            )}                            
                        </div>
                    </div>
                    <div className="modal-action w-full flex items-center justify-between">
                        <form method="dialog w-full">
                                <button 
                                    className='py-4 px-5 dark:text-slate-300 dark:bg-base-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                                    style={{
                                        border: '1px solid #E2E2E2',
                                        boxShadow: '0px 3px 0px 0px #E2E2E2',
                                    }}
                                >
                                    Cancel
                                </button>
                        </form>
                        <form method="dialog w-full">
                                <button 
                                    className="py-4 px-5 text-white dark:text-slate-300 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all"
                                    onClick={handleSave}
                                    style={{
                                        boxShadow: '0px 3px 0px 0px #803CBC',
                                        background: 'linear-gradient(0deg, #9B52DC 0%, #9B52DC 100%), #FDD04D',
                                    }}
                                >
                                    Save
                                </button>
                        </form>
                    </div>
                </div>
            </dialog>

            {console.log(selectedFile)}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-4xl">
                    <div className='flex flex-col gap-3'>
                        <img src={!selectedFile ? Avatar : selectedFile} className='w-32 h-32 border-white dark:border-base-100 rounded-full bg-purple-400' alt='avatar' />
                        <label className='text-sm font-semibold uppercase'>Change avatar</label>
                        <label class="form-control w-full max-w-xs">
                            <input 
                                type="file" 
                                class="file-input file-input-bordered w-full max-w-xs" 
                                onChange={handleFileChange}
                            />
                            <div class="label">
                                <span class="label-text-alt">JPG, GIF or PNG. 1MB max</span>
                            </div>
                        </label>
                    </div>
                    <div className='modal-action w-full flex items-center justify-between'>
                        <form method='dialog'>
                            <button
                                className='py-4 px-5 dark:text-slate-300 dark:bg-base-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                                style={{
                                    border: '1px solid #E2E2E2',
                                    boxShadow: '0px 3px 0px 0px #E2E2E2',
                                }}
                                onClick={() => document.getElementById('my_modal_3').close()}
                            >
                                Cancel
                            </button>
                        </form>
                        <form method='dialog'>
                            <button
                                className='py-4 px-5 dark:text-slate-300 dark:bg-base-100 font-semibold text-base flex items-center justify-center rounded-xl w-fit hover:scale-105 transition-all'
                                style={{
                                    border: '1px solid #E2E2E2',
                                    boxShadow: '0px 3px 0px 0px #E2E2E2',
                                }}
                                onClick={handleAvatar}
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            
        </>
    )
}

export default Shop