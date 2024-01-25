import React, { useRef, useState } from "react";
import Page from "../../layouts/Page/Page";
import Container from "../../layouts/Container/Container";
import Aside from "../../components/aside/Aside";
import BackBtn from "../../components/buttons/backBtn/BackBtn";
import copy from "../../assets/new/Copy.svg";
import copyWhite from "../../assets/Copy-white.svg";
import ticket from "../../assets/new/Ticket Sale.svg";
import refGift from "../../assets/new/Gift-points.svg";

import { useApp } from "../../services/app.context";
import { copyTextToClipboard } from "../../utils/utils";

function Referals() {
  const { currentUser, showNotifyMessage } = useApp();
  const { referralCode } = currentUser;
  const origin = window.location.origin;

  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const inputValue = inputRef.current.value;
    if (inputValue) {
      copyTextToClipboard(inputValue)
        .then(() => {
          showNotifyMessage({
            type: "success",
            message: "Copied",
          });
          setCopied(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Page>
      <section className="w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-6 items-center xl:items-start">
            <div className="flex flex-col w-full">
              <h1 className="text-white font-bold text-3xl mb-8 text-left">
                Réalises des challenges{" "}
                <span className="text-main">Gagnes des Points</span>
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col bg-mainCard border-pagBg rounded-xl pt-8 sm:px-6">
                  <div className="flex items-center justify-start w-full">
                    <BackBtn title="Referral" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full mt-11 gap-2">
                    <h1 className="text-white font-semibold text-2xl mb-2">
                      L'amitié compte beaucoup pour nous
                    </h1>
                    <p className="text-base font-normal text-white text-center mt-8">
                      Invite tes amis à nous rejoindre sur le shop et bénéficie
                      de récompenses. Partage le lien ci-dessous pour parrainer
                      tes amis!
                    </p>
                    <div className="divider my-6" />
                    <div className="mt-7 w-full flex flex-col items-center">
                      <ul className="ref steps steps-vertical flex flex-col gap-8 mb-8">
                        <li className="flex items-center gap-5">
                          <span
                            className="w-16 h-16 flex items-center justify-center rounded-full"
                            style={{ background: "#464646" }}
                          >
                            1
                          </span>
                          <button
                            className="flex gap-2 items-center text-white text-xl font-semibold underline cursor-pointer"
                            onClick={copyToClipboard}
                          >
                            Partage ton lien
                            <img src={copy} alt="copy" />
                          </button>
                        </li>
                        <li className="flex items-center gap-5">
                          <span
                            className="w-16 h-16 flex items-center justify-center rounded-full"
                            style={{ background: "#464646" }}
                          >
                            2
                          </span>
                          <span className="text-white text-xl font-semibold">
                            Ton ami s'inscrit en utilisant ton lien
                          </span>
                        </li>
                        <li className="flex items-center gap-5">
                          <span
                            className="w-16 h-16 flex items-center justify-center rounded-full"
                            style={{ background: "#464646" }}
                          >
                            3
                          </span>
                          <span className="text-white text-xl font-semibold">
                            Ton ami passe une commande
                          </span>
                        </li>
                      </ul>
                      <div className="w-full">
                        <div
                          className="w-full flex flex-col refBg gap-12 rounded-xl px-12 py-8"
                          style={{ background: "#464646" }}
                        >
                          <div className="flex flex-col gap-7 items-start sm:flex-row sm:items-center sm:gap-16">
                            <div className="flex items-center gap-2">
                              <div className="rounded-full p-2 border border-main">
                                <img src={ticket} alt="icon" />
                              </div>
                              <div className="flex flex-col items-start gap-0.5 text-white">
                                <span className="font-normal text-sm opacity-50">
                                  Tu reçois
                                </span>
                                <span className="font-semibold text-xl">
                                  10% de réduction
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="rounded-full p-2 border border-main">
                                <img src={ticket} alt="icon" />
                              </div>
                              <div className="flex flex-col items-start gap-0.5 text-white">
                                <span className="font-normal text-sm opacity-50">
                                  Il reçoit
                                </span>
                                <span className="font-semibold text-xl">
                                  10% de réduction
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="rounded-full p-2 border border-main min-w-max">
                              <img src={refGift} alt="icon" />
                            </div>
                            <div className="flex flex-col items-start gap-0.5 text-white">
                              <span className="font-semibold text-xl">
                                400 Points
                              </span>
                              <span className="text-left font-normal text-sm opacity-50">
                                Un fois que ton ami passe sa commande, tu reçois
                                cette récompense en bonus
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4 mt-6">
                          <input
                            type="text"
                            readOnly
                            placeholder={`${origin}/signup?referralCode=${referralCode}`}
                            className={`input w-full cursor-pointer ${
                              copied
                                ? "bg-success bg-opacity-20 text-white font-semibold"
                                : "bg-white"
                            }`}
                            value={`${origin}/signup?referralCode=${referralCode}`}
                            ref={inputRef}
                            style={{ background: "#464646" }}
                          />

                          <button
                            type="buttom"
                            onClick={copyToClipboard}
                            className="text-white uppercase py-3 px-8 rounded-md font-semibold flex gap-1.5 items-center transition-all hover:scale-105"
                            style={{
                              background:
                                "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
                              boxShadow: " 0px 4px 0px 0px #196700",
                            }}
                          >
                            <img src={copyWhite} alt="copy-icon white" />
                            copier
                          </button>
                        </div>
                        <div className="mt-12 flex w-full flex-col items-center gap-7 pb-9">
                          <div className="grid grid-flow-col gap-4">
                            <span className="hover:cursor-pointer hover:scale-105 transition-all">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35"
                                height="28"
                                viewBox="0 0 35 28"
                                fill="none"
                              >
                                <path
                                  d="M34.2991 3.40008C33.0543 3.96591 31.7125 4.33774 30.3221 4.51558C31.7448 3.65874 32.8441 2.30075 33.3615 0.667914C32.0196 1.47625 30.5323 2.04208 28.9641 2.36541C27.687 0.97508 25.8925 0.166748 23.8555 0.166748C20.0563 0.166748 16.9523 3.27074 16.9523 7.10224C16.9523 7.6519 17.017 8.1854 17.1302 8.68657C11.3748 8.39557 6.25001 5.63107 2.83885 1.44391C2.24068 2.46241 1.90118 3.65874 1.90118 4.91974C1.90118 7.32857 3.11368 9.46257 4.98901 10.6751C3.84118 10.6751 2.77418 10.3517 1.83651 9.86673V9.91523C1.83651 13.2779 4.22918 16.0909 7.39784 16.7214C6.38052 16.9998 5.3125 17.0385 4.27768 16.8346C4.71677 18.2127 5.57673 19.4186 6.73665 20.2828C7.89657 21.1469 9.29814 21.6259 10.7443 21.6522C8.29287 23.5929 5.25414 24.6419 2.12751 24.6269C1.57785 24.6269 1.02818 24.5945 0.478516 24.5299C3.55018 26.5022 7.20384 27.65 11.1162 27.65C23.8555 27.65 30.8556 17.0771 30.8556 7.91057C30.8556 7.6034 30.8556 7.3124 30.8395 7.00524C32.1975 6.03524 33.3615 4.80657 34.2991 3.40008Z"
                                  fill="#439115"
                                />
                              </svg>
                            </span>
                            <span className="hover:cursor-pointer hover:scale-105 transition-all">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="26"
                                viewBox="0 0 36 26"
                                fill="none"
                              >
                                <path
                                  d="M14.2345 18.4055L23.464 13.0705L14.2345 7.73552V18.4055ZM34.792 4.48117C35.0231 5.31699 35.1832 6.43733 35.2899 7.86C35.4144 9.28266 35.4677 10.5097 35.4677 11.5767L35.5744 13.0705C35.5744 16.9651 35.2899 19.8282 34.792 21.6598C34.3474 23.2603 33.3159 24.2918 31.7155 24.7364C30.8796 24.9675 29.3503 25.1276 27.0029 25.2343C24.691 25.3588 22.5748 25.4121 20.6187 25.4121L17.7911 25.5188C10.3399 25.5188 5.69847 25.2343 3.86679 24.7364C2.26629 24.2918 1.23486 23.2603 0.790278 21.6598C0.559095 20.824 0.399045 19.7037 0.292346 18.281C0.167862 16.8584 0.114512 15.6313 0.114512 14.5643L0.0078125 13.0705C0.0078125 9.17596 0.292346 6.31285 0.790278 4.48117C1.23486 2.88067 2.26629 1.84924 3.86679 1.40466C4.70261 1.17348 6.23197 1.01342 8.57937 0.906725C10.8912 0.782242 13.0074 0.728892 14.9636 0.728892L17.7911 0.622192C25.2423 0.622192 29.8838 0.906725 31.7155 1.40466C33.3159 1.84924 34.3474 2.88067 34.792 4.48117Z"
                                  fill="#439115"
                                />
                              </svg>
                            </span>
                            <span className="hover:cursor-pointer hover:scale-105 transition-all">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="32"
                                viewBox="0 0 17 32"
                                fill="none"
                              >
                                <path
                                  d="M11.102 18.1338H14.9994L16.5583 11.898H11.102V8.78011C11.102 7.1744 11.102 5.66223 14.2199 5.66223H16.5583V0.424185C16.0501 0.35715 14.1311 0.205933 12.1044 0.205933C7.87192 0.205933 4.86628 2.7891 4.86628 7.53296V11.898H0.189453V18.1338H4.86628V31.3848H11.102V18.1338Z"
                                  fill="#439115"
                                />
                              </svg>
                            </span>
                          </div>
                          <span className="text-white font-semibold text-xl">
                            Tu as recommandé{" "}
                            {currentUser?.referrals
                              ? currentUser.referrals.length
                              : 0}{" "}
                            amis
                          </span>
                        </div>
                      </div>
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

export default Referals;
