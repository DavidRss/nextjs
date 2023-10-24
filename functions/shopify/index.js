// require("cors")({ origin: true });

const functions = require("firebase-functions");

require("@shopify/shopify-api/adapters/node");
const { shopifyApi, LATEST_API_VERSION } = require("@shopify/shopify-api");

const shopifyClientID = process.env.SHOPIFY_CLIENT_ID;
const shopifyClientSecretKey = process.env.SHOPIFY_CLIENT_SECRET_KEY;
const storefrontAccessToken = process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN;
const shopifyPrivateAccessToken = process.env.SHOPIFY_PRIVATE_ACCESS_TOKEN;
const hostName = process.env.HOST_NAME;
const shop = process.env.STORE_URL;

const shopify = shopifyApi({
  apiKey: shopifyClientID,
  apiSecretKey: shopifyClientSecretKey,
  scopes: ["read_products"],
  hostName: hostName,
});

const storefrontClient = new shopify.clients.Storefront({
  domain: shop,
  storefrontAccessToken,
});

exports.getProducts = functions.https.onCall(async (data, context) => {
  if (!context.auth)
    return { status: "error", code: 401, message: "Not signed in" };

  const products = await storefrontClient.query({
    data: `{
      products (first: 3) {
        edges {
          node {
            id
            title
          }
        }
      }
    }`
  })

  return {
    success: true,
    products: []
  };
});
