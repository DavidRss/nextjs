import { toast } from "react-toastify";

export const PROJECT_ID = "wGJO9iMDd6cQdtjw2D8s";
export const DEFAULT_USER_COUNTRY = "Frence";
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

export const Levels = {
  L1: {
    level: 1,
    title: "Basic",
    spend: 0,
    points: 0,
  },
  L2: {
    level: 2,
    title: "Bronze",
    spend: 1500,
    points: 400,
  },
  L3: {
    level: 3,
    title: "Silver",
    spend: 3500,
    points: 700,
  },
  L4: {
    level: 4,
    title: "Gold",
    spend: 7500,
    points: 400,
  },
  L5: {
    level: 5,
    title: "Platinum",
    spend: 10000,
    points: 1000,
  },
};

export const INIT_USER = {
  id: "",
  email: "",
  username: "",
  firstName: "",
  lastName: "",
  avatar: "",
  points: EARN.FAMILY,
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
  rewards: [],
  notifications: []
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

export const Notification = {
  Type: {
    ORDER: "order",
    COUPON: "coupon",
    REWARD: "reward",
    EARNED: "earned"
  },
};
