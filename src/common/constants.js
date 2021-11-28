const HTTP_METHODS = Object.freeze({
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
});

const INTERNAL_ERROR = "Internal error";
const INTERNAL_ERROR_CODE = 500;
const NOT_FOUND = "Not Found.";
const NOT_FOUND_CODE = 404;
const BAD_REQUEST = "Bad Request.";
const BAD_REQUEST_CODE = "400";

module.exports = {
  HTTP_METHODS,
  INTERNAL_ERROR,
  INTERNAL_ERROR_CODE,
  NOT_FOUND,
  NOT_FOUND_CODE,
  BAD_REQUEST,
  BAD_REQUEST_CODE,
};
