import React from 'react';
import CardsSlider from '../cardsSlider/CardsSlider';

function Aside() {
    return (
        <aside className='flex flex-col gap-9 w-full xl:w-fit items-center'>
            <h1 className='text-gray-900 font-bold text-3xl text-left w-full'>Contreparties</h1>
            <CardsSlider />
            <div className='flex flex-col p-6 font-semibold shadow-lg rounded-lg max-w-sm mb-12 xl:mb-0'>
                <h1 className='text-xl text-gray-900 mb-5'>Donne le montant que tu veux Montant à donner</h1>
                <input type="text" name="price" id="price" className="block w-full rounded-md bg-inputBg border-0 py-4 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3" placeholder="Ex : 30" />
                <button className='btn bg-main border-0 text-white'>Participer</button>
            </div>
        </aside>
    );
}

export default Aside;