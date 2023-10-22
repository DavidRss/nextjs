import React from 'react';

function CardM({children}) {
    return (
        <div className="card bg-white border border-gray-200 shadow-md px-5 pt-4 pb-3 flex flex-col items-start w-48">
            {children}
        </div>
    );
}

export default CardM;