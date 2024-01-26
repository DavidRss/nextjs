import React, { useState, useEffect, useRef } from "react";
import Page from "../../layouts/Page/Page";
import Container from "../../layouts/Container/Container";
import Aside from "../../components/aside/Aside";
import BackBtn from "../../components/buttons/backBtn/BackBtn";
import { useApp } from "../../services/app.context";
import { projectService } from "../../services/firebase.service";
import { PROJECT_ID } from "../../constants/constants";
import {
  getDateFromTimestamp,
  getFormatedDateFromSeconds,
} from "../../utils/utils";
import lotteryImage from "../../assets/lotteryImg.png";

function Lottery() {
  const { loadedProject, project, products } = useApp();

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

  const productImage = (productId) => {
    console.log("===== products =====", products);
    const searchId = `gid://shopify/Product/${productId}`;
    console.log("===== searchId: ", searchId);
    const product = products.find((item) => item.id === searchId);
    console.log("===== product: ", product);
    if (product) {
      return product.images[0].src;
    } else {
      return lotteryImage;
    }
  };

  const formmattedDate = (timestamp) => {
    const fDate = getDateFromTimestamp(timestamp);
    return `${fDate.day}/${fDate.month}/${fDate.year}`;
  };

  return (
    <Page>
      <section className="w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-6 items-center xl:items-start">
            <div className="flex flex-col w-full">
              <h1 className="text-white font-bold text-3xl mb-8 text-left">
                Welcome to <span className="text-main">Loyalty Program</span>
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col bg-mainCard rounded-xl pt-8 sm:pb-20 sm:px-6">
                  <div className="flex items-center justify-start w-full">
                    <BackBtn title="Lottery" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full mt-11 gap-2">
                    <h1 className="text-white text-2xl font-semibold mt-2">
                      What is Lorem Ipsum?
                    </h1>
                    <p className="text-white opacity-50 text-base font-normal max-w-lg text-left">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                    </p>
                    <div className="divider my-6" />
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
                          <span className="text-white font-semibold text-base">
                            {formmattedDate(reward.createdAt)}
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
