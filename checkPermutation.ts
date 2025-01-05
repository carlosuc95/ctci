//Same length strings parameters
const checkPermutation = (str1: string, str2: string) =>{
  const str1TrimmedAndSorted = str1.trim().split("").sort().join("")
  const str2TrimmedAndSorted = str2.trim().split("").sort().join("")

  if(str1TrimmedAndSorted.length !== str2TrimmedAndSorted.length) return false;
  return str1TrimmedAndSorted === str2TrimmedAndSorted;
}

const checkPermutationOptimal = (str1: string, str2: string) => {
  const arr: number[] = []
  for(let i = 0; i < str1.length; i++){
    const unicode = str1.charCodeAt(i); 
    arr[unicode] = (arr[unicode] || 0) + 1
  }

  for (let i = 0; i < str2.length; i++) {
    const unicode = str2.charCodeAt(i); 
    arr[unicode] =(arr[unicode] || 0) - 1;
    if (arr[unicode] < 0) {
      return false
    }
  }
  return true;
}
console.log(checkPermutationOptimal("goa", "dog"));
export default checkPermutation;