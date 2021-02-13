'use strict';
const {coinbaseClient} = require('./client');

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const client = coinbaseClient();
  const accounts = await client.getAccounts();
  accounts.forEach(account => {
    console.log(account);
  });
})();

