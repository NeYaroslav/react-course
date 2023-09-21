const delay = 1000; // 100ms

const findAsync = (list, searchField, searchValue) =>
  new Promise((res, rej) =>
    setTimeout(() => {
      const foundListItems = list.filter((listItem) => listItem[searchField] && listItem[searchField] === searchValue);

      if (foundListItems.length) {
        res(foundListItems);
      } else {
        rej(`No items found with ${searchField}: ${searchValue}`);
      }
    }, delay)
  );

export default findAsync;
