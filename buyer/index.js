'use strict';
const {buy} = require('./buyer');
const {defaultClient} = require('./client');

module.exports.handler = async (event, context) => {
  const client = defaultClient();
  const order = await buy(client);
  console.log(order);
  return order;
};

