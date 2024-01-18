import React from 'react';
import googleIcon from '../assets/google.png';
import { Link } from 'react-router-dom';
import Terms from '../components/term&policy/Terms';
import Policy from '../components/term&policy/Policy';

function Login() {
    
    return (
        <div className='w-full flex flex-col pb-32'>
            <section className='flex flex-col items-center lg:items-start mt-12 lg:mt-9 mb-7 lg:mb-0 lg:px-9 w-full'>
                <h1 className='text-white text-2xl font-semibold'>Coflow</h1>
            </section>
            <section className='w-full flex justify-center px-5 lg:px-0'>
                <div className='rounded-md shadow-md py-8 lg:py-14 px-10 w-full max-w-3xl flex flex-col items-center' style={{background: '#333'}}>
                    <h1 className='text-2xl lg:text-3xl font-bold text-white text-center w-full md:px-20'>Creez votre compte pour poursuivre votre participation</h1>
                    
                    <button className='btn bg-transparent border border-gray-200 flex gap-3 mt-4 mb-5 lg:mt-6 lg:mb-7 text-white hover:bg-white hover:scale-105 transition-all hover:border-gray-300'>
                        <img src={googleIcon} alt="signUp by google" />
                        S’inscrire via google
                    </button>                  
                    <h2 className='text-base font-semibold text-white'>Ou bien inscrivez-vous avec votre adresse email</h2>
                    <div className='w-full mt-8 flex flex-col gap-10'>
                        <div className="sm:col-span-4">
                            <label for="password" className="block text-base text-left font-bold text-white">Nom d’utilisateur</label>
                            <div className="mt-2">
                                <input 
                                    style={{background: 'rgba(249, 250, 251, 0.10)'}}
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autocomplete="password" 
                                    className="block w-full rounded-xl py-4 pl-2 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label for="email" className="block text-base text-left font-bold text-white">Adresse email</label>
                            <div className="mt-2">
                                <input 
                                    style={{background: 'rgba(249, 250, 251, 0.10)'}}
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    autocomplete="email" 
                                    className="block w-full rounded-xl py-4 pl-2 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6" 
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label for="password" className="block text-base text-left font-bold text-white">Mot de passe</label>
                            <div className="mt-2">
                                <input 
                                    style={{background: 'rgba(249, 250, 251, 0.10)'}}
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autocomplete="password" 
                                    className="rounded-xl block w-full py-4 pl-2 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='text-white text-base font-semibold flex justify-center w-full mt-6 lg:mt-8'>
                        <h3 className='px-0 lg:px-28 text-center'>En creant votre compte vous acceptez les<br/> <span className='text-main hover:cursor-pointer' onClick={()=>document.getElementById('termes').showModal()}>termes et conditions</span>, et notre <span className='text-main hover:cursor-pointer' onClick={()=>document.getElementById('politique').showModal()}>politique deconfidentialite</span></h3>
                    </div>
                        <Link to="/about" className='w-full'>
                        <button 
                                type='buttom' 
                                className='text-white py-3 px-8 rounded-md mt-6 lg:mt-8 mb-5 text-lg font-semibold w-full transition-all hover:-translate-y-1'
                                style={{
                                    background: 'linear-gradient(45deg, #328019 0%, #5EAC0C 100%)',
                                    boxShadow: ' 0px 4px 0px 0px #196700',
                                }}
                            >
                                 Se connecter
                            </button>
                        </Link>
                    <div className='w-full justify-center flex flex-col sm:flex-row gap-2 sm:gap-0 items-center'>
                        <span className='text-base text-white font-bold'>Deja inscrit? <Link to="/signup"><span className='text-main'>Inscris toi</span></Link></span>
                    </div>
                </div>
            </section>
            
            <Terms />
            <Policy />
        </div>
    );
}

export default Login;