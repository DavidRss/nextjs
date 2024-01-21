import React from 'react';

function CardM({ children }) {

    return (
        <div className="card w-full bg-mainCard shadow-xl mb-12">
            {children}
        </div>
    );
}

export default CardM;
