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
  DAILY_COMMENt: 50,
  REFER: 50,
  FIRST_REFERRAL_PURCHASE: 400,
};

export const LevelData = [
  {
    level: 1,
    title: "Basic",
    spend: 0,
    points: 500,
    description: "",
  },
  {
    level: 2,
    title: "Bronze",
    spend: 1500,
    points: 1000,
    description: "Earn 2 Points for every 1 USD spent.",
  },
  {
    level: 3,
    title: "Silver",
    spend: 3500,
    points: 1500,
    description: "Earn 2 Points for every 1 USD spent.",
  },
  // {
  //   level: 4,
  //   title: "Gold",
  //   spend: 7500,
  //   points: 400,
  //   description: "Earn 2 Points for every 1 USD spent.",
  // },
  // {
  //   level: 5,
  //   title: "Platinum",
  //   spend: 10000,
  //   points: 1000,
  //   description: "Earn 2 Points for every 1 USD spent.",
  // },
];

export const INIT_USER = {
  id: "",
  email: "",
  username: "",
  firstName: "",
  lastName: "",
  avatar: "",
  points: EARN.FAMILY + LevelData[0].points,
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
  commentDate: 0,
  orders: [],
  spending: 0,
  rewards: [],
  notifications: [],
};

export const Comment = {
  Type: {
    TEXT: "text",
    FILE: "file",
  },
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
    position: "top-right",
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
    EARNED: "earned",
  },
};

export const IMAGE_TYPE = ["png", "jpg", "jpeg"];

export const ProductColors = {
  Noir: "#363636",
  Vert: "#285747",
  Bleu: "#00639E",
  Blanc: "#EEEEEE"
}

export const ProductVariants = ["XS", "S", "M", "L", "XL", "XXL"];
