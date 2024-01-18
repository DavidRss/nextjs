import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import CardM from '../cardsMedium/cardsM';

import { itemsData } from '../../stores/aboutData';

function CardsSlider() {  

    const [data, setData] = useState();

    useEffect(()=>{
        itemsData ? setData(itemsData) : setData([]);
    },[]);

    return (
        <>
            <Swiper 
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                spaceBetween={40}
            >

                {data && data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardM>
                            <figure className='p-5 bg-mainCard '><img src={item.img} alt="Shoes" /></figure>
                            <div className="py-4 px-5 xl:card-body bg-mainCard border-0 rounded-b-xl">
                                <h2 className="card-title font-semibold text-xl text-white">{item.title}</h2>
                                <ul className='text-left mb-8 ml-4 list-disc text-sm xl:text-base text-white font-normal'>
                                    {item.desc.map((descItem, descIndex) => (
                                        <li className='desc-item opacity-50 text-white' key={descIndex}>{descItem}</li>
                                    ))}
                                </ul>                                
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
                        </CardM>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CardsSlider;