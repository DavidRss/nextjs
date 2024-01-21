import React from 'react';
import arrowBack from '../../../assets/new/arrowBack.svg';

function BackBtn(props) {
    const handleBackClick = () => {
        window.history.back(); 
      };

    return (
        <button 
            onClick={handleBackClick}
            className='text-white flex items-center gap-3 text-2xl font-semibold leading-8 hover:scale-105 hover:text-main transition-all'
        >
            <img src={arrowBack} alt="back button" />
            {props.title}
        </button>
    );
}

export default BackBtn;