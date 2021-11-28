const GET_METHOD_IS_ALREADY_EXISTS = "Route get: GET method is already exists.";
const POST_METHOD_IS_ALREADY_EXISTS = "Route post: POST method is already exists.";
const PUT_METHOD_IS_ALREADY_EXISTS = "Route put: PUT method is already exists.";
const DELETE_METHOD_IS_ALREADY_EXISTS = "Route delete: DELETE is already exists.";

const HTTP_METHODS = Object.freeze({
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
});

const INTERNAL_ERROR = "Internal error";
const INTERNAL_ERROR_CODE = 500;

module.exports = {
  GET_METHOD_IS_ALREADY_EXISTS,
  POST_METHOD_IS_ALREADY_EXISTS,
  PUT_METHOD_IS_ALREADY_EXISTS,
  DELETE_METHOD_IS_ALREADY_EXISTS,
  HTTP_METHODS,
  INTERNAL_ERROR,
  INTERNAL_ERROR_CODE,
};
