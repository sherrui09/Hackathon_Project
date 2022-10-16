import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Returns a well-formatted array of objects for graphing
const parseGraphData = (data) => {
  // Input array length 1
  if (data.length == 1) {
    const thisObj = data[0];
    return [
      {
        criteria: "Social",
        mark_1: thisObj.soc > 20 ? 20 : thisObj.soc,
        fullMark: 10,
      },
      {
        criteria: "Governance",
        mark_1: thisObj.gov > 20 ? 20 : thisObj.gov,
        fullMark: 10,
      },
      {
        criteria: "Environment",
        mark_1: thisObj.env > 20 ? 20 : thisObj.env,
        fullMark: 10,
      },
    ];
    // Input array length 2
  } else if (data.length == 2) {
    const [obj1, obj2] = data;
    return [
      {
        criteria: "Social",
        mark_1: obj1.soc > 20 ? 20 : obj1.soc,
        mark_2: obj2.soc > 20 ? 20 : obj2.soc,
        fullMark: 10,
      },
      {
        criteria: "Governance",
        mark_1: obj1.gov > 20 ? 20 : obj1.gov,
        mark_2: obj2.gov > 20 ? 20 : obj2.gov,
        fullMark: 10,
      },
      {
        criteria: "Environment",
        mark_1: obj1.env > 20 ? 20 : obj1.env,
        mark_2: obj2.env > 20 ? 20 : obj2.env,
        fullMark: 10,
      },
    ];
    // Invalid input
  } else {
    return [];
  }
};

// 90 730 250
export default function Chart({ data }) {
  if (!data) return null;

  const colors = ["#8884d8", "#82ca9d"];
  const parsedData = parseGraphData(data);

  return parsedData.length != 0 ? (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius={135} width={1095} height={400} data={parsedData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="criteria" />
        <PolarRadiusAxis angle={30} domain={[-10, 20]} />
        {data.map((e, i) => {
          return (
            <Radar
              key={`radar-${i}`}
              name={e.companyName}
              dataKey={`mark_${i + 1}`}
              stroke={colors[i]}
              fill={colors[i]}
              fillOpacity={0.7}
            ></Radar>
          );
        })}
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  ) : null;
}
