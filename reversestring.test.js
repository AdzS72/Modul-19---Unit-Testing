const reverseString = require("./reversestring");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String reverses", () => {
  expect(reverseString("civic")).toEqual("civic");
});

test("String reverses with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});

test("String reverses with uppercase", () => {
  expect(reverseString("Civic")).toEqual("civic");
});
