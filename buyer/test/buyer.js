'use strict';
const should = require('chai').should();
const {coinbaseClient} = require('../client.js');
const {buy} = require('../buyer.js');

async function topUpAccount(client) {
  const accounts = await client.getCoinbaseAccounts();
  const bank = accounts.find(a => a.currency === 'GBP');
  const deposit = await client.depositCoinbase(
      {amount: 250, currency: 'GBP', coinbase_account_id: bank.id});
  deposit.id.should.be.ok;
  console.log(`Deposited ${deposit.amount} ${deposit.currency}.`);
};

describe('when purchasing coins', () => {
  const client = coinbaseClient();

  before(async () => {
    topUpAccount(client);
  });

  it('places an order sucessfully', async () => {
    const order = await buy();
    order.status.should.be.equal('pending');
    order.specified_funds.should.be.equal('100');
  });
});
