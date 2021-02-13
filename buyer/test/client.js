'use strict';
const {assert} = require('chai');
const {sandboxClient, defaultClient} = require('../client.js');

describe('when the sandbox client is used', () => {
  const client = sandboxClient();

  it('returns the time', async () => {
    const time = await client.getTime();
    assert.isOk(time);
  });
});

describe('when the default client is used', () => {
  const client = defaultClient();

  it('returns the time', async () => {
    const time = await client.getTime();
    assert.isOk(time);
  });
});
