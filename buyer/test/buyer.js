'use strict';
const should = require('chai').should();
const {sandboxClient} = require('../client.js');
const {buy} = require('../buyer.js');

async function topUpAccount(client) {
  const accounts = await client.getCoinbaseAccounts();
  const bank = accounts.find(a => a.currency === 'GBP');
  const deposit = await client.depositCoinbase(
      {amount: 20, currency: 'GBP', coinbase_account_id: bank.id});
  deposit.id.should.be.ok;
  console.log(`Deposited ${deposit.amount} ${deposit.currency}.`);
};

describe('when purchasing coins', () => {
  const client = sandboxClient();

  before(async () => {
    topUpAccount(client);
  });

  it('places an order sucessfully', async () => {
    const order = await buy(client);
    order.status.should.be.equal('pending');
    order.specified_funds.should.be.equal('10');
    order.product_id.should.be.equal('BTC-GBP');
  });
});
