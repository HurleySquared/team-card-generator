// Starter file provided by Instructor (03/09/2021) AC
const Intern = require("../lib/Intern");
const Employee = require("../lib/Intern");

describe('Intern', () => {
  test("Can set school via constructor", () => {
    const school = 'school';
    const newNew = new Intern(school);

    expect(newNew instanceof Employee).toBe(true);
  });

  test("getRole() should return \"Intern\"", () => {
    const getRole = 'Intern';
    const newNew = new Intern('test', 5, 'email@email.com', getRole);
    const newRole = newNew.getRole();

    expect(newRole).toEqual(getRole);
  });

  test("Can get school via getSchool()", () => {
    const school = 'school';
    const newNew = new Intern('test', 5, 'email@email.com', school);

    expect(newNew.getSchool()).toBe(school);
  });
});