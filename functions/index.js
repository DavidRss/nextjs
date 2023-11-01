// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");

admin.initializeApp();

const shopify = require("./shopify");

exports.handleShopifyCheckoutSuccess = shopify.handleShopifyCheckoutSuccess;
exports.checkRewards = shopify.checkRewards;
exports.getProducts = shopify.getProducts;
exports.getProduct = shopify.getProduct;
exports.createCheckout = shopify.createCheckout;
exports.getCheckout = shopify.getCheckout;
exports.testRewards = shopify.testRewards;
