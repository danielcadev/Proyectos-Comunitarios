import es from './translations/es';

const config = {
  locales: ['es'],
  translations: {
    es: {
      ...es,
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};