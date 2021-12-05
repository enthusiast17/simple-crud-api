const { BAD_REQUEST, BAD_REQUEST_CODE } = require("./constants");
const { HttpError } = require("./errors");

const parse = (req) => {
  try {
    req.body = JSON.parse(req.body);
  } catch (error) {
    throw new HttpError(
      BAD_REQUEST_CODE,
      BAD_REQUEST,
      "Body is not valid. Please, send only JSON format..."
    );
  }
};

module.exports = {
  parse,
};
