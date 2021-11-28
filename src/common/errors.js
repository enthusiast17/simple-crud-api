class HttpError extends Error {
  constructor(statusCode, name, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
  }
}

module.exports = {
  HttpError,
};
