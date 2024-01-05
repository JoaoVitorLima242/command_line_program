import { describe, it } from "mocha";
import { expect } from "chai";
import Person from "../src/person.js";

describe("Person", () => {
  it("should return a person from a string", () => {
    const result = Person.generateInstanceFromString(
      "2 Bike,Carro 20000 2020-01-10 2021-01-10"
    );

    const expected = {
      id: "2",
      vehicles: ["Bike", "Carro"],
      kmTraveled: "20000",
      from: "2020-01-10",
      to: "2021-01-10",
    };

    expect(result).to.be.deep.equal(expected);
  });

  it("should format values", () => {
    const person = Person.generateInstanceFromString(
      "2 Bike,Carro 20000 2020-01-10 2021-01-10"
    );

    const result = person.formatted(person);
    const expected = {
      id: 2,
      vehicles: "Bike and Carro",
      kmTraveled: "20,000 km",
      from: "January 10, 2020",
      to: "January 10, 2021",
    };

    expect(result).to.be.deep.equal(expected);
  });
});
