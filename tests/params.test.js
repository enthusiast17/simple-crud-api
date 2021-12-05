const params = require("../src/common/params");
const { Route } = require("../src/common/route");

describe("Test params.parse", () => {
  it("should return a and b params", () => {
    const route = new Route("/:a/:b");
    expect(params.parse(route, "/lol/kek")).toStrictEqual({
      a: "lol",
      b: "kek",
    });
  });

  it("should return empty params", () => {
    const route = new Route("/:a/:b");
    expect(params.parse(route, "not/lol/kek")).toStrictEqual({});
  });

  it("should return id and username params", () => {
    const route = new Route("/person/:id/username/:username");

    expect(
      params.parse(route, "/person/1/username/enthusiast17")
    ).toStrictEqual({
      id: "1",
      username: "enthusiast17",
    });
  });

  it("should return empty params", () => {
    const route = new Route("/haha");
    expect(params.parse(route, "/lol/kek")).toStrictEqual({});
  });

  it("should throw error", () => {
    expect(() => params.parse(null, "/lol/kek")).toThrow(
      "Params parse: Route is not instance of Route."
    );
    const route = new Route("/haha");
    expect(() => params.parse(route, null)).toThrow(
      "Params parse: Url is not string."
    );
  });
});
