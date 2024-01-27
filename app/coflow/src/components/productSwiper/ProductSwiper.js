import "swiper/css";
import "swiper/css/pagination";

import { useEffect, useState } from "react";

import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Ruler from "../Icons/Ruler";

import card from "../../assets/new/card.png";
import product1Size from "../../assets/new/product1-size.png";
import product2Size from "../../assets/new/product2-size.png";
import {
  Path,
  ProductColors,
  ProductVariants,
} from "../../constants/constants";
import { nFormatter } from "../../utils/utils";
import { useApp } from "../../services/app.context";
import { useNavigate } from "react-router-dom";

export default function ProductSwiper({
  isReversed = false,
  product,
  processPurchase,
}) {
  const navigate = useNavigate();

  const { currentUser } = useApp();

  const [swiper, setSwiper] = useState(null);

  const [colorList, setColorList] = useState([]);
  const [color, setColor] = useState(-1);
  const [sizeList, setSizeList] = useState([]);
  const [size, setSize] = useState(-1);
  const [variant, setVariant] = useState(null);

  const handleChangeVariant = () => {
    for (const variant of product.variants) {
      let isColor = false;
      let isSize = false;
      for (const selectedOption of variant.selectedOptions) {
        if (selectedOption.value === colorList[color]) {
          isColor = true;
        }
        if (selectedOption.value === sizeList[size]) {
          isSize = true;
        }
      }

      if (isColor === true && isSize === true) {
        setVariant(variant);
      }
    }
  };

  const handleChangeColor = (index) => {
    setColor(index);

    if (swiper) {
      swiper.slideTo(index);
    }
  };

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiper) {
        setColor(swiper.activeIndex);
      }
    };

    if (swiper) {
      swiper.on("slideChange", handleSlideChange);
    }

    return () => {
      if (swiper) {
        swiper.off("slideChange", handleSlideChange);
      }
    };
  }, [swiper]);

  const isAvailableSize = (title) => {
    return sizeList.find((item) => item === title);
  };

  const handleChangeSize = (index) => {
    setSize(index);
  };

  const handleParticipate = () => {
    if (!currentUser) {
      navigate(`/${Path.SIGNIN}`, { replace: true });
      return;
    }

    if (variant) {
      processPurchase(variant);
    }
  };

  useEffect(() => {
    if (product) {
      const options = product.options;
      for (const option of options) {
        if (option.name === "Taille") {
          const optionValues = option.values;
          const tempSizeList = [];
          for (const optionValue of optionValues) {
            tempSizeList.push(optionValue.value);
          }
          setSizeList(tempSizeList);
          if (tempSizeList.length > 0) {
            setSize(0);
          }
        }

        if (option.name === "Couleur") {
          const optionValues = option.values;
          const tempColorList = [];
          for (const optionValue of optionValues) {
            tempColorList.push(optionValue.value);
          }
          setColorList(tempColorList);
          if (tempColorList.length > 0) {
            setColor(0);
          }
        }
      }
    }
  }, [product]);

  useEffect(() => {
    if (color !== -1 && size !== -1) {
      handleChangeVariant();
    }
  }, [color, size]);

  return (
    <div
      className={`max-w-7xl w-full flex flex-col ${
        isReversed ? "xl:flex-row-reverse" : "xl:flex-row"
      } pt-5 md:pt-16 pb-16 items-center xl:items-start gap-14 px-4 3xl:px-0`}
    >
      <div
        className="h-full relative rounded-3xl bg-secBg flex items-center justify-center w-full min-h-60"
        style={{ maxWidth: "489px", maxHeight: "590px" }}
      >
        <Swiper
          grabCursor={true}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              origin: "left center",
              translate: ["-5%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["5%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper6"
          onSwiper={(s) => setSwiper(s)}
        >
          {product &&
            product.images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.src ? item.src : card}
                  alt="card"
                  style={{
                    width: "480px",
                    height: "590px",
                    display: "block",
                    objectPosition: "bottom",
                    objectFit: "cover",
                    border: "9px solid rgba(255, 255, 255, 0.20)",
                    borderRadous: "30px",
                  }}
                  className="rounded-3xl"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <div
          className="block lg:hidden absolute rounded-lg -bottom-5 uppercase px-5 py-4 font-semibold text-white z-50"
          style={{
            background:
              "linear-gradient(45deg, #328019 0%, #5EAC0C 100%) #4E9D35",
          }}
        >
          {product?.title}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div
          className="hidden lg:flex badge uppercase px-5 py-4 font-semibold text-white"
          style={{
            background:
              "linear-gradient(45deg, #328019 0%, #5EAC0C 100%) #4E9D35",
          }}
        >
          {product?.title}
        </div>
        <h2 className="text-4xl text-center lg:text-left lg:text-6xl font-semibold text-white">
          {product?.title}
        </h2>
        <div className="flex flex-col gap-5 max-w-4xl">
          <p className="text-lg lg:text-2xl">Le pack platinum contient:</p>
          <div
            className="mt-3"
            dangerouslySetInnerHTML={{
              __html: product?.descriptionHtml,
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-start gap-4 lg:gap-14">
          <div className="flex flex-col gap-5">
            <span className="uppercase text-lg font-semibold">Colors:</span>
            <div className="flex items-center gap-3">
              {colorList.map((item, index) => (
                <input
                  key={index}
                  type="radio"
                  name={`color_${product.id}`}
                  style={{ background: ProductColors[item] ?? "#EEEEEE" }}
                  className="radio checked:bg-white"
                  checked={index === color}
                  onChange={() => handleChangeColor(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="uppercase text-lg font-semibold">Materials:</span>
            <p className="text-xl lg:text-2xl">100% Organic Cotton</p>
          </div>
          <div className="flex flex-col gap-5">
            <span className="uppercase text-lg font-semibold">Sizes:</span>
            <div className="flex items-center gap-3">
              {ProductVariants.map((variant, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center uppercase w-8 h-8 text-white font-medium bg-main ${
                    isAvailableSize(variant)
                      ? "hover:shadow-lg hover:shadow-main/50"
                      : "opacity-30 cursor-none"
                  } ${size === index ? "border-2" : ""}`}
                  onClick={() => {
                    handleChangeSize(index);
                  }}
                >
                  {variant}
                </button>
              ))}
            </div>
            <button type="button" className="flex items-center gap-1">
              <Ruler />
              <span
                className="text-xl pb-1 border-b border-main"
                onClick={() => document.getElementById("product_size_modal").showModal()}
              >
                Size Guide
              </span>
            </button>
          </div>
        </div>
        <div
          className="flex items-center gap-8 pt-8 border-t"
          style={{ borderColor: "#D9D9D9" }}
        >
          <div className="flex flex-col gap-3">
            <span className="text-4xl font-semibold text-white">
              {nFormatter(product?.variants[0].price.amount, 2)} €
            </span>
            <span
              className="font-semibold text-lg"
              style={{ color: "#6D6D6D" }}
            >
              6 contributors
            </span>
          </div>
          <button
            type="buttom"
            className="text-white py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(45deg, #328019 0%, #5EAC0C 100%)",
              boxShadow: " 0px 4px 0px 0px #196700",
            }}
            onClick={handleParticipate}
          >
            Participate
          </button>
        </div>
      </div>
      <dialog id="product_size_modal" className="modal">
        <div className="modal-box pt-11 pb-0 px-0">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-main text-main absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img
            src={product?.title === "Le pack Fer" ? product1Size : product2Size}
            alt="about"
            style={{ maxHeight: "840px", minHeight: "500px" }}
          />
        </div>
      </dialog>
    </div>
  );
}
