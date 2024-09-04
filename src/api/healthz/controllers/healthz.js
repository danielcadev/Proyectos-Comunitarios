module.exports = {
    index(ctx) {
      ctx.send({
        status: 'ok',
        timestamp: new Date().toISOString()
      });
    },
  };