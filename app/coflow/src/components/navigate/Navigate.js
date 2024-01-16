import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatarMain from '../../assets/new/avatar.png';
import shop from '../../assets/new/Shop.svg';
import star from '../../assets/new/Star.svg';
import chat from '../../assets/new/chat.svg';
import faq from '../../assets/new/Faq.svg';

const Navigate = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'border-main text-main' : '';
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const threshold = 530;
          if (window.scrollY >= threshold) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`w-full  flex items-center justify-center sticky navbar -top-0.5 z-50 ${isSticky ? 'shadow-md bg-secBg' : ''}`}>
            <div className={`w-full max-w-8xl px-16 hidden md:flex items-center shadow-lg rounded-xl relative py-2 ${isSticky ? 'px-0 shadow-none -top-0 w-full bg-secBg' : '-top-16 bg-container '}`}>
                <div className='flex w-full h-14 xl:h-24 gap-14 justify-center xl:justify-between'>
                    <div className={`relative -top-10 hidden xl:block ${isSticky ? 'hidden-on-sticky' : ''}`}>
                        <div className="avatar">
                            <div className="w-40 rounded-full ring-4 ring-gray-200 ">
                                <img src={avatarMain} alt="main avatar" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center xl:justify-between'>  
                        <div className='flex gap-10 items-center h-full w-full relative'>

                        <div class="text-white w-full h-full">
                            <ul className='flex items-center w-full justify-between gap-5 h-full flex-wrap'>
                                <Link to="/about" className='h-full'>
                                    <li className={`flex nav__item hover:border-b-8 border-main rounded-b items-center lg:text-2xl gap-3 h-full text-white hover:text-main font-semibold transition-all cursor-pointer ${isActive('/reward')} h-full  sm:text-center`}>
                                        <img src={shop} className='w-6 lg:w-11' alt='shop' />                                    
                                        Shop
                                    </li>
                                </Link>
                                <Link to="/reward" className='h-full'>
                                    <li className={`flex nav__item hover:border-b-8 border-main rounded-b items-center lg:text-2xl gap-3 h-full text-white hover:text-main font-semibold transition-all cursor-pointer ${isActive('/reward')} h-full  sm:text-center`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="48" viewBox="0 0 43 48" fill="none" className='w-6 lg:w-11'>
                                            <path d="M6.92452 24.9042C7.23592 23.8682 8.32623 23.2814 9.35981 23.5935C11.9732 24.3827 15.5475 25.2047 19.5455 25.417V18.6122C19.5455 17.5302 20.4205 16.6531 21.5 16.6531C22.5795 16.6531 23.4545 17.5302 23.4545 18.6122V25.417C27.4529 25.2049 31.0276 24.3828 33.6412 23.5935C34.6748 23.2814 35.7651 23.8682 36.0765 24.9042C36.3879 25.9402 35.8025 27.0331 34.7689 27.3453C31.9094 28.2089 27.9381 29.1246 23.4545 29.3404V39.1837C23.4545 40.2657 22.5795 41.1429 21.5 41.1429C20.4205 41.1429 19.5455 40.2657 19.5455 39.1837V29.3403C15.0624 29.1245 11.0915 28.2088 8.23213 27.3453C7.19856 27.0331 6.61312 25.9402 6.92452 24.9042Z" fill="#4E9D35"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4608 12.0101C5.23151 13.7946 1.22416 17.9281 0.453496 23.1811C-0.151165 27.3026 -0.151165 31.473 0.453496 35.5944C1.40615 42.0878 7.30465 46.8707 14.3434 47.6204C19.0961 48.1265 23.9039 48.1265 28.6566 47.6204C35.6953 46.8707 41.5938 42.0878 42.5465 35.5944C43.1512 31.473 43.1512 27.3026 42.5465 23.1811C41.7758 17.9281 37.7685 13.7946 32.5392 12.0101C33.5798 10.7416 34.2045 9.11742 34.2045 7.34694C34.2045 3.28934 30.923 0 26.875 0C24.7513 0 22.8386 0.905318 21.5 2.35193C20.1614 0.905318 18.2487 0 16.125 0C12.077 0 8.79545 3.28934 8.79545 7.34694C8.79545 9.11742 9.42023 10.7416 10.4608 12.0101ZM26.875 3.91837C24.9859 3.91837 23.4545 5.45339 23.4545 7.34694V10.7755H26.875C28.7641 10.7755 30.2955 9.24049 30.2955 7.34694C30.2955 5.45339 28.7641 3.91837 26.875 3.91837ZM19.5455 10.7755V7.34694C19.5455 5.45339 18.0141 3.91837 16.125 3.91837C14.2359 3.91837 12.7045 5.45339 12.7045 7.34694C12.7045 9.24049 14.2359 10.7755 16.125 10.7755H19.5455ZM21.5004 14.6939C21.5001 14.6939 21.5006 14.6939 21.5004 14.6939C23.7525 14.6939 26.0046 14.8131 28.2436 15.0516C33.9229 15.6564 38.0419 19.4087 38.679 23.7512C39.2282 27.4946 39.2282 31.2809 38.679 35.0243C38.0419 39.3669 33.9229 43.1191 28.2436 43.7239C23.7654 44.2009 19.2346 44.2009 14.7564 43.7239C9.07713 43.1191 4.95809 39.3669 4.32099 35.0243C3.77179 31.2809 3.77179 27.4946 4.32099 23.7512C4.95809 19.4087 9.07712 15.6564 14.7564 15.0516C16.9954 14.8131 19.2483 14.6939 21.5004 14.6939Z" fill="#4E9D35"/>
                                        </svg>
                                        Rewards
                                    </li>
                                </Link>
                                <Link to="/leaderboard" className='h-full'>
                                    <li className={`flex nav__item hover:border-b-8 border-main rounded-b items-center lg:text-2xl gap-3 h-full text-white hover:text-main font-semibold transition-all cursor-pointer ${isActive('/reward')} h-full  sm:text-center`}>
                                        <img src={star} className='w-6 lg:w-11' alt='leaderboard' />
                                        Leaderboard
                                    </li>
                                </Link>
                                <Link to="/chat" className='h-full'>
                                    <li className={`flex nav__item hover:border-b-8 border-main rounded-b items-center lg:text-2xl gap-3 h-full text-white hover:text-main font-semibold transition-all cursor-pointer ${isActive('/reward')} h-full  sm:text-center`}>
                                        <img src={chat} className='w-6 lg:w-11' alt='Chat' />
                                        Chat
                                    </li>
                                </Link>
                                <Link to="/about" className='h-full'>
                                    <li className={`flex nav__item hover:border-b-8 border-main rounded-b items-center lg:text-2xl gap-3 h-full text-white hover:text-main font-semibold transition-all cursor-pointer ${isActive('/reward')} h-full  sm:text-center`}>
                                        <img src={faq} className='w-6 lg:w-11' alt='faq' />
                                        FAQ
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
           </div>
        </section>
    );
};

export default Navigate;
