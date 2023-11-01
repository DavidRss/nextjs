import { EARN, Order } from "../constants/constants";
import { shopifyService } from "../services/ShopifyService";

export const getFormatTimeRemaining = (seconds) => {
  const ss = Math.floor(seconds % 60);
  const mm = Math.floor((seconds / 60) % 60);
  const hh = Math.floor((seconds / (60 * 60)) % 24);
  const dd = Math.floor(seconds / (60 * 60 * 24));

  const s_ss = ss < 10 ? `0${ss}` : ss;
  const s_mm = mm < 10 ? `0${mm}` : mm;
  const s_hh = hh < 10 ? `0${hh}` : hh;

  if (dd > 0) {
    return `${dd} days`;
  } else if (s_hh > 0) {
    return `${s_hh}:${s_mm}:${s_ss}`;
  } else if (s_mm > 0) {
    return `${s_mm}:${s_ss}`;
  }

  return `${ss} seconds`;
};

export const getFormatedDateFromSeconds = (seconds) => {
  const ss = Math.floor(seconds % 60);
  const mm = Math.floor((seconds / 60) % 60);
  const hh = Math.floor((seconds / (60 * 60)) % 24);
  const dd = Math.floor(seconds / (60 * 60 * 24));

  const s_ss = ss < 10 ? `0${ss}` : ss;
  const s_mm = mm < 10 ? `0${mm}` : mm;
  const s_hh = hh < 10 ? `0${hh}` : hh;

  return {
    days: dd,
    hours: s_hh,
    minutes: s_mm,
    seconds: s_ss,
  };
};

export const getTimeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

export function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

export const generateReferralCode = () => {
  // return new Date().getUTCMilliseconds();
  return `${new Date().valueOf()}`;
};

export const getCurrentTimestamp = () => {
  return Date.now();
};

export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds();

  return { year, month, day, hh, mm, ss };
};

export const getDateFromTimestamp = (timestamp) => {
  const vDate = new Date(timestamp);
  const year = vDate.getUTCFullYear();
  const month = vDate.getUTCMonth();
  const day = vDate.getUTCDate();
  const hh = vDate.getUTCHours();
  const mm = vDate.getUTCMinutes();
  const ss = vDate.getUTCSeconds();

  return { year, month, day, hh, mm, ss };
};

export const getDailyPoints = (visited) => {
  if (visited) {
    const vDate = getDateFromTimestamp(visited);
    const curDate = getCurrentDate();
    if (
      curDate.year !== vDate.year ||
      curDate.month !== vDate.month ||
      curDate.day !== vDate.day
    ) {
      return EARN.DAILY;
    }
  } else {
    return EARN.DAILY;
  }
  return 0;
};

export const getCheckoutCustomAttributes = (user, checkoutType) => {
  return {
    customAttributes: [
      {
        key: Order.Keys.USER_ID,
        value: user.id,
      },
      {
        key: Order.Keys.EMAIL,
        value: user.email,
      },
      {
        key: Order.Keys.TYPE,
        value: checkoutType,
      },
    ],
  };
};

export const removeLineItemsFromCheckout = async (checkout) => {
  try {
    if (checkout.lineItems.length > 0) {
      let lineItemIds = [];
      for (const item of checkout.lineItems) {
        lineItemIds.push(item.id);
      }
      const checkoutInfo = await shopifyService.removeLineItems(
        checkout.id,
        lineItemIds
      );

      return checkoutInfo;
    } else {
      return checkout;
    }
  } catch (err) {
    console.log("===== removeLineItemsFromCheckout error: ", err);
    if (err.message.includes("Checkout is already completed")) {
      const checkoutInfo = await shopifyService.createCheckout();
      return checkoutInfo;
    }
  }
};
