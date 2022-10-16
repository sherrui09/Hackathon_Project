import WordCloud from "./WordCloud";

export default function DemoTextResult() {
  const demoData = [
    { value: "renewable", count: 28 },
    { value: "sustanability", count: 38 },
    { value: "policy", count: 18 },
    { value: "advisory", count: 33 },
    { value: "climate", count: 20 },
    { value: "natural environment", count: 5 },
    { value: "corporate governance", count: 25 },
    { value: "energy cost", count: 8 },
    { value: "fume", count: 12 },
    { value: "regulation", count: 15 },
    { value: "venture capital", count: 4 },
    { value: "methane", count: 7 },
    { value: "pollutant", count: 20 },
    { value: "waste energy", count: 12 },
    { value: "healthcare", count: 6 },
    { value: "welfare", count: 11 },
    { value: "wealth creation", count: 14 },
    { value: "wellbeing", count: 10 },
    { value: "paradigm shift", count: 1 },
    { value: "fundraising", count: 9 },
    { value: "ecology", count: 10 },
    { value: "legal advisor", count: 2 },
    { value: "trust fund", count: 3 },
    { value: "regulatory clarity", count: 5 },
    { value: "consultancy", count: 2 },
    { value: "awareness", count: 20 },
    { value: "hospitality", count: 5 },
    { value: "imbalance", count: 4 },
  ];

  return (
    <div id="result-wrapper" className="flex flex-col w-full gap-8">
      <div id="results" className="flex flex-col gap-2">
        <span className="[font-weight:var(--extra-bold)] text-4xl">Scores</span>
        <div className="w-full grid grid-rows-2 rounded-sm border-black border-2 p-1">
          <div
            id="score-category"
            className="grid row-span-1 grid-cols-3 [font-weight:var(--extra-bold)] p-1"
          >
            <div className="flex items-center justify-center">
              Environmental
            </div>
            <div className="flex items-center justify-center">Social</div>
            <div className="flex items-center justify-center">Governance</div>
          </div>
          <div id="score" className="grid row-span-2 grid-cols-3">
            <div className="flex items-center justify-center">9</div>
            <div className="flex items-center justify-center">7</div>
            <div className="flex items-center justify-center">8 </div>
          </div>
        </div>
      </div>

      <div id="visualization-wrapper" className="w-full">
        <span className="[font-weight:var(--extra-bold)] text-4xl">
          ESG WordCloud
        </span>
        <div
          id="wordcloud-wrapper"
          className="flex items-center justify-center"
        ></div>
        <WordCloud data={demoData} demo={true} />
      </div>
    </div>
  );
}
