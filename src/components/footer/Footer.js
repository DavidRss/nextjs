import React from "react";
import Container from "../../layouts/Container/Container";
import icLove from "../../assets/icLove.svg";
import icMail from "../../assets/icMail.svg";
import icChat from "../../assets/icChat.svg";
import icTwitter from "../../assets/icTwitter.svg";
import icYoutube from "../../assets/icYoutube.svg";
import icFacebook from "../../assets/icFacebook.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-navigate w-full flex justify-center pt-20 pb-16">
        <Container>
          <div className="w-full flex flex-wrap lg:flex-row px-5 xl:px-0 gap-5 justify-center items-center lg:justify-between">
            <div className="rounded-2xl shadow-md flex flex-col items-center px-5 xl:px-0 xl:w-96 py-5 bg-mainCard hover:cursor-pointer hover:scale-105 transition-all w-80">
              <img src={icLove} alt="footer-img" className="my-8" />
              <h2 className="text-white-90 text-xl font-semibold mb-2 text-center">
                Vous avez trouvé un bug ?
              </h2>
              <span className="text-white-50 text-base font-normal">
                Signalez le ici
              </span>
            </div>
            <div className="rounded-2xl shadow-md flex flex-col items-center px-5 xl:px-0 xl:w-96 py-5 bg-mainCard hover:cursor-pointer hover:scale-105 transition-all w-80">
              <img src={icMail} alt="footer-img" className="my-8" />
              <h2 className="text-white-90 text-xl font-semibold mb-2 text-center">
                Vous avez une suggestion ?
              </h2>
              <span className="text-white-50 text-base font-normal">
                Soumettez vos idées ici
              </span>
            </div>
            <div className="rounded-2xl shadow-md flex flex-col items-center px-5 xl:px-0 xl:w-96 py-5 bg-mainCard hover:cursor-pointer hover:scale-105 transition-all w-80">
              <img src={icChat} alt="footer-img" className="my-8" />
              <h2 className="text-white-90 text-xl font-semibold mb-2 text-center">
                Vous voulez nous envoyer du love
              </h2>
              <span className="text-white-50 text-base font-normal">
                Faites le ici
              </span>
            </div>
          </div>
        </Container>
      </div>
      <footer className="w-full py-10 xl:py-4 flex justify-center ">
        <Container>
          <div className="w-full justify-between flex flex-col xl:flex-row items-center px-5 xl:px-0">
            <div className="flex flex-col xl:flex-row items-center gap-5">
              <h1 className="text-white text-xl font-semibold mb-6 xl:mb-0">
              BBB Shop
              </h1>
              <span className="hidden xl:block">
                © 2023, Powered by Shopify
              </span>
            </div>
            <div className="grid grid-flow-col gap-4 mb-10 xl:mb-0">
              <span className="hover:cursor-pointer hover:scale-105 transition-all">
                <img src={icTwitter} />
              </span>
              <span className="hover:cursor-pointer hover:scale-105 transition-all">
                <img src={icYoutube} />
              </span>
              <span className="hover:cursor-pointer hover:scale-105 transition-all">
                <img src={icFacebook} />
              </span>
            </div>
            <span className="block xl:hidden">
              © 2023, Coflow, Powered by Shopify
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
}
