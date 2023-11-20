import React, { forwardRef, useState } from "react";
import CardsSlider from "../cardsSlider/CardsSlider";
import { useApp } from "../../services/AppContext";
import { useNavigate } from "react-router-dom";
import { Notify, Order, Path } from "../../constants/constants";
import {
  getCheckoutCustomAttributes,
  removeLineItemsFromCheckout,
} from "../../utils/utils";
import { shopifyService } from "../../services/ShopifyService";

const Aside = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const {
    currentUser,
    setLoading,
    showNotifyMessage,
    donationProduct,
    checkout,
    saveCheckout,
  } = useApp();

  const [price, changePrice] = useState(0);
  const [errorPrice, setErrorPrice] = useState(false);

  const handleChangePrice = (e) => {
    changePrice(e.target.value);
    if (e.target.value !== "") {
      setErrorPrice(false);
    }
  };

  const handleParticipate = async () => {
    console.log("===== Presentation handleParticipate =====");
    if (!currentUser) {
      navigate(`/${Path.SIGNIN}`, { replace: true });
      return;
    }

    if (!price) {
      setErrorPrice(true);
      return;
    }

    if (!donationProduct) {
      showNotifyMessage({
        type: Notify.Type.INFO,
        message: "You can't donate at this time. Please try later.",
      });
      return;
    }

    const variants = donationProduct.variants;
    const minPrice = parseFloat(variants[0].price.amount);
    const maxPrice = parseFloat(variants[variants.length - 1].price.amount);

    if (price < minPrice || price > maxPrice) {
      showNotifyMessage({
        type: Notify.Type.INFO,
        message: `You can donate the price between ${minPrice} and ${maxPrice} EUR`,
      });
      return;
    }

    const cPrice = Math.ceil(price);
    let selVariant = null;
    for (const item of variants) {
      if (item.price.amount === cPrice) {
        selVariant = item;
        break;
      }
    }
    console.log("===== selVariant: ", selVariant);

    setLoading(true);

    try {
      let checkoutInfo = null;
      if (checkout) {
        checkoutInfo = await removeLineItemsFromCheckout(checkout);
      } else {
        checkoutInfo = await shopifyService.createCheckout();
      }

      const inputValue = getCheckoutCustomAttributes(
        currentUser,
        Order.Types.DONATION
      );

      checkoutInfo = await shopifyService.updateCheckoutAttributes(
        checkoutInfo.id,
        inputValue
      );

      const lineItems = {
        variantId: selVariant.id,
        quantity: 1,
      };
      checkoutInfo = await shopifyService.addLineItems(
        checkoutInfo.id,
        lineItems
      );

      saveCheckout(checkoutInfo);
      console.log("===== checkoutInfo: ", checkoutInfo);

      window.open(checkoutInfo.webUrl);
    } catch (err) {
      console.log("===== donation processs error: ", err);
    }

    setLoading(false);
  };

  return (
    <aside className="flex flex-col gap-9 w-full xl:w-fit items-center">
      <h1 className="text-white-90 font-bold text-3xl text-left w-full">
        Contreparties
      </h1>
      <CardsSlider />
      <div
        ref={ref}
        className="card bg-mainCard flex flex-col p-6 font-semibold shadow-xl max-w-sm mb-12 xl:mb-0"
      >
        <h1 className="text-xl text-white-90 mb-5">
          Donne le montant que tu veux Montant à donner
        </h1>
        <input
          type="number"
          name="price"
          id="price"
          className={`block w-full rounded-md bg-input py-4 px-7 text-input placeholder:text-placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3 ${
            errorPrice ? "border border-red-800" : "border-0"
          }`}
          placeholder="Ex : 30"
          value={price}
          onChange={handleChangePrice}
        />
        <button
          className="btn btn-primary text-white"
          onClick={handleParticipate}
        >
          Participer
        </button>
      </div>
    </aside>
  );
});

export default Aside;
