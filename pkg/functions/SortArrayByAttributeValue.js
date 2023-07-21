export default function SortArrayByAttributeValue(
  arrayOfObjects,
  valueOfSortingBy
) {
  var arraySorted = arrayOfObjects.sort(
    (a, b) => a[valueOfSortingBy] - b[valueOfSortingBy]
  );
  return arraySorted;
}
