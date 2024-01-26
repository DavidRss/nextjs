import React from 'react';

function CardM({ children }) {

    return (
        <div className="card w-80 bg-white shadow-xl mb-12">
            {children}
        </div>
    );
}

export default CardM;
