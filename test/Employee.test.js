// Starter file provided by Instructor (03/09/2021) AC
const Employee = require("../lib/Employee");

describe('Employee', () => {
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
    const id = 'id';
    const obj = new Employee(id);

    expect(obj instanceof Employee).toBe(true);
  });

  test("Can set email via constructor argument", () => {
    const email = 'email';
    const obj = new Employee(email);
    
    expect(obj instanceof Employee).toBe(true);
  });
});
describe('getName', () => {
  test("Can get name via getName()", () => {
    const name = 'name';
    const getter = getName()
    const result = new Employee(getter);

    expect(name).toBe(result);
  });
});
  test("Can get id via getId()", () => {
  
  });

  test("Can get email via getEmail()", () => {
  
  });

  test("getRole() should return \"Employee\"", () => {

  });

