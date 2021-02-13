'use strict';
const {assert} = require('chai');
const {coinbaseClient} = require('../client.js');

describe('when purchasing coins', () => {
  const client = coinbaseClient();

  it('places an order sucessfully', async () => {
    const methods = await client.getPaymentMethods();
    const achPaymentMethodId =
        methods.find(o => o.type == 'ach_bank_account').id;
    const deposit = await client.deposit({
      amount: 10000,
      currency: 'USD',
      payment_method_id: achPaymentMethodId
    });
    assert.isOk(deposit.id);

    const order = await client.placeOrder(
        {size: '0.01', price: '200', side: 'buy', product_id: 'BTC-USD'});
    assert.isOk(order.id);
  });
});
