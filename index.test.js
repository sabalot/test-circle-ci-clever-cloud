const addition = require(".");

describe("test", () => {
  it("test addition", async () => {
    const result = addition(5, 12);

    expect(result).toEqual(17);
  });
});
