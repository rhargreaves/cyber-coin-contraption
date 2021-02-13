'use strict';
const {buy} = require('./buyer');
const {defaultClient} = require('./client');

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const client = defaultClient();
  const order = await buy(client);
  console.log(order);
})();

