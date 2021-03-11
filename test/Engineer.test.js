// Starter file provided by Instructor (03/09/2021) AC
const Engineer = require("../lib/Engineer");
const Employee = require('../lib/Employee');

test("Can set GitHub account via constructor", () => {
  const github = 'username';
  const result = new Engineer(github);

  expect(result instanceof Employee).toBe(true);
});

test("getRole() should return \"Engineer\"", () => {
  const getRole = 'Engineer';
  const result = new Engineer('test', 5, 'email@email.com', getRole);
  const newRole = result.getRole();

  expect(newRole).toEqual(getRole);
});

test("Can get GitHub username via getGithub()", () => {
  const github = 'username';
  const result = new Engineer('test', 5, 'email@emal.com', github);

  expect(result.getGithub()).toBe(github);
});
