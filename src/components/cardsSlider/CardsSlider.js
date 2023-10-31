import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CardM from "../cardsMedium/cardsM";

import { useApp } from "../../services/AppContext";
import { shopifyService } from "../../services/ShopifyService";
import { Notify, Order, Path } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import {
  getCheckoutCustomAttributes,
  removeLineItemsFromCheckout,
} from "../../utils/utils";

function CardsSlider() {
  const navigate = useNavigate();

  const {
    currentUser,
    setLoading,
    products,
    showNotifyMessage,
    checkout,
    saveCheckout,
  } = useApp();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setProductList(products.slice(0, 3));
    }
  }, [products]);

  const handleClickProduct = async (productId) => {
    if (!currentUser) {
      navigate(Path.SIGNIN);
    }

    const product = productList.find((item) => item.id === productId);
    console.log("===== handleClickProduct: ", product);

    return;
    try {
      setLoading(true);

      let checkoutInfo = null;
      if (checkout) {
        checkoutInfo = await removeLineItemsFromCheckout(checkout);
      } else {
        checkoutInfo = await shopifyService.createCheckout();
      }

      const inputValue = getCheckoutCustomAttributes(
        currentUser,
        Order.Types.PRODUCT
      );

      checkoutInfo = await shopifyService.updateCheckoutAttributes(
        checkoutInfo.id,
        inputValue
      );

      const variants = product.variants;
      if (variants.length > 0) {
        const variant = variants[0];
        const lineItems = {
          variantId: variant.id,
          quantity: 1,
        };
        checkoutInfo = await shopifyService.addLineItems(
          checkoutInfo.id,
          lineItems
        );

        saveCheckout(checkoutInfo);
        console.log("===== checkoutInfo: ", checkoutInfo);

        window.open(checkoutInfo.webUrl);
      } else {
        showNotifyMessage({
          type: Notify.Type.ERROR,
          message: "This product is not available in a store.",
        });
      }
    } catch (err) {
      console.log("===== handleClickProduct error: ", err);
    }

    setLoading(false);
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
