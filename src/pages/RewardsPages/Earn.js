import React from 'react';
import Page from '../../layouts/Page/Page';
import Container from '../../layouts/Container/Container';
import Aside from '../../components/aside/Aside';
import BackBtn from '../../components/buttons/backBtn/BackBtn';

import welcome from '../../assets/welcome-icon.png';
import dons from '../../assets/dons-icon.png';
import secDons from '../../assets/secDons-icon.png';
import tiktok from '../../assets/tiktok-icon.png';
import youtube from '../../assets/youtube-icon.png';
import instagram from '../../assets/instagram-icon.png';
import daily from '../../assets/daily-icon.png';
import comments from '../../assets/comments-icon.png';
import refIcon from '../../assets/ref-icon.png';

function Earn() {
    return (
        <Page>
            <section className='bg-white w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0'>
                <Container>
                <div className='w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-32 items-center xl:items-start'>
                    <div className='flex flex-col w-full'>
                        <h1 className='text-gray-900 font-bold text-3xl mb-8 text-left'>Welcome to <span className='text-primary'>Loyalty Program</span></h1>
                        <div className='flex flex-col gap-5'>

                        <div className='flex flex-col bg-secondary border-pagBg rounded-xl pt-8 pb-20 px-6'>
                                <div className='flex items-center justify-start w-full'>
                                    <BackBtn title="Earn" />
                                </div>
                                <div className='flex flex-col items-start justify-start w-full mt-11 gap-2'>
                                    <h2 className='text-gray-900 font-semibold text-xl'>Cashback</h2>
                                    <span className='text-gray-900 opacity-50 font-normal text-base'>Earn 10 Vibes for every 1 EUR spent.</span>
                                </div>
                                <div className="divider mt-6 mb-8" /> 
                                <div className='flex flex-col items-start justify-start w-full mt-11 gap-2'>
                                    <h2 className='text-gray-900 font-semibold text-xl'>Challenge Board</h2>
                                    <span className='text-gray-900 opacity-50 font-normal text-base'>Collect badges and get rewarded</span>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center xl:justify-items-start gap-6 mt-8">
                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={welcome} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Welcome to the family</h1>
                                        <h2 className='text-base font-semibold text-gray-900'>50 Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={dons} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>First donation</h1>
                                        <h2 className='text-base font-semibold text-gray-900'>50 Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={secDons} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Second donation</h1>
                                        <h2 className='text-base font-semibold text-gray-900'>150 Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={tiktok} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Post a clip on Tik Tok (Rules : Clip must promote this page and you must tag @bricebbrice)</h1>
                                        <h2 className='text-base font-semibold text-gray-900'>300 points Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={youtube} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Post a clip on Youtube short (Rules : Clip must promote this page and you must tag @bricebbrice)</h1>
                                        <h2 className='text-base font-semibold text-gray-900'>300 points Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={instagram} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Post a clip on Instagram Reels (Rules : Clip must promote this page and you must tag @bricebbrice)</h1>
                                        <h2 className='text-base font-semibold text-gray-900'>300 points Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={daily} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Visit the page daily</h1>
                                        <h2 className='text-base font-semibold text-gray-900'>10 Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={comments} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Leave a comment</h1>
                                        <h2 className='text-base font-semibold text-gray-900'>100 Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={refIcon} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Refer a friend</h1>
                                        <h2 className='text-base font-semibold text-gray-900'>400 Vibes</h2>
                                    </div>
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

export default Earn;