module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::healthcheck',
    config: {
      path: '/healthz',
      callback: (ctx) => {
        ctx.response.status = 200;
        ctx.response.body = 'OK';
      },
    },
  },
];
