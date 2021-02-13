'use strict';
const {assert} = require('chai');
const should = require('chai').should();
const {coinbaseClient} = require('../client.js');

describe('when purchasing coins', () => {
  const client = coinbaseClient();

  before(async () => {
    const methods = await client.getPaymentMethods();
    const achPaymentMethodId =
        methods.find(o => o.type == 'ach_bank_account').id;
    const deposit = await client.deposit({
      amount: 10000,
      currency: 'USD',
      payment_method_id: achPaymentMethodId
    });
    deposit.id.should.be.ok;
    console.log(`Deposited ${deposit.amount} ${deposit.currency}.`);
  });

  it('places an order sucessfully', async () => {
    const order = await client.placeOrder(
        {size: '0.01', price: '200', side: 'buy', product_id: 'BTC-USD'});
    order.id.should.be.ok;
    order.status.should.be.equal('pending');
  });
});
