import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex bg-black text-white h-20 w-full p-6 pr-24 pl-24 gap-16 items-center justify-center md:justify-start">
      <div id="logo" className="flex text-4xl items-center">
        <Link href="/">
          <a>ESG Scorer</a>
        </Link>
      </div>
      <div className="hidden md:flex items-center hover:[opacity:0.5] pt-2 ">
        <Link href="./documentation">
          <a>Documentation</a>
        </Link>
      </div>
      <div className="hidden md:flex items-center hover:[opacity:0.5] pt-2">
        <Link href="./about-us">
          <a>Meet the team</a>
        </Link>
      </div>
      <div className="hidden md:flex items-center hover:[opacity:0.5] pt-2">
        <Link href="https://www.investopedia.com/terms/e/environmental-social-and-governance-esg-criteria.asp">
          <a>What is ESG?</a>
        </Link>
      </div>
    </div>
  );
}
