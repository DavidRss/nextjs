const { Levels } = require("../constants");

const getLevelFromSpending = function (spending) {
  let currentLevel = null;

  for (let i = 0; i < Levels.length; i++) {
    if (spending < Levels[i].spend) {
      currentLevel = Levels[i - 1] || Levels[0];
      break;
    }
  }

  if (!currentLevel) {
    currentLevel = Levels[Levels.length - 1];
  }

  return currentLevel;
};

exports.checkLevelUpPoints = function (prevSpending, spending) {
  const currentLevel = getLevelFromSpending(prevSpending);
  const nextLevel = getLevelFromSpending(spending);

  if (currentLevel.level < nextLevel.level) {
    return nextLevel.points;
  }

  return 0;
};

exports.getPriceRuleTitle = function (value, productId) {
  value = -parseInt(value);
  return productId ? `Discount_${value}P_${productId}` : `Discount_${value}P`;
};

exports.isAvailableProduct = function (product) {
  if (product.product_type === "Donation") return false;

  const variants = product.variants;
  let quantity = 0;
  for (const item of variants) {
    quantity = quantity + item.inventory_quantity + item.old_inventory_quantity;
  }

  return quantity !== 0;
};
