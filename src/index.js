'use strict';

module.exports = {
  register({ strapi }) {
    strapi.server.use(async (ctx, next) => {
      if (ctx.path === '/healthz') {
        ctx.body = 'OK';
        ctx.status = 200;
      } else {
        await next();
      }
    });
  },

  bootstrap({ strapi }) {
    // Cualquier otra lógica de bootstrap que puedas tener
  },
};