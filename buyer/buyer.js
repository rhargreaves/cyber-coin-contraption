'use strict';

module.exports.buy = async (client) => {
  const amount = '10';
  return await client.placeOrder(
      {funds: amount, type: 'market', side: 'buy', product_id: 'BTC-GBP'});
};
