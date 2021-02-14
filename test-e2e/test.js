'use strict';
const should = require('chai').should();
const {sandboxClient} = require('./client.js');

async function topUpAccount(client) {
  const accounts = await client.getCoinbaseAccounts();
  const bank = accounts.find(a => a.currency === 'GBP');
  const deposit = await client.depositCoinbase(
      {amount: 20, currency: 'GBP', coinbase_account_id: bank.id});
  deposit.id.should.be.ok;
  console.log(`Deposited ${deposit.amount} ${deposit.currency}.`);
};

describe('when buy lambda is invoked', () => {
  const client = sandboxClient();

  before(async () => {
    topUpAccount(client);
  });

  it('places an order sucessfully', async () => {});
});
