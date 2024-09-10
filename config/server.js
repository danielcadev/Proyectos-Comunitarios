module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 1337),
  url: env('PUBLIC_URL', 'https://proyectos-comunitarios.vercel.app/'), 
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    i18n: {
      enabled: true,
      locales: ['es', 'en'],
      defaultLocale: 'es',
    },
  }
});