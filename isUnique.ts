const isUnique = (str: string): boolean => {
  let value;
  let arr: boolean[] = [];
  for(let i = 0; i < str.length; i++){
    value = str.charCodeAt(i);
    if (arr[value]) {
      return false;
    }
    arr[value] = true
  }
  console.log(arr.toString());
  return true;
}

console.log( isUnique("a1bcz"));

export default isUnique;