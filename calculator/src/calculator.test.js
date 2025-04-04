const add = require('./calculator');

test("Return 0 for empty string", () => {
    expect(add("")).toBe(0);
});

test("returns sum of two numbers comma saprated values", () => {
    expect(add("1,2")).toBe(3);
});

test("test for single value", () => {
    expect(add("1")).toBe(1);
});

test("test with delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test("test with multiple input values", () => {
    expect(add("1,2,3,4")).toBe(10);
});

test("throws an error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});