import React from "react";
import Page from "../layouts/Page/Page";
import Container from "../layouts/Container/Container";

import coins from '../assets/new/iconoir_coins.svg';
import earn from '../assets/new/earn.svg';
import gift from '../assets/new/ph_gift.svg';
import ref from '../assets/new/octicon_people-16.svg';
import star from '../assets/new/star-fill.svg';
import bar from '../assets/new/bars-level 1.svg';
import calendar from '../assets/new/Calendar.svg';
import arrow from '../assets/new/iconamoon_arrow-left-2.svg';

import { Link } from "react-router-dom";
import Aside from "../components/aside/Aside";

import { useApp } from "../services/app.context";
import { levels } from "../stores/levelsData";

function Reward() {
  const { currentUser } = useApp();
  const { ballance, spending } = currentUser;

  const calculateProgress = () => {
    let currentLevel = null;
    let remainingToNextLevel = null;
    let nextLevel = null;

    for (let i = 0; i < levels.length; i++) {
      if (spending < levels[i].spend) {
        currentLevel = levels[i - 1] || levels[0];
        nextLevel = levels[i];
        remainingToNextLevel = levels[i].spend - spending;
        break;
      }
    }

    if (!currentLevel) {
      currentLevel = levels[levels.length - 1];
      remainingToNextLevel = 0;
    }

    return {
      currentLevel,
      nextLevel,
      remainingToNextLevel,
    };
  };

  const progress = calculateProgress(spending);

    return (
        <Page>
             <section className='bg-secBg w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0'>
                <Container>
                <div className='w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-6 items-center xl:items-start'>
                    <div className='flex flex-col w-full'>
                        <h1 className='text-white font-bold text-3xl mb-8 text-left'>Welcome to <span className='text-main'>Loyalty Program</span></h1>
                        <div className='flex flex-col gap-5'>
                            <Link to='/reward' className='w-full'>
                            <div className="card w-full bg-mainCard border-sec border text-primary-content">
                                <div className="card-body card-bg rounded-xl flex flex-row justify-between items-center px-10">
                                    <div className='flex flex-col items-start'>
                                        <div className='flex items-center gap-4'>
                                            <div 
                                                className='p-3 rounded-full flex justify-center items-center border-2'
                                                style={{
                                                    borderColor: 'rgba(255, 255, 255, 0.11)',
                                                    background: '#414141',
                                                }}
                                            >
                                                <img src={coins} alt="coins" />
                                            </div>
                                            <h1 className='text-white font-semibold text-2xl'>Points</h1>
                                        </div>
                                        <span className='mt-3 text-2xl font-extrabold text-white hidden sm:block'>{ballance.points}</span>
                                        <span className='text-white opacity-50 text-sm font-normal hidden sm:block'>Equals {ballance.USD} USD</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='mt-3 text-2xl font-extrabold text-white block sm:hidden text-right'>{ballance.points}</span>
                                        <span className='text-white opacity-50 text-sm font-normal block sm:hidden'>Equals {ballance.USD} USD</span>
                                    </div>
                                    <button className='hidden sm:block'>
                                       <img src={arrow} alt="arrow" className='brightness-150' />
                                    </button>
                                </div>
                            </div>
                            </Link>

                            <div className='flex flex-col sm:flex-row gap-5 items-center'>
                                <Link to="/reward/earn" className='w-full'>
                                    <div className="card w-full bg-mainCard border-sec border text-primary-content">
                                        <div className="card-body bg-mainCard rounded-xl flex flex-row justify-between items-center px-10">
                                            <div className='flex flex-col items-start'>
                                                <div className='flex items-center gap-4'>
                                                    <div 
                                                        className='p-3 rounded-full flex justify-center items-center border-2'
                                                        style={{
                                                            borderColor: 'rgba(255, 255, 255, 0.11)',
                                                            background: '#414141',
                                                        }}
                                                    >
                                                        <img src={earn} alt="coins" />
                                                    </div>
                                                    <h1 className='text-white font-semibold text-xl'>Earn</h1>
                                                </div>
                                            </div>
                                            <button>
                                                <img src={arrow} alt="arrow" />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/reward' className='w-full'>
                                <div className="card w-full bg-mainCard border-sec border text-primary-content">
                                    <div className="card-body bg-mainCard rounded-xl flex flex-row justify-between items-center px-10">
                                        <div className='flex flex-col items-start'>
                                            <div className='flex items-center gap-4'>
                                                <div 
                                                    className='p-3 rounded-full flex justify-center items-center border-2'
                                                    style={{
                                                        borderColor: 'rgba(255, 255, 255, 0.11)',
                                                        background: '#414141',
                                                    }}
                                                >
                                                    <img src={gift} alt="coins" />
                                                </div>
                                                <h1 className='text-white font-semibold text-xl'>Redeem</h1>
                                            </div>
                                        </div>
                                        <button>
                                            <img src={arrow} alt="arrow" />
                                        </button>
                                    </div>
                                </div>
                                </Link>
                            </div>                            
                            <Link to="/reward/referals" className='w-full'>
                            <div className="card w-full bg-mainCard border-sec border text-primary-content">
                                <div className="card-body bg-mainCard rounded-xl flex flex-row justify-between items-center px-10">
                                    <div className='flex flex-col items-start'>
                                        <div className='flex items-center gap-4'>
                                            <div 
                                                className='p-3 rounded-full flex justify-center items-center border-2'
                                                style={{
                                                    borderColor: 'rgba(255, 255, 255, 0.11)',
                                                    background: '#414141',
                                                }}
                                            >
                                                <img src={ref} alt="coins" />
                                            </div>
                                            <h1 className='text-white font-semibold text-xl'>Referals</h1>
                                        </div>
                                        <div className='flex items-center mt-3 gap-1 text-sm font-normal text-white'>
                                            <span className='opacity-50'>You get</span>
                                            <span className='opacity-100'>10% coupon</span>
                                        </div>
                                        <div className='flex items-center gap-1 text-sm font-normal text-white'>
                                            <span className='opacity-50'>They get</span>
                                            <span className='opacity-100'>10% coupon</span>
                                        </div>
                                    </div>
                                    <button>
                                        <img src={arrow} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                            </Link>
                            <Link to="/reward/levels" className='w-full'>
                            <div className="card w-full bg-mainCard border-sec border text-primary-content">
                                <div className="card-body bg-mainCard rounded-xl flex flex-row justify-between items-center px-10">
                                    <div className='flex flex-col items-start'>
                                        <div className='flex items-center gap-4'>
                                            <div 
                                                className='p-3 rounded-full flex justify-center items-center border-2'
                                                style={{
                                                    borderColor: 'rgba(255, 255, 255, 0.11)',
                                                    background: '#414141',
                                                }}
                                            >
                                                <img src={star} alt="coins" />
                                            </div>
                                            <h1 className='text-white font-semibold text-xl'>{progress.currentLevel.title}</h1>
                                            <span className='text-white text-opacity-50 font-medium text-xl'>(level {progress.currentLevel.level})</span>
                                        </div>
                                        <span className='mt-3 text-white text-base font-semibold'>{progress.remainingToNextLevel} USD to {progress.nextLevel.title}</span>
                                        <progress className="progress progress-success md:w-680 mt-3" value={spending} max={progress.nextLevel.spend}></progress>
                                    </div>
                                    <button>
                                        <img src={arrow} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                            </Link>
                            <Link to="/reward/levels" className='w-full'>
                            <div className="card w-full bg-mainCard border-sec border text-primary-content">
                                <div className="card-body bg-mainCard rounded-xl flex flex-row justify-between items-center px-10">
                                    <div className='flex flex-col items-start'>
                                        <div className='flex items-center gap-4'>
                                            <div 
                                                className='p-3 rounded-full flex justify-center items-center border-2'
                                                style={{
                                                    borderColor: 'rgba(255, 255, 255, 0.11)',
                                                    background: '#414141',
                                                }}
                                            >
                                                <img src={bar} alt="bar" />
                                            </div>
                                            <h1 className='text-white font-semibold text-xl'>Levels</h1>
                                        </div>
                                        <span className='text-white opacity-50 text-sm font-normal w-44 text-left mt-4'>Level up to get more benefits and discounts.</span>
                                    </div>
                                    <button>
                                        <img src={arrow} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                            </Link>
                            <Link to='/reward/lottery' className='w-full'>
                            <div className="card w-full bg-mainCard border-sec border text-primary-content">
                                <div className="card-body bg-mainCard rounded-xl flex flex-row justify-between items-center px-10">
                                    <div className='flex flex-col items-start'>
                                        <div className='flex items-center gap-4'>
                                            <div 
                                                className='p-3 rounded-full flex justify-center items-center border-2'
                                                style={{
                                                    borderColor: 'rgba(255, 255, 255, 0.11)',
                                                    background: '#414141',
                                                }}
                                            >
                                                <img src={calendar} alt="calendar" />
                                            </div>
                                            <h1 className='text-white font-semibold text-xl'>Lottery</h1>
                                        </div>
                                        <span className='text-white opacity-50 text-sm font-normal w-44 text-left mt-4'>Level up to get more benefits and discounts.</span>
                                    </div>
                                    <button>
                                        <img src={arrow} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <span className="mt-3 text-2xl font-extrabold text-main hidden sm:block">
                          {ballance.points}
                        </span>
                        <span className="text-gray-900 opacity-50 text-sm font-normal hidden sm:block">
                          Equals {ballance.USD} USD
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="mt-3 text-2xl font-extrabold text-main block sm:hidden text-right">
                          {ballance.points}
                        </span>
                        <span className="text-gray-900 opacity-50 text-sm font-normal block sm:hidden">
                          Equals {ballance.USD} USD
                        </span>
                      </div>
                      <button className="hidden sm:block">
                        <img
                          src={arrow}
                          alt="arrow"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) hue-rotate(120deg)",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </Link>

                <div className="flex flex-col sm:flex-row gap-5 items-center">
                  <Link to="/reward/earn" className="w-full">
                    <div className="card w-full bg-secondary border-pagBg border text-primary-content">
                      <div className="card-body flex flex-row justify-between items-center px-10">
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-main bg-opacity-10 flex justify-center items-center">
                              <img
                                src={earn}
                                alt="coins"
                                style={{
                                  filter:
                                    "brightness(0) saturate(100%) hue-rotate(120deg)",
                                }}
                              />
                            </div>
                            <h1 className="text-gray-900 font-semibold text-xl">
                              Earn
                            </h1>
                          </div>
                        </div>
                        <button>
                          <img
                            src={arrow}
                            alt="arrow"
                            style={{
                              filter:
                                "brightness(0) saturate(100%) hue-rotate(120deg)",
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                  <Link to="/reward" className="w-full">
                    <div className="card w-full bg-secondary border-pagBg border text-primary-content">
                      <div className="card-body flex flex-row justify-between items-center px-10">
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-main bg-opacity-10 flex justify-center items-center">
                              <img
                                src={gift}
                                alt="coins"
                                style={{
                                  filter:
                                    "brightness(0) saturate(100%) hue-rotate(120deg)",
                                }}
                              />
                            </div>
                            <h1 className="text-gray-900 font-semibold text-xl">
                              Redeem
                            </h1>
                          </div>
                        </div>
                        <button>
                          <img
                            src={arrow}
                            alt="arrow"
                            style={{
                              filter:
                                "brightness(0) saturate(100%) hue-rotate(120deg)",
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
                <Link to="/reward/referals" className="w-full">
                  <div className="card w-full bg-secondary border-pagBg border text-primary-content">
                    <div className="card-body flex flex-row justify-between items-center px-10">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-main bg-opacity-10 flex justify-center items-center">
                            <img
                              src={ref}
                              alt="coins"
                              style={{
                                filter:
                                  "brightness(0) saturate(100%) hue-rotate(120deg)",
                              }}
                            />
                          </div>
                          <h1 className="text-gray-900 font-semibold text-xl">
                            Referals
                          </h1>
                        </div>
                        <div className="flex items-center mt-3 gap-1 text-sm font-normal text-gray-900">
                          <span className="opacity-50">You get</span>
                          <span className="opacity-100">10% coupon</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-normal text-gray-900">
                          <span className="opacity-50">They get</span>
                          <span className="opacity-100">10% coupon</span>
                        </div>
                      </div>
                      <button>
                        <img
                          src={arrow}
                          alt="arrow"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) hue-rotate(120deg)",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
                <Link to="/reward/levels" className="w-full">
                  <div className="card w-full bg-secondary border-pagBg border text-primary-content">
                    <div className="card-body flex flex-row justify-between items-center px-10">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-main bg-opacity-10 flex justify-center items-center">
                            <img
                              src={cup}
                              alt="coins"
                              style={{
                                filter:
                                  "brightness(0) saturate(100%) hue-rotate(120deg)",
                              }}
                            />
                          </div>
                          <h1 className="text-gray-900 font-semibold text-xl">
                            {progress.currentLevel.title}
                          </h1>
                          <span className="text-gray-900 text-opacity-50 font-medium text-xl">
                            (level {progress.currentLevel.level})
                          </span>
                        </div>
                        <span className="mt-3 text-gray-900 text-base font-semibold">
                          {progress.remainingToNextLevel} USD to{" "}
                          {progress.nextLevel.title}
                        </span>
                        <progress
                          className="progress progress-accent md:w-680 mt-3"
                          value={spending}
                          max={progress.nextLevel.spend}
                        ></progress>
                      </div>
                      <button>
                        <img
                          src={arrow}
                          alt="arrow"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) hue-rotate(120deg)",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
                <Link to="/reward/levels" className="w-full">
                  <div className="card w-full bg-secondary border-pagBg border text-primary-content">
                    <div className="card-body flex flex-row justify-between items-center px-10">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-main bg-opacity-10 flex justify-center items-center">
                            <img
                              src={bar}
                              alt="bar"
                              style={{
                                filter:
                                  "brightness(0) saturate(100%) hue-rotate(120deg)",
                              }}
                            />
                          </div>
                          <h1 className="text-gray-900 font-semibold text-xl">
                            Levels
                          </h1>
                        </div>
                        <span className="text-gray-900 opacity-50 text-sm font-normal w-44 text-left mt-4">
                          Level up to get more benefits and discounts.
                        </span>
                      </div>
                      <button>
                        <img
                          src={arrow}
                          alt="arrow"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) hue-rotate(120deg)",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
                <Link to="/reward/lottery" className="w-full">
                  <div className="card w-full bg-secondary border-pagBg border text-primary-content">
                    <div className="card-body flex flex-row justify-between items-center px-10">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-main bg-opacity-10 flex justify-center items-center">
                            <img
                              src={calendar}
                              alt="calendar"
                              style={{
                                filter:
                                  "brightness(0) saturate(100%) hue-rotate(120deg)",
                              }}
                            />
                          </div>
                          <h1 className="text-gray-900 font-semibold text-xl">
                            Lottery
                          </h1>
                        </div>
                        <span className="text-gray-900 opacity-50 text-sm font-normal w-44 text-left mt-4">
                          Level up to get more benefits and discounts.
                        </span>
                      </div>
                      <button>
                        <img
                          src={arrow}
                          alt="arrow"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) hue-rotate(120deg)",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Aside />
          </div>
        </Container>
      </section>
    </Page>
  );
}

export default Reward;
