'use strict';
const {CoinbasePro, CandleGranularity} = require('coinbase-pro-node');
const auth = {
  apiKey: process.env.BUYER_CB_API_KEY,
  apiSecret: process.env.BUYER_CB_API_SECRET,
  passphrase: process.env.BUYER_CB_PASSPHRASE,
  useSandbox: process.env.BUYER_CB_USE_SANDBOX
};

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const client = new CoinbasePro(auth);
  console.log(`Using API key ${auth.apiKey} with sandbox: ${auth.useSandbox}.`);

  const candles = await client.rest.product.getCandles('BTC-USD', {
    end: '2020-04-11T10:00:00.000Z',
    granularity: CandleGranularity.ONE_HOUR,
    start: '2020-04-11T08:00:00.000Z',
  });

  console.info(
      `Received "${candles.length}" candles to represent 3 hours (08 - 11 AM).`,
      candles);


  accounts = await client.rest.account.listAccounts();
  console.log(`You can trade "${accounts.length}" different pairs.`);
})().catch(console.error);
