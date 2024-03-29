import React from "react";
import Page from "../../layouts/Page/Page";
import Container from "../../layouts/Container/Container";
import Aside from "../../components/aside/Aside";
import BackBtn from "../../components/buttons/backBtn/BackBtn";

import welcome from "../../assets/welcome-icon.png";
import dons from "../../assets/dons-icon.png";
import secDons from "../../assets/secDons-icon.png";
import tiktok from "../../assets/tiktok-icon.png";
import youtube from "../../assets/youtube-icon.png";
import instagram from "../../assets/instagram-icon.png";
import daily from "../../assets/daily-icon.png";
import comments from "../../assets/comments-icon.png";
import refIcon from "../../assets/ref-icon.png";
import { EARN } from "../../constants/constants";
import { useApp } from "../../services/app.context";

function Earn() {
  const { currentUser } = useApp();

  return (
    <Page>
      <section className="w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-32 items-center xl:items-start">
            <div className="flex flex-col w-full">
              <h1 className="text-white font-bold text-3xl mb-8 text-left">
                Réalises des challenges{" "}
                <span className="text-main">Gagnes des Points</span>
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col bg-mainCard border-pagBg rounded-xl pt-7 pb-20 px-6">
                  <div className="flex items-center justify-start w-full">
                    <BackBtn title="Earn" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full mt-11 gap-2">
                    <h2 className="text-white font-semibold text-2xl">
                      Cashback
                    </h2>
                    <span className="text-white font-normal text-base">
                      Gagne 10 Points pour chaque 1 EUR dépensé.
                    </span>
                  </div>
                  <div className="divider my-6" />
                  <div className="flex flex-col items-center justify-start w-full mt-8 gap-2">
                    <h2 className="text-white font-semibold text-2xl">
                      Challenge Board
                    </h2>
                    <span className="text-white font-normal text-base">
                      Collectionne les badges et reçoit des récompenses
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center xl:justify-items-start gap-6 mt-8">
                    <div className="flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 ">
                      <div
                        className={`${
                          currentUser.earned.family
                            ? "bg-emerald-500"
                            : "bg-white"
                        } rounded-full border-pagBg p-2`}
                      >
                        <img src={welcome} alt="icon" />
                      </div>
                      <h1 className="text-base font-normal tetx-gray-900 opacity-90 text-center">
                        Bienvenue dans la Famille
                      </h1>
                      <h2 className="text-base font-semibold text-white">
                        {EARN.FAMILY} Points
                      </h2>
                    </div>

                    <div className="flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 ">
                      <div
                        className={`${
                          currentUser.earned.donation1
                            ? "bg-emerald-500"
                            : "bg-white"
                        } rounded-full border-pagBg p-2`}
                      >
                        <img src={dons} alt="icon" />
                      </div>
                      <h1 className="text-base font-normal tetx-gray-900 opacity-90 text-center">
                        Premier Achat
                      </h1>
                      <h2 className="text-base font-semibold text-white">
                        {EARN.DONATION1} Points
                      </h2>
                    </div>

                    <div className="flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 ">
                      <div
                        className={`${
                          currentUser.earned.donation2
                            ? "bg-emerald-500"
                            : "bg-white"
                        } rounded-full border-pagBg p-2`}
                      >
                        <img src={secDons} alt="icon" />
                      </div>
                      <h1 className="text-base font-normal tetx-gray-900 opacity-90 text-center">
                        Deuxième Achat
                      </h1>
                      <h2 className="text-base font-semibold text-white">
                        {EARN.DONATION2} Points
                      </h2>
                    </div>

                    {/* <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={tiktok} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Post a clip on Tik Tok (Rules : Clip must promote this page and you must tag @bricebbrice)</h1>
                                        <h2 className='text-base font-semibold text-white'>300 points Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={youtube} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Post a clip on Youtube short (Rules : Clip must promote this page and you must tag @bricebbrice)</h1>
                                        <h2 className='text-base font-semibold text-white'>300 points Vibes</h2>
                                    </div>

                                    <div className='flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 '>
                                        <div className='bg-white rounded-full border-pagBg p-2'>
                                            <img src={instagram} alt="icon" />
                                        </div>
                                        <h1 className='text-base font-normal tetx-gray-900 opacity-90 text-center'>Post a clip on Instagram Reels (Rules : Clip must promote this page and you must tag @bricebbrice)</h1>
                                        <h2 className='text-base font-semibold text-white'>300 points Vibes</h2>
                                    </div> */}

                    <div className="flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 ">
                      <div className="bg-white rounded-full border-pagBg p-2">
                        <img src={daily} alt="icon" />
                      </div>
                      <h1 className="text-base font-normal tetx-gray-900 opacity-90 text-center">
                        Connecte à la page chaque jour
                      </h1>
                      <h2 className="text-base font-semibold text-white">
                        {EARN.DAILY} Points
                      </h2>
                    </div>

                    <div className="flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 ">
                      <div
                        className={`${
                          currentUser.earned.comment
                            ? "bg-emerald-500"
                            : "bg-white"
                        } rounded-full border-pagBg p-2`}
                      >
                        <img src={comments} alt="icon" />
                      </div>
                      <h1 className="text-base font-normal tetx-gray-900 opacity-90 text-center">
                        Envoie un message dans le chat
                      </h1>
                      <h2 className="text-base font-semibold text-white">
                        {EARN.COMMENT} Points
                      </h2>
                    </div>

                    <div className="flex flex-col items-center justify-start sm:justify-center gap-2 sm:w-44 ">
                      <div
                        className={`${
                          currentUser.earned.referral
                            ? "bg-emerald-500"
                            : "bg-white"
                        } rounded-full border-pagBg p-2`}
                      >
                        <img src={refIcon} alt="icon" />
                      </div>
                      <h1 className="text-base font-normal tetx-gray-900 opacity-90 text-center">
                        Recommande un ami
                      </h1>
                      <h2 className="text-base font-semibold text-white">
                        {EARN.REFER} Points
                      </h2>
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

export default Earn;
