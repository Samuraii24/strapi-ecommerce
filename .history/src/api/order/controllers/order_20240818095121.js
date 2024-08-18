"use strict";
const stripe = require("stripe")(
  "sk_test_51PgS90HDUN3elk2GVFxPzOPyOdlxu72Diw9AMvDkouWGspClFhKvLkF7Op0GU2eSKv1wQqxbyP8QCxVKkfkxgKTn00puVUNxZx"
);

function calcDiscountPrice(price, discount) {
  if (!discount) return price;

  const discountAmount = (price * discount) / 100;
  const result = price - discountAmount;

  return result.toFixed(2);
}

/**
 * order controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async paymentOrder(ctx) {
    try {
      const { token, products, idUser, addressShipping } = ctx.request.body;

      console.log("Token:", token);
      console.log("Products:", products);
      console.log("User ID:", idUser);
      console.log("Address Shipping:", addressShipping);

      let totalPayment = 0;
      products.forEach((product) => {
        const priceTemp = calcDiscountPrice(
          product.attributes.price,
          product.attributes.discount
        );

        totalPayment += Number(priceTemp) * product.quantity;
      });

      console.log("Total Payment:", totalPayment);

      const charge = await stripe.charges.create({
        amount: Math.round(totalPayment * 100),
        currency: "eur",
        source: token.id,
        description: `User ID: ${idUser}`,
      });

      console.log("Charge ID:", charge.id);

      const data = {
        products,
        user: idUser,
        totalPayment,
        idPayment: charge.id,
        addressShipping,
      };

      console.log("Order Data:", data);

      const model = strapi.contentTypes("api::order.order");

      const validData = await strapi.entityValidator.validateEntityCreation(
        model,
        data
      );

      console.log("Valid Data:", validData);

      const entry = await strapi.db
        .query("api::order.order")
        .create({ data: validData });

      return entry;
    } catch (error) {
      console.error("Error in paymentOrder:", error);
      ctx.throw(500, "An internal server error occurred");
    }
  },
}));
