import findAsync from "./findAsync.js";
import people from "./people.js";

const paramsForFinding = [
  ["age", 29],
  ["name", "Dan"],
  ["name", "Alice"],
  ["name", "alice"],
];

void (async () => {
  const results = await Promise.allSettled(
    paramsForFinding.map((currentParams) => findAsync(people, ...currentParams))
  );

  for (let i = 0; i < results.length; i++) {
    let result = results[i];
    const [searchedParam, searchedValue] = paramsForFinding[i];

    console.log(`=======|Пошук людей, де ${searchedParam} = ${searchedValue}|=======`);

    if (result.status === "fulfilled") {
      const foundPeople = result.value;

      for (const person of foundPeople) {
        console.log("Стать -", person.getInfo("gender"));
        console.log(person.greeting());
      }
    } else {
      console.error(result.reason);
    }
  }
})();
