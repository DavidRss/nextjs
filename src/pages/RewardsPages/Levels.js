import React, { useEffect, useRef, useState } from "react";
import Page from "../../layouts/Page/Page";
import Container from "../../layouts/Container/Container";
import Aside from "../../components/aside/Aside";
import BackBtn from "../../components/buttons/backBtn/BackBtn";
import star from "../../assets/streamline_interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars.svg";

import { levels } from "../../stores/levelsData";
import { useApp } from "../../services/AppContext";
import { scrollToElement } from "../../utils/ActionUtils";

function Levels() {
  const donationForm = useRef(null);

  const [levelsData, setLevelsData] = useState([]);

  useEffect(() => {
    levels ? setLevelsData(levels) : setLevelsData([]);
  }, []);

  const { currentUser } = useApp();
  const { spending } = currentUser;

  const handleOnParticipate = () => {
    scrollToElement(donationForm.current);
  };

  return (
    <Page handleOnParticipate={handleOnParticipate}>
      <section className="bg-white w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-32 items-center xl:items-start">
            <div className="flex flex-col w-full">
              <h1 className="text-gray-900 font-bold text-3xl mb-8 text-left">
                Welcome to <span className="text-primary">Loyalty Program</span>
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col bg-secondary border-pagBg rounded-xl pt-8 sm:pb-20 sm:px-6">
                  <div className="flex items-center justify-start w-full">
                    <BackBtn title="Levels" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mt-11 gap-2">
                    <ul className="cup steps steps-vertical w-full overflow-hidden">
                      {levelsData.map((lvl, index) => (
                        <li
                          key={index}
                          className={`cup step step-neutral w-full ml-5 sm:ml-10 ${
                            spending >= lvl.spend ? "step-primary" : ""
                          }`}
                        >
                          <div className="flex flex-col items-start  w-full max-w-xl">
                            <span className="font-normal text-gray-900 text-sm opacity-50">
                              Level {lvl.level}
                            </span>
                            <h1 className="font-semibold text-gray-900 text-xl">
                              {lvl.title}
                            </h1>

                            {lvl.spend !== 0 && (
                              <span className="font-normal text-gray-900 text-sm opacity-50">
                                After spending {lvl.spend.toLocaleString()} EUR
                              </span>
                            )}
                            {lvl.spend !== 0 && (
                              <div className="collapse collapse-arrow w-52 sm:w-full border-pagBg bg-white rounded-lg mt-4 mb-4 sm:mb-0">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title">
                                  <h1 className="font-semibold text-gray-900 text-sm sm:text-xl text-left">
                                    Benefits
                                  </h1>
                                </div>
                                <div className="collapse-content text-left px-4">
                                  <span className="font-normal text-gray-900 text-xs sm:text-sm opacity-50">
                                    {lvl.benefits.desc}
                                  </span>
                                  <span className="flex items-center gap-1.5 mt-3 sm:mt-6 text-yellow-300 font-medium text-sm">
                                    <img src={star} alt="star" />
                                    {lvl.benefits.points} Points
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

export default Levels;
