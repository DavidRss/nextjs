import React, { useRef, useState } from "react";
import Page from "../../layouts/Page/Page";
import Container from "../../layouts/Container/Container";
import Aside from "../../components/aside/Aside";
import BackBtn from "../../components/buttons/backBtn/BackBtn";
import icCopyWhite from "../../assets/ic_copy-white.svg";
import icTicket from "../../assets/ic_ticket.svg";
import icGiftPoints from "../../assets/ic_gift-points.svg";
import { useApp } from "../../services/AppContext";
import { scrollToElement } from "../../utils/ActionUtils";
import { copyTextToClipboard } from "../../utils/utils";

function Referals() {
  const { currentUser, showNotifyMessage } = useApp();
  const { referralCode } = currentUser;
  const origin = window.location.origin;

  const donationForm = useRef(null);

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
                <div className="flex flex-col bg-mainCard border-pagBg rounded-xl pt-8 sm:px-6">
                  <div className="flex items-center justify-start w-full">
                    <BackBtn title="Referral" />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full mt-11 gap-2">
                    <h1 className="text-white-90 font-semibold text-xl mb-2">
                      We value friendship
                    </h1>
                    <p className="text-left text-base font-normal text-white-90 opacity-60">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                    <div className="mt-7 w-full flex flex-col items-start">
                      <ul className="ref steps steps-vertical">
                        <li className="ref step step-neutral ml-5">
                          <button
                            className="flex gap-2 items-center text-white-90 text-xl font-semibold underline cursor-pointer"
                            onClick={copyToClipboard}
                          >
                            Share your link
                            <img src={icCopyWhite} alt="copy" />
                          </button>
                        </li>
                        <li className="ref step step-neutral ml-5">
                          <span className="text-white-90 text-xl font-semibold">
                            Your friend signup using your link
                          </span>
                        </li>
                        <li className="ref step step-neutral ml-5">
                          <span className="text-white-90 text-xl font-semibold">
                            Your friend places an order
                          </span>
                        </li>
                        <li className="ref step step-neutral ml-5"></li>
                      </ul>
                      <div className="relative -top-28 z-10 w-full">
                        <div className="w-full flex flex-col refBg gap-12 bg-mainCard rounded-xl pl-28 py-8">
                          <div className="flex flex-col gap-7 items-start sm:flex-row sm:items-center sm:gap-16">
                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-primary bg-opacity-10 p-2">
                                <img src={icTicket} alt="icon" />
                              </div>
                              <div className="flex flex-col items-start gap-0.5 text-white-90">
                                <span className="font-normal text-sm opacity-50">
                                  You get
                                </span>
                                <span className="font-semibold text-xl">
                                  10% coupon
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-primary bg-opacity-10 p-2">
                                <img src={icTicket} alt="icon" />
                              </div>
                              <div className="flex flex-col items-start gap-0.5 text-white-90">
                                <span className="font-normal text-sm opacity-50">
                                  They get
                                </span>
                                <span className="font-semibold text-xl">
                                  10% coupon
                                </span>
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
                                For every 3 friend you refer, you’ll get this
                                extra reward
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4 mt-6">
                          <input
                            type="text"
                            readOnly
                            placeholder={`${origin}/signup?referralCode=${referralCode}`}
                            className={`input input-bordered border-pagBg w-full cursor-pointer ${
                              copied
                                ? "bg-success bg-opacity-20 text-white-90 font-semibold"
                                : "bg-white"
                            }`}
                            value={`${origin}/signup?referralCode=${referralCode}`}
                            ref={inputRef}
                          />
                          <button
                            className="btn btn-primary text-white uppercase text-base font-semibold flex gap-1.5 items-center hover:scale-105 transition-all"
                            onClick={copyToClipboard}
                          >
                            <img src={icCopyWhite} alt="copy-icon white" />
                            copy
                          </button>
                        </div>
                        <div className="mt-12 flex w-full flex-col items-center gap-7">
                          <div className="grid grid-flow-col gap-4">
                            <span className="hover:cursor-pointer hover:scale-105 transition-all">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-primary"
                              >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                              </svg>
                            </span>
                            <span className="hover:cursor-pointer hover:scale-105 transition-all">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-primary"
                              >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                              </svg>
                            </span>
                            <span className="hover:cursor-pointer hover:scale-105 transition-all">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-primary"
                              >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                              </svg>
                            </span>
                          </div>
                          <span className="text-white-90 font-semibold text-xl">
                            You have referred{" "}
                            {currentUser?.referrals
                              ? currentUser.referrals.length
                              : 0}{" "}
                            friends
                          </span>
                        </div>
                      </div>
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

export default Referals;
