export default function roundFloatDict(dict) {
  const retDict = {};
  for (const key of Object.keys(dict)) {
    const val = dict[key];
    if (typeof val == "string") {
      retDict[key] = val;
    } else {
      retDict[key] = val.toFixed(3);
    }
  }

  return retDict;
}
