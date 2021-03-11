// Starter file provided by Instructor (03/09/2021) AC
const Engineer = require("../lib/Engineer");
const Employee = require('../lib/Employee');

test("Can set GitHub account via constructor", () => {
  const github = 'username';
  const newNew = new Engineer(github);

  expect(newNew instanceof Employee).toBe(true);
});

test("getRole() should return \"Engineer\"", () => {
  const getRole = 'Engineer';
  const newNew = new Engineer('test', 5, 'email@email.com', getRole);
  const newRole = newNew.getRole();

  expect(newRole).toEqual(getRole);
});

test("Can get GitHub username via getGithub()", () => {
  const github = 'username';
  const newNew = new Engineer('test', 5, 'email@emal.com', github);

  expect(newNew.getGithub()).toBe(github);
});
