'use strict';
const {CoinbasePro, CandleGranularity} = require('coinbase-pro-node');
const {coinbaseClient} = require('./client')

process.on('unhandledRejection', (err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(-1);
});

(async () => {
  const client = coinbaseClient();
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

