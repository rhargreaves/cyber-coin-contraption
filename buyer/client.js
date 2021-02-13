'use strict'
const {PublicClient} = require('coinbase-pro-node-api');

module.exports.coinbaseClient = () => {
  const auth = {
    apiKey: process.env.BUYER_CB_API_KEY,
    apiSecret: process.env.BUYER_CB_API_SECRET,
    passphrase: process.env.BUYER_CB_PASSPHRASE,
    sandbox: process.env.BUYER_CB_USE_SANDBOX
  };
  console.log(`Using API key ${auth.apiKey} with sandbox: ${auth.sandbox}.`);
  return new PublicClient(auth);
};
