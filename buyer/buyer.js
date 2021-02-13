'use strict'
const {coinbaseClient} = require('./client');
const client = coinbaseClient();

module.exports.buy = async () => {
  return await client.placeOrder(
      {funds: '100', type: 'market', side: 'buy', product_id: 'BTC-GBP'});
};
