import React from 'react'
import Container from '../../layouts/Container/Container'
import fimg1 from '../../assets/Letter.png';
import fimg2 from '../../assets/Mailbox.png';
import fimg3 from '../../assets/Chat Round Like.png';

export default function Footer() {
  return (
   <>
    <div className='w-full bg-secondary flex justify-center pt-20 pb-16'>
        <Container> 
            <div className='w-full flex flex-wrap lg:flex-row px-5 xl:px-0 gap-5 justify-center items-center lg:justify-between'>
                <div className='rounded-2xl shadow-md flex flex-col items-center px-5 xl:px-0 xl:w-96 py-5 bg-white hover:cursor-pointer hover:scale-105 transition-all w-80'>
                    <div className='p-5 rounded-full bg-primary bg-opacity-10 mb-5'><img src={fimg1} alt="footer-img" /></div>
                    <h2 className='text-gray-900 text-xl font-semibold mb-2 text-center'>Vous avez trouvé un bug ?</h2>
                    <span className='text-gray-500 text-base font-normal'>Signalez le ici</span>
                </div>
                <div className='rounded-2xl shadow-md flex flex-col items-center px-5 xl:px-0 xl:w-96 py-5 bg-white hover:cursor-pointer hover:scale-105 transition-all w-80'>
                    <div className='p-5 rounded-full bg-primary bg-opacity-10 mb-5'><img src={fimg2} alt="footer-img" /></div>
                    <h2 className='text-gray-900 text-xl font-semibold mb-2 text-center'>Vous avez une suggestion ?</h2>
                    <span className='text-gray-500 text-base font-normal'>Soumettez vos idées ici</span>
                </div>
                <div className='rounded-2xl shadow-md flex flex-col items-center px-5 xl:px-0 xl:w-96 py-5 bg-white hover:cursor-pointer hover:scale-105 transition-all w-80'>
                    <div className='p-5 rounded-full bg-primary bg-opacity-10 mb-5'><img src={fimg3} alt="footer-img" /></div>
                    <h2 className='text-gray-900 text-xl font-semibold mb-2 text-center'>Vous voulez nous envoyer du love</h2>
                    <span className='text-gray-500 text-base font-normal'>Faites le ici</span>
                </div>               
            </div>            
        </Container>
    </div>
    <footer className="bg-base-100 w-full py-10 xl:py-4 flex justify-center ">
        <Container>
        <div className='w-full justify-between flex flex-col xl:flex-row items-center px-5 xl:px-0'>
            <div className='flex flex-col xl:flex-row items-center gap-5'>
                <h1 className='text-white text-xl font-semibold mb-6 xl:mb-0'>Coflow</h1>
                <span className='hidden xl:block'>© 2023, Coflow, Powered by Shopify</span>
            </div>
            <div className="grid grid-flow-col gap-4 mb-10 xl:mb-0">
                <span className='hover:cursor-pointer hover:scale-105 transition-all'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></span> 
                <span className='hover:cursor-pointer hover:scale-105 transition-all'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></span> 
                <span className='hover:cursor-pointer hover:scale-105 transition-all'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></span>
            </div>
            <span className='block xl:hidden'>© 2023, Coflow, Powered by Shopify</span>
        </div>
        </Container>
    </footer>
   </>
    
  )
}
