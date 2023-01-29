"use strict";

/**
 * resume router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/myresume",
      handler: "resume.findMyResumeList",
    },
  ],
};
