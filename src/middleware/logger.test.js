'use strict';

const logger = require('./logger');

describe('test logger', () => {
  test('is logger working', () => {
    const request = {
      query:{}
    };
    const response = {};
    // since we dont want to build next function, we just need to make sure it's called.
    const next = jest.fn();
    // const next = function() {}

    logger(request, response, next);
    expect(next).toHaveBeenCalled();
  });
});
