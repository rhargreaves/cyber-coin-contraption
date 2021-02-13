'use strict'
const {CoinbasePro} = require('coinbase-pro-node');

module.exports.coinbaseClient = () => {
  const auth = {
    apiKey: process.env.BUYER_CB_API_KEY,
    apiSecret: process.env.BUYER_CB_API_SECRET,
    passphrase: process.env.BUYER_CB_PASSPHRASE,
    useSandbox: process.env.BUYER_CB_USE_SANDBOX
  };
  console.log(`Using API key ${auth.apiKey} with sandbox: ${auth.useSandbox}.`);
  return new CoinbasePro(auth);
};
