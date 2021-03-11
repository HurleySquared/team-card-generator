// Starter file provided by Instructor (03/09/2021) AC
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const obj = new Employee();
  expect(obj instanceof Employee).toBe(true);
});

test("Can set name via constructor arguments", () => {
  const name = 'name';
  const obj = new Employee(name);

  expect(obj instanceof Employee).toBe(true);
});

test("Can set id via constructor argument", () => {
  const id = 5;
  const obj = new Employee(id);

  expect(obj instanceof Employee).toBe(true);
});

test("Can set email via constructor argument", () => {
  const email = 'email';
  const obj = new Employee(email);

  expect(obj instanceof Employee).toBe(true);
});

test("Can get name via getName()", () => {
  const name = 'name';
  const obj = new Employee(name);
  const newName = obj.getName();

  expect(newName).toEqual(name);
});

test("Can get id via getId()", () => {
  const id = 5;
  const obj = new Employee('test', 5, id);
  const newId = obj.getId();

  expect(newId).toEqual(id);
});

test("Can get email via getEmail()", () => {
  const email = 'email@email.com';
  const obj = new Employee('test', 1, email);
  const newEmail = obj.getEmail();

  expect(newEmail).toEqual(email);
});

test("getRole() should return \"Employee\"", () => {
  const role = 'Employee';
  const obj = new Employee('test', 1, 'email@email.com', role);
  const getRole = obj.getRole();

  expect(getRole).toEqual(role);
});

