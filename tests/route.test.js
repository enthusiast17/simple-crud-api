const { HTTP_METHODS } = require("../src/common/constants");
const { Route } = require("../src/common/route");

describe("Test route", () => {
  const route = new Route("/hello/there");

  it("should contain route name", () => {
    expect(route.name).toBe("/hello/there");
  });

  it("should contain GET method", () => {
    route.get(() => {});
    expect(route.methods.get(HTTP_METHODS.GET)).not.toBeUndefined();
  });

  it("should contain POST method", () => {
    route.post(() => {});
    expect(route.methods.get(HTTP_METHODS.POST)).not.toBeUndefined();
  });

  it("should contain PUT method", () => {
    route.put(() => {});
    expect(route.methods.get(HTTP_METHODS.PUT)).not.toBeUndefined();
  });

  it("should contain DELETE method", () => {
    route.delete(() => {});
    expect(route.methods.get(HTTP_METHODS.DELETE)).not.toBeUndefined();
  });

  it("should throw GET error", () => {
    expect(() => route.get(() => {})).toThrow(
      "Route get: GET method is already exists.",
    );
  });

  it("should throw POST error", () => {
    expect(() => route.post(() => {})).toThrow(
      "Route post: POST method is already exists.",
    );
  });

  it("should throw PUT error", () => {
    expect(() => route.put(() => {})).toThrow(
      "Route put: PUT method is already exists.",
    );
  });

  it("should throw DELETE error", () => {
    expect(() => route.delete(() => {})).toThrow(
      "Route delete: DELETE method is already exists.",
    );
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
