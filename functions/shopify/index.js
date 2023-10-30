const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");
const { FBCollections, Order } = require("../constants");

const apiBaseUrl = process.env.API_BASE_URL;
const headers = {
  "X-Shopify-Access-Token": process.env.API_ACCESS_TOKEN,
};

const firestore = admin.firestore();

const apiUrl = (path) => {
  return `${apiBaseUrl}/${path}.json`;
};

exports.handleShopifyCheckoutSuccess = functions.https.onRequest(
  async (request, response) => {
    const params = request.body;
    if (params) {
      console.log("===== params: ", params);
      let userId = "";
      let userEmail = "";
      let productType = "";
      const email = params.email;
      const financialStatus = params.financial_status;
      const orderId = params.source_identifier;
      const orderNumber = params.order_number;
      const totalPrice = parseFloat(params.total_price);
      const note = params.note_attributes;
      if (note) {
        for (const item of note) {
          if (item.name === Order.Keys.USER_ID) {
            userId = item.value;
          } else if (item.name === Order.Keys.EMAIL) {
            userEmail = item.value;
          } else if (item.name === Order.Keys.TYPE) {
            productType = item.value;
          }
        }
      }

      if (userId && financialStatus === "paid") {
        const params = {
          userId: userId,
          userEmail: userEmail,
          email,
          financialStatus,
          orderId,
          orderNumber,
          totalPrice,
        };
        console.log("===== orderInfo: ", params);

        try {
          const user = await firestore
            .collection(FBCollections.USERS)
            .doc(userId)
            .get();
          const donations = user.donations || [];
          const orders = user.orders || [];

          let spending = parseFloat(user.spending) || 0;
          for (const item of donations) {
            spending = spending + parseFloat(item.amount);
          }

          orders.push({
            orderId,
            orderNumber,
            totalPrice,
          });
          for (const item of orders) {
            spending = spending + item.totalPrice;
          }

          await firestore
            .collection(FBCollections.USERS)
            .doc(userId)
            .update({ orders, spending });
        } catch (err) {
          console.log("===== get user error: ", err);
        }
      }
    }

    return response.send({ received: true });
  }
);

exports.addWebhook = functions.https.onRequest(async (request, response) => {
  try {
    // const params = {
    //   webhook: {
    //     topic: "orders/create",
    //     address:
    //       "https://9945-70-39-103-3.ngrok-free.app/coflow-v1/us-central1/handleShopifyCheckoutSuccess",
    //     format: "json",
    //   },
    // };
    // const res = await axios.post(apiUrl(PATH.WEBHOOK), params, { headers });
    // const res = await axios.get(apiUrl(PATH.PRODUCTS), { headers });
    // const products = await res.data;
    // console.log("===== res: ", res.data);
    return response.send({ res: "ok" });
  } catch (err) {
    console.log("===== err: ", err);
  }
  return response.send({ success: false });
});

exports.getProducts = functions.https.onCall(async (data, context) => {
  if (!context.auth)
    return { status: "error", code: 401, message: "Not signed in" };

  return {
    success: true,
    products: [],
  };
});
