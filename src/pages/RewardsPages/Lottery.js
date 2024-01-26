import React, { useState, useEffect, useMemo, useRef } from "react";
import Page from "../../layouts/Page/Page";
import Container from "../../layouts/Container/Container";
import Aside from "../../components/aside/Aside";
import BackBtn from "../../components/buttons/backBtn/BackBtn";
import icGiftPoints from "../../assets/ic_gift-points.svg";
import { scrollToElement } from "../../utils/ActionUtils";
import { useApp } from "../../services/AppContext";
import {
  getDateFromTimestamp,
  getFormatedDateFromSeconds,
} from "../../utils/utils";
import { projectService } from "../../services/FirebaseService";
import { PROJECT_ID } from "../../constants/constants";
import cardImg from "../../assets/card.png";

function Lottery() {
  const { loadedProject, project, products } = useApp();

  const donationForm = useRef(null);
  const timer = useRef(null);

  const [counter, setCounter] = useState(0);
  const [endDate, setEndDate] = useState(null);

  const [rewards, setRewards] = useState([]);

  const loadRewards = async () => {
    const rewardList = await projectService.getRewards(PROJECT_ID);
    console.log("===== rewardList: ", rewardList);
    setRewards(rewardList);
  };

  useEffect(() => {
    if (loadedProject && project) {
      const endSeconds = project.lotteryDate.seconds;
      const curSeconds = parseInt(new Date().getTime() / 1000);
      if (endSeconds && endSeconds - curSeconds > 0) {
        setCounter(endSeconds - curSeconds);
      }
    }
  }, [loadedProject, project]);

  useEffect(() => {
    if (counter > 0) {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => setCounter(counter - 1), 1000);

      setEndDate(getFormatedDateFromSeconds(counter));
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [counter]);

  useEffect(() => {
    loadRewards();
  }, []);

  const handleOnParticipate = () => {
    scrollToElement(donationForm.current);
  };

  const productImage = (productId) => {
    console.log("===== products =====", products);
    const searchId = `gid://shopify/Product/${productId}`;
    console.log("===== searchId: ", searchId);
    const product = products.find((item) => item.id === searchId);
    console.log("===== product: ", product);
    if (product) {
      return product.images[0].src;
    } else {
      return cardImg;
    }
  };

  const formmattedDate = (timestamp) => {
    const fDate = getDateFromTimestamp(timestamp);
    return `${fDate.day}/${fDate.month}/${fDate.year}`;
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
                    <BackBtn title="Lottery" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mt-11 gap-2">
                    <h1 className="text-white-90 text-xl font-semibold mt-2">
                      What is Lorem Ipsum?
                    </h1>
                    <p className="text-white-90 opacity-50 text-base font-normal max-w-lg text-left">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                    </p>
                    <div className="w-full flex flex-col refBg gap-12 bg-mainCard rounded-xl px-5 sm:px-12 py-8 mb-6 mt-12">
                      <div className="flex flex-col gap-7 items-start sm:flex-row sm:items-center justify-center sm:gap-16">
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                          <div className="flex flex-col text-white-90">
                            <span className="countdown font-mono text-5xl">
                              {endDate ? endDate.days : "---"}
                            </span>
                            days
                          </div>
                          <div className="flex flex-col text-white-90">
                            <span className="countdown font-mono text-5xl">
                              {endDate ? endDate.hours : "---"}
                            </span>
                            hours
                          </div>
                          <div className="flex flex-col text-white-90">
                            <span className="countdown font-mono text-5xl">
                              {endDate ? endDate.minutes : "---"}
                            </span>
                            min
                          </div>
                          <div className="flex flex-col text-white-90">
                            <span className="countdown font-mono text-5xl">
                              {endDate ? endDate.seconds : "---"}
                            </span>
                            sec
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary bg-opacity-10 p-2 min-w-max">
                          <img src={icGiftPoints} alt="icon" />
                        </div>
                        <div className="flex flex-col items-start gap-0.5 text-white-90">
                          <span className="font-semibold text-xl">
                            500 Points (5 EUR)
                          </span>
                          <span className="text-left font-normal text-sm opacity-50">
                            For every 3 friend you refer, you’ll get this extra
                            reward
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid px-5 sm:px-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-start sm:justify-items-center xl:justify-items-start gap-6 w-full">
                      {rewards.map((reward, index) => (
                        <div
                          key={index}
                          className={`flex flex-col items-start w-full gap-2 ${
                            reward.disabled ? "disabled" : ""
                          }`}
                        >
                          <img
                            src={productImage(reward.productId)}
                            alt="lottery img"
                            className="w-full"
                          />
                          <span className="text-white-90 font-semibold text-base">
                            {formmattedDate(reward.createdAt)}
                          </span>
                        </div>
                      ))}
                    </div>
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

export default Lottery;
