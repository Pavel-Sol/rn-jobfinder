"use strict";

/**
 * todo controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::todo.todo", ({ strapi }) => ({
  async create(ctx) {
    ctx.request.body.data = {
      ...ctx.request.body.data,
      user: ctx.state.user,
      userId: ctx.state.user.id,
    };

    const response = await super.create(ctx);
    return response;
  },

  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      filters: { user: { id: { $eq: ctx.state.user.id } } },
    };

    const response = await super.find(ctx);
    return response;
  },
}));
