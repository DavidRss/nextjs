import React from 'react';

function Title({title}) {
    return (
        <h2 className='text-primary font-semibold text-xl dark:text-slate-400'>{title}</h2>
    );
}

export default Title;