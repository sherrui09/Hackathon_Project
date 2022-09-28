# Hack_ML
Robinhood 2022 Hackathon
https://esg-scorer.vercel.app/


Using ESG Scorer
The ESG Scorer consists of two functionalities:
1. Calculate a DOW 30 company's ESG score and visualize their strengths and weaknesses by applying a natural language processing model on 500 related news articles:
- Choose a DOW 30 company to ESG-examine.
- Optionally, choose another DOW 30 company to compare and contrast with the first.
- Click the "Get ESG Data" button. The scores and a radar chart should be available for view within a few seconds!
2. Calculate the ESG score of a text snippet and visualize the frequency of ESG-related keywords based on sentiment analysis:
- Enter a text snippet (preferably ESG-related) into the text box.
- Click the "Analyze ESG" button. The scores and a word cloud should be available for view within a few seconds!
How We Built ESG Scorer
For the front end, we used React, Next.js with JavaScript as the main programming language/framework, with a few other libraries for data visualization. For the back end, we initally used Google Collab along with a variety of Python libraries for data-cleaning and running our core machine learning (ML) models. Also, we migrated the Python code to Flask and created API endpoints which the front end can send data to the ML models. Lastly, we hosted the front end on Vercel and the back end on Heroku. Any other technologies used will be listed in the section below. Since our two ML models are the core of the application, we also want to clarify on their nature for those interested:
- Model 1: Calculation of ESG score given a DOW 30 company's ticker by applying an NLP model on 500 related news articles: Intrinio API was used which allows the score to be updated to date as the articles are obtained in real time. The VADER sentiment tool was implemented in conjunction with Loughran McDonald's sentiment word list to make the calculations
- Model 2: Analysis of any ESG related text input which returns ESG scoring and word visualization: NLP processing was utilized to clean the text, and the scores are calculated for each individual category based on a corporate finance dictionary. Individual words are also analyzed and used to produce a cloud text illustration.
Tech Stack
Front End(Anh Vu): JavaScript, React, Next.js, Tailwind CSS, Recharts.js, react-tag-cloud
Back End(Sherry Rui): Python, Pandas, Numpy, Intrinio_sdk, NLTK, Matplotlib, Wordcloud, IPython
