export default function NewArrayOfObjectsWithNewValuesOnAttributes(
  arrayOfObjects,
  arrayOfObjectsWithAttributesToAdd
) {
  //da implementare. la forma è [ {key:value}, {key:value}]
  // se non esiste la key la aggiungo con il nuovo valore, altrimenti se esiste sostituisco il valore.
  var newArray = [];
  arrayOfObjects.map((x) => {
    let newObject = {};
    var arr = Object.keys(x);
    console.log(arr);
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
