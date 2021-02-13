'use strict';
const {CoinbasePro} = require('coinbase-pro-node');
const auth = {
    apiKey: '',
    apiSecret: '',
    passphrase: '',
    useSandbox: true
};
const client = new CoinbasePro(auth);

client.rest.account.listAccounts().then(accounts => {
    const message = `You can trade "${accounts.length}" different pairs.`;
    console.log(message);
});

