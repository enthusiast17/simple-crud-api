const {
  HTTP_METHODS,
  INTERNAL_ERROR,
  INTERNAL_ERROR_CODE,
  ROUTE_GET_METHOD_IS_ALREADY_EXISTS,
  ROUTE_POST_METHOD_IS_ALREADY_EXISTS,
  ROUTE_PUT_METHOD_IS_ALREADY_EXISTS,
  ROUTE_DELETE_METHOD_IS_ALREADY_EXISTS
} = require("./constants");
const { HttpError } = require("./errors");

class Route {
  constructor(name) {
    this.name = name;
    this.methods = new Map();
  }

  findByMethod(method) {
    return this.methods.get(method) || null;
  }

  get(fn) {
    if (this.methods.has(HTTP_METHODS.GET)) {
      throw new HttpError(
        INTERNAL_ERROR_CODE,
        INTERNAL_ERROR,
        ROUTE_GET_METHOD_IS_ALREADY_EXISTS, 
      );
    }
    this.methods.set(HTTP_METHODS.GET, fn);
  }

  post(fn) {
    if (this.methods.has(HTTP_METHODS.POST)) {
      throw new HttpError(
        INTERNAL_ERROR_CODE,
        INTERNAL_ERROR,
        ROUTE_POST_METHOD_IS_ALREADY_EXISTS,  
      );
    }

    this.methods.set(HTTP_METHODS.POST, fn);
  }

  put(fn) {
    if (this.methods.has(HTTP_METHODS.PUT)) {
      throw new HttpError(
        INTERNAL_ERROR_CODE,
        INTERNAL_ERROR,
        ROUTE_PUT_METHOD_IS_ALREADY_EXISTS,
      );
    }

    this.methods.set(HTTP_METHODS.PUT, fn);
  }

  delete(fn) {
    if (this.methods.has(HTTP_METHODS.DELETE)) {
      throw new HttpError(
        INTERNAL_ERROR_CODE,
        INTERNAL_ERROR,
        ROUTE_DELETE_METHOD_IS_ALREADY_EXISTS,
      );
    }

    this.methods.set(HTTP_METHODS.DELETE, fn);
  }
}

module.exports = {
  Route,
};
