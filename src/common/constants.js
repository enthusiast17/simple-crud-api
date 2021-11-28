const HTTP_METHODS = Object.freeze({
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
});

const INTERNAL_ERROR = "Internal error";
const INTERNAL_ERROR_CODE = 500;

module.exports = {
  HTTP_METHODS,
  INTERNAL_ERROR,
  INTERNAL_ERROR_CODE,
};
