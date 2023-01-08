function extractNumbers(string: string) {
  const regex = /\d+/g;
  let match;
  let numbers = [];
  while ((match = regex.exec(string))) {
    numbers.push(match[0]);
  }
  return numbers;
}

export const takeIngredients = (data: any) => {
  const array = [];
  for (const property in data) {
    if (property.includes("strIngredient")) {
      var regExp = /[a-zA-Z]/g;
      if (regExp.test(data[property])) {
        let obj = {
          id: Number(extractNumbers(property)[0]),
          strIngredient: data[property],
        };
        array.push(obj);
      }
    }
  }
  return array;
};

export const takeMeasures = (data: any, array: any) => {
  // console.log("takeMeasures");
  for (const property in data) {
    if (property.includes("strMeasure")) {
      var regExp = /[a-zA-Z]/g;
      if (regExp.test(data[property])) {
        array.map((el: any) => {
          if (el.id === Number(extractNumbers(property)[0])) {
            el.strMeasure = data[property];
          }
        });
      }
    }
  }
  return array;
};
