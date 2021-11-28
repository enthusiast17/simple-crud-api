const { Route } = require("../src/common/route");
const urlUtil = require("../src/common/url-util");

describe("Test urlUtil.withoutQueries", () => {
  it("should clean queries", () => {
    expect(urlUtil.withoutQueries("/there?kek=lol&haha=:D")).toBe("/there");
  });

  it("should not clean url", () => {
    expect(urlUtil.withoutQueries("/there")).toBe("/there");
  });

  it("should throw error when value is not string", () => {
    expect(() => urlUtil.withoutQueries(undefined)).toThrow(
      "Url util withoutQueries: Url is not string."
    );
    expect(() => urlUtil.withoutQueries(null)).toThrow(
      "Url util withoutQueries: Url is not string."
    );
    expect(() => urlUtil.withoutQueries({})).toThrow(
      "Url util withoutQueries: Url is not string."
    );
    expect(() => urlUtil.withoutQueries(() => {})).toThrow(
      "Url util withoutQueries: Url is not string."
    );
  });
});

describe("Test urlUtil.isRouteEqualToUrl", () => {
  it("should be true", () => {
    expect(urlUtil.isRouteEqualToUrl(new Route("/:a/:b"), "/lol/kek")).toBe(
      true
    );
    expect(
      urlUtil.isRouteEqualToUrl(
        new Route("/person/:id/username/:username"),
        "/person/1/username/enthusiast17"
      )
    ).toBe(true);
  });
  it("should be false", () => {
    expect(
      urlUtil.isRouteEqualToUrl(new Route("/:a/:b"), "person/lol/kek")
    ).toBe(false);
    expect(
      urlUtil.isRouteEqualToUrl(
        new Route("/person/:id/username/:username"),
        "/not_person/1/username/enthusiast17"
      )
    ).toBe(false);
  });
  it("should throw error", () => {
    expect(() => urlUtil.isRouteEqualToUrl(null, "person/lol/kek")).toThrow(
      "Url util isRouteEqualToUrl: Route is not instance of Route."
    );
    expect(() =>
      urlUtil.isRouteEqualToUrl(
        new Route("/person/:id/username/:username"),
        null
      )
    ).toThrow("Url util isRouteEqualToUrl: Url is not string.");
  });
});

describe("Test urlUtil.findRouteByUrl", () => {
  const routes = [
    new Route("/person/:id"),
    new Route("/person/:id/username/:username"),
    new Route("/a/b"),
  ];

  it("should get id param", () => {
    expect(urlUtil.findRouteByUrl(routes, "/person/1")).toStrictEqual(
      routes[0]
    );
  });

  it("should not get id param", () => {
    expect(
      urlUtil.findRouteByUrl(routes, "/person/not-id/just-name")
    ).toBeNull();
  });

  it("should get id and username params", () => {
    expect(
      urlUtil.findRouteByUrl(routes, "/person/1/username/enthusiast17")
    ).toStrictEqual(routes[1]);
  });

  it("shoult not get id and username params", () => {
    expect(
      urlUtil.findRouteByUrl(routes, "/not-person/1/name/enthusiast17")
    ).toBeNull();
  });

  it("shoult find route without params", () => {
    expect(urlUtil.findRouteByUrl(routes, "/a/b")).toStrictEqual(routes[2]);
  });

  it("should throw error when routes is not array", () => {
    expect(() => urlUtil.findRouteByUrl(null, "")).toThrow(
      "Url util findRouteByUrl: Routes is not array."
    );
  });

  it("should throw error when url is not string", () => {
    expect(() => urlUtil.findRouteByUrl([], null)).toThrow(
      "Url util findRouteByUrl: Url is not string."
    );
  });
});
