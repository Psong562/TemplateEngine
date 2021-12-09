const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "EngineerJoe";
  const engineer = new Engineer("Joe", 1, "test@test.com", "EngineerJoe");
  expect(engineer.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const engineer = new Engineer("Joe", 1, "test@test.com", "EngineerJoe",);
  expect(engineer.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "EngineerJoe";
  const engineer = new Engineer("Joe", 1, "test@test.com", testValue);
  expect(engineer.getGithub()).toBe(testValue);
});
