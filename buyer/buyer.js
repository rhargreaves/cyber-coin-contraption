'use strict'
const {coinbaseClient} = require('./client');
const client = coinbaseClient();

module.exports.buy = async () => {
  const amount = '10';
  return await client.placeOrder(
      {funds: amount, type: 'market', side: 'buy', product_id: 'BTC-GBP'});
};
