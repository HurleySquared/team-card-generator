// Starter file provided by Instructor (03/09/2021) AC
const Intern = require("../lib/Intern");
const Employee = require("../lib/Intern");

describe('Intern', () => {
  test("Can set school via constructor", () => {
    const school = 'school';
    const result = new Intern(school);

    expect(result instanceof Employee).toBe(true);
  });

  test("getRole() should return \"Intern\"", () => {
    const getRole = 'Intern';
    const result = new Intern('test', 5, 'email@email.com', getRole);
    const newRole = result.getRole();

    expect(newRole).toEqual(getRole);
  });

  test("Can get school via getSchool()", () => {
    const school = 'school';
    const result = new Intern('test', 5, 'email@email.com', school);

    expect(result.getSchool()).toBe(school);
  });
});