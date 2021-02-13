'use strict'
const {AuthenticatedClient} = require('coinbase-pro-node-api');

module.exports.coinbaseClient = () => {
  const useSandbox = process.env.BUYER_CB_USE_SANDBOX;
  const auth = {
    key: useSandbox ? process.env.BUYER_CB_SANDBOX_API_KEY :
                      process.env.BUYER_CB_API_KEY,
    secret: useSandbox ? process.env.BUYER_CB_SANDBOX_API_SECRET :
                         process.env.BUYER_CB_API_SECRET,
    passphrase: useSandbox ? process.env.BUYER_CB_SANDBOX_PASSPHRASE :
                             process.env.BUYER_CB_PASSPHRASE,
    sandbox: useSandbox
  };
  console.log(`Using API key ${auth.key} sandbox mode: ${auth.sandbox}.`);
  return new AuthenticatedClient(auth);
};
