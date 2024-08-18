"use strict";

function calcDiscountPrice(price, discount) {
  if(!discount) return price;

  const discountAmount = (price * discount) / 100;
  const result = price - discountAmount;

  return result.toFixed(2)
}

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async paymentOrder(ctx) {
    const {token, products, idUser, addressShipping} =  ctx.request.body;

    let totalPayment = 0;
    products.forEach((product) => {
      const priceTemp =
    })
  },
}));
