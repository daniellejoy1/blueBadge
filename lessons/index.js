//.map()
//allows you to iterate over an array, modify it and return a new array without changing the exisiting array
const arr = [
    { firstName: "Dodge", lastName: "Challenger" },
    { firstName: "Ford", lastName: "Mustang" },
    { firstName: "Chevy", lastName: "Camaro" },
    { firstName: "Ford", lastName: "Interceptor" },
  ];
  const emptyArr = [];
  const fullNameArr = arr.map(
    (person) => `${person.firstName} ${person.lastName}`
  );
  //.forEach()
  //Does not return an array
  //Similar to map in which it iterates through an array and allows you to modify/change;
  arr.forEach((item) => {
    emptyArr.push(`${item.firstName} ${item.lastName}`);
  });
  //.filter()
  //allow you to iterate over an array, filter out what you want and keep existing array intact.
  const fordArr = arr.filter((car) => car.firstName === "Ford");
  //.reduce()
  //allows to iterate over an array and reduce it to one value;
  const numArr = [1, 2, 3, 5, 8, 13, 21];
  const strArr = ["My", "name", "is", "drew!"];
  const combined = strArr.reduce((acc, curr, index) => {
    if (index === 0) {
      return `${curr}`;
    } else {
      return `${acc} ${curr}`;
    }
  }, "");
  console.log(emptyArr);