import React, { useRef } from "react";
import { useState, useEffect } from "react";
import img1 from "../assets/new/image1.png";
import img2 from "../assets/new/image6.png";
import img3 from "../assets/new/image3.png";
import img4 from "../assets/new/image4.png";
import aboutBg from "../assets/new/about11.png";
import about2 from "../assets/new/about22.png";
import star from "../assets/new/star-fill.svg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../layouts/Main/Main";
import Navigate from "../components/navigate/Navigate";
import { useApp } from "../services/app.context";
import ProductSwiper from "../components/productSwiper/ProductSwiper";
import { shopifyService } from "../services/shopify.service";
import ProductDialog from "../components/productDialog/productDialog";
import { useNavigate } from "react-router-dom";
import { Notify, Path } from "../constants/constants";
import Spinner from "../components/spinner/Spinner";
import { getFormatTimeRemaining, nFormatter } from "../utils/utils";
import Dollar from "../components/Icons/Dollar";
import User from "../components/Icons/User";
import Timer from "../components/Icons/Timer";
import { calculateProgress } from "../utils/level.util";

const Home = () => {
  const navigate = useNavigate();

  const {
    loadedProject,
    project,
    currentUser,
    checkout,
    saveCheckout,
    products,
    loading,
    setLoading,
    showNotifyMessage,
    numberOfParticipant,
  } = useApp();

  const timer = useRef(null);

  const [productList, setProductList] = useState([]);
  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);

  const [selProduct, setSelProduct] = useState();
  const [selVariant, setSelVariant] = useState(null);
  const [counter, setCounter] = useState(0);

  const [showDialog, setShowDialog] = useState(false);

  const levelProgress = calculateProgress(currentUser?.spending ?? 0);
  console.log("===== levelProgress: ", levelProgress);

  useEffect(() => {
    if (products.length > 0) {
      setProductList(products);
      for (const product of products) {
        if (product.title === "Le pack Fer") {
          setProduct1(product);
        } else if (product.title === "Le pack Or") {
          setProduct2(product);
        }
      }
    }
  }, [products]);

  useEffect(() => {
    if (loadedProject && project) {
      const endSeconds = project.endOfDate.seconds;
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
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [counter]);

  const processPurchase = async (variant) => {
    try {
      setLoading(true);

      let checkoutInfo = await shopifyService.processPurchase(
        checkout,
        variant,
        currentUser
      );

      saveCheckout(checkoutInfo);

      window.open(checkoutInfo.webUrl);

      setShowDialog(false);
    } catch (err) {
      console.log("===== handleClickProduct error: ", err);
    }

    setLoading(false);
  };

  const onChangedVariant = (e) => {
    setSelVariant(e.target.value);
  };

  const handleClickProduct = async (product) => {
    if (!currentUser) {
      navigate(`/${Path.SIGNIN}`, { replace: true });
      return;
    }

    const variants = product.variants;
    if (variants.length > 0) {
      setSelProduct(product);
      setSelVariant(variants[0].id);
      setShowDialog(true);
    } else {
      showNotifyMessage({
        type: Notify.Type.ERROR,
        message: "This product is not available in a store.",
      });
    }
  };

  return (
    <Main>
      <Header />
      <Navigate />

      <section className="flex w-full flex-col items-center justify-center">
        <ProductSwiper product={product1} processPurchase={processPurchase} />
        <ProductSwiper
          product={product2}
          isReversed
          processPurchase={processPurchase}
        />
      </section>
      <section
        className="flex w-full justify-center py-10 3xl:py-20 bg-thrBg"
        style={{ borderTop: "10px solid #404040" }}
      >
        <div className="max-w-7xl w-full flex flex-col gap-14 px-4 3xl:px-0">
          <h2 className="text-4xl font-semibold px-4 xl:px-0">
            Another Products:
          </h2>
          <Swiper
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
            style={{ width: "100%", height: "100%" }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
                maxWidth: "425px",
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {productList.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="card w-full shadow-xl mb-12"
                  style={{ background: "rgba(255, 255, 255, 0.07)" }}
                >
                  <figure
                    className="p-5 h-full"
                    style={{ background: "rgba(255, 255, 255, 0.07)" }}
                  >
                    {item.images.length > 0 && (
                      <img src={item.images[0].src} alt="Shoes" />
                    )}
                  </figure>
                  <div
                    className="py-4 px-5 xl:card-body border-0 rounded-b-xl flex flex-col justify-between h-full"
                    style={{ background: "rgba(255, 255, 255, 0.07)" }}
                  >
                    <div className="flex flex-col gap-2">
                      <h2 className="card-title font-semibold text-xl text-white">
                        {item.title}
                      </h2>
                      <div
                        className="mt-3"
                        dangerouslySetInnerHTML={{
                          __html: item.descriptionHtml,
                        }}
                      />
                    </div>
                    <div className="flex w-full justify-between items-center">
                      <div className="flex flex-col items-start">
                        <span className="text-main text-3xl font-extrabold">
                          {nFormatter(item?.variants[0].price.amount, 2)} €
                        </span>
                        <span className="text-gray-400 text-sm font-normal">
                          {item.contributions} contributions
                        </span>
                      </div>
                      <button
                        type="buttom"
                        className="text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105"
                        style={{
                          background:
                            "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
                          boxShadow: " 0px 4px 0px 0px #196700",
                        }}
                        onClick={() => {
                          handleClickProduct(item);
                        }}
                      >
                        Participate
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
          <ProductDialog
            open={showDialog}
            product={selProduct}
            variant={selVariant}
            onChangedVariant={onChangedVariant}
            processPurchase={processPurchase}
            hideDialog={() => {
              setShowDialog(false);
            }}
          />
        </div>
      </section>
      <section className="flex w-full bg-secBg justify-center">
        <div className="max-w-7xl w-full flex py-5 3xl:py-10 items-center px-4 3xl:px-0 flex-col md:flex-row gap-5 md:gap-0">
          <span
            className="flex justify-center items-center p-8 rounded-full border-4"
            style={{
              background: "#414141",
              borderColor: "rgba(255, 255, 255, 0.07)",
            }}
          >
            <img src={star} alt="levels" />
          </span>
          <div className="flex flex-col items-center w-full px-16">
            <div className="w-full flex justify-between items-center">
              <span className="font-bold text-2xl mb-5">
                Level {levelProgress?.currentLevel?.level || 1}
              </span>
              <span className="font-bold text-2xl mb-5">
                {levelProgress?.percent ?? 0}%
              </span>
            </div>
            <progress
              className="progress progress-success h-4"
              value={levelProgress?.percent ?? 0}
              max="100"
            ></progress>
          </div>
          <button
            type="buttom"
            className="text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
              boxShadow: " 0px 4px 0px 0px #196700",
            }}
          >
            Participate
          </button>
        </div>
      </section>
      <Footer>
        <section className="py-5 lg:py-14 flex justify-center bg-thrBg">
          <div className="max-w-7xl w-full flex flex-col-reverse items-center xl:flex-row gap-5 py-16 justify-between xl:items-start px-4 3xl:px-0">
            <div className="flex flex-col gap-10">
              <h2 className="text-4xl font-semibold hidden xl:block">
                About This Project
              </h2>
              <div className="flex flex-col gap-3">
                <p className="text-xl max-w-4xl">Salut les potes!</p>
                <p className="text-xl max-w-4xl">
                  Imaginez une vidéo Minecraft IRL avec un scénario incroyable,
                  des costumes et des décors qui déchirent et pleins
                  d’accessoires pour donner vie à Minecraft dans le vrai monde!
                  C’est un projet qui me tient vraiment à coeur et que je
                  travaille avec mes équipes depuis longtemps et ça va enfin
                  exister! Mais pour ça j’ai besoin de vous: je veux que ça soit
                  une aventure en équipe et vous pouvez tous participer en
                  soutenant le projet!
                </p>
                <p className="text-xl max-w-4xl">
                  Tous les bénéfices tirés des produits que vous allez acheter
                  font permettre de financer la vidéo (et oui parce que pour
                  faire une dinguerie pareille, on a besoin de budget pour les
                  décors, les caméras, l’équipe, et peut être même des invités
                  surprise…).
                </p>
              </div>
              <button
                type="buttom"
                className="text-white w-fit py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105"
                style={{
                  background:
                    "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
                  boxShadow: " 0px 4px 0px 0px #196700",
                }}
              >
                Read More
              </button>
              <div className="flex items-center gap-5 xl:gap-16 flex-wrap px-4 3xl:px-0">
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 flex justify-center items-center w-14 h-14 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
                      boxShadow: " 0px 4px 0px 0px #196700",
                    }}
                  >
                    <Dollar />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-4xl font-semibold">
                      {nFormatter(project?.amount, 2)}
                    </h3>
                    <span className="text-lg font-semibold uppercase">
                      Montant total
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    style={{
                      background:
                        "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
                      boxShadow: " 0px 4px 0px 0px #196700",
                    }}
                    className="p-3 flex justify-center items-center w-14 h-14 rounded-xl"
                  >
                    <User />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-4xl font-semibold">
                      {nFormatter(numberOfParticipant, 2)}
                    </h3>
                    <span className="text-lg font-semibold uppercase">
                      Participants
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    style={{
                      background:
                        "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
                      boxShadow: " 0px 4px 0px 0px #196700",
                    }}
                    className="p-3 flex justify-center items-center w-14 h-14 rounded-xl"
                  >
                    <Timer />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-4xl font-semibold">
                      {counter > 0 ? getFormatTimeRemaining(counter) : "---"}{" "}
                    </h3>
                    <span className="text-lg font-semibold uppercase">
                      End date
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative rounded-3xl flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <img
                src={aboutBg}
                alt="about"
                style={{ maxHeight: "840px", minHeight: "500px" }}
              />
              <svg
                className="hover:scale-105 transition-all absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="124"
                viewBox="0 0 120 124"
                fill="none"
              >
                <g filter="url(#filter0_d_187_6898)">
                  <circle
                    cx="60"
                    cy="60"
                    r="60"
                    fill="url(#paint0_linear_187_6898)"
                  />
                </g>
                <path
                  d="M46.6665 45.1585C46.6665 41.2026 51.0427 38.8134 54.3703 40.9526L77.4573 55.7942C80.519 57.7624 80.519 62.2378 77.4573 64.206L54.3703 79.0477C51.0427 81.1868 46.6665 78.7976 46.6665 74.8418V45.1585Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_187_6898"
                    x="0"
                    y="0"
                    width="120"
                    height="124"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0972611 0 0 0 0 0.404606 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_187_6898"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_187_6898"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_187_6898"
                    x1="0.000332624"
                    y1="120"
                    x2="120"
                    y2="9.65892e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#328019" />
                    <stop offset="1" stop-color="#5EAC0C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-4xl font-semibold text-center block xl:hidden">
              About This Project
            </h2>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box max-w-7xl pt-11 pb-0 px-0">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-main text-main absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <iframe
                  width="100%"
                  height="500px"
                  src={`https://www.youtube.com/embed/4kLviL8XwAI`}
                  frameBorder="0"
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
              </div>
            </dialog>
          </div>
        </section>
        <section className="w-full justify-center flex">
          <div
            className="w-full justify-center flex relative flex-col-reverse 2xl:flex-row max-w-1920"
            style={{
              background:
                "linear-gradient(180deg, rgba(51,51,51,1) 49%, rgba(255,255,255,0) 49%)",
            }}
          >
            <div className="bg-thrBg flex h-full justify-center w-full 3xl:w-2/5">
              <div
                className="bg-secBg flex h-full w-full py-10 px-4 3xl:px-0 3xl:py-52"
                style={{ borderRadius: "0 30px 0 0" }}
              >
                <div className="w-full xl:flex justify-center 2xl:justify-start flex-wrap items-center full:pl-44">
                  <div className="flex justify-center 3xl:justify-normal 3xl:flex-col gap-6 items-center flex-wrap">
                    <img src={img1} alt="img1" style={{ width: "146px" }} />
                    <img src={img2} alt="img2" style={{ width: "173px" }} />
                    <img src={img3} alt="img3" style={{ width: "178px" }} />
                    <img src={img4} alt="img4" style={{ width: "278px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full 3xl:w-3/5 flex justify-center 3xl:justify-end full:pr-44 bg-thrBg"
              style={{ borderRadius: "0px 0px 0px 30px" }}
            >
              <div className="flex flex-col justify-start pt-10 py-10 px-4 3xl:px-0 3xl:py-0 3xl:pt-20 max-w-xl gap-16 w-full text-white">
                <h2 className="text-4xl font-semibold">About This Project</h2>
                <div
                  className="flex flex-col gap-7 text-xl"
                  style={{ lineHeight: "36px" }}
                >
                  <p>
                    On voulait vous assurer le meilleur, alors on a choisi des
                    fournisseurs qui promettent de la qualité.
                  </p>
                  <p>
                    Les produits sont en coton 100% biologique et imprimés en
                    France.
                  </p>
                  <p>
                    En plus, ils sont certifiés Oeko-Tex Standard 100, Fairwear,
                    GOTS, et PETA Approved Vegan ce qui garantie une production
                    dans le respect des travailleurs, de la planète, des
                    animaux, et de vous qui allez adorer les porter.
                  </p>
                </div>
                <button
                  type="buttom"
                  className="text-white py-3 px-8 rounded-md w-fit text-lg font-semibold transition-all hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
                    boxShadow: " 0px 4px 0px 0px #196700",
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
            <div
              className="rounded-3xl flex items-center justify-center cursor-pointer 2xl:absolute top-20 px-4 3xl:px-0"
              onClick={() => document.getElementById("my_modal_1").showModal()}
              style={{ left: "28%" }}
            >
              <img
                src={about2}
                alt="about"
                style={{ maxHeight: "840px", minHeight: "500px" }}
              />
              <svg
                className="hover:scale-105 transition-all absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="124"
                viewBox="0 0 120 124"
                fill="none"
              >
                <g filter="url(#filter0_d_187_6898)">
                  <circle
                    cx="60"
                    cy="60"
                    r="60"
                    fill="url(#paint0_linear_187_6898)"
                  />
                </g>
                <path
                  d="M46.6665 45.1585C46.6665 41.2026 51.0427 38.8134 54.3703 40.9526L77.4573 55.7942C80.519 57.7624 80.519 62.2378 77.4573 64.206L54.3703 79.0477C51.0427 81.1868 46.6665 78.7976 46.6665 74.8418V45.1585Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_187_6898"
                    x="0"
                    y="0"
                    width="120"
                    height="124"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0972611 0 0 0 0 0.404606 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_187_6898"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_187_6898"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_187_6898"
                    x1="0.000332624"
                    y1="120"
                    x2="120"
                    y2="9.65892e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#328019" />
                    <stop offset="1" stop-color="#5EAC0C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </Footer>

      {loading && <Spinner />}
    </Main>
  );
};

export default Home;
