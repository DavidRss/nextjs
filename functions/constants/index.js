const API = {
  // baseUrl: "https://d4b6bc-2.myshopify.com/admin/api",
  baseUrl: "https://coflow-test.myshopify.com/admin/api",
  version: "2023-10",
  path: {
    products: "products",
    priceRule: "price_rules",
    discountCode: "discount_codes"
  },
};

const FBCollections = {
  USERS: "users",
  PROJECTS: "projects",
  PARTICIPANTS: "participants",
  COMMENTS: "comments",
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

const Levels = {
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
};

module.exports = {
  API,
  FBCollections,
  EARN,
  Levels,
  Order,
};
