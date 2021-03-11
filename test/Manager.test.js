// Starter file provided by Instructor (03/09/2021) AC
const Manager = require("../lib/Manager");
const Employee = require('../lib/Employee');

test("Can set office number via constructor argument", () => {
  const officeNumber = 'number';
  const newNew = new Manager(officeNumber);

  expect(newNew instanceof Employee).toBe(true);
});

test('getRole() should return "Manager"', () => {
  const manager = 'Manager';
  const newNew = new Manager('test', 5, 'email@email.com', manager);
  const newManager = newNew.getRole();

  expect(newManager).toBe(manager)
});

test("Can get office number via getOffice()", () => {
  const number = 'officeNumber';
  const newNew = new Manager('test', 5, 'email@email.com', number);
  
  expect(newNew.getOfficeNumber()).toEqual(number);
});
