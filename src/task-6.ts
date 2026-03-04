function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numberValue = getFirstElement<number>([1, 2, 3]); // 1
const stringValue = getFirstElement<string>(['a', 'b', 'c']); // "a"
const booleanValue = getFirstElement<boolean>([true, false, true]); // true
console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);