import NavBar from "../components/NavBar";
import Head from "next/head";
import Image from "next/image";

import Anh from "../asset/Anh.jpeg";
import Sherry from "../asset/Sherry.jpeg";
import Trinh from "../asset/Trinh.jpeg";
import Kayode from "../asset/Kayode.jpeg";

export default function AboutUs() {
  return (
    <div className="flex flex-col h-screen w-screen bg-white [font-weight:var(--normal)] overflow-scroll scrollbar-hide pb-8">
      <Head>
        <title>Meet the team</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />

      <div
        id="about-us-main"
        className="w-full h-full grid grid-rows-2 grid-cols-2 items-center gap-12 self-center text-lg p-8"
      >
        <div
          id="Anh"
          className="flex gap-8 h-full w-full items-center justify-center"
        >
          <div>
            <Image
              src={Anh}
              alt="Picture of Anh"
              width="300px"
              height="300px"
              responsive
            />
          </div>
          <div className="flex flex-col text-sm w-1/2">
            <span className="text-3xl">Ngoc-Anh Vu</span>
            <span className="text-xl">Front-End & Back-End</span>
            <span> - Designed and built Next.js website </span>
            <span>
              - Implemented Flask API endpoints and integrated back-end ML code
            </span>
            <br />
            <span>
              {" "}
              Ngoc-Anh (Anh) is currently pursuing computer science, music, and
              statistics as a sophomore at Grinnell College, IA. He is
              passionate about front-end and web development, has experience
              with the cloud, and is looking to learn more about back-end
              development. Currently, Ngoc-Anh works part-time at the National
              Center for Supercomputing Applications on a cybersecurity project.
              Outside of class, he plays and listens to classical music, gaming
              with friends, and cooking Vietnamese dishes.{" "}
            </span>
          </div>
        </div>

        <div
          id="Sherry"
          className="flex gap-8 h-full w-full items-center justify-center"
        >
          <div>
            <Image
              src={Sherry}
              alt="Picture of Sherry"
              width="300px"
              height="300px"
              responsive
            />
          </div>

          <div className="flex flex-col text-sm w-1/2">
            <span className="text-3xl">Sherry Rui</span>
            <span className="text-xl">ML & Back-End</span>
            <span>- Researched and conceptualized project idea</span>
            <span>
              - Implemented ML models with Google Collab and data APIs
            </span>
            <br />
            <span>
              As a sophomore at Emory University, Sherry is pursuing a CS and
              data science double major. She is passionate about financial
              literacy and found the Robinhood Hackathon to be a rewarding
              learning experience. Currently, Sherry is a programmer for Emory’s
              HITI lab, exploring ML modeling and computer vision. During her
              free time, she enjoys playing music and trying different foods
              with friends.
            </span>
          </div>
        </div>

        <div
          id="Trinh"
          className="flex gap-8 h-full w-full items-center justify-center"
        >
          <Image
            src={Trinh}
            alt="Picture of Trinh"
            width="300px"
            height="300px"
            responsive
          />
          <div className="flex flex-col text-sm w-1/2">
            <span className="text-3xl">Trinh Nguyen</span>
            <span className="text-xl">Web-Scraping</span>
            <span>
              Conducted web-scraping to obtain existing ratings for a point of
              comparison
            </span>
            <br />
            <span>
              Trinh is orginally from Vietnam and currently studying at Minerva
              University. She has great interests in machine learning and web
              development.
            </span>
          </div>
        </div>

        <div
          id="Kayode"
          className="flex gap-8 h-full w-full items-center justify-center"
        >
          <Image
            src={Kayode}
            alt="Picture of Kayode"
            width="300px"
            height="300px"
            responsive
          />
          <div className="flex flex-col text-sm w-1/2">
            <span className="text-3xl">Oluwakayode Oke</span>
            <span className="text-xl">Data Analysis</span>
            <span>
              Performed data analysis of web-scrapped yahoo finance data to
              benchmark ESG scores
            </span>
            <br />
            <span>
              Kayode majors in mathematics and computer science at the
              University of Edinburgh, with interests in Systems and AI/ML. His
              hobbies are powerlifting, cooking, and hiking.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
