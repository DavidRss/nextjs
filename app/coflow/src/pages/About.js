import React from 'react';
import { useState, useEffect } from 'react';
import img1 from '../assets/new/image1.png';
import img2 from '../assets/new/image6.png';
import img3 from '../assets/new/image3.png';
import img4 from '../assets/new/image4.png';
import card from '../assets/new/card.png';
import aboutBg from '../assets/new/about11.png';
import about2 from '../assets/new/about22.png';
import star from '../assets/new/star-fill.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { itemsData } from '../stores/aboutData';
// import { Link } from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Main from '../layouts/Main/Main';
import Navigate from '../components/navigate/Navigate';

const Home = () => {

    const [data, setData] = useState();

    useEffect(()=>{
        itemsData ? setData(itemsData) : setData([]);
    },[]);

    const [swiper1, setSwiper1] = useState(null);
    const [swiper2, setSwiper2] = useState(null);

    const handleRadioChange1 = (index) => {
      if (swiper1) {
        swiper1.slideTo(index);
      }
    };
  
    const handleRadioChange2 = (index) => {
      if (swiper2) {
        swiper2.slideTo(index);
      }
    };  

    return (
        <Main>
            <Header />
            <Navigate />
            <section className='flex w-full flex-col items-center justify-center'>
                <div className='max-w-7xl w-full flex flex-col xl:flex-row pt-5 md:pt-16 pb-16 items-center xl:items-start gap-14 px-4 3xl:px-0'>
                    <div className='h-full relative rounded-3xl bg-secBg flex items-center justify-center w-full min-h-60' style={{maxWidth: '489px', maxHeight: '590px'}}>
                            <Swiper
                                grabCursor={true}
                                effect="creative"
                                creativeEffect={{
                                  prev: {
                                    shadow: true,
                                    origin: 'left center',
                                    translate: ['-5%', 0, -200],
                                    rotate: [0, 100, 0],
                                  },
                                  next: {
                                    origin: 'right center',
                                    translate: ['5%', 0, -200],
                                    rotate: [0, -100, 0],
                                  },
                                }}
                                modules={[EffectCreative]}
                                className="mySwiper6"
                                onSwiper={(s) => setSwiper1(s)}
                            >
                                <SwiperSlide>
                                    <img 
                                        src={card} 
                                        alt='card'
                                        style={{
                                            width: '480px', 
                                            height: '590px', 
                                            display: 'block',
                                            objectPosition: 'bottom',
                                            objectFit: 'cover',
                                            border: '9px solid rgba(255, 255, 255, 0.20)',
                                            borderRadous: '30px'
                                        }}
                                        className='rounded-3xl'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img 
                                        src={card} 
                                        alt='card'
                                        style={{
                                            width: '480px', 
                                            height: '590px', 
                                            display: 'block',
                                            objectPosition: 'bottom',
                                            objectFit: 'cover',
                                            border: '9px solid rgba(255, 255, 255, 0.20)',
                                            borderRadous: '30px'
                                        }}
                                        className='rounded-3xl'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img 
                                        src={card} 
                                        alt='card'
                                        style={{
                                            width: '480px', 
                                            height: '590px', 
                                            display: 'block',
                                            objectPosition: 'bottom',
                                            objectFit: 'cover',
                                            border: '9px solid rgba(255, 255, 255, 0.20)',
                                            borderRadous: '30px'
                                        }}
                                        className='rounded-3xl'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img 
                                        src={card} 
                                        alt='card'
                                        style={{
                                            width: '480px', 
                                            height: '590px', 
                                            display: 'block',
                                            objectPosition: 'bottom',
                                            objectFit: 'cover',
                                            border: '9px solid rgba(255, 255, 255, 0.20)',
                                            borderRadous: '30px'
                                        }}
                                        className='rounded-3xl'
                                    />
                                </SwiperSlide>
                            </Swiper>
                            <div className='block lg:hidden absolute rounded-lg -bottom-5 uppercase px-5 py-4 font-semibold text-white z-50' style={{ background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%) #4E9D35' }}>
                                platinum pack
                            </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='hidden lg:flex badge uppercase px-5 py-4 font-semibold text-white' style={{ background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%) #4E9D35' }}>
                            platinum pack
                        </div>
                        <h2 className='text-4xl text-center lg:text-left lg:text-6xl font-semibold text-white'>Platinum Pack</h2>
                        <div className='flex flex-col gap-5 max-w-4xl'>
                            <p className='text-lg lg:text-2xl'>Le pack platinum contient:</p>
                            <ul className='flex flex-col text-lg lg:text-2xl gap-1 list-disc pl-5'>
                                <li>Un grand merci de toute l’équipe! et ton nom dans le générique de la vidéo</li>
                                <li>Un ticket de participation à la loterie</li>
                                <li>Et le tee-shirt premium dans la couleur de ton choix!</li>
                            </ul>
                            <p className='text-lg lg:text-2xl'>
                                C’est la pièce centrale de cette collection, il est imprimé en France et fait à partir de coton 100% biologique ! Crois moi on a vraiment mis <br/> le paquet sur la qualité
                            </p>
                        </div>
                        <div className='flex flex-col md:flex-row md:items-start gap-4 lg:gap-14'>
                            <div className='flex flex-col gap-5'>
                                <span className='uppercase text-lg font-semibold'>Colors:</span>
                                <div className='flex items-center gap-3'>
                                    <input
                                        type="radio"
                                        name="radio-2"
                                        style={{ background: '#0041DF' }}
                                        className="radio checked:bg-white"
                                        defaultChecked
                                        onChange={() => handleRadioChange1(0)}
                                        />
                                        <input
                                        type="radio"
                                        name="radio-2"
                                        style={{ background: '#FF0000' }}
                                        className="radio checked:bg-white"
                                        onChange={() => handleRadioChange1(1)}
                                        />
                                        <input
                                        type="radio"
                                        name="radio-2"
                                        style={{ background: '#21344B' }}
                                        className="radio checked:bg-white"
                                        onChange={() => handleRadioChange1(2)}
                                        />
                                        <input
                                        type="radio"
                                        name="radio-2"
                                        style={{ background: '#FFA825' }}
                                        className="radio checked:bg-white"
                                        onChange={() => handleRadioChange1(3)}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <span className='uppercase text-lg font-semibold'>Materials:</span>
                                <p className='text-xl lg:text-2xl'>100% Organic Cotton</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <span className='uppercase text-lg font-semibold'>Sizes:</span>
                                <div className='flex items-center gap-3'>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main hover:shadow-lg hover:shadow-main/50'>XS</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main opacity-30 cursor-none'>S</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main hover:shadow-lg hover:shadow-main/50'>M</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main opacity-30 cursor-none'>L</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main hover:shadow-lg hover:shadow-main/50'>XL</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main hover:shadow-lg hover:shadow-main/50'>XXL</button>
                                </div>
                                <button type='button' className='flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" >
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8295 1.12803C17.3255 -0.37601 14.8869 -0.37601 13.3829 1.12803L1.12803 13.3829C-0.376009 14.8869 -0.37601 17.3255 1.12803 18.8295L3.17051 20.872C4.67454 22.376 7.11307 22.376 8.61711 20.872L20.872 8.61711C22.376 7.11307 22.376 4.67454 20.872 3.17051L18.8295 1.12803ZM14.7445 2.48968C15.4966 1.73766 16.7158 1.73766 17.4678 2.48968L19.5103 4.53216C20.2623 5.28418 20.2623 6.50344 19.5103 7.25546L18.7434 8.02242L17.7499 7.02892C17.3738 6.65291 16.7642 6.65291 16.3882 7.02892C16.0122 7.40493 16.0122 8.01456 16.3882 8.39057L17.3817 9.38408L16.3363 10.4295L13.8985 7.99176C13.5225 7.61575 12.9129 7.61575 12.5369 7.99176C12.1609 8.36776 12.1609 8.9774 12.5369 9.35341L14.9746 11.7912L13.9292 12.8366L12.9357 11.8431C12.5597 11.4671 11.95 11.4671 11.574 11.8431C11.198 12.2191 11.198 12.8287 11.574 13.2047L12.5675 14.1982L11.5221 15.2437L9.08436 12.8059C8.70835 12.4299 8.09871 12.4299 7.7227 12.8059C7.34669 13.1819 7.34669 13.7916 7.7227 14.1676L10.1605 16.6053L9.11503 17.6508L8.12152 16.6572C7.74551 16.2812 7.13588 16.2812 6.75987 16.6572C6.38386 17.0333 6.38386 17.6429 6.75987 18.0189L7.75337 19.0124L7.25546 19.5103C6.50344 20.2623 5.28418 20.2623 4.53216 19.5103L2.48968 17.4678C1.73766 16.7158 1.73766 15.4966 2.48968 14.7445L14.7445 2.48968Z" fill="#fff"/>
                                    </svg>
                                    <span className='text-xl pb-1 border-b border-main'>Size Guide</span>
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center gap-8 pt-8 border-t' style={{borderColor: '#D9D9D9'}}>
                            <div className='flex flex-col gap-3'>
                                <span className='text-4xl font-semibold text-white'>35€</span>
                                <span className='font-semibold text-lg' style={{color: '#6D6D6D'}}>6 contributors</span>
                            </div>
                            <button 
                                type='buttom' 
                                className='text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105'
                                style={{
                                    background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                                    boxShadow: ' 0px 4px 0px 0px #196700',
                                }}
                            >
                                Participate
                            </button>
                        </div>
                    </div>
                </div>
                <div className='max-w-7xl w-full flex flex-col xl:flex-row-reverse pt-5 pb-20 items-center xl:items-start gap-14 px-4 3xl:px-0'>
                    <div className='h-full relative rounded-3xl bg-secBg flex items-center justify-center w-full min-h-60' style={{maxWidth: '489px', maxHeight: '590px'}}>
                            <Swiper
                                grabCursor={true}
                                effect="creative"
                                creativeEffect={{
                                  prev: {
                                    shadow: true,
                                    origin: 'left center',
                                    translate: ['-5%', 0, -200],
                                    rotate: [0, 100, 0],
                                  },
                                  next: {
                                    origin: 'right center',
                                    translate: ['5%', 0, -200],
                                    rotate: [0, -100, 0],
                                  },
                                }}
                                modules={[EffectCreative]}
                                className="mySwiper6"
                                onSwiper={(s) => setSwiper2(s)}
                            >
                                <SwiperSlide>
                                    <img 
                                        src={card} 
                                        alt='card'
                                        style={{
                                            width: '480px', 
                                            height: '590px', 
                                            display: 'block',
                                            objectPosition: 'bottom',
                                            objectFit: 'cover',
                                            border: '9px solid rgba(255, 255, 255, 0.20)',
                                            borderRadous: '30px'
                                        }}
                                        className='rounded-3xl'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img 
                                        src={card} 
                                        alt='card'
                                        style={{
                                            width: '480px', 
                                            height: '590px', 
                                            display: 'block',
                                            objectPosition: 'bottom',
                                            objectFit: 'cover',
                                            border: '9px solid rgba(255, 255, 255, 0.20)',
                                            borderRadous: '30px'
                                        }}
                                        className='rounded-3xl'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img 
                                        src={card} 
                                        alt='card'
                                        style={{
                                            width: '480px', 
                                            height: '590px', 
                                            display: 'block',
                                            objectPosition: 'bottom',
                                            objectFit: 'cover',
                                            border: '9px solid rgba(255, 255, 255, 0.20)',
                                            borderRadous: '30px'
                                        }}
                                        className='rounded-3xl'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img 
                                        src={card} 
                                        alt='card'
                                        style={{
                                            width: '480px', 
                                            height: '590px', 
                                            display: 'block',
                                            objectPosition: 'bottom',
                                            objectFit: 'cover',
                                            border: '9px solid rgba(255, 255, 255, 0.20)',
                                            borderRadous: '30px'
                                        }}
                                        className='rounded-3xl'
                                    />
                                </SwiperSlide>
                            </Swiper>
                            <div className='block lg:hidden absolute rounded-lg -bottom-5 uppercase px-5 py-4 font-semibold text-white z-50' style={{ background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%) #4E9D35' }}>
                                platinum pack
                            </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='hidden lg:flex badge uppercase px-5 py-4 font-semibold text-white' style={{ background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%) #4E9D35' }}>
                            platinum pack
                        </div>
                        <h2 className='text-4xl text-center lg:text-left lg:text-6xl font-semibold text-white'>Platinum Pack</h2>
                        <div className='flex flex-col gap-5 max-w-4xl'>
                            <p className='text-lg lg:text-2xl'>Le pack platinum contient:</p>
                            <ul className='flex flex-col text-lg lg:text-2xl gap-1 list-disc pl-5'>
                                <li>Un grand merci de toute l’équipe! et ton nom dans le générique de la vidéo</li>
                                <li>Un ticket de participation à la loterie</li>
                                <li>Et le tee-shirt premium dans la couleur de ton choix!</li>
                            </ul>
                            <p className='text-lg lg:text-2xl'>
                                C’est la pièce centrale de cette collection, il est imprimé en France et fait à partir de coton 100% biologique ! Crois moi on a vraiment mis <br/> le paquet sur la qualité
                            </p>
                        </div>
                        <div className='flex flex-col md:flex-row md:items-start gap-4 lg:gap-14'>
                            <div className='flex flex-col gap-5'>
                                <span className='uppercase text-lg font-semibold'>Colors:</span>
                                <div className='flex items-center gap-3'>
                                    <input
                                        type="radio"
                                        name="radio-1"
                                        style={{ background: '#0041DF' }}
                                        className="radio checked:bg-white"
                                        defaultChecked
                                        onChange={() => handleRadioChange2(0)}
                                        />
                                        <input
                                        type="radio"
                                        name="radio-1"
                                        style={{ background: '#FF0000' }}
                                        className="radio checked:bg-white"
                                        onChange={() => handleRadioChange2(1)}
                                        />
                                        <input
                                        type="radio"
                                        name="radio-1"
                                        style={{ background: '#21344B' }}
                                        className="radio checked:bg-white"
                                        onChange={() => handleRadioChange2(2)}
                                        />
                                        <input
                                        type="radio"
                                        name="radio-1"
                                        style={{ background: '#FFA825' }}
                                        className="radio checked:bg-white"
                                        onChange={() => handleRadioChange2(3)}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <span className='uppercase text-lg font-semibold'>Materials:</span>
                                <p className='text-xl lg:text-2xl'>100% Organic Cotton</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <span className='uppercase text-lg font-semibold'>Sizes:</span>
                                <div className='flex items-center gap-3'>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main hover:shadow-lg hover:shadow-main/50'>XS</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main opacity-30 cursor-none'>S</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main hover:shadow-lg hover:shadow-main/50'>M</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main opacity-30 cursor-none'>L</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main hover:shadow-lg hover:shadow-main/50'>XL</button>
                                   <button className='flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main hover:shadow-lg hover:shadow-main/50'>XXL</button>
                                </div>
                                <button type='button' className='flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" >
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8295 1.12803C17.3255 -0.37601 14.8869 -0.37601 13.3829 1.12803L1.12803 13.3829C-0.376009 14.8869 -0.37601 17.3255 1.12803 18.8295L3.17051 20.872C4.67454 22.376 7.11307 22.376 8.61711 20.872L20.872 8.61711C22.376 7.11307 22.376 4.67454 20.872 3.17051L18.8295 1.12803ZM14.7445 2.48968C15.4966 1.73766 16.7158 1.73766 17.4678 2.48968L19.5103 4.53216C20.2623 5.28418 20.2623 6.50344 19.5103 7.25546L18.7434 8.02242L17.7499 7.02892C17.3738 6.65291 16.7642 6.65291 16.3882 7.02892C16.0122 7.40493 16.0122 8.01456 16.3882 8.39057L17.3817 9.38408L16.3363 10.4295L13.8985 7.99176C13.5225 7.61575 12.9129 7.61575 12.5369 7.99176C12.1609 8.36776 12.1609 8.9774 12.5369 9.35341L14.9746 11.7912L13.9292 12.8366L12.9357 11.8431C12.5597 11.4671 11.95 11.4671 11.574 11.8431C11.198 12.2191 11.198 12.8287 11.574 13.2047L12.5675 14.1982L11.5221 15.2437L9.08436 12.8059C8.70835 12.4299 8.09871 12.4299 7.7227 12.8059C7.34669 13.1819 7.34669 13.7916 7.7227 14.1676L10.1605 16.6053L9.11503 17.6508L8.12152 16.6572C7.74551 16.2812 7.13588 16.2812 6.75987 16.6572C6.38386 17.0333 6.38386 17.6429 6.75987 18.0189L7.75337 19.0124L7.25546 19.5103C6.50344 20.2623 5.28418 20.2623 4.53216 19.5103L2.48968 17.4678C1.73766 16.7158 1.73766 15.4966 2.48968 14.7445L14.7445 2.48968Z" fill="#fff"/>
                                    </svg>
                                    <span className='text-xl pb-1 border-b border-main'>Size Guide</span>
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center gap-8 pt-8 border-t' style={{borderColor: '#D9D9D9'}}>
                            <div className='flex flex-col gap-3'>
                                <span className='text-4xl font-semibold text-white'>35€</span>
                                <span className='font-semibold text-lg' style={{color: '#6D6D6D'}}>6 contributors</span>
                            </div>
                            <button 
                                type='buttom' 
                                className='text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105'
                                style={{
                                    background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                                    boxShadow: ' 0px 4px 0px 0px #196700',
                                }}
                            >
                                Participate
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex w-full justify-center py-10 3xl:py-20 bg-thrBg' style={{borderTop: '10px solid #404040'}}>
                <div className='max-w-7xl w-full flex flex-col gap-14 px-4 3xl:px-0'>
                    <h2 className='text-4xl font-semibold px-4 xl:px-0'>Another Products:</h2>
                    <Swiper 
                        spaceBetween={40}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        style={{ width: '100%', height: '100%'}}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            768: {
                               slidesPerView: 1,
                               maxWidth: '425px',
                            },
                            1024: {
                               slidesPerView: 3,
                            },
                         }}
                    >

                        {data && data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="card w-full shadow-xl mb-12" style={{background: 'rgba(255, 255, 255, 0.07)'}}>
                                    <figure className='p-5 h-full' style={{background: 'rgba(255, 255, 255, 0.07)'}}><img src={item.img} alt="Shoes" /></figure>
                                    <div className="py-4 px-5 xl:card-body border-0 rounded-b-xl flex flex-col justify-between h-full" style={{background: 'rgba(255, 255, 255, 0.07)'}}>
                                        <div className='flex flex-col gap-2'>
                                            <h2 className="card-title font-semibold text-xl text-white">{item.title}</h2>
                                            <ul className='text-left mb-8 ml-4 list-disc text-sm xl:text-base text-white font-normal'>
                                                {item.desc.map((descItem, descIndex) => (
                                                    <li className='desc-item opacity-50 text-white' key={descIndex}>{descItem}</li>
                                                ))}
                                            </ul> 
                                        </div>                               
                                        <div className='flex w-full justify-between items-center'>
                                            <div className='flex flex-col items-start'>
                                                <span className='text-main text-3xl font-extrabold'>{item.price} €</span>
                                                <span className='text-gray-400 text-sm font-normal'>{item.contributions} contributions</span>
                                            </div>
                                            <button 
                                                type='buttom' 
                                                className='text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105'
                                                style={{
                                                    background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                                                    boxShadow: ' 0px 4px 0px 0px #196700',
                                                }}
                                            >
                                                Participate
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </Swiper>                    
                </div>
            </section>
            <section className='flex w-full bg-secBg justify-center'>
                <div className='max-w-7xl w-full flex py-5 3xl:py-10 items-center px-4 3xl:px-0 flex-col md:flex-row gap-5 md:gap-0'>
                    <span className='flex justify-center items-center p-8 rounded-full border-4' style={{background: '#414141', borderColor: 'rgba(255, 255, 255, 0.07)'}}>
                        <img src={star} alt='levels' />
                    </span>
                    <div className='flex flex-col items-center w-full px-16'>
                        <div className='w-full flex justify-between items-center'>
                            <span className='font-bold text-2xl mb-5'>Level 1</span>
                            <span className='font-bold text-2xl mb-5'>18%</span>
                        </div>
                        <progress className="progress progress-success h-4" value="40" max="100"></progress>
                    </div>
                    <button 
                        type='buttom' 
                        className='text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105'
                        style={{
                            background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                            boxShadow: ' 0px 4px 0px 0px #196700',
                        }}
                    >
                        Participate
                    </button>
                </div>
            </section>       
        <Footer>
            <section className='py-5 lg:py-14 flex justify-center bg-thrBg'>
                <div className='max-w-7xl w-full flex flex-col-reverse items-center xl:flex-row gap-5 py-16 justify-between xl:items-start px-4 3xl:px-0'>
                    <div className='flex flex-col gap-10'>
                        <h2 className='text-4xl font-semibold hidden xl:block'>
                            About This Project
                        </h2>
                        <div className='flex flex-col gap-3'>
                            <p className='text-xl max-w-4xl'>
                                Salut les potes!
                            </p>
                            <p className='text-xl max-w-4xl'>
                                Imaginez une vidéo Minecraft IRL avec un scénario incroyable, des costumes et des décors qui déchirent et pleins d’accessoires pour donner vie à Minecraft dans le vrai monde! C’est un projet qui me tient vraiment à coeur et que je travaille avec mes équipes depuis longtemps et ça va enfin exister! Mais pour ça j’ai besoin de vous: je veux que ça soit une aventure en équipe et vous pouvez tous participer en soutenant le projet! 
                            </p>   
                            <p className='text-xl max-w-4xl'>
                                Tous les bénéfices tirés des produits que vous allez acheter font permettre de financer la vidéo (et oui parce que pour faire une dinguerie pareille, on a besoin de budget pour les décors, les caméras, l’équipe, et peut être même des invités surprise…).
                            </p>   
                        </div>
                        <button 
                            type='buttom' 
                            className='text-white w-fit py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105'
                            style={{
                                background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                                boxShadow: ' 0px 4px 0px 0px #196700',
                            }}
                        >
                            Read More
                        </button>
                        <div className='flex items-center gap-5 xl:gap-16 flex-wrap px-4 3xl:px-0'>
                            <div className='flex items-center gap-4'>
                                <div 
                                    className='p-3 flex justify-center items-center w-14 h-14 rounded-xl'
                                    style={{
                                        background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                                        boxShadow: ' 0px 4px 0px 0px #196700',
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="48" viewBox="0 0 46 48" fill="none">
                                        <g filter="url(#filter0_d_187_6945)">
                                            <path d="M25 9C25 7.89543 24.1046 7 23 7C21.8954 7 21 7.89543 21 9V9.39046C17.6144 10.2079 15 13.0735 15 16.8974C15 19.513 16.029 21.3562 17.623 22.6358C19.0235 23.76 20.8105 24.3919 22.2174 24.8895L22.3326 24.9302C23.9171 25.4911 25.0716 25.9182 25.8858 26.561C26.5399 27.0774 27 27.7525 27 29.1026C27 31.2109 25.3292 32.8462 23 32.8462C20.9279 32.8462 19 30.9908 19 28.3846C19 27.28 18.1046 26.3846 17 26.3846C15.8954 26.3846 15 27.28 15 28.3846C15 32.224 17.4734 35.6323 21 36.5833V37C21 38.1046 21.8954 39 23 39C24.1046 39 25 38.1046 25 37V36.6095C28.3856 35.7921 31 32.9265 31 29.1026C31 26.504 29.9601 24.6812 28.3642 23.4214C26.9829 22.3309 25.2222 21.7089 23.8302 21.2171L23.6674 21.1595C22.0909 20.6014 20.9379 20.1674 20.127 19.5164C19.471 18.9899 19 18.2904 19 16.8974C19 14.7891 20.6708 13.1538 23 13.1538C25.0721 13.1538 27 15.0092 27 17.6154C27 18.72 27.8954 19.6154 29 19.6154C30.1046 19.6154 31 18.72 31 17.6154C31 13.776 28.5266 10.3677 25 9.41673V9Z" fill="white"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0ZM4 23C4 12.5066 12.5066 4 23 4C33.4934 4 42 12.5066 42 23C42 33.4934 33.4934 42 23 42C12.5066 42 4 33.4934 4 23Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_187_6945" x="0" y="0" width="46" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="2"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.157371 0 0 0 0 0.410085 0 0 0 0 0.0763733 0 0 0 1 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_187_6945"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_187_6945" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-4xl font-semibold'>25.6K</h3>
                                    <span className='text-lg font-semibold uppercase'>Amount raised</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div 
                                    style={{
                                        background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                                        boxShadow: ' 0px 4px 0px 0px #196700',
                                    }} 
                                    className='p-3 flex justify-center items-center w-14 h-14 rounded-xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="44" viewBox="0 0 30 44" fill="none">
                                        <g filter="url(#filter0_d_187_7081)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 0.5C10.7877 0.5 7 4.41339 7 9C7 11.0731 7.57966 13.5787 8.87003 15.6281C10.1897 17.7241 12.3805 19.5 15.5 19.5C18.6195 19.5 20.8103 17.7241 22.13 15.6281C23.4203 13.5787 24 11.0731 24 9C24 4.41339 20.2123 0.5 15.5 0.5ZM11 9C11 6.58661 13.0326 4.5 15.5 4.5C17.9674 4.5 20 6.58661 20 9C20 10.4269 19.5797 12.1713 18.745 13.4969C17.9397 14.7759 16.8805 15.5 15.5 15.5C14.1195 15.5 13.0603 14.7759 12.255 13.4969C11.4203 12.1713 11 10.4269 11 9Z" fill="white"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 21.5C7.1984 21.5 0 26.5264 0 33.6818C0 35.4499 0.466075 36.9905 1.46983 38.225C2.45236 39.4333 3.79425 40.156 5.19892 40.6048C7.90866 41.4705 11.5014 41.5 15 41.5C18.4986 41.5 22.0913 41.4705 24.8011 40.6048C26.2057 40.156 27.5476 39.4333 28.5302 38.225C29.5339 36.9905 30 35.4499 30 33.6818C30 26.5264 22.8016 21.5 15 21.5ZM4 33.6818C4 29.5907 8.44219 25.5 15 25.5C21.5578 25.5 26 29.5907 26 33.6818C26 34.7254 25.7385 35.3179 25.4266 35.7015C25.0935 36.1112 24.5316 36.4917 23.5837 36.7945C21.5884 37.432 18.6811 37.5 15 37.5C11.3189 37.5 8.41164 37.432 6.4163 36.7945C5.46843 36.4917 4.90652 36.1112 4.57338 35.7015C4.26146 35.3179 4 34.7254 4 33.6818Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_187_7081" x="0" y="0.5" width="30" height="43" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="2"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.157371 0 0 0 0 0.410085 0 0 0 0 0.0763733 0 0 0 1 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_187_7081"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_187_7081" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-4xl font-semibold'>2.6M</h3>
                                    <span className='text-lg font-semibold uppercase'>Participants</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div 
                                    style={{
                                        background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                                        boxShadow: ' 0px 4px 0px 0px #196700',
                                    }}
                                    className='p-3 flex justify-center items-center w-14 h-14 rounded-xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="48" viewBox="0 0 46 48" fill="none">
                                        <g filter="url(#filter0_d_187_7075)">
                                            <path d="M21.9972 0.0215015C22.3298 0.0072124 22.6641 0 23 0C35.7025 0 46 10.2975 46 23C46 35.7025 35.7025 46 23 46C22.6641 46 22.3298 45.9928 21.9972 45.9785C20.8937 45.9311 20.0375 44.998 20.0849 43.8945C20.1323 42.7909 21.0654 41.9348 22.1689 41.9822C22.4443 41.994 22.7214 42 23 42C33.4934 42 42 33.4934 42 23C42 12.5066 33.4934 4 23 4C22.7214 4 22.4443 4.00598 22.1689 4.01782C21.0654 4.06523 20.1323 3.20905 20.0849 2.1055C20.0375 1.00195 20.8937 0.0689124 21.9972 0.0215015Z" fill="white"/>
                                            <path d="M15.0745 3.44396C15.5854 4.4233 15.2056 5.63134 14.2263 6.14219C13.7352 6.39837 13.2565 6.67544 12.7916 6.97225C11.8606 7.56661 10.624 7.29368 10.0297 6.36266C9.43529 5.43163 9.70822 4.19506 10.6392 3.6007C11.202 3.24147 11.7815 2.90599 12.3763 2.5957C13.3556 2.08484 14.5637 2.46462 15.0745 3.44396Z" fill="white"/>
                                            <path d="M6.36266 10.0297C7.29368 10.624 7.56661 11.8606 6.97225 12.7916C6.67544 13.2565 6.39837 13.7352 6.14219 14.2263C5.63134 15.2056 4.4233 15.5854 3.44396 15.0745C2.46462 14.5637 2.08484 13.3556 2.5957 12.3763C2.90599 11.7815 3.24147 11.202 3.6007 10.6392C4.19506 9.70822 5.43163 9.4353 6.36266 10.0297Z" fill="white"/>
                                            <path d="M2.1055 20.0849C3.20906 20.1323 4.06523 21.0654 4.01782 22.1689C4.00598 22.4443 4 22.7214 4 23C4 23.2786 4.00598 23.5557 4.01782 23.8311C4.06523 24.9346 3.20905 25.8677 2.1055 25.9151C1.00195 25.9625 0.0689124 25.1063 0.0215015 24.0028C0.0072124 23.6702 0 23.3359 0 23C0 22.6641 0.00721252 22.3298 0.0215017 21.9972C0.0689126 20.8937 1.00195 20.0375 2.1055 20.0849Z" fill="white"/>
                                            <path d="M3.44396 30.9255C4.4233 30.4146 5.63134 30.7944 6.14219 31.7737C6.39837 32.2648 6.67544 32.7435 6.97225 33.2084C7.56661 34.1394 7.29368 35.376 6.36266 35.9703C5.43163 36.5647 4.19506 36.2918 3.6007 35.3608C3.24147 34.798 2.90599 34.2185 2.5957 33.6237C2.08484 32.6444 2.46462 31.4363 3.44396 30.9255Z" fill="white"/>
                                            <path d="M10.0297 39.6373C10.624 38.7063 11.8606 38.4334 12.7916 39.0277C13.2565 39.3246 13.7352 39.6016 14.2263 39.8578C15.2056 40.3687 15.5854 41.5767 15.0745 42.556C14.5637 43.5354 13.3556 43.9152 12.3763 43.4043C11.7815 43.094 11.202 42.7585 10.6392 42.3993C9.70822 41.8049 9.4353 40.5684 10.0297 39.6373Z" fill="white"/>
                                            <path d="M34.9143 16.4342C35.6953 15.6532 35.6953 14.3869 34.9143 13.6058C34.1332 12.8248 32.8669 12.8248 32.0859 13.6058L18.3801 27.3116L13.4943 22.4258C12.7132 21.6448 11.4469 21.6448 10.6659 22.4258C9.88482 23.2069 9.88482 24.4732 10.6659 25.2542L16.9659 31.5542C17.7469 32.3353 19.0132 32.3353 19.7943 31.5542L34.9143 16.4342Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_187_7075" x="0" y="0" width="46" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="2"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.157371 0 0 0 0 0.410085 0 0 0 0 0.0763733 0 0 0 1 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_187_7075"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_187_7075" result="shape"/>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-4xl font-semibold'>86%</h3>
                                    <span className='text-lg font-semibold uppercase'>progress</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className='relative rounded-3xl flex items-center justify-center cursor-pointer'
                        onClick={()=>document.getElementById('my_modal_1').showModal()}
                    >
                        <img 
                            src={aboutBg} 
                            alt='about' 
                            style={{maxHeight: '840px', minHeight: '500px'}}
                        />
                        <svg className='hover:scale-105 transition-all absolute' xmlns="http://www.w3.org/2000/svg" width="120" height="124" viewBox="0 0 120 124" fill="none">
                            <g filter="url(#filter0_d_187_6898)">
                                <circle cx="60" cy="60" r="60" fill="url(#paint0_linear_187_6898)"/>
                            </g>
                            <path d="M46.6665 45.1585C46.6665 41.2026 51.0427 38.8134 54.3703 40.9526L77.4573 55.7942C80.519 57.7624 80.519 62.2378 77.4573 64.206L54.3703 79.0477C51.0427 81.1868 46.6665 78.7976 46.6665 74.8418V45.1585Z" fill="white"/>
                            <defs>
                                <filter id="filter0_d_187_6898" x="0" y="0" width="120" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0972611 0 0 0 0 0.404606 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_187_6898"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_187_6898" result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_187_6898" x1="0.000332624" y1="120" x2="120" y2="9.65892e-05" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#328019"/>
                                <stop offset="1" stop-color="#5EAC0C"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h2 className='text-4xl font-semibold text-center block xl:hidden'>
                        About This Project
                    </h2>
                    <dialog id="my_modal_1" className="modal">
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
                </div>                
            </section>
            <section className='w-full justify-center flex'>
                <div className='w-full justify-center flex relative flex-col-reverse 2xl:flex-row max-w-1920' style={{background: 'linear-gradient(180deg, rgba(51,51,51,1) 49%, rgba(255,255,255,0) 49%)'}}>
                    <div className='bg-thrBg flex h-full justify-center w-full 3xl:w-2/5'>
                        <div className='bg-secBg flex h-full w-full py-10 px-4 3xl:px-0 3xl:py-52' style={{borderRadius: '0 30px 0 0'}}>
                            <div className='w-full xl:flex justify-center 2xl:justify-start flex-wrap items-center full:pl-44'>
                                <div className='flex justify-center 3xl:justify-normal 3xl:flex-col gap-6 items-center flex-wrap'>
                                    <img src={img1} alt='img1' style={{width: '146px'}} />
                                    <img src={img2} alt='img2' style={{width: '173px'}} />
                                    <img src={img3} alt='img3' style={{width: '178px'}} />
                                    <img src={img4} alt='img4' style={{width: '278px'}} />
                                </div>
                            </div>
                        </div>
                    </div>                
                    <div className='w-full 3xl:w-3/5 flex justify-center 3xl:justify-end full:pr-44 bg-thrBg' style={{borderRadius: '0px 0px 0px 30px'}}>
                        <div className='flex flex-col justify-start pt-10 py-10 px-4 3xl:px-0 3xl:py-0 3xl:pt-20 max-w-xl gap-16 w-full text-white'>
                            <h2 className='text-4xl font-semibold'>About This Project</h2>
                            <div className='flex flex-col gap-7 text-xl' style={{lineHeight: '36px'}}>
                            <p>
                                On voulait vous assurer le meilleur, alors on a choisi des fournisseurs qui promettent de la qualité.  
                            </p>
                            <p>
                                Les produits sont en coton 100% biologique et imprimés en France. 
                            </p>
                            <p>
                                En plus, ils sont certifiés Oeko-Tex Standard 100, Fairwear, GOTS, et PETA Approved Vegan ce qui garantie une production dans le respect des travailleurs, de la planète, des animaux, et de vous qui allez adorer les porter. 
                            </p>
                            </div>
                            <button 
                                type='buttom' 
                                className='text-white py-3 px-8 rounded-md w-fit text-lg font-semibold transition-all hover:scale-105'
                                style={{
                                    background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                                    boxShadow: ' 0px 4px 0px 0px #196700',
                                }}
                            >
                                Learn more
                            </button>
                        </div>
                    </div>
                    <div 
                        className='rounded-3xl flex items-center justify-center cursor-pointer 2xl:absolute top-20 px-4 3xl:px-0'
                        onClick={()=>document.getElementById('my_modal_1').showModal()}
                        style={{left: '28%'}}
                    >
                        <img 
                            src={about2} 
                            alt='about' 
                            style={{maxHeight: '840px', minHeight: '500px'}}
                        />
                        <svg className='hover:scale-105 transition-all absolute' xmlns="http://www.w3.org/2000/svg" width="120" height="124" viewBox="0 0 120 124" fill="none">
                            <g filter="url(#filter0_d_187_6898)">
                                <circle cx="60" cy="60" r="60" fill="url(#paint0_linear_187_6898)"/>
                            </g>
                            <path d="M46.6665 45.1585C46.6665 41.2026 51.0427 38.8134 54.3703 40.9526L77.4573 55.7942C80.519 57.7624 80.519 62.2378 77.4573 64.206L54.3703 79.0477C51.0427 81.1868 46.6665 78.7976 46.6665 74.8418V45.1585Z" fill="white"/>
                            <defs>
                                <filter id="filter0_d_187_6898" x="0" y="0" width="120" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0972611 0 0 0 0 0.404606 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_187_6898"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_187_6898" result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_187_6898" x1="0.000332624" y1="120" x2="120" y2="9.65892e-05" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#328019"/>
                                <stop offset="1" stop-color="#5EAC0C"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>
        </Footer>
    </Main>
    );
};

export default Home;