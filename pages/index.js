import Head from "next/head";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import { useRef, useState, useEffect } from "react";

export default function MyApp() {
  const endRef = useRef(null);

  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    if (!scrollState) return;
    endRef.current?.scrollIntoView({ behavior: "smooth" });
    setScrollState(false);
  }, [scrollState]);

  return (
    <div className="flex flex-col w-screen bg-white [font-weight:var(--normal)] overflow-scroll scrollbar-hide pb-8">
      <Head>
        <title>ESG Scorer</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Main setScrollState={setScrollState} />
      <div ref={endRef} />
    </div>
  );
}
