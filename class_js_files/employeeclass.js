class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }
    getName() {
        console.log(`${answers.name}`);
    }
    getId() {
        console.log(`${answers.id}`);

    }
    getEmail() {
        console.log(`${answers.email}`);

    }
    getRole() {
        return "Employee";
    }
}