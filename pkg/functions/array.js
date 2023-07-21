export default function NewArrayOfObjectsWithOnlyAttributes(
  arrayOfObjects,
  arrayOfAttributes
) {
  var newArray = [];

  arrayOfObjects.map((x) => {
    var newObject = {};
    for (var y = 0; y < arrayOfAttributes.length; y++) {
      if (arrayOfAttributes[y] != x[arrayOfAttributes[y]]) {
        if (newObject.keys().length > 0) {
          newObject = { ...newObject };
        } else {
          newObject = { newObject };
        }
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
