import React from 'react';
import CardsSlider from '../cardsSlider/CardsSlider';

function Aside() {
    return (
        <aside className='flex flex-col gap-9 w-full min-w-425 xl:w-fit items-center'>
            <h2 className='text-white font-bold text-3xl text-left w-full px-4 md:px-0'>Countreparties</h2>
            <CardsSlider />
            <div className='card bg-mainCard flex flex-col p-6 font-semibold shadow-xl max-w-sm mb-12 xl:mb-0'>
                <h2 className='text-xl text-white mb-5'>Donne le montant que tu veux Montant à donner</h2>
                <input type="number" name="price" id="price" class="block w-full rounded-md bg-input py-4 px-7 text-input placeholder:text-placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3 border-0" placeholder="Ex : 30" value="0" />
                <button className='btn bg-main border-0 text-white'>Participer</button>
            </div>
        </aside>
    );
}

export default Aside;