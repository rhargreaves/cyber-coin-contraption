'use strict'
const {AuthenticatedClient} = require('coinbase-pro-node-api');

module.exports.sandboxClient = () => {
  const auth = {
    key: process.env.BUYER_CB_SANDBOX_API_KEY,
    secret: process.env.BUYER_CB_SANDBOX_API_SECRET,
    passphrase: process.env.BUYER_CB_SANDBOX_PASSPHRASE,
    sandbox: true
  };
  console.log(`Using API key ${auth.key} in sandbox mode.`);
  return new AuthenticatedClient(auth);
};
