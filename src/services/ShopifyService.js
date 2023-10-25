import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "e9ee26a940e3a2e1ac8ace39ad77222e",
  domain: "d4b6bc-2.myshopify.com",
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
          reject(err);
        });
    });
  }
}

export const shopifyService = new ShopifyService();
