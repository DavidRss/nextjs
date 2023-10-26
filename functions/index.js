// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");

admin.initializeApp();

const shopify = require("./shopify");

exports.handleShopifyCheckoutSuccess = shopify.handleShopifyCheckoutSuccess;
exports.addWebhook = shopify.addWebhook;
exports.getProducts = shopify.getProducts;
