"use strict";

/**
 * order router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::order.order", ({ strapi }) => ({
  async paymentOrder(ctx) {
    ctx.body = "Pago y pedido realizado";
  },
}));
