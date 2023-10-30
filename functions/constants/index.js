const API_PATH = {
  PRODUCTS: "products",
  WEBHOOK: "webhooks",
};

const FBCollections = {
  USERS: "users",
  PROJECTS: "projects",
  PARTICIPANTS: "participants",
  COMMENTS: "comments",
};

const Levels = [
  {
    spend: 0,
    points: 0,
  },
  {
    spend: 1500,
    points: 400,
  },
  {
    spend: 3500,
    points: 700,
  },
  {
    spend: 7500,
    points: 400,
  },
  {
    spend: 10000,
    points: 1000,
  },
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
};

module.exports = {
  API_PATH,
  FBCollections,
  Levels,
  Order,
};
