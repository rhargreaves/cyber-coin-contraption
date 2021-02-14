'use strict';
const should = require('chai').should();
const {handler} = require('../index');

describe('handler', () => {
  it('exists', () => {
    handler.should.be.ok;
  });
});
