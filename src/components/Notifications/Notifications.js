import { useEffect, useState } from "react";
import iconBell from "../../assets/bell.svg";
import { useApp } from "../../services/AppContext";
import {
  copyTextToClipboard,
  getCheckoutCustomAttributes,
  getDateFromTimestamp,
  removeLineItemsFromCheckout,
} from "../../utils/utils";
import { Notification, Notify, Order } from "../../constants/constants";
import { shopifyService } from "../../services/ShopifyService";

import copyWhite from "../../assets/Copy-white.svg";

export default function Notifications() {
  const {
    currentUser,
    setLoading,
    products,
    checkout,
    saveCheckout,
    showNotifyMessage,
  } = useApp();

  const [showDialog, setShowDialog] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const onClickBell = () => {
    setShowDialog(true);
  };

  const onClickItem = (item) => {};

  const onClickPurchase = async (item) => {
    const productId = `gid://shopify/Product/${item.productId}`;
    const product = products.find((obj) => obj.id === productId);
    if (currentUser && product) {
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

          checkoutInfo = await shopifyService.addDiscount(
            checkoutInfo.id,
            item.discountCode
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
    }
  };

  const currentDateTime = (timestamp) => {
    const curDT = getDateFromTimestamp(timestamp);
    return `${curDT.year}-${curDT.month}-${curDT.day} ${curDT.hh}:${curDT.mm}:${curDT.ss}`;
  };

  useEffect(() => {
    if (currentUser) {
      setNotifications(currentUser.notifications || []);
    }
  }, [currentUser]);

  const copyToClipboard = (text) => {
    copyTextToClipboard(text)
      .then(() => {
        showNotifyMessage({
          type: "success",
          message: "Copied",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mr-4">
      <div
        className="relative w-12 h-12 cursor-pointer flex justify-center items-center"
        onClick={onClickBell}
      >
        <span className="badge bg-white border-neutral text-gray-900 absolute top-0 left-6">
          {notifications.length}
        </span>
        <img className="w-7" src={iconBell} alt="notify" />
      </div>
      <div
        className={`${showDialog ? "" : "hidden"} relative z-[999]`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div
          className="fixed inset-0 z-10 w-screen overflow-y-auto"
          onClick={() => {
            setShowDialog(false);
          }}
        >
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="bg-white pb-4 pt-5 sm:pb-4">
                <div className="sm:flex sm:items-center border-b-2 pb-4 px-6">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <img className="w-6" src={iconBell} alt="notify" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Notifications
                    </h3>
                  </div>
                </div>
                <div className="divide-y text-black min-h-[240px]">
                  {notifications.map((item, index) => (
                    <div
                      key={index}
                      className="pt-2 pb-2 cursor-pointer hover:bg-gray-100 px-4 odd:bg-gray-50"
                    >
                      <div>{item.message}</div>
                      {/* <div>{item.type}</div> */}
                      {item.type === Notification.Type.COUPON && <div>Coupon code: {item.discountCode}</div>}
                      {item.type === Notification.Type.COUPON && <div className="text-right">
                        <button
                          className="btn btn-primary text-white px-2 py-0 min-h-0 h-8"
                          onClick={() => {
                            copyToClipboard(item.discountCode);
                          }}
                        >
                          <img src={copyWhite} alt="copy-icon white" />
                          copy
                        </button>
                      </div>}
                      {item.type === Notification.Type.REWARD && (
                        <div className="text-right">
                          <button
                            className="btn btn-primary text-white px-2 py-0 min-h-0 h-8"
                            onClick={() => {
                              onClickPurchase(item);
                            }}
                          >
                            {item.type === Notification.Type.REWARD
                              ? "Claim prize"
                              : "Copy"}
                          </button>
                        </div>
                      )}
                      <div className="text-gray-400 text-right text-xs mt-2">
                        {currentDateTime(item.createdAt)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => {
                    setShowDialog(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
