'use strict';
const {assert} = require('chai');
const {coinbaseClient} = require('../client.js');

describe('when the client is used', () => {
  const client = coinbaseClient();
  it('returns the time', async () => {
    const time = await client.getTime();
    assert.isOk(time);
  });
});
