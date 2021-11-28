const { it, expect } = require("@jest/globals");
const { URL_WITHOUT_QUERIES_VALUE_IS_NOT_STRING } = require("../src/common/constants");
const url = require("../src/common/url");

describe("Test url.withoutQueries", () => {
  it("should clean queries", () => {
    expect(url.withoutQueries("http://hello.com/there?kek=lol&haha=:D")).toBe("http://hello.com/there");
  });

  it("should not clean url", () => {
    expect(url.withoutQueries("http://hello.com/there")).toBe("http://hello.com/there");
  });

  it("should throw error when value is not string", () => {
    expect(() => url.withoutQueries(undefined)).toThrow(URL_WITHOUT_QUERIES_VALUE_IS_NOT_STRING);
    expect(() => url.withoutQueries(null)).toThrow(URL_WITHOUT_QUERIES_VALUE_IS_NOT_STRING);
    expect(() => url.withoutQueries({})).toThrow(URL_WITHOUT_QUERIES_VALUE_IS_NOT_STRING);
    expect(() => url.withoutQueries(() => {})).toThrow(URL_WITHOUT_QUERIES_VALUE_IS_NOT_STRING);
  });
});
