'use strict';
const {buy} = require('./buyer');

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const order = await buy();
  console.log(order);
})();

