import React from "react";
import imgRobot from "../../assets/robot.png";

export default function Topbar() {
  return (
    <>
      <section className="h-[366px] bg-[center_left_-18.75rem] bg-cover xl:bg-center relative flex w-full gap-14 items-center justify-center px-5 xl:px-0 overflow-hidden">
        <div className="navbar max-w-7xl relative h-full bg-img-header bg-no-repeat bg-cover bg-center rounded-[34px] pt-8 px-7 flex flex-col xl:flex-row xl:pt-0 xl:pl-10">
          <div className="block z-10">
            <h1 className="text-4xl xl:text-6xl font-bold text-white">
              Salut les potes !
            </h1>
            <h2 className="text-base xl:text-lg font-semibold w-full max-w-2xl mt-2 xl:mt-8">
              <p>
                Moi c’est Brice et <strong>bienvenue sur mon shop</strong>. Ici
                tous les fonds récoltés seront destinés à la production de vidéo
                dans le seul but de vous faire <strong>kiffer un max</strong>,
                alors n’hésitez pas à soutenir le projet !
              </p>
            </h2>
          </div>
          <img className="xl:hidden h-[60%] mt-4" src={imgRobot} />
        </div>
        <img
          className="absolute hidden xl:block top-0 right-[-170px] h-full"
          src={imgRobot}
        />
      </section>
    </>
  );
}
