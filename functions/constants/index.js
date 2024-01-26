const API = {
  baseUrl: process.env.API_URL,
  version: process.env.API_VERSION,
  path: {
    product: "products",
    checkout: "checkouts",
    priceRule: "price_rules",
    discountCode: "discount_codes",
  },
};

const PROJECT_ID = "wGJO9iMDd6cQdtjw2D8s";

const FBCollections = {
  USERS: "users",
  PROJECTS: "projects",
  PARTICIPANTS: "participants",
  COMMENTS: "comments",
  REWARDS: "rewards",
};

const EARN = {
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

export const Levels = [
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

const Order = {
  Keys: {
    USER_ID: "userId",
    EMAIL: "email",
    TYPE: "type",
  },
  Types: {
    PRODUCT: "product",
    DONATION: "donation",
  },
  Discount: {
    P10: "-10.0",
    P100: "-100.0",
  },
};

const Notification = {
  Type: {
    ORDER: "order",
    COUPON: "coupon",
    REWARD: "reward",
  },
};

module.exports = {
  API,
  PROJECT_ID,
  FBCollections,
  EARN,
  Levels,
  Order,
  Notification,
};
