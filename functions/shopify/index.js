const functions = require("firebase-functions");
const { onSchedule } = require("firebase-functions/v2/scheduler");
// const { logger } = require("firebase-functions");

const { Order, EARN, PROJECT_ID, Notification } = require("../constants");
const {
  checkLevelUpPoints,
  isAvailableProduct,
  getPriceRuleTitle,
} = require("../utils");
const {
  createPriceRule,
  getPriceRules,
  createDiscountCode,
  getProducts,
  getProduct,
  getCheckout,
  createCheckout,
} = require("../service/shopifyService");
const {
  getUserById,
  updateUser,
  getUserByReferralCode,
  getProject,
  getUsers,
  addRewardsIntoProject,
  participateUser,
  updateProject,
} = require("../service/firebaseService");

exports.handleShopifyCheckoutSuccess = functions.https.onRequest(
  async (request, response) => {
    const params = request.body;
    if (params) {
      // console.log("===== params: ", params);
      let userId = "";
      let userEmail = "";
      let orderType = "";
      let productId = "";
      const email = params.email;
      const financialStatus = params.financial_status;
      const orderId = params.source_identifier;
      const orderNumber = params.order_number;
      const totalPrice = parseFloat(params.total_price);
      const note = params.note_attributes;
      const orderCreatedAt = params.created_at;
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
      const line_items = params.line_items;
      if (line_items.length > 0) {
        productId = line_items[0].product_id;
      }

      if (userId && financialStatus === "paid") {
        const orderInfo = {
          userId: userId,
          userEmail: userEmail,
          email,
          financialStatus,
          orderId,
          orderNumber,
          totalPrice,
        };
        console.log("===== orderInfo: ", orderInfo);

        const user = await getUserById(userId);

        const orders = user.orders || [];

        let prevSpending = parseFloat(user.spending) || 0;
        let donationCount = 0;
        let donations = 0;
        for (const item of orders) {
          prevSpending = prevSpending + item.totalPrice;
          if (item.type === Order.Types.DONATION) {
            donations = donations + item.totalPrice;
            donationCount++;
          }
        }

        console.log("===== orders: ", orders);
        orders.push({
          orderId,
          orderNumber,
          totalPrice,
          type: orderType,
          createdAt: orderCreatedAt,
        });
        const spending = prevSpending + totalPrice;

        let bonusPoints = 0;
        const spendingBonusPoints = checkLevelUpPoints(prevSpending, spending);
        if (spendingBonusPoints > 0) {
          bonusPoints = bonusPoints + spendingBonusPoints;
        }

        const updateParams = {
          orders,
          spending,
        };

        const createdAt = Date.now();
        const notifications = user.notifications || [];
        console.log("===== orderType: ", orderType);
        console.log("===== user: ", user);
        if (orderType === Order.Types.DONATION) {
          const earned = user.earned;
          donations = donations + totalPrice;
          if (donationCount === 0) {
            bonusPoints = bonusPoints + EARN.DONATION1;
            earned.donation1 = true;
            updateParams["earned"] = earned;
          } else if (donationCount === 1) {
            bonusPoints = bonusPoints + EARN.DONATION2;
            earned.donation2 = true;
            updateParams["earned"] = earned;
          }
          await participateUser(
            PROJECT_ID,
            user,
            donations,
            user.points + bonusPoints
          );

          const project = await getProject(PROJECT_ID);
          projectAmount = project.amount + totalPrice;
          await updateProject(PROJECT_ID, { amount: projectAmount });

          notifications.unshift({
            productId,
            viewed: false,
            message: `Your donation was succeed.`,
            type: Notification.Type.ORDER,
            createdAt,
          });
        } else if (orderType === Order.Types.PRODUCT) {
          notifications.unshift({
            productId,
            viewed: false,
            message: `Your purchase was succeed.`,
            type: Notification.Type.ORDER,
            createdAt,
          });

          if (user.referrer) {
            const referUser = await getUserByReferralCode(user.referrer);

            const priceRuleTitle = getPriceRuleTitle(
              Order.Discount.P10,
              productId
            );
            const priceRule = await createPriceRule(
              priceRuleTitle,
              Order.Discount.P10,
              productId
            );
            const discount = await createDiscountCode(priceRule.id);
            const reward = {
              productId,
              discountCode: discount.code,
              used: false,
              viewed: false,
              createdAt,
            };
            const rewards = referUser.rewards || [];
            rewards.push(reward);

            const referUserNotifications = referUser.notifications || [];
            referUserNotifications.unshift({
              productId,
              discountCode: discount.code,
              viewed: false,
              message: `You got 10% coupon from ${user.username}.`,
              type: Notification.Type.REWARD,
              createdAt,
            });

            const resUpdateReferUser = await updateUser(referUser.id, {
              rewards,
              notifications: referUserNotifications,
            });
            console.log("===== resUpdateReferUser: ", resUpdateReferUser);
          }
        }

        if (bonusPoints > 0) {
          updateParams["points"] = user.points + bonusPoints;
        }

        updateParams["notifications"] = notifications;

        const resUpdateUse = await updateUser(userId, updateParams);
        console.log("===== resUpdateUser: ", resUpdateUse);
      }
    }

    return response.send({ received: true });
  }
);

