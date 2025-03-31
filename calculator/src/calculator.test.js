const add = require('./calculator');

test("Return 0 for empty string", () => {
    expect(add("")).toBe(0);
});

test("returns sum of two numbers comma saprated values", () => {
    expect(add("1,2")).toBe(3);
});
