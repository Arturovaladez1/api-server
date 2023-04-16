'use strict';

const validaor = require('./validator');

describe('test validaor', () => {
  test('is validaor working', () => {
    const request = {
      query:{
        name: 'alex'
      }
    };
    const response = {};
    // since we dont want to build next function, we just need to make sure it's called.
    const next = jest.fn();
    // const next = function() {}

    validaor(request, response, next);
    expect(request.query.name).toEqual('alex');
    expect(next).toHaveBeenCalled();

  });

  test('no name in validaor', () => {
    const request = {query: {}};
    const response = {};
    const next = jest.fn();
    validaor(request, response, next);
    expect(next).toHaveBeenCalledWith('Error: Give me a NAME!');
  });
});
