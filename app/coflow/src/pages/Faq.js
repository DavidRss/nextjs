import React, { useState } from 'react';
import Page from '../layouts/Page/Page';
import Container from '../layouts/Container/Container';
import Aside from '../components/aside/Aside';

function Faq() {

    const [selectedAccordion, setSelectedAccordion] = useState(null);

    const handleAccordionChange = (index) => {
        setSelectedAccordion(index);
    };

    return (
        <Page>
             <section className='w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0'>
                <Container>
                    <div className='w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-6 items-center xl:items-start'>
                        <div className='flex flex-col w-full h-fit'>
                            <h1 className='text-white font-bold text-3xl mb-8 text-left'>FAQ</h1>
                            <div className='mt-8 flex w-full flex-col rounded-xl first-letter:pt-7 gap-2'>
                                <div className="collapse collapse-arrow bg-mainCard">
                                    <input 
                                        type="radio" 
                                        name="my-accordion-2"
                                        onChange={() => handleAccordionChange(1)}
                                        checked={selectedAccordion === 1}
                                    /> 
                                    <div className={`${selectedAccordion === 1 ? 'text-main' : ''} + collapse-title text-xl font-medium`}>
                                        Click to open this one and close others
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>hello</p>
                                    </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-mainCard">
                                    <input 
                                        type="radio" 
                                        name="my-accordion-2"
                                        onChange={() => handleAccordionChange(2)}
                                        checked={selectedAccordion === 2}
                                    /> 
                                    <div className={`${selectedAccordion === 2 ? 'text-main' : ''} + collapse-title text-xl font-medium`}>
                                        Click to open this one and close others
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>hello</p>
                                    </div>
                                    </div>
                                    <div className="collapse collapse-arrow bg-mainCard">
                                    <input 
                                        type="radio" 
                                        name="my-accordion-2"
                                        onChange={() => handleAccordionChange(3)}
                                        checked={selectedAccordion === 3}
                                     /> 
                                    <div className={`${selectedAccordion === 3 ? 'text-main' : ''} + collapse-title text-xl font-medium`}>
                                        Click to open this one and close others
                                    </div>
                                    <div className="collapse-content"> 
                                        <p>hello</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Aside />
                    </div>
                </Container>
             </section>
        </Page>
    );
}

export default Faq;