const { GET_METHOD_IS_ALREADY_EXISTS, POST_METHOD_IS_ALREADY_EXISTS, HTTP_METHODS, PUT_METHOD_IS_ALREADY_EXISTS, DELETE_METHOD_IS_ALREADY_EXISTS } = require("./constants");

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
      throw new Error(GET_METHOD_IS_ALREADY_EXISTS)
    }
    this.methods.set(HTTP_METHODS.GET, fn);
  }

  post(fn) {
    if (this.methods.has(HTTP_METHODS.POST)) {
      throw new Error(POST_METHOD_IS_ALREADY_EXISTS);
    }

    this.methods.set(HTTP_METHODS.POST, fn);
  }

  put(fn) {
    if (this.methods.has(HTTP_METHODS.PUT)) {
      throw new Error(PUT_METHOD_IS_ALREADY_EXISTS);
    }

    this.methods.set(HTTP_METHODS.PUT, fn);
  }

  delete(fn) {
    if (this.methods.has(HTTP_METHODS.DELETE)) {
      throw new Error(DELETE_METHOD_IS_ALREADY_EXISTS);
    }

    this.methods.set(HTTP_METHODS.DELETE, fn);
  }
}

module.exports = {
  Route,
};
