// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");

admin.initializeApp();

const shopify = require("./shopify");

exports.getProducts = shopify.getProducts;
