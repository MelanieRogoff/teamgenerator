const Intern = require("./../lib/internclass");
const answers = require("./../app");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern(testValue, `${answers.name}`, 1, "test@test.com");
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Intern", 1, "test@test.com", `${answers.school}`);
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = `${answers.school}`;
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(`${answers.school}`);
});