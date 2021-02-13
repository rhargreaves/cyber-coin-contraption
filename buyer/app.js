'use strict';
const {CoinbasePro, CandleGranularity} = require('coinbase-pro-node');
const {coinbaseClient} = require('./client')

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const client = coinbaseClient();
  accounts = await client.rest.account.listAccounts();
  console.log(`You can trade "${accounts.length}" different pairs.`);
})();

