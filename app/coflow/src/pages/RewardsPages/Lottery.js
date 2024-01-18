import React, { useState, useEffect, useMemo } from "react";
import Page from "../../layouts/Page/Page";
import Container from "../../layouts/Container/Container";
import Aside from "../../components/aside/Aside";
import BackBtn from "../../components/buttons/backBtn/BackBtn";
import { lotteryData } from "../../stores/lotteryData";
import refGift from "../../assets/Gift-points.svg";

function Lottery() {
  const [lotteryCard, setLotteryCards] = useState([]);

  useEffect(() => {
    lotteryData ? setLotteryCards(lotteryData) : setLotteryCards([]);
  }, []);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = useMemo(() => new Date("2023-09-30"), []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        return;
      }

      const dayCount = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hourCount = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuteCount = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondCount = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(dayCount);
      setHours(hourCount);
      setMinutes(minuteCount);
      setSeconds(secondCount);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  return (
    <Page>
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
                    <BackBtn title="Lottery" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mt-11 gap-2">
                    <h1 className="text-gray-900 text-xl font-semibold mt-2">
                      What is Lorem Ipsum?
                    </h1>
                    <p className="text-gray-900 opacity-50 text-base font-normal max-w-lg text-left">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                    </p>
                    <div className="w-full flex flex-col refBg gap-12 bg-white rounded-xl border border-pagBg px-5 sm:px-12 py-8 mb-6 mt-12">
                      <div className="flex flex-col gap-7 items-start sm:flex-row sm:items-center justify-center sm:gap-16">
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                          <div className="flex flex-col text-gray-900">
                            <span className="countdown font-mono text-5xl">
                              {days}
                            </span>
                            days
                          </div>
                          <div className="flex flex-col text-gray-900">
                            <span className="countdown font-mono text-5xl">
                              {hours}
                            </span>
                            hours
                          </div>
                          <div className="flex flex-col text-gray-900">
                            <span className="countdown font-mono text-5xl">
                              {minutes}
                            </span>
                            min
                          </div>
                          <div className="flex flex-col text-gray-900">
                            <span className="countdown font-mono text-5xl">
                              {seconds}
                            </span>
                            sec
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary bg-opacity-10 p-2 min-w-max">
                          <img src={refGift} alt="icon" />
                        </div>
                        <div className="flex flex-col items-start gap-0.5 text-gray-900">
                          <span className="font-semibold text-xl">
                            500 Points (5 USD)
                          </span>
                          <span className="text-left font-normal text-sm opacity-50">
                            For every 3 friend you refer, you’ll get this extra
                            reward
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid px-5 sm:px-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-start sm:justify-items-center xl:justify-items-start gap-6 w-full">
                      {lotteryCard.map((card, index) => (
                        <div
                          key={index}
                          className={`flex flex-col items-start w-full gap-2 ${
                            card.disabled ? "disabled" : ""
                          }`}
                        >
                          <img
                            src={card.img}
                            alt="lottery img"
                            className="w-full"
                          />
                          <span className="text-gray-900 font-semibold text-base">
                            {card.date}
                          </span>
                        </div>
                      ))}
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

export default Lottery;
