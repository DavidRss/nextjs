import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CardM from "../cardsMedium/cardsM";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../services/app.context";
import { shopifyService } from "../../services/shopify.service";
import { Notify, Path } from "../../constants/constants";
import ProductDialog from "../productDialog/productDialog";
import { nFormatter } from "../../utils/utils";

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
  const [selProduct, setSelProduct] = useState();
  const [selVariant, setSelVariant] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      // setProductList(products.slice(0, 3));
      setProductList(products);
    }
  }, [products]);

  const processPurchase = async (variant) => {
    console.log("===== processPurchase: ", variant);
    try {
      setLoading(true);

      let checkoutInfo = await shopifyService.processPurchase(
        checkout,
        variant,
        currentUser
      );

      saveCheckout(checkoutInfo);
      console.log("===== checkoutInfo: ", checkoutInfo);

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
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        spaceBetween={40}
      >
        {productList.map((item, index) => (
          <SwiperSlide key={index}>
            <CardM>
              <figure className="p-5 bg-mainCard ">
                {item.images.length > 0 && (
                  <img src={item.images[0].src} alt="Shoes" />
                )}
              </figure>
              <div className="py-4 px-5 xl:card-body bg-mainCard border-0 rounded-b-xl">
                <h2 className="card-title font-semibold text-xl text-white">
                  {item.title}
                </h2>
                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html: item.descriptionHtml,
                  }}
                />
                <div className="flex w-full justify-between items-center flex-col sm:flex-row gap-2 sm:gap-0">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-main text-3xl font-extrabold">
                      {nFormatter(item?.variants[0].price.amount, 2)} €
                    </span>
                    <span className="text-gray-400 text-sm font-normal">
                      {item?.contributions} contributions
                    </span>
                  </div>
                  <button
                    type="buttom"
                    className="text-white w-full sm:w-fit py-3 px-8 rounded-md text-lg font-semibold transition-all hover:scale-105"
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
            </CardM>
          </SwiperSlide>
        ))}
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
    </>
  );
}

export default CardsSlider;
