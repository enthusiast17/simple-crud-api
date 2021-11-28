const ROUTE_GET_METHOD_IS_ALREADY_EXISTS = "Route get: GET method is already exists.";
const ROUTE_POST_METHOD_IS_ALREADY_EXISTS = "Route post: POST method is already exists.";
const ROUTE_PUT_METHOD_IS_ALREADY_EXISTS = "Route put: PUT method is already exists.";
const ROUTE_DELETE_METHOD_IS_ALREADY_EXISTS = "Route delete: DELETE is already exists.";

const HTTP_METHODS = Object.freeze({
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
});

const INTERNAL_ERROR = "Internal error";
const INTERNAL_ERROR_CODE = 500;

const URL_WITHOUT_QUERIES_VALUE_IS_NOT_STRING = "Url withoutQueries: Value is not string.";

module.exports = {
  ROUTE_GET_METHOD_IS_ALREADY_EXISTS,
  ROUTE_POST_METHOD_IS_ALREADY_EXISTS,
  ROUTE_PUT_METHOD_IS_ALREADY_EXISTS,
  ROUTE_DELETE_METHOD_IS_ALREADY_EXISTS,
  HTTP_METHODS,
  INTERNAL_ERROR,
  INTERNAL_ERROR_CODE,
  URL_WITHOUT_QUERIES_VALUE_IS_NOT_STRING,
};
