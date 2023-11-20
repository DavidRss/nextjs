import React, { useEffect, useRef } from "react";
import Page from "../layouts/Page/Page";
import Container from "../layouts/Container/Container";

import icCoins from "../assets/ic_coins.svg";
import icEarn from "../assets/ic_earn.svg";
import icGift from "../assets/ic_gift.svg";
import icReferals from "../assets/ic_referals.svg";
import icFlag from "../assets/ic_flag.svg";
import icNote from "../assets/ic_note.svg";
import icCalendar from "../assets/ic_calendar.svg";
import arrow from "../assets/ic_arrow-left-2.svg";

import { Link, useNavigate } from "react-router-dom";
import Aside from "../components/aside/Aside";

import { levels } from "../stores/levelsData";
import { useApp } from "../services/AppContext";
import { scrollToElement } from "../utils/ActionUtils";
import { Path } from "../constants/constants";

function Reward() {
  const navigate = useNavigate();

  const { loadingUser, currentUser } = useApp();

  const donationForm = useRef(null);

  const calculateProgress = (spending) => {
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

    remainingToNextLevel = remainingToNextLevel.toFixed(2);

    return {
      currentLevel,
      nextLevel,
      remainingToNextLevel,
    };
  };

  const progress = calculateProgress(currentUser?.spending);

  useEffect(() => {
    if (!loadingUser && !currentUser) {
      navigate(`/${Path.SIGNIN}`, { replace: true });
    }
  }, [loadingUser]);

  const handleOnParticipate = () => {
    scrollToElement(donationForm.current);
  };

  return (
    <Page handleOnParticipate={handleOnParticipate}>
      <section className="w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-32 items-center xl:items-start">
            <div className="flex flex-col w-full">
              <h1 className="text-white-90 font-bold text-3xl mb-8 text-left">
                Welcome to <span className="text-primary">Loyalty Program</span>
              </h1>
              <div className="flex flex-col gap-5">
                <Link to="/reward" className="w-full">
                  <div className="card w-full bg-mainCard text-primary-content">
                    <div className="card-body flex flex-row justify-between items-center px-10">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                          <div className="p-3 flex justify-center items-center">
                            <img src={icCoins} alt="coins" />
                          </div>
                          <h1 className="text-white-90 font-semibold text-xl">
                            Points
                          </h1>
                        </div>
                        <span className="mt-3 text-2xl font-extrabold text-primary hidden sm:block">
                          {currentUser?.points}
                        </span>
                        <span className="text-white-90 opacity-50 text-sm font-normal hidden sm:block">
                          Equals {currentUser?.donations} EUR
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="mt-3 text-2xl font-extrabold text-primary block sm:hidden text-right">
                          {currentUser?.points}
                        </span>
                        <span className="text-white-90 opacity-50 text-sm font-normal block sm:hidden">
                          Equals {currentUser?.donations} EUR
                        </span>
                      </div>
                      <button className="hidden sm:block">
                        <img src={arrow} alt="arrow" />
                      </button>
                    </div>
                  </div>
                </Link>

                <div className="flex flex-col sm:flex-row gap-5 items-center">
                  <Link to="/reward/earn" className="w-full">
                    <div className="card w-full bg-mainCard text-primary-content">
                      <div className="card-body flex flex-row justify-between items-center px-10">
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-4">
                            <div className="p-3 flex justify-center items-center">
                              <img src={icEarn} alt="coins" />
                            </div>
                            <h1 className="text-white-90 font-semibold text-xl">
                              Earn
                            </h1>
                          </div>
                        </div>
                        <button>
                          <img src={arrow} alt="arrow" />
                        </button>
                      </div>
                    </div>
                  </Link>
                  <Link to="/reward" className="w-full">
                    <div className="card w-full bg-mainCard text-primary-content">
                      <div className="card-body flex flex-row justify-between items-center px-10">
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-4">
                            <div className="p-3 flex justify-center items-center">
                              <img src={icGift} alt="coins" />
                            </div>
                            <h1 className="text-white-90 font-semibold text-xl">
                              Redeem
                            </h1>
                          </div>
                        </div>
                        <button>
                          <img src={arrow} alt="arrow" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
                <Link to="/reward/referals" className="w-full">
                  <div className="card w-full bg-mainCard text-primary-content">
                    <div className="card-body flex flex-row justify-between items-center px-10">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                          <div className="p-3 flex justify-center items-center">
                            <img src={icReferals} alt="coins" />
                          </div>
                          <h1 className="text-white-90 font-semibold text-xl">
                            Referals
                          </h1>
                        </div>
                        <div className="flex items-center mt-3 gap-1 text-sm font-normal text-white-90">
                          <span className="opacity-50">You get</span>
                          <span className="opacity-100">10% coupon</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-normal text-white-90">
                          <span className="opacity-50">They get</span>
                          <span className="opacity-100">10% coupon</span>
                        </div>
                      </div>
                      <button>
                        <img src={arrow} alt="arrow" />
                      </button>
                    </div>
                  </div>
                </Link>
                <Link to="/reward/levels" className="w-full">
                  <div className="card w-full bg-mainCard text-primary-content">
                    <div className="card-body flex flex-row justify-between items-center px-10">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                          <div className="p-3 flex justify-center items-center">
                            <img src={icFlag} alt="coins" />
                          </div>
                          <h1 className="text-white-90 font-semibold text-xl">
                            {progress && progress.currentLevel.title}
                          </h1>
                          <span className="text-white-90 text-opacity-50 font-medium text-xl">
                            (level {progress && progress.currentLevel.level})
                          </span>
                        </div>
                        <span className="mt-3 text-white-90 text-base font-semibold">
                          {progress && progress.remainingToNextLevel} USD to{" "}
                          {progress.nextLevel
                            ? progress.nextLevel.title
                            : "---"}
                        </span>
                        <progress
                          className="progress progress-primary md:w-680 mt-3"
                          value={currentUser?.spending}
                          max={
                            progress.nextLevel
                              ? progress.nextLevel.spend
                              : "---"
                          }
                        ></progress>
                      </div>
                      <button>
                        <img src={arrow} alt="arrow" />
                      </button>
                    </div>
                  </div>
                </Link>
                <Link to="/reward/levels" className="w-full">
                  <div className="card w-full bg-mainCard text-primary-content">
                    <div className="card-body flex flex-row justify-between items-center px-10">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                          <div className="p-3 flex justify-center items-center">
                            <img src={icNote} alt="bar" />
                          </div>
                          <h1 className="text-white-90 font-semibold text-xl">
                            Levels
                          </h1>
                        </div>
                        <span className="text-white-90 opacity-50 text-sm font-normal w-44 text-left mt-4">
                          Level up to get more benefits and discounts.
                        </span>
                      </div>
                      <button>
                        <img src={arrow} alt="arrow" />
                      </button>
                    </div>
                  </div>
                </Link>
                <Link to="/reward/lottery" className="w-full">
                  <div className="card w-full bg-mainCard text-primary-content">
                    <div className="card-body flex flex-row justify-between items-center px-10">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                          <div className="p-3 flex justify-center items-center">
                            <img src={icCalendar} alt="calendar" />
                          </div>
                          <h1 className="text-white-90 font-semibold text-xl">
                            Lottery
                          </h1>
                        </div>
                        <span className="text-white-90 opacity-50 text-sm font-normal w-44 text-left mt-4">
                          Level up to get more benefits and discounts.
                        </span>
                      </div>
                      <button>
                        <img src={arrow} alt="arrow" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Aside ref={donationForm} />
          </div>
        </Container>
      </section>
    </Page>
  );
}

export default Reward;
