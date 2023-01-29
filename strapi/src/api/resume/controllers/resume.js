"use strict";

/**
 * resume controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::resume.resume", ({ strapi }) => ({
  async findMyResumeList(ctx) {
    ctx.query = {
      ...ctx.query,
      filters: { userId: { $eq: ctx.state.user.id } },
    };

    const response = await super.find(ctx);
    return response;
  },
}));
