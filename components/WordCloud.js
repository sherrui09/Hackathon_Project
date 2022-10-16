import { TagCloud } from "react-tagcloud";
import parseDictToArr from "../helpers/parseDictToArr.js";

export default function WordCloud({ data, demo = false }) {
  let parsedData;
  if (demo) {
    parsedData = data;
  } else {
    parsedData = parseDictToArr(data);
  }

  console.log(parsedData);

  return (
    <TagCloud minSize={20} maxSize={40} tags={parsedData} shuffle={false} />
  );
}