exports.checkRewards = onSchedule("every day 00:00", async (event) => {
  try {
    const project = await getProject(PROJECT_ID);
    const endSeconds = project.lotteryDate.seconds;
    const curSeconds = parseInt(new Date().getTime() / 1000);

    if (Math.abs(endSeconds - curSeconds) < 60) {
      const users = await getUsers();

      const products = await getProducts();
      const availableProducts = [];
      for (const item of products) {
        if (isAvailableProduct(item)) {
          availableProducts.push(item);
        }
      }

      if (users.length > 0 && availableProducts.length > 0) {
        const uIdx = Math.floor(Math.random() * users.length);
        const pIdx = Math.floor(Math.random() * availableProducts.length);
        const selUser = users[uIdx];
        const selProduct = availableProducts[pIdx];

        const priceRuleTitle = getPriceRuleTitle(
          Order.Discount.P100,
          selProduct.id
        );

        const priceRules = await getPriceRules();

        let selPriceRule = priceRules.find(
          (item) => item.title === priceRuleTitle
        );

        if (typeof selPriceRule === "undefined") {
          console.log("===== create price rule =====");
          selPriceRule = await createPriceRule(
            priceRuleTitle,
            Order.Discount.P100,
            selProduct.id
          );
        }

        console.log("===== selPriceRule: ", selPriceRule);
        if (selPriceRule) {
          const discount = await createDiscountCode(selPriceRule.id);
          const userRewards = selUser.rewards || [];
          const createdAt = Date.now();
          userRewards.push({
            productId: selProduct.id,
            discountCode: discount.code,
            used: false,
            viewed: false,
            createdAt,
          });

          const notifications = selUser.notifications || [];
          notifications.unshift({
            productId: selProduct.id,
            discountCode: discount.code,
            viewed: false,
            message: `Congratulations!\nYou recieved the product: ${selProduct.title}`,
            type: Notification.Type.REWARD,
            createdAt,
          });

          await updateUser(selUser.id, { rewards: userRewards, notifications });

          const projectReward = {
            userId: selUser.id,
            productId: selProduct.id,
            discountCode: discount.code,
            createdAt,
          };
          await addRewardsIntoProject(project.id, projectReward);
        }
      }
      return response.send({ success: true });
    }
  } catch (err) {
    console.log("===== err: ", err);
  }
  return response.send({ success: false });
});

exports.getProductList = functions.https.onRequest(
  async (request, response) => {
    const products = await getProducts();
    return response.send({ products });
  }
);

exports.getProduct = functions.https.onRequest(async (request, response) => {
  console.log(request.query);
  const { productId } = request.query;
  if (productId) {
    const product = await getProduct(productId);
    return response.send({ product });
  } else {
    return response.send({
      error: true,
      message: "Required the product ID.",
    });
  }
});

exports.createCheckout = functions.https.onCall(async (data, context) => {
  if (data) {
    console.log("===== checkout: ", data);
    const checkout = await createCheckout({ checkout: data });
    if (checkout) {
      return {
        success: true,
        checkout: data,
      };
    } else {
      return {
        success: false,
        message: "Failed checkout creation",
      };
    }
  } else {
    return {
      success: false,
      message: "Required checkout data.",
    };
  }
});

exports.getCheckout = functions.https.onRequest(async (request, response) => {
  const { checkoutId } = request.query;
  if (checkoutId) {
    const checkout = await getCheckout(checkoutId);
    return response.send({ checkout });
  } else {
    return response.send({
      error: true,
      message: "Required the checkout ID.",
    });
  }
});

exports.testRewards = functions.https.onRequest(async (request, response) => {
  try {
    const project = await getProject(PROJECT_ID);

    const users = await getUsers();

    const products = await getProducts();
    const availableProducts = [];
    for (const item of products) {
      if (isAvailableProduct(item)) {
        availableProducts.push(item);
      }
    }

    if (users.length > 0 && availableProducts.length > 0) {
      const uIdx = Math.floor(Math.random() * users.length);
      const pIdx = Math.floor(Math.random() * availableProducts.length);
      const selUser = users[uIdx];
      const selProduct = availableProducts[pIdx];

      const priceRuleTitle = getPriceRuleTitle(
        Order.Discount.P100,
        selProduct.id
      );

      const priceRules = await getPriceRules();

      let selPriceRule = priceRules.find(
        (item) => item.title === priceRuleTitle
      );

      if (typeof selPriceRule === "undefined") {
        console.log("===== create price rule =====");
        selPriceRule = await createPriceRule(
          priceRuleTitle,
          Order.Discount.P100,
          selProduct.id
        );
      }

      console.log("===== selPriceRule: ", selPriceRule);
      if (selPriceRule) {
        const discount = await createDiscountCode(selPriceRule.id);
        const userRewards = selUser.rewards || [];
        const createdAt = Date.now();
        userRewards.push({
          productId: selProduct.id,
          discountCode: discount.code,
          used: false,
          viewed: false,
          createdAt,
        });

        const notifications = selUser.notifications || [];
        notifications.unshift({
          productId: selProduct.id,
          discountCode: discount.code,
          viewed: false,
          message: `Congratulations!\nYou recieved the product: ${selProduct.title}`,
          type: Notification.Type.REWARD,
          createdAt,
        });

        await updateUser(selUser.id, { rewards: userRewards, notifications });

        const projectReward = {
          userId: selUser.id,
          productId: selProduct.id,
          discountCode: discount.code,
          createdAt,
        };
        await addRewardsIntoProject(project.id, projectReward);
      }
    }
    return response.send({ success: true });
  } catch (err) {
    console.log("===== err: ", err);
  }
  return response.send({ success: false });
});
