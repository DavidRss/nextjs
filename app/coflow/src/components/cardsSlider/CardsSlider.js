import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import CardM from '../cardsMedium/cardsM';

import { cardsData } from '../../stores/cardsData';

function CardsSlider() {  

    const [data, setData] = useState();

    useEffect(()=>{
        cardsData ? setData(cardsData) : setData([]);
    },[]);

    return (
        <>
            <Swiper 
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
            >

                {data && data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardM>
                            <figure><img src={item.img} alt="Shoes" /></figure>
                            <div className="py-4 px-5 xl:card-body">
                                <h2 className="card-title font-semibold text-xl text-gray-900">{item.title}</h2>
                                <ul className='text-left mb-8 text-sm xl:text-base text-slate-800 font-normal'>
                                    {item.desc.map((descItem, descIndex) => (
                                        <li className='desc-item opacity-50 text-gray-900' key={descIndex}>{descItem}</li>
                                    ))}
                                </ul>                                
                                <div className='flex w-full justify-between items-center'>
                                    <div className='flex flex-col items-start'>
                                        <span className='text-primary text-3xl font-extrabold'>{item.price} €</span>
                                        <span className='text-gray-400 text-sm font-normal'>{item.contributions} contributions</span>
                                    </div>
                                    <button className="btn btn-primary text-white">Participer</button>
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