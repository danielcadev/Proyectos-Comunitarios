'use strict';

module.exports = {
  register({ strapi }) {
    console.log('Registering middlewares...');
    strapi.server.use(async (ctx, next) => {
      if (ctx.path === '/healthz') {
        console.log('Health check requested');
        ctx.body = 'OK';
        ctx.status = 200;
      } else {
        await next();
      }
    });
    console.log('Middlewares registered');
  },

  async bootstrap({ strapi }) {
    console.log('Starting bootstrap process...');
    // Tu lógica de bootstrap existente, si la hay
    console.log('Bootstrap process completed');
  },
};