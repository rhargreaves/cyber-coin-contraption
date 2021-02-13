'use strict';
const {coinbaseClient} = require('./client');

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const client = coinbaseClient();
  const products = await client.getProducts();
  products.forEach(product => {
    console.log(product);
  });
})();

