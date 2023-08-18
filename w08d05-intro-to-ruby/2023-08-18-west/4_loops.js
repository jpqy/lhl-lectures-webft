let myArray = [1, 2, 3];

myArray.forEach((number) => {
  console.log(number);
});

const callback = (number) => {
  console.log(number);
};

myArray.forEach(callback)
