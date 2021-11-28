const { v4: uuidv4 } = require("uuid");

let persons = [];

const create = (person) => {
  const personWithId = { ...person, id: uuidv4() };
  persons.push(personWithId);
  return personWithId;
};

const read = () => persons;

const findById = (id) => persons.find((person) => person.id === id);

const deleteById = (id) => {
  persons = persons.filter((person) => person.id !== id);
};

const editById = (updatedPerson) => {
  persons = persons.map((person) => {
    if (person.id === updatedPerson.id) {
      return updatedPerson;
    }
    return person;
  });
  return updatedPerson;
};

module.exports = {
  create,
  read,
  findById,
  deleteById,
  editById,
};
