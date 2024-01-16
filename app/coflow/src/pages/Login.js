import React from 'react';
import googleIcon from '../assets/google.png';
import { Link } from 'react-router-dom';
import Terms from '../components/term&policy/Terms';
import Policy from '../components/term&policy/Policy';

function Login() {
    
    return (
        <div className='bg-white w-full flex flex-col pb-32'>
            <section className='flex flex-col items-center lg:items-start mt-12 lg:mt-9 mb-7 lg:mb-0 lg:px-9 w-full'>
                <h1 className='text-gray-900 text-2xl font-semibold'>Coflow</h1>
            </section>
            <section className='w-full flex justify-center px-5 lg:px-0'>
                <div className='border border-gray-200 rounded-md shadow-md py-8 lg:py-14 px-10 w-full max-w-3xl flex flex-col items-center'>
                    <h1 className='text-2xl lg:text-3xl font-bold text-gray-900 w-full md:px-20'>Bienvenue sur ma page de crowdfunding</h1>
                    
                    <button className='btn bg-white border border-gray-200 flex gap-3 mt-4 mb-5 lg:mt-6 lg:mb-7 text-gray-900 hover:bg-white hover:scale-105 transition-all hover:border-gray-300'>
                        <img src={googleIcon} alt="signUp by google" />
                        S’inscrire via google
                    </button>                  
                    <h2 className='text-base font-semibold text-gray-900'>OU</h2>
                    <div className='w-full mt-8 flex flex-col gap-10'>
                        <div className="sm:col-span-4">
                            <label for="email" className="block text-base text-left font-bold text-gray-900">Adresse email</label>
                            <div className="mt-2">
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    autocomplete="email" 
                                    className="bg-gray-200 block w-full rounded-md border border-gray-200 py-4 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" 
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label for="password" className="block text-base text-left font-bold text-gray-900">Mot de passe</label>
                            <div className="mt-2">
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autocomplete="password" 
                                    className="bg-gray-200 block w-full rounded-md border border-gray-200 py-4 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-900 text-base font-semibold flex justify-center w-full mt-6 lg:mt-8'>
                        <h3 className='px-0 lg:px-28 text-center'>En creant votre compte vous acceptez les <span className='text-primary hover:cursor-pointer' onClick={()=>document.getElementById('termes').showModal()}>termes et conditions</span>, et notre <span className='text-primary hover:cursor-pointer' onClick={()=>document.getElementById('politique').showModal()}>politique deconfidentialite</span></h3>
                    </div>
                        <Link to="/about" className='w-full'>
                        <button className='btn btn-primary text-white mt-6 lg:mt-8 mb-5 w-full hover:text-white hover:bg-primary hover:-translate-y-1 transition-all'>
                            Se connecter
                        </button>
                        </Link>
                    <div className='w-full justify-between flex flex-col sm:flex-row gap-2 sm:gap-0 items-center'>
                        <span className='text-base text-gray-900 font-bold'>Mot de passe oublie?</span>
                        <span className='text-base text-gray-900 font-bold'>Pas encore membre? <Link to="/signup"><span className='text-primary'>Inscris toi</span></Link></span>
                    
                    </div>
                </div>
            </section>
            
            <Terms />
            <Policy />
        </div>
    );
}

export default Login;