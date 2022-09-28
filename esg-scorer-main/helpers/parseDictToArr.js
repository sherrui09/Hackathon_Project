export default function parseDictToArr(dict) {
  const retArr = [];
  for (const [key, value] of Object.entries(dict)) {
    if (value == 0) continue;
    const thisDict = { value: key, count: value };
    retArr.push(thisDict);
  }

  return retArr;
}
