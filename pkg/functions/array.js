export default function NewArrayOfObjectsWithOnlyAttributes(
  arrayOfObjects,
  arrayOfAttributes
) {
  var newArray = [];

  arrayOfObjects.map((x) => {
    var newObject = {};
    for (var y = 0; y < arrayOfAttributes.length; y++) {
      newObject = {
        ...newObject,
        [arrayOfAttributes[y]]: x[arrayOfAttributes[y]],
      };
    }
    newArray.push(newObject);
  });
  return newArray;
}
