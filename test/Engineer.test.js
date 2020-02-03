// const Engineer = require("../lib/engineerclass");
// const answers = require('../app');

// test("Can set GitHUb account via constructor", () => {
//   const testValue = `${answers.github}`;
//   const e = new Engineer(`${answers.github}`, 1, `${answers.email}`, testValue);
//   expect(e.github).toBe(`${answers.github}`);
// });

// test("getRole() should return \"Engineer\"", () => {
//   const testValue = "Engineer";
//   const e = new Engineer("Foo", 1, `${answers.email}`, `${answers.github}`);
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get GitHub username via getGithub()", () => {
//   const testValue = `${answers.github}`;
//   const e = new Engineer(`${answers.github}`, 1, "test@test.com", testValue);
//   expect(e.getGithub()).toBe(testValue);
// });