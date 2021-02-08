
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount:100,years:1,rate:0.05})).toEqual(8.56)
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({amount:10043,years:8,rate:0.058})).toEqual(131.00)
});

/// etc
