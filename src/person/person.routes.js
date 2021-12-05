const { Route } = require("../common/route");
const personService = require("./person.service");
const body = require("../common/body");

const person = new Route("/person");

person.get((_, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(personService.read()));
  res.end();
});

person.post((req, res) => {
  body.parse(req);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(personService.create(req.body)));
  res.end();
});

const personWithId = new Route("/person/:personId");

personWithId.get((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(personService.readById(req.params.personId)));
  res.end();
});

personWithId.put((req, res) => {
  body.parse(req);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify(personService.editById(req.params.personId, req.body))
  );
  res.end();
});

personWithId.delete((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(personService.deleteById(req.params.personId)));
  res.end();
});

module.exports = [person, personWithId];
