import Chart from "./Chart";

const demoData = [
  {
    companyName: "Company A",
    soc: 8,
    gov: 9,
    env: 10,
  },
  {
    companyName: "Company B",
    soc: 5,
    gov: 8,
    env: 7,
  },
];

export default function DemoResult() {
  return (
    <div id="result-wrapper" className="flex flex-col w-full gap-8">
      <div id="results" className="flex flex-col gap-2">
        <span className="[font-weight:var(--extra-bold)] text-4xl">Scores</span>
        <div className="w-full grid grid-rows-3 rounded-sm border-black border-2 p-1">
          <div
            id="score-category"
            className="grid row-span-1 grid-cols-4 [font-weight:var(--extra-bold)] p-1"
          >
            <div className="flex items-center justify-center">Company</div>
            <div className="flex items-center justify-center">
              Environmental
            </div>
            <div className="flex items-center justify-center">Social</div>
            <div className="flex items-center justify-center">Governance</div>
          </div>
          {demoData.map((obj, i) => (
            <div
              id="score"
              className="grid row-span-1 grid-cols-4"
              key={`score-row-${i}`}
            >
              <div className="flex items-center justify-center">
                {obj.companyName}
              </div>
              <div className="flex items-center justify-center">{obj.env}</div>
              <div className="flex items-center justify-center">{obj.soc}</div>
              <div className="flex items-center justify-center">{obj.gov}</div>
            </div>
          ))}
        </div>
      </div>
      <div id="visualization-wrapper" className="w-full">
        <span className="[font-weight:var(--extra-bold)] text-4xl">
          Visualization
        </span>
        <Chart data={demoData} />
      </div>
    </div>
  );
}
