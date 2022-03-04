// 1. Please write a function that shows the usage of closures

const wrapFunction = (initNumber) => {
  const transformedInitNumber = 10 * initNumber;
  /*     console.log(transformedInitNumber) */

  const incrementTransformedInitNum = () => {
    /* console.log(transformedInitNumber + 1) */
    return transformedInitNumber + 1;
  };
  return incrementTransformedInitNum;
};
const incrementTransformedInitNum = wrapFunction(10);
incrementTransformedInitNum(); //101

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const sumNumbersInArray = (arrayOfNumbers) =>
  arrayOfNumbers.reduce((prevValue, curValue) => {
    return prevValue + curValue;
  }, 0);

// console.log(sumNumbersInArray([9, 1, 22, 0, 2]));

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flattenArrayOfArrays = (initArray) =>
  initArray.reduce(
    (acc, val) =>
      Array.isArray(val)
        ? acc.concat(flattenArrayOfArrays(val))
        : acc.concat(val),
    []
  );

// console.log(
//   flattenArrayOfArrays([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5])
// );

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const findCommonElementsOfTwoArrays = (array1, array2) =>
  array1.filter((el) => array2.includes(el));

// console.log(
//   findCommonElementsOfTwoArrays(
//     ["b", 3, 4, 76, "c"],
//     ["a", "b", 4, 76, 21, "e"]
//   )
// );

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const findDifferentElementsOfTwoArrays = (array1, array2) =>
  array1
    .filter((x) => !array2.includes(x))
    .concat(array2.filter((x) => !array1.includes(x)));

// console.log(
//   findDifferentElementsOfTwoArrays(
//     ["b", 3, 4, 76, "c"],
//     ["a", "b", 4, 76, 21, "e"]
//   )
// );

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const createArrayOfTwoElementsTuplesFromTwoArrays = (array1, array2) => {
  const [shorterArray, longerArray] =
    array1.length > array2.length ? [array2, array1] : [array1, array2];
  return shorterArray.map((el, index) => {
    return [el, longerArray[index]];
  });
};

// console.log(
//   createArrayOfTwoElementsTuplesFromTwoArrays([1, 2, 3], [4, 5, 6, 7])
// );

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const getPathValue = (path, object) => {
  //no need to copy object, because function not changing anything in inital object
  let newObject = object;
  for (const el of path) {
    newObject = newObject[el];
    if (!newObject) {
      break;
    }
  }
  return newObject;
};

// console.log(
//   getPathValue(["a", "b", "c", "d"], { a: { b: { c: { d: "23" } } } })
// );

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

// normally I would use isEqual from lodash here
const isEqual = function (obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      if (typeof obj1[objKey] == "object" && typeof obj2[objKey] == "object") {
        if (!this.isEqual(obj1[objKey], obj2[objKey])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return true;
};

// console.log(isEqual({ a: "b", c: "d" }, { c: "d", a: "b" }));
// console.log(isEqual({ a: "c", c: "a" }, { c: "d", a: "b", q: "s" }));

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const dropSpecifiedKeysFromObject = (keysToDrop, initialObject) => {
  // normally I would use lodash - cloneDeep to create deepcopy of initialObject
  // , but for primitive values(like in example's input - "Blue","22", "xl") function will work correctly
  const keysToRemain = Object.keys(initialObject).filter(
    (key) => !keysToDrop.includes(key)
  );
  const newObject = {};
  for (const key of keysToRemain) {
    newObject[key] = initialObject[key];
  }
  return newObject;
};

// console.log(
//   dropSpecifiedKeysFromObject(["color", "size"], {
//     color: "Blue",
//     id: "22",
//     size: "xl",
//   })
// );
