jest.dontMock('../sum.js');

describe('sum', function() {

  it('should add two numbers', function() {
    var sum = require('../sum');
    expect(sum(1, 2)).toBe(3);
  });

});