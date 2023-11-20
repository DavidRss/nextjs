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
      // setProductList(products.slice(0, 3));
      setProductList(products);
    }
  }, [products]);

  const handleClickProduct = async (productId) => {
    if (!currentUser) {
      navigate(`/${Path.SIGNIN}`, { replace: true });
    }

    const product = productList.find((item) => item.id === productId);
    console.log("===== handleClickProduct: ", product);

    try {
      setLoading(true);

      let checkoutInfo = null;
      if (checkout) {
        checkoutInfo = await removeLineItemsFromCheckout(checkout);
      } else {
        checkoutInfo = await shopifyService.createCheckout();
      }

      checkoutInfo = await shopifyService.updateEmail(
        checkoutInfo.id,
        currentUser.email
      );

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
                <h2 className="card-title font-semibold text-xl text-white-90">
                  {item.title}
                </h2>
                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html: item.descriptionHtml,
                  }}
                ></div>
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col items-start">
                    <span className="text-white text-3xl font-extrabold">
                      {item?.variants[0].price.amount} €
                    </span>
                    {/* <span className="text-gray-400 text-sm font-normal">
                      {item.contributions} contributions
                    </span> */}
                  </div>
                  <button
                    className="btn btn-primary text-white mt-5"
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
