const { INTERNAL_ERROR_CODE, INTERNAL_ERROR } = require("./constants");
const { HttpError } = require("./errors");
const { Route } = require("./route");

const withoutQueries = (url) => {
  if (typeof url !== "string") {
    throw new HttpError(
      INTERNAL_ERROR_CODE,
      INTERNAL_ERROR,
      "Url util withoutQueries: Url is not string."
    );
  }

  const index = url.indexOf("?");

  return (index !== -1 && url.slice(0, index)) || url;
};

const isRouteEqualToUrl = (route, url) => {
  if (!(route instanceof Route)) {
    throw new HttpError(
      INTERNAL_ERROR_CODE,
      INTERNAL_ERROR,
      "Url util isRouteEqualToUrl: Route is not instance of Route."
    );
  }

  if (typeof url !== "string") {
    throw new HttpError(
      INTERNAL_ERROR_CODE,
      INTERNAL_ERROR,
      "Url util isRouteEqualToUrl: Url is not string."
    );
  }

  const urlParts = withoutQueries(url)
    .split("/")
    .filter((part) => part !== "");

  return route.name
    .split("/")
    .filter((part) => part !== "")
    .every((value, index, arr) => {
      if (arr.length !== urlParts.length) return false;
      if (value[0] === ":") return true;

      return value === urlParts[index];
    });
};

const findRouteByUrl = (routes, url) => {
  if (!Array.isArray(routes)) {
    throw new HttpError(
      INTERNAL_ERROR_CODE,
      INTERNAL_ERROR,
      "Url util findRouteByUrl: Routes is not array."
    );
  }

  if (typeof url !== "string") {
    throw new HttpError(
      INTERNAL_ERROR_CODE,
      INTERNAL_ERROR,
      "Url util findRouteByUrl: Url is not string."
    );
  }

  const routeWithParams = routes.find((route) => isRouteEqualToUrl(route, url));

  if (!routeWithParams) {
    return null;
  }

  return routeWithParams;
};

module.exports = {
  withoutQueries,
  isRouteEqualToUrl,
  findRouteByUrl,
};
