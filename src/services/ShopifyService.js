import Client from "shopify-buy";
import { shopifyConfig } from "../constants/config";

const client = Client.buildClient({
  storefrontAccessToken: shopifyConfig.publicToken,
  domain: shopifyConfig.domain,
});

class ShopifyService {
  constructor() {}

  getProductList() {
    return new Promise((resolve, reject) => {
      client.product
        .fetchAll()
        .then((products) => {
          resolve(products);
        })
        .catch((err) => {
          console.log("===== error: ", err);
          reject(err);
        });
    });
  }

  createCheckout() {
    return new Promise((resolve, reject) => {
      client.checkout
        .create()
        .then((checkout) => {
          resolve(checkout);
        })
        .catch((err) => {
          console.log("===== createCheckout error: ", err);
          reject(err);
        });
    });
  }

  getCheckout(checkoutId) {
    return new Promise((resolve, reject) => {
      client.checkout
        .get(checkoutId)
        .then((checkout) => {
          resolve(checkout);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  updateEmail(checkoutId, email) {
    return new Promise((resolve, reject) => {
      client.checkout
        .updateEmail(checkoutId, email)
        .then((checkout) => {
          resolve(checkout);
        })
        .catch((err) => {
          console.log("===== updateEmail error: ", err);
          reject(err);
        });
    });
  }

  updateCheckoutAttributes(checkoutId, params) {
    return new Promise((resolve, reject) => {
      client.checkout
        .updateAttributes(checkoutId, params)
        .then((checkout) => {
          resolve(checkout);
        })
        .catch((err) => {
          console.log("===== updateCheckoutAttributes error: ", err);
          reject(err);
        });
    });
  }

  addLineItems(checkoutId, lineItems) {
    return new Promise((resolve, reject) => {
      client.checkout
        .addLineItems(checkoutId, lineItems)
        .then((checkout) => {
          resolve(checkout);
        })
        .catch((err) => {
          console.log("===== addLineItems error: ", err);
          reject(err);
        });
    });
  }

  removeLineItems(checkoutId, lineItemIds) {
    return new Promise((resolve, reject) => {
      client.checkout
        .removeLineItems(checkoutId, lineItemIds)
        .then((checkout) => {
          resolve(checkout);
        })
        .catch((err) => {
          console.log("===== removeLineItems error: ", err);
          reject(err);
        });
    });
  }
}

export const shopifyService = new ShopifyService();
