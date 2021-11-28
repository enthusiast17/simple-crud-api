const { INTERNAL_ERROR_CODE, INTERNAL_ERROR, URL_WITHOUT_QUERIES_VALUE_IS_NOT_STRING } = require("./constants");
const { HttpError } = require("./errors");

const withoutQueries = (url) => {
  if (typeof url !== "string") {
    throw new HttpError(
      INTERNAL_ERROR_CODE,
      INTERNAL_ERROR,
      URL_WITHOUT_QUERIES_VALUE_IS_NOT_STRING,
    );
  }

  const index = url.indexOf("?");

  return index !== -1 && url.slice(0, index) || url;
};

module.exports = {
  withoutQueries,
};
