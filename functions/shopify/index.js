const functions = require("firebase-functions");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { logger } = require("firebase-functions");

const admin = require("firebase-admin");
const { FBCollections, Order, EARN } = require("../constants");
const { checkLevelUpPoints } = require("../utils");
const {
  createPriceRule,
  getPriceRules,
  createDiscountCode,
  getProducts,
  getProduct,
} = require("../service/shopifyService");

const firestore = admin.firestore();

exports.handleShopifyCheckoutSuccess = functions.https.onRequest(
  async (request, response) => {
    const params = request.body;
    if (params) {
      console.log("===== params: ", params);
      let userId = "";
      let userEmail = "";
      let orderType = "";
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
            orderType = item.value;
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

          const orders = user.orders || [];

          let prevSpending = parseFloat(user.spending) || 0;
          let donationCount = 0;
          for (const item of orders) {
            prevSpending = prevSpending + item.totalPrice;
            if (item.type === Order.Types.DONATION) {
              donationCount++;
            }
          }

          orders.push({
            orderId,
            orderNumber,
            totalPrice,
            type: orderType,
          });
          const spending = prevSpending + totalPrice;

          let bonusPoints = 0;
          const spendingBonusPoints = checkLevelUpPoints(
            prevSpending,
            spending
          );
          if (spendingBonusPoints > 0) {
            bonusPoints = bonusPoints + spendingBonusPoints;
          }

          let updateParams = {
            orders,
            spending,
          };

          if (orderType === Order.Types.DONATION) {
            const earned = user.earned;
            if (donationCount === 0) {
              bonusPoints = bonusPoints + EARN.DONATION1;
              earned.donation1 = true;
              updateParams["earned"] = earned;
            } else if (donationCount === 1) {
              bonusPoints = bonusPoints + EARN.DONATION2;
              earned.donation2 = true;
              updateParams["earned"] = earned;
            }
          }

          if (bonusPoints > 0) {
            updateParams["points"] = user.points + bonusPoints;
          }

          await firestore
            .collection(FBCollections.USERS)
            .doc(userId)
            .update(updateParams);
        } catch (err) {
          console.log("===== get user error: ", err);
        }
      }
    }

    return response.send({ received: true });
  }
);

exports.checkRewards = onSchedule("every day 00:00", async (event) => {});

exports.getProducts = functions.https.onRequest(async (request, response) => {
  const products = await getProducts();
  return response.send({ products });
});

exports.getProduct = functions.https.onRequest(async (request, response) => {
  console.log(request.params);
  // const product = await getProduct()
  return response.send({ res: "ok" });
});

exports.testShopifyAdminApi = functions.https.onRequest(
  async (request, response) => {
    try {
      // Discount100P-{productId}
      // Discount10P-{productId}
      // const priceRule = await createPriceRule(
      //   `Discount8224569655529`,
      //   "-100.0",
      //   8224569655529
      // );
      // console.log("===== priceRule: ", priceRule);
      // return response.send({ priceRule });

      // const priceRules = await getPriceRules();
      // console.log("===== priceRules: ", priceRules);
      // return response.send({ priceRules });

      const discountCode = await createDiscountCode(1298838520041);
      return response.send({ discountCode });
    } catch (err) {
      console.log("===== err: ", err);
    }
    return response.send({ success: false });
  }
);
