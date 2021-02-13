'use strict';
const {assert} = require('chai');
const {coinbaseClient} = require('../client.js');

describe('when it does something', () => {
  const client = coinbaseClient();
  it('does something', async () => {
    accounts = await client.rest.account.listAccounts();
    console.log(`You can trade "${accounts.length}" different pairs.`);
  });
});
