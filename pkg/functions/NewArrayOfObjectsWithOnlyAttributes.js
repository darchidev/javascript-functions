export default function NewArrayOfObjectsWithOnlyAttributes(
  arrayOfObjects,
  arrayOfAttributes
) {
  var newArray = [];
  arrayOfObjects.map((x) => {
    let newObject = {};
    var arr = Object.keys(x);
    for (var y = 0; y < arrayOfAttributes.length; y++) {
      if (arr.includes(arrayOfAttributes[y]) == false) {
        newObject = { ...newObject };
      } else {
        newObject = {
          ...newObject,
          [arrayOfAttributes[y]]: x[arrayOfAttributes[y]],
        };
      }
    }
    newArray.push(newObject);
  });
  return newArray;
}
