const FourArithmeticOperations = require("../modules/FourArithmeticOperations");
let method;

describe("FourArithmetics", () => {
  test("plus - adds 1 + 2 to equal 3", () => {
    method = "plus";
    expect(FourArithmeticOperations(1, 2, method)).toBe(3);
  });

  test("minus - adds 1 - 2 to equal -1", () => {
    method = "minus";
    expect(FourArithmeticOperations(1, 2, method)).toBe(-1);
  });

  test("multiply - adds 1 - 2 to equal 2", () => {
    method = "multiply";
    expect(FourArithmeticOperations(1, 2, method)).toBe(2);
  });

  test("devide - adds 1 - 3 to equal 0.33", () => {
    method = "devide";
    expect(FourArithmeticOperations(1, 3, method)).toBeCloseTo(0.33);
  });
});
