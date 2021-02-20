'use strict';
const should = require('chai').should();
const {sandboxClient} = require('./client.js');
const {LambdaClient, InvokeCommand} = require('@aws-sdk/client-lambda');
const {StringDecoder} = require('string_decoder');

async function topUpAccount(client) {
  const accounts = await client.getCoinbaseAccounts();
  const bank = accounts.find(a => a.currency === 'GBP');
  const deposit = await client.depositCoinbase(
      {amount: 20, currency: 'GBP', coinbase_account_id: bank.id});
  deposit.id.should.be.ok;
  console.log(`Deposited ${deposit.amount} ${deposit.currency}.`);
};

describe('when buy lambda is invoked', () => {
  const coinbase = sandboxClient();

  before(async () => {
    topUpAccount(coinbase);
  });

  it('places an order sucessfully', async () => {
    const params = {
      FunctionName: 'buyer-test-buy',
      InvocationType: 'RequestResponse',
      LogType: 'Tail'
    };
    const lambda = new LambdaClient({region: 'us-east-1'});
    const command = new InvokeCommand(params);
    const resp = await lambda.send(command);
    const decoder = new StringDecoder('utf8');
    const orderId = JSON.parse(decoder.write(resp.Payload));
    console.log(`Order ID = ${orderId}`);
    const order = await coinbase.getOrder({id: orderId});
    order.specified_funds.should.equal('10.0000000000000000');
  });
});
