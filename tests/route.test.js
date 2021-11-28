const { it, expect } = require("@jest/globals");
const { HTTP_METHODS, GET_METHOD_IS_ALREADY_EXISTS, POST_METHOD_IS_ALREADY_EXISTS, PUT_METHOD_IS_ALREADY_EXISTS, DELETE_METHOD_IS_ALREADY_EXISTS } = require("../src/common/constants");
const { Route } = require("../src/common/route");

describe("Test route", () => {
  const route = new Route("/hello/there");

  it("should contain route name", () => {
    expect(route.name).toBe("/hello/there");
  });

  it("should contain GET method", () => {
    route.get((req, res) => {});
    expect(route.methods.get(HTTP_METHODS.GET)).not.toBeUndefined();
  });

  it("should contain POST method", () => {
    route.post((req, res) => {});
    expect(route.methods.get(HTTP_METHODS.POST)).not.toBeUndefined();
  });

  it("should contain PUT method", () => {
    route.put((req, res) => {});
    expect(route.methods.get(HTTP_METHODS.PUT)).not.toBeUndefined();
  });

  it("should contain DELETE method", () => {
    route.delete((req, res) => {});
    expect(route.methods.get(HTTP_METHODS.DELETE)).not.toBeUndefined();
  });

  it("should throw GET error", () => {
    expect(() => route.get((req, res) => {})).toThrow(GET_METHOD_IS_ALREADY_EXISTS);
  });

  it("should throw POST error", () => {
    expect(() => route.post((req, res) => {})).toThrow(POST_METHOD_IS_ALREADY_EXISTS);
  });

  it("should throw PUT error", () => {
    expect(() => route.put((req, res) => {})).toThrow(PUT_METHOD_IS_ALREADY_EXISTS);
  });

  it("should throw DELETE error", () => {
    expect(() => route.delete((req, res) => {})).toThrow(DELETE_METHOD_IS_ALREADY_EXISTS);
  });

  it("should find by GET method", () => {
    expect(route.findByMethod(HTTP_METHODS.GET)).not.toBeNull();
  });

  it("should find by POST method", () => {
    expect(route.findByMethod(HTTP_METHODS.POST)).not.toBeNull();
  });

  it("should find by PUT method", () => {
    expect(route.findByMethod(HTTP_METHODS.PUT)).not.toBeNull();
  });

  it("should find by DELETE method", () => {
    expect(route.findByMethod(HTTP_METHODS.DELETE)).not.toBeNull();
  });

  it("should not find by GET method", () => {
    route.methods.clear();
    expect(route.findByMethod(HTTP_METHODS.GET)).toBeNull();
  });

  it("should not find by POST method", () => {
    expect(route.findByMethod(HTTP_METHODS.POST)).toBeNull();
  });

  it("should not find by PUT method", () => {
    expect(route.findByMethod(HTTP_METHODS.PUT)).toBeNull();
  });

  it("should not find by DELETE method", () => {
    expect(route.findByMethod(HTTP_METHODS.DELETE)).toBeNull();
  });
});
