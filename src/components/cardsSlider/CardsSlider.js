import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CardM from "../cardsMedium/cardsM";

import { useApp } from "../../services/AppContext";

function CardsSlider() {
  const { products, showNotifyMessage } = useApp();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setProductList(products.slice(0, 3));
    }
  }, [products]);

  const handleClickProduct = (productId) => {
    const product = productList.find((item) => item.id === productId);
    const availableForSale = product.availableForSale;
    const onlineStoreUrl = product.onlineStoreUrl;
    if (availableForSale && onlineStoreUrl) {
      window.open(onlineStoreUrl, "_blank", "noopener,noreferrer");
    } else {
      showNotifyMessage({
        type: "error",
        message: "This product is not available in store.",
      });
    }
  };

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
      >
        {productList.map((item, index) => (
          <SwiperSlide key={index}>
            <CardM>
              <figure>
                {item.images.length > 0 && (
                  <img src={item.images[0].src} alt="Shoes" />
                )}
              </figure>
              <div className="py-4 px-5 xl:card-body">
                <h2 className="card-title font-semibold text-xl text-gray-900">
                  {item.title}
                </h2>
                {/* <ul className="text-left mb-8 text-sm xl:text-base text-slate-800 font-normal">
                  {item.desc.map((descItem, descIndex) => (
                    <li
                      className="desc-item opacity-50 text-gray-900"
                      key={descIndex}
                    >
                      {descItem}
                    </li>
                  ))}
                </ul> */}
                <div>{item.description}</div>
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col items-start">
                    <span className="text-primary text-3xl font-extrabold">
                      {item?.variants[0].price.amount} €
                    </span>
                    <span className="text-gray-400 text-sm font-normal">
                      {item.contributions} contributions
                    </span>
                  </div>
                  <button
                    className="btn btn-primary text-white"
                    onClick={() => {
                      handleClickProduct(item.id);
                    }}
                  >
                    Participer
                  </button>
                </div>
              </div>
            </CardM>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CardsSlider;
