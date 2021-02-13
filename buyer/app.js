'use strict';
const {CoinbasePro} = require('coinbase-pro-node');
const auth = {
  apiKey: process.env.BUYER_CB_API_KEY,
  apiSecret: process.env.BUYER_CB_API_SECRET,
  passphrase: process.env.BUYER_CB_PASSPHRASE,
  useSandbox: process.env.BUYER_CB_USE_SANDBOX
};
const client = new CoinbasePro(auth);

client.rest.account.listAccounts().then(accounts => {
  const message = `You can trade "${accounts.length}" different pairs.`;
  console.log(message);
});

