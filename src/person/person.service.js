const uuid = require("uuid");
const {
  NOT_FOUND_CODE,
  NOT_FOUND,
  BAD_REQUEST_CODE,
  BAD_REQUEST,
} = require("../common/constants");
const { HttpError } = require("../common/errors");
const personRepository = require("./person.repository");
const personValidator = require("./person.validator");

const read = () => personRepository.read();

const readById = (id) => {
  if (!uuid.validate(id)) {
    throw new HttpError(
      BAD_REQUEST_CODE,
      BAD_REQUEST,
      "Id is not valid as uuid. Please, try another id..."
    );
  }

  const person = personRepository.findById(id);
  if (!person) {
    throw new HttpError(
      NOT_FOUND_CODE,
      NOT_FOUND,
      "Couldn't find person by id. Please, try another id..."
    );
  }

  return person;
};

const create = (person) => {
  personValidator.validate(person);
  return personRepository.create(person);
};

const editById = (id, person) => {
  personValidator.validate(person);

  if (!uuid.validate(id)) {
    throw new HttpError(
      BAD_REQUEST_CODE,
      BAD_REQUEST,
      "Id is not valid as uuid. Please, try another id..."
    );
  }

  if (!personRepository.findById(id)) {
    throw new HttpError(
      NOT_FOUND_CODE,
      NOT_FOUND,
      "Couldn't find person by id. Please, try another id..."
    );
  }
  return personRepository.editById({ id, ...person });
};

const deleteById = (id) => {
  if (!uuid.validate(id)) {
    throw new HttpError(
      BAD_REQUEST_CODE,
      BAD_REQUEST,
      "Id is not valid as uuid. Please, try another id..."
    );
  }

  if (!personRepository.findById(id)) {
    throw new HttpError(
      NOT_FOUND_CODE,
      NOT_FOUND,
      "Couldn't find person by id. Please, try another id..."
    );
  }

  personRepository.deleteById(id);

  return {
    statusCode: 200,
    name: "Success",
    description: "Successfully deleted...",
  };
};

module.exports = {
  read,
  readById,
  create,
  editById,
  deleteById,
};
