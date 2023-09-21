import Human from "./Human.js";

class Man extends Human {
  /**
   *
   * @param {string} name
   * @param {number} age
   * @param {number} weight
   */
  constructor(name, age, weight) {
    super(name, age, weight, "man");
  }
  greeting() {
    return `Hi! My name is ${this.name}, I am ${this.age} years old.`;
  }
}
export default Man;
