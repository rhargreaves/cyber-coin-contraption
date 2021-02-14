const {buy} = require('./buyer');

exports.handler = async (event, context) => {
  return await buy();
});
