module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    i18n: {
      enabled: true,
      locales: ['es', 'en'], // Ajusta según tus necesidades
      defaultLocale: 'es',
    },
  }
});
