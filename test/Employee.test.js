const Employee = require("../lib/Employee");

test("Expect name to be specified", () => {
  const employee = new Employee('John', 1, 'JohnEmployee@gmail.com');
  expect(employee.name).toBe('John');
});

test("Can set id via constructor argument", () => {
  const employee = new Employee('John', 1, 'JohnEmployee@gmail.com');
  expect(employee.id).toBe(1);
});

test("Can set email via constructor argument", () => {
  const employee = new Employee('John', 1, 'JohnEmployee@gmail.com');
  expect(employee.email).toBe('JohnEmployee@gmail.com');
});

test("Can get name via getName()", () => {
  const employee = new Employee('John', 1, 'JohnEmployee@gmail.com');
  expect(employee.getName()).toBe('John');
});

test("Can get id via getId()", () => {
  const employee = new Employee('John', 1, 'JohnEmployee@gmail.com');
  expect(employee.getId()).toBe(1);
});

test("Can get email via getEmail()", () => {
  const employee = new Employee('John', 1, 'JohnEmployee@gmail.com');
  expect(employee.getEmail()).toBe('JohnEmployee@gmail.com');
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const employee = new Employee('John', 1, 'JohnEmployee@gmail.com');
  expect(employee.getRole()).toBe('Employee');
});
