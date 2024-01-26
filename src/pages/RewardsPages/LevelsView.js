import React, { useEffect, useRef, useState } from "react";
import Page from "../../layouts/Page/Page";
import Container from "../../layouts/Container/Container";
import Aside from "../../components/aside/Aside";
import BackBtn from "../../components/buttons/backBtn/BackBtn";
import star from "../../assets/streamline_interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars.svg";

import { useApp } from "../../services/AppContext";
import { scrollToElement } from "../../utils/ActionUtils";
import { Levels } from "../../constants/constants";

function LevelsView() {
  const donationForm = useRef(null);

  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const levelArray = [];
    if (Levels) {
      for (const item of Object.values(Levels)) {
        levelArray.push(item);
      }
      setLevels(levelArray);
    }
  }, []);

  const { currentUser } = useApp();
  const { spending } = currentUser;

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
                <div className="flex flex-col bg-mainCard border-pagBg rounded-xl pt-8 sm:pb-20 sm:px-6">
                  <div className="flex items-center justify-start w-full">
                    <BackBtn title="Levels" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mt-11 gap-2">
                    <ul className="cup steps steps-vertical w-full overflow-hidden">
                      {levels.map((lvl, index) => (
                        <li
                          key={index}
                          className={`cup step step-neutral w-full ml-5 sm:ml-10 ${
                            spending >= lvl.spend ? "step-primary" : ""
                          }`}
                        >
                          <div className="flex flex-col items-start  w-full max-w-xl">
                            <span className="font-normal text-white-90 text-sm opacity-50 mt-4">
                              Level {lvl.level}
                            </span>
                            <h1 className="font-semibold text-white-90 text-xl">
                              {lvl.title}
                            </h1>

                            {lvl.spend !== 0 && (
                              <span className="font-normal text-white-90 text-sm opacity-50">
                                After spending {lvl.spend.toLocaleString()} EUR
                              </span>
                            )}
                            {lvl.spend !== 0 && (
                              <div className="collapse collapse-arrow w-52 sm:w-full border-pagBg bg-mainCard rounded-lg mt-4 mb-4 sm:mb-0">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title">
                                  <h1 className="font-semibold text-white-90 text-sm sm:text-xl text-left">
                                    Benefits
                                  </h1>
                                </div>
                                <div className="collapse-content text-left px-4">
                                  <span className="font-normal text-white-90 text-xs sm:text-sm opacity-50">
                                    Earn 2 points for every 1 EUR spent.
                                  </span>
                                  <span className="flex items-center gap-1.5 mt-3 sm:mt-6 text-yellow-300 font-medium text-sm">
                                    <img src={star} alt="star" />
                                    {lvl.points} Points
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Aside ref={donationForm} />
          </div>
        </Container>
      </section>
    </Page>
  );
}

export default LevelsView;
