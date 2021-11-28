const request = require("supertest");
const app = require("..");

describe("Test not chained http request", () => {
  it("should return empty array in /person (GET)", (done) => {
    request(app).get("/person").set("Accept", "*/*").expect(200, [], done);
  });

  it("should return created person in /person (POST)", async () => {
    const person = {
      name: "enthusiast17",
      age: 12,
      hobbies: [],
    };

    const res = await request(app)
      .post("/person")
      .set("Accept", "application/json")
      .send(person);

    expect(res.body).toStrictEqual({
      id: res.body.id,
      ...person,
    });

    expect(res.statusCode).toBe(200);
  });
});

describe("Test chained http requests", () => {
  let res = null;
  let id = "";
  const person = {
    name: "enthusiast17",
    age: 12,
    hobbies: [],
  };

  beforeAll(async () => {
    res = await request(app)
      .post("/person")
      .set("Accept", "application/json")
      .send(person);
  });

  it("should return created person in /person (POST)", () => {
    id = res.body.id;

    expect(res.body).toStrictEqual({
      id,
      ...person,
    });

    expect(res.statusCode).toBe(200);
  });

  it("should return created person in /person/personId (GET)", (done) => {
    request(app)
      .get(`/person/${id}`)
      .set("Accept", "application/json")
      .expect(200, { id, ...person }, done);
  });

  it("should return updated person in /person/personId (PUT)", (done) => {
    request(app)
      .put(`/person/${id}`)
      .set("Accept", "application/json")
      .send({
        ...person,
        name: "not_enthusiast17",
      })
      .expect(
        200,
        {
          ...person,
          id,
          name: "not_enthusiast17",
        },
        done
      );
  });

  it("should delete person in /person/personId (DELETE)", (done) => {
    request(app)
      .delete(`/person/${id}`)
      .set("Accept", "application/json")
      .expect(
        200,
        {
          statusCode: 200,
          name: "Success.",
          description: "Successfully deleted...",
        },
        done
      );
  });

  it("should not contain person with id in /person/personId (GET)", (done) => {
    request(app).get(`/person/${id}`).set("Accept", "application/json").expect(
      404,
      {
        statusCode: 404,
        name: "Not Found.",
        description: "Couldn't find person by id. Please, try another id...",
      },
      done
    );
  });
});
