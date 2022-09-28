export default function ModeToggler({ modeState, setModeState }) {
  return (
    <div className="grid grid-cols-2 items-center border-black border-2">
      <button
        id="mode-1"
        className={`flex w-full h-full p-4 text-black bg-white hover:[opacity:0.8] transition-all justify-center items-center ${
          modeState ? "active-mode" : ""
        }`}
        onClick={() => setModeState(true)}
      >
        Examine companies' ESG scores based on historical data?
      </button>
      <button
        id="mode-2"
        className={`flex w-full h-full p-4 text-black hover:[opacity:0.8] transition-all justify-center items-center ${
          modeState ? "" : "active-mode"
        }`}
        onClick={() => setModeState(false)}
      >
        Find the ESG score of a text based on sentiment analysis?
      </button>
    </div>
  );
}
