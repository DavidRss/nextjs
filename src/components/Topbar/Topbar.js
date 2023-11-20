import React from "react";
import imgRobot from "../../assets/robot.png";

export default function Topbar() {

  return (
    <>
      <section className="h-[366px] bg-[center_left_-18.75rem] bg-cover xl:bg-center relative flex w-full gap-14 items-center justify-center px-5 xl:px-0">
        <div className="navbar max-w-7xl relative h-full bg-img-header bg-no-repeat bg-cover bg-center rounded-[34px] pt-8 px-7 flex flex-col xl:flex-row xl:pt-0 xl:pl-10">
          <div className="block z-10">
            <h1 className="text-4xl xl:text-6xl font-bold text-white">Hello there!</h1>
            <h2 className="text-base xl:text-lg font-semibold w-full max-w-2xl mt-2 xl:mt-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </h2>
          </div>
          <img className="xl:hidden h-[60%] mt-4" src={imgRobot} />
        </div>
        <img className="absolute hidden xl:block top-0 right-[-170px] h-full" src={imgRobot} />
      </section>
    </>
  );
}
