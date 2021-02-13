'use strict';
const {CoinbasePro} = require('coinbase-pro-node');
const auth = {
  apiKey: process.env.BUYER_CB_API_KEY,
  apiSecret: process.env.BUYER_CB_API_SECRET,
  passphrase: process.env.BUYER_CB_PASSPHRASE,
  useSandbox: process.env.BUYER_CB_USE_SANDBOX
};

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const client = new CoinbasePro(auth);
  console.log(`Using API key ${auth.apiKey} with sandbox: ${auth.useSandbox}.`);

  accounts = await client.rest.account.listAccounts();
  const message = `You can trade "${accounts.length}" different pairs.`;
  console.log(message);
})();
