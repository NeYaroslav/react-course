import Human from "./Human.js";

class Woman extends Human {
  /**
   *
   * @param {string} name
   * @param {number} age
   * @param {number} weight
   */
  constructor(name, age, weight) {
    super(name, age, weight, "woman");
  }
  greeting() {
    return `Hi! My name is ${this.name}.`;
  }
}

export default Woman;
