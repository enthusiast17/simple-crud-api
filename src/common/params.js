const { INTERNAL_ERROR, INTERNAL_ERROR_CODE } = require("./constants");
const { HttpError } = require("./errors");
const { Route } = require("./route");
const urlUtil = require("./url-util");

const parse = (route, url) => {
  if (!(route instanceof Route)) {
    throw new HttpError(
      INTERNAL_ERROR_CODE,
      INTERNAL_ERROR,
      "Params parse: Route is not instance of Route."
    );
  }

  if (typeof url !== "string") {
    throw new HttpError(
      INTERNAL_ERROR_CODE,
      INTERNAL_ERROR,
      "Params parse: Url is not string."
    );
  }

  if (!urlUtil.isRouteEqualToUrl(route, url)) return {};

  const urlParts = urlUtil
    .withoutQueries(url)
    .split("/")
    .filter((part) => part !== "");

  return route.name
    .split("/")
    .filter((part) => part !== "")
    .reduce((acc, value, index) => {
      if (value[0] === ":") {
        acc[value.slice(1)] = urlParts[index];
      }
      return acc;
    }, {});
};

module.exports = {
  parse,
};
