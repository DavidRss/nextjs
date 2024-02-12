import React from 'react';
import { useState, useEffect } from 'react';
import coins from '../../assets/new/Group.svg';
// import Circles from '../../assets/Group.svg'
// import avatarMain from '../../assets/avatarMain.png';

// import { useUser } from "../../services/UserContext";
// import { Link } from 'react-router-dom';
import headerCover from '../../assets/new/header-bg.png';

export default function Header() {

    /* Btns triggers */
    const [hovered, setHovered] = useState(false);

    // const { userData } = useUser();
    // const { name, img } = userData;

    const [days, setDays] = useState(5);
    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => (prevSeconds + 1) % 60);
            setMinutes(prevMinutes => (prevMinutes + Math.floor(seconds / 60)) % 60);
            setHours(prevHours => (prevHours + Math.floor(minutes / 60)) % 24);
            setDays(prevDays => prevDays + Math.floor(hours / 24));
        }, 1000); 

        return () => clearInterval(intervalId); 
    }, [seconds, minutes, hours]);


  return (
    <>  
       
        <div className='relative w-full flex justify-center items-center py-6 border-b border-sec overflow-hidden bg-main'>
            <div className="flex gap-5 relative z-20">
                <div>
                    <span className="countdown font-mono text-2xl md:text-4xl">
                        <span style={{"--value":days}}></span>
                        Days
                    </span>
                </div> 
                <div className='flex gap-1'>
                    <div>
                        <span className="countdown font-mono text-2xl md:text-4xl">
                            <span style={{"--value":hours}}></span>
                        :
                        </span>
                    </div> 
                    <div>
                        <span className="countdown font-mono text-2xl md:text-4xl">
                        <span style={{"--value":minutes}}></span>
                        :
                        </span>
                    </div> 
                    <div>
                        <span className="countdown font-mono text-2xl md:text-4xl">
                        <span style={{"--value":seconds}}></span>
                        </span>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1920" className='absolute z-10' height="118" viewBox="0 0 1920 118" fill="none">
                <g opacity="0.2">
                    <path d="M20 0H40L0 118H-20L20 0Z" fill="url(#paint0_linear_186_6290)"/>
                    <path d="M60 0H80L40 118H20L60 0Z" fill="url(#paint1_linear_186_6290)"/>
                    <path d="M100 0H120L80 118H60L100 0Z" fill="url(#paint2_linear_186_6290)"/>
                    <path d="M140 0H160L120 118H100L140 0Z" fill="url(#paint3_linear_186_6290)"/>
                    <path d="M180 0H200L160 118H140L180 0Z" fill="url(#paint4_linear_186_6290)"/>
                    <path d="M220 0H240L200 118H180L220 0Z" fill="url(#paint5_linear_186_6290)"/>
                    <path d="M260 0H280L240 118H220L260 0Z" fill="url(#paint6_linear_186_6290)"/>
                    <path d="M300 0H320L280 118H260L300 0Z" fill="url(#paint7_linear_186_6290)"/>
                    <path d="M340 0H360L320 118H300L340 0Z" fill="url(#paint8_linear_186_6290)"/>
                    <path d="M380 0H400L360 118H340L380 0Z" fill="url(#paint9_linear_186_6290)"/>
                    <path d="M420 0H440L400 118H380L420 0Z" fill="url(#paint10_linear_186_6290)"/>
                    <path d="M460 0H480L440 118H420L460 0Z" fill="url(#paint11_linear_186_6290)"/>
                    <path d="M500 0H520L480 118H460L500 0Z" fill="url(#paint12_linear_186_6290)"/>
                    <path d="M540 0H560L520 118H500L540 0Z" fill="url(#paint13_linear_186_6290)"/>
                    <path d="M580 0H600L560 118H540L580 0Z" fill="url(#paint14_linear_186_6290)"/>
                    <path d="M620 0H640L600 118H580L620 0Z" fill="url(#paint15_linear_186_6290)"/>
                    <path d="M660 0H680L640 118H620L660 0Z" fill="url(#paint16_linear_186_6290)"/>
                    <path d="M700 0H720L680 118H660L700 0Z" fill="url(#paint17_linear_186_6290)"/>
                    <path d="M740 0H760L720 118H700L740 0Z" fill="url(#paint18_linear_186_6290)"/>
                    <path d="M780 0H800L760 118H740L780 0Z" fill="url(#paint19_linear_186_6290)"/>
                    <path d="M820 0H840L800 118H780L820 0Z" fill="url(#paint20_linear_186_6290)"/>
                    <path d="M860 0H880L840 118H820L860 0Z" fill="url(#paint21_linear_186_6290)"/>
                    <path d="M900 0H920L880 118H860L900 0Z" fill="url(#paint22_linear_186_6290)"/>
                    <path d="M940 0H960L920 118H900L940 0Z" fill="url(#paint23_linear_186_6290)"/>
                    <path d="M980 0H1000L960 118H940L980 0Z" fill="url(#paint24_linear_186_6290)"/>
                    <path d="M1020 0H1040L1000 118H980L1020 0Z" fill="url(#paint25_linear_186_6290)"/>
                    <path d="M1060 0H1080L1040 118H1020L1060 0Z" fill="url(#paint26_linear_186_6290)"/>
                    <path d="M1100 0H1120L1080 118H1060L1100 0Z" fill="url(#paint27_linear_186_6290)"/>
                    <path d="M1140 0H1160L1120 118H1100L1140 0Z" fill="url(#paint28_linear_186_6290)"/>
                    <path d="M1180 0H1200L1160 118H1140L1180 0Z" fill="url(#paint29_linear_186_6290)"/>
                    <path d="M1220 0H1240L1200 118H1180L1220 0Z" fill="url(#paint30_linear_186_6290)"/>
                    <path d="M1260 0H1280L1240 118H1220L1260 0Z" fill="url(#paint31_linear_186_6290)"/>
                    <path d="M1300 0H1320L1280 118H1260L1300 0Z" fill="url(#paint32_linear_186_6290)"/>
                    <path d="M1340 0H1360L1320 118H1300L1340 0Z" fill="url(#paint33_linear_186_6290)"/>
                    <path d="M1380 0H1400L1360 118H1340L1380 0Z" fill="url(#paint34_linear_186_6290)"/>
                    <path d="M1420 0H1440L1400 118H1380L1420 0Z" fill="url(#paint35_linear_186_6290)"/>
                    <path d="M1460 0H1480L1440 118H1420L1460 0Z" fill="url(#paint36_linear_186_6290)"/>
                    <path d="M1500 0H1520L1480 118H1460L1500 0Z" fill="url(#paint37_linear_186_6290)"/>
                    <path d="M1540 0H1560L1520 118H1500L1540 0Z" fill="url(#paint38_linear_186_6290)"/>
                    <path d="M1580 0H1600L1560 118H1540L1580 0Z" fill="url(#paint39_linear_186_6290)"/>
                    <path d="M1620 0H1640L1600 118H1580L1620 0Z" fill="url(#paint40_linear_186_6290)"/>
                    <path d="M1660 0H1680L1640 118H1620L1660 0Z" fill="url(#paint41_linear_186_6290)"/>
                    <path d="M1700 0H1720L1680 118H1660L1700 0Z" fill="url(#paint42_linear_186_6290)"/>
                    <path d="M1740 0H1760L1720 118H1700L1740 0Z" fill="url(#paint43_linear_186_6290)"/>
                    <path d="M1780 0H1800L1760 118H1740L1780 0Z" fill="url(#paint44_linear_186_6290)"/>
                    <path d="M1820 0H1840L1800 118H1780L1820 0Z" fill="url(#paint45_linear_186_6290)"/>
                    <path d="M1860 0H1880L1840 118H1820L1860 0Z" fill="url(#paint46_linear_186_6290)"/>
                    <path d="M1900 0H1920L1880 118H1860L1900 0Z" fill="url(#paint47_linear_186_6290)"/>
                    <path d="M1940 0H1960L1920 118H1900L1940 0Z" fill="url(#paint48_linear_186_6290)"/>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint8_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint9_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint10_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint11_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint12_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint13_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint14_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint15_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint16_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint17_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint18_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint19_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint20_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint21_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint22_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint23_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint24_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint25_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint26_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint27_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint28_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint29_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint30_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint31_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint32_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint33_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint34_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint35_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint36_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint37_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint38_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint39_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint40_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint41_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint42_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint43_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint44_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint45_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint46_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint47_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                    <linearGradient id="paint48_linear_186_6290" x1="970" y1="0" x2="970" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#155804" stop-opacity="0.2"/>
                    <stop offset="1" stop-color="#125804"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div className='flex flex-col items-center relative w-full'>
            <div className='flex w-full justify-between items-center max-w-8xl pt-[23px] pb-[5px] px-6 z-20'>
                <h1 className='text-4xl font-black text-text'>Coflow</h1>
                <div className='hidden md:flex items-center gap-7'>
                    <button type='button' className='flex items-center justify-center text-2xl bg-[#CFE2F8] text-text font-semibold gap-4 transition-all hover:scale-105 bg-transparent border-0 hover:shadow-lg rounded-full px-7 py-4'>
                        8
                        <img src={coins} alt='coins'></img>                 
                    </button>
                    <button 
                        type='buttom' 
                        className='text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105 bg-main'
                    >
                        Connect
                    </button>
                </div>
            </div>
            <div className='relative z-30 sm:-bottom-5 max-h-720 w-full max-w-8xl px-4 3xl:px-0'>
                {/* <img src={headerCover} alt='cover' /> */}
                <iframe width="100%" height="420" src="https://www.youtube.com/embed/_E4XOfZACmY?si=rEhvNKgUYLc0Auxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <button 
                    type='button' 
                    className='flex md:hidden absolute items-center top-1/3 left-2/4 -translate-x-2/4 justify-start py-3 text-black bg-white bg-opacity-40 pl-3 pr-5 text-2xl font-semibold rounded-xl gap-5 transition-all hover:scale-105 hover:shadow-lg hover:shadow-main/50'
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={()=>document.getElementById('mainVideo').showModal()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className={`${hovered ? 'translate-x-2' : ''} transition-all`}>
                        <circle cx="25" cy="25" r="25" fill="#0074FF"/>
                        <path d="M19 17.5281C19 15.1477 21.6392 13.7155 23.635 15.0127L35.1303 22.4847C36.9503 23.6677 36.9503 26.3323 35.1303 27.5153L23.635 34.9873C21.6392 36.2845 19 34.8523 19 32.4719V17.5281Z" fill="white"/>
                    </svg>
                    <span className={`${hovered ? '-translate-y-1' : ''} transition-all whitespace-nowrap`}>Watch Video</span>
                </button>
                <button 
                    type='button' 
                    className='hidden md:flex absolute right-16 bottom-14 items-center justify-start py-3 text-white bg-white bg-opacity-20 pl-3 pr-5 text-2xl font-semibold rounded-xl gap-5 transition-all hover:scale-105 hover:shadow-lg hover:shadow-main/50'
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={()=>document.getElementById('mainVideo').showModal()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className={`${hovered ? 'translate-x-2' : ''} transition-all`}>
                        <circle cx="25" cy="25" r="25" fill="#0074FF"/>
                        <path d="M19 17.5281C19 15.1477 21.6392 13.7155 23.635 15.0127L35.1303 22.4847C36.9503 23.6677 36.9503 26.3323 35.1303 27.5153L23.635 34.9873C21.6392 36.2845 19 34.8523 19 32.4719V17.5281Z" fill="white"/>
                    </svg>
                    <span className={`${hovered ? '-translate-y-1' : ''} transition-all whitespace-nowrap`}>Watch Video</span>
                </button>
            </div>
        </div>
        <dialog id="mainVideo" className="modal">
            <div className="modal-box max-w-7xl pt-11 pb-0 px-0">
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-main text-main absolute right-2 top-2">✕</button>
                </form>
                <iframe
                    width='100%'
                    height='500px'
                    src={`https://www.youtube.com/embed/4kLviL8XwAI`}
                    frameBorder='0'
                    allowFullScreen
                    title='YouTube Video'
                ></iframe>
            </div>
        </dialog>
    </>
  )
}