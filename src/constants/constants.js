import { toast } from "react-toastify";

export const PROJECT_ID = "wGJO9iMDd6cQdtjw2D8s";
export const DEFAULT_USER_COUNTRY = "French";
export const DEFAULT_DONATION = 100;

export const EARN = {
  FAMILY: 50,
  DONATION1: 50,
  DONATION2: 150,
  TIKTOK: 300,
  YOUTUBE: 300,
  INSTAGRAM: 300,
  DAILY: 10,
  COMMENT: 100,
  REFER: 400,
};

export const INIT_USER = {
  id: "",
  email: "",
  username: "",
  firstName: "",
  lastName: "",
  avatar: "",
  points: EARN.FAMILY,
  donations: [],
  referralCode: "",
  referrer: "",
  referrals: [],
  earned: {
    family: true,
    donation1: false,
    donation2: false,
    tiktok: false,
    youtube: false,
    instagram: false,
    comment: false,
    referral: false,
  },
  visited: 0,
  orders: [],
  spending: 0,
};

export const STORAE_KEY = {
  USER: "user",
  CHECKOUT: "checkout",
};

export const Notify = {
  Type: {
    SUCCESS: "success",
    INFO: "info",
    ERROR: "error",
  },
  Option: {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
  },
};

export const Path = {
  SIGNIN: "signin",
  HOME: "/",
};

export const Order = {
  Keys: {
    USER_ID: "userId",
    EMAIL: "email",
    TYPE: "type",
  },
  Types: {
    PRODUCT: "product",
    DONATION: "donation",
  },
};
