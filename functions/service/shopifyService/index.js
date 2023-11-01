const got = require("got");
const voucher_codes = require("voucher-code-generator");
const { API } = require("../../constants");

const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;
console.log("===== API_ACCESS_TOKEN: ", API_ACCESS_TOKEN);

const headers = {
  "X-Shopify-Access-Token": API_ACCESS_TOKEN,
  "Content-Type": "application/json",
};

const apiUrl = (path) => {
  return `${API.baseUrl}/${API.version}/${path}.json`;
};

const apiUrlWithId = (path, pId) => {
  return `${API.baseUrl}/${API.version}/${path}/${pId}.json`;
};

const apiUrlWithIdAndPath = (path1, pId, path2) => {
  return `${API.baseUrl}/${API.version}/${path1}/${pId}/${path2}.json`;
};

const getOptions = (method, params) => {
  if (params) {
    return {
      headers,
      method,
      responseType: "json",
      json: params,
    };
  } else {
    return {
      headers,
      method,
      responseType: "json",
    };
  }
};

const generateCouponCode = () => {
  return voucher_codes.generate({
    length: 8,
    count: 1,
    charset: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
};

exports.getProducts = async function () {
  try {
    const url = apiUrl(API.path.product);
    const options = getOptions("GET");
    console.log("===== options: ", options);
    const res = await got(url, options);
    if (res.body) {
      return res.body.products;
    }
  } catch (err) {
    console.log("===== getProduts error: ", err);
  }

  return [];
};

exports.getProduct = async function (productId) {
  try {
    const url = apiUrlWithId(API.path.product, productId);
    const options = getOptions("GET");
    const res = await got(url, options);
    if (res.body) {
      return res.body.product;
    }
  } catch (err) {
    console.log("===== getProduct error: ", err);
  }
  return null;
};

exports.createCheckout = async function (params) {
  try {
    const url = apiUrl(API.path.checkout);
    const options = getOptions("POST", params);
    const res = await got(url, options);
    if (res.body) {
      return res.body.checkout;
    }
  } catch (err) {
    console.log("===== createCheckout: ", err);
  }

  return null;
};

exports.getCheckout = async function (token) {
  try {
    console.log("===== token: ", token);
    const url = apiUrlWithId(API.path.checkout, token);
    const options = getOptions("GET");
    console.log("===== url: ", url);
    console.log("===== options: ", options);
    const res = await got(url, options);
    if (res.body) {
      return res.body.checkout;
    }
  } catch (err) {
    console.log("===== getCheckout error: ", err);
  }

  return null;
};

exports.createPriceRule = async function (title, value, productId) {
  try {
    const params = {
      price_rule: {
        title: title,
        target_type: "line_item",
        target_selection: "entitled",
        allocation_method: "across",
        customer_selection: "all",
        value_type: "percentage",
        value: value,
        entitled_product_ids: [productId],
        usage_limit: 1,
        starts_at: new Date().toISOString(),
      },
    };

    const options = getOptions("POST", params);

    const res = await got(apiUrl(API.path.priceRule), options);

    if (res.body) {
      return res.body.price_rule;
    }
  } catch (err) {
    console.log("===== createPriceRule error: ", err);
  }

  return null;
};

exports.getPriceRules = async function () {
  try {
    const options = getOptions("GET");

    const res = await got(apiUrl(API.path.priceRule), options);

    if (res.body) {
      return res.body.price_rules;
    }
  } catch (err) {
    console.log("===== getPriceRules error: ", err);
  }

  return [];
};

exports.getPriceRule = async function (priceRuleId) {
  try {
    const url = apiUrlWithId(API.path.priceRule, priceRuleId);
    const options = getOptions("GET");

    const res = await got(url, options);
    if (res.body) {
      return res.body.price_rule;
    }
  } catch (err) {
    console.log("===== getPriceRule error: ", err);
  }

  return null;
};

exports.createDiscountCode = async function (priceRuleId) {
  try {
    const url = apiUrlWithIdAndPath(
      API.path.priceRule,
      priceRuleId,
      API.path.discountCode
    );

    const code = generateCouponCode()[0];

    const params = {
      discount_code: {
        price_rule_id: priceRuleId,
        code,
      },
    };

    const options = getOptions("POST", params);

    const res = await got(url, options);

    if (res.body) {
      return res.body.discount_code;
    }
  } catch (err) {
    console.log("===== getPriceRule error: ", err);
  }

  return null;
};

exports.getDiscountCodes = function () {};
