var Calculator = require('./../js/pingpong.js').calculatorModule;


describe('Calculator', function () {

  it('should test whether a number returns a value', function() {
    var test1 = new Calculator()
    expect(test1.pingPong(5)).toEqual([1,2, 'ping',4,'pong']);
  });
});
