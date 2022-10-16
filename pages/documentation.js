import NavBar from "../components/NavBar";
import Head from "next/head";

export default function Documentation() {
  return (
    <div className="flex flex-col w-screen bg-white [font-weight:var(--normal)] overflow-scroll scrollbar-hide pb-8">
      <Head>
        <title>How to use</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div
        id="documentation-main"
        className="flex flex-col h-full w-1/2 items-center pt-12 gap-12 self-center text-lg"
      >
        <div id="how-to" className="flex flex-col w-full gap-4">
          <span className="[font-weight:var(--extra-bold)] text-4xl">
            Using ESG Scorer
          </span>{" "}
          <div className="flex flex-col w-full gap-2">
            <span>
              The ESG Scorer consists of{" "}
              <span className="[font-weight:var(--extra-bold)]">two </span>{" "}
              functionalities:
            </span>
            <div className="flex flex-col gap-4">
              <span id="model-1">
                1.{" "}
                <span className="[font-weight:var(--extra-bold)]">
                  Calculate a DOW 30 company's ESG score
                </span>{" "}
                and{" "}
                <span className="[font-weight:var(--extra-bold)]">
                  visualize their strengths and weaknesses
                </span>{" "}
                by applying a natural language processing model on 500 related
                news articles:
                <br />
                <span className="text-sm">
                  - Choose a DOW 30 company to ESG-examine.
                  <br />
                  - Optionally, choose another DOW 30 company to compare and
                  contrast with the first.
                  <br />- Click the "Get ESG Data" button. The scores and a
                  radar chart should be available for view within a few seconds!
                </span>
              </span>
              <span id="model-2">
                2.{" "}
                <span className="[font-weight:var(--extra-bold)]">
                  Calculate the ESG score of a text snippet
                </span>{" "}
                and{" "}
                <span className="[font-weight:var(--extra-bold)]">
                  visualize the frequency of ESG-related keywords
                </span>{" "}
                based on sentiment analysis:
                <br />
                <span className="text-sm">
                  - Enter a text snippet (preferably ESG-related) into the text
                  box.
                  <br />- Click the "Analyze ESG" button. The scores and a word
                  cloud should be available for view within a few seconds!
                </span>
              </span>
            </div>
          </div>
        </div>

        <div id="how-it-was-built" className="flex flex-col w-full gap-4">
          <span className="[font-weight:var(--extra-bold)] text-4xl">
            How We Built ESG Scorer
          </span>{" "}
          {/* <div className="flex flex-col w-full gap-2"></div> */}
          <span>
            For the front end, we used React, Next.js with JavaScript as the
            main programming language/framework, with a few other libraries for
            data visualization. For the back end, we initally used Google Collab
            along with a variety of Python libraries for data-cleaning and
            running our core machine learning (ML) models. Also, we migrated the
            Python code to Flask and created API endpoints which the front end
            can send data to the ML models. Lastly, we hosted the front end on
            Vercel and the back end on Heroku. Any other technologies used will
            be listed in the section below. Since our two ML models are the core
            of the application, we also want to clarify on their nature for
            those interested:
            <div className="flex pt-2 text-sm gap-2">
              <span>
                {" "}
                - Model 1: Calculation of ESG score given a DOW 30 company's
                ticker by applying an NLP model on 500 related news articles:
                Intrinio API was used which allows the score to be updated to
                date as the articles are obtained in real time. The VADER
                sentiment tool was implemented in conjunction with Loughran
                McDonald's sentiment word list to make the calculations
              </span>
              <span>
                - Model 2: Analysis of any ESG related text input which returns
                ESG scoring and word visualization: NLP processing was utilized
                to clean the text, and the scores are calculated for each
                individual category based on a corporate finance dictionary.
                Individual words are also analyzed and used to produce a cloud
                text illustration.
              </span>
            </div>
          </span>
        </div>

        <div id="how-it-was-built" className="flex flex-col w-full gap-4">
          <span className="[font-weight:var(--extra-bold)] text-4xl">
            Our Tech Stack
          </span>
          <span>
            Front End: JavaScript, React, Next.js, Tailwind CSS, Recharts.js,
            react-tag-cloud
          </span>
          <span>
            {" "}
            Back End: Python, Pandas, Numpy, Intrinio_sdk, NLTK, Matplotlib,
            Wordcloud, IPython
          </span>
        </div>

        <div id="future-directions" className="flex flex-col w-full gap-4">
          <span className="[font-weight:var(--extra-bold)] text-4xl">
            Future Directions
          </span>
          <span className="">
            Firstly, the scope of this project can be expanded to obtain
            relevant data and information about more companies, which can be
            implemented through a web scraping model and performing text
            extraction on the articles. Recommendations of related ESG articles
            can also be added to provide users with easily accessible
            information and encourage exploration, and this can be done with
            machine learning concepts including TF-IDF and cosine similarity.
            Finally, it is also worth considering the quantifiable effect of ESG
            investing. For this, supervised training can be used to analyze and
            predict the relationship between a company’s ESG score and their
            financial performance. Last but not least, in terms of user
            interface and user experience, a lot of quality-of-life changes can
            be made from small details like auto-scrolling when graphs are
            generated and making visualizations more responsive, to larger
            aspects of the web application like implementing responsiveness for
            mobile devices and optimizing package size of the app to reduce
            deploy and load time.
          </span>
        </div>
      </div>
    </div>
  );
}
