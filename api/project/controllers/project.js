// 'use strict';

// /**
//  * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
//  * to customize this controller
//  */

// module.exports = {};

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.project.search(ctx.query);
      //console.log("AuthUser", ctx.query);
    } else {
      entities = await strapi.services.project.find(ctx.query);
      console.log("ctx", ctx.response);

      return entities.map(entity =>
        sanitizeEntity(entity, { model: strapi.models.project })
      );
    }
  }
};
