const { BAD_REQUEST, BAD_REQUEST_CODE } = require("../common/constants");
const { HttpError } = require("../common/errors");

const models = [
  {
    name: "name",
    rule(value) {
      if (!value) {
        throw new HttpError(
          BAD_REQUEST_CODE,
          BAD_REQUEST,
          '"name" is required.'
        );
      }

      if (typeof value !== "string") {
        throw new HttpError(
          BAD_REQUEST_CODE,
          BAD_REQUEST,
          '"name" is not string.'
        );
      }

      if (value.length === 0) {
        throw new HttpError(BAD_REQUEST_CODE, BAD_REQUEST, '"name" is empty.');
      }
    },
  },
  {
    name: "age",
    rule(value) {
      if (!value) {
        throw new HttpError(
          BAD_REQUEST_CODE,
          BAD_REQUEST,
          '"age" is required.'
        );
      }

      if (typeof value !== "number") {
        throw new HttpError(
          BAD_REQUEST_CODE,
          BAD_REQUEST,
          '"age" is not number.'
        );
      }
    },
  },
  {
    name: "hobbies",
    rule(value) {
      if (!value) {
        throw new HttpError(
          BAD_REQUEST_CODE,
          BAD_REQUEST,
          '"hobbies" is required.'
        );
      }

      if (!Array.isArray(value)) {
        throw new HttpError(
          BAD_REQUEST_CODE,
          BAD_REQUEST,
          '"hobbies" is not array.'
        );
      }

      if (
        Array.isArray(value) &&
        !value.every((element) => typeof element === "string")
      ) {
        throw new HttpError(
          BAD_REQUEST_CODE,
          BAD_REQUEST,
          '"hobbies" is not array of strings.'
        );
      }
    },
  },
];

const validate = (person) => {
  if (Object.keys(person).length > 3) {
    throw new HttpError(
      BAD_REQUEST_CODE,
      BAD_REQUEST,
      "Person is not valid. There are more than 3 values..."
    );
  }

  models.forEach((model) => {
    model.rule(person[model.name]);
  });
};

module.exports = {
  validate,
};
