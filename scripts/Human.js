class Human {
  name;
  age;
  weight;
  gender;

  /**
   *
   * @param {string} name
   * @param {number} age
   * @param {number} weight
   * @param {"man" | "woman"} gender
   */
  constructor(name, age, weight, gender) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }

  /**
   *
   * @param {null | "name" | "age" | "weight" | "gender"} prop
   */
  getInfo(prop = null) {
    if (!prop) {
      return {
        age: this.age,
        name: this.name,
        gender: this.gender,
        weight: this.weight,
      };
    } else {
      return this[prop];
    }
  }

  greeting() {
    return "Hi!";
  }
}
export default Human;
