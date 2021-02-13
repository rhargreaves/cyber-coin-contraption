'use strict';
const {buy} = require('./buyer');
const {coinbaseClient} = require('./client');

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const client = coinbaseClient();
  const order = await buy(client);
  console.log(order);
})();

