'use strict';
const {PublicClient} = require('coinbase-pro-node-api');

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const client = new PublicClient({sandbox: true});
  const products = await client.getProducts();
  products.forEach(product => {
    console.log(product);
  });
  console.log(`You can trade "${products.length}" different pairs.`);
})();

