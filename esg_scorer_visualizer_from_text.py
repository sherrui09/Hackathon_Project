

pip install clean-text

import pandas as pd
import numpy as np
import re
from cleantext import clean

ESGwordlist= pd.read_csv('expanded_dict.csv')
e = [x.replace('_',' ') for x in list(ESGwordlist['E'].dropna())]
s = [x.replace('_',' ') for x in list(ESGwordlist['S'].dropna())]
g = [x.replace('_',' ') for x in list(ESGwordlist['G'].dropna())]

def get_ngrams(s, n):
    s = s.lower() 
    s = re.sub(r'[^a-zA-Z0-9\s]', ' ', s)

    tokens = [token for token in s.split(" ") if token != ""]
    
    ngrams = zip(*[tokens[i:] for i in range(n)])
    return [" ".join(ngram) for ngram in ngrams]


def cleaner(txt):    
    '''
    Clean the input text
    '''
    return clean(
        txt, fix_unicode=True, to_ascii=True, lower=True, no_line_breaks=True, no_urls=True, no_emails=True, no_phone_numbers=True, no_numbers=True, no_digits=True, no_currency_symbols=True,     
        no_punct=True, replace_with_punct="", replace_with_url="", replace_with_email="", replace_with_phone_number="", replace_with_number="", replace_with_digit="", replace_with_currency_symbol="", lang="en"                   
        )


def ESG_Calculator(text):

    try:      
        text=re.sub('[\\n]','',text)
        text=get_ngrams(text,1)+get_ngrams(text,2)+get_ngrams(text,3)+get_ngrams(text,4)
        counts=[]
        counts= [text.count(x) for x in e]
        e_Freq=sum(counts) 
        e_Diversity = len([x for x in counts if x!=0])    
        counts= [text.count(x) for x in s]
        s_Freq=sum(counts) 
        s_Diversity = len([x for x in counts if x!=0])            
        counts= [text.count(x) for x in g]
        g_Freq=sum(counts) 
        g_Diversity = len([x for x in counts if x!=0])    
        esg_Diversity= e_Diversity/len(e) +s_Diversity/len(s) +g_Diversity/len(g)
        return (esg_Diversity,(e_Diversity/len(e)),(s_Diversity/len(s)),(g_Diversity/len(g)))
    except Exception as ex:
        print(ex)
        return (0,0,0,0)

text = '''
We engaged with the CEO, who is also heir to the founding family, to better understand the company’s
environmental impact as plastic represents a large proportion of Bic’s input cost. Consumer awareness
regarding the impact of plastics on the environment has resulted in a material change in the attitude
towards disposable plastics. This has, in turn, resulted in action from policy makers, causing manufacturers
to re-examine the life-cycle of their products. Having a credible sustainability policy for Bic to reduce its
environmental impact is thus crucial for the long-term success of the business. The engagement improved our
understanding of Bic’s focus on product longevity and partnership with R&D centers on innovative materials,
which we view as a strength. We also noted the company’s long track record in managing down power
consumption and the PVC content of plastic. We will continue to monitor the company’s progress towards the
use of renewable materials and the improvement of collection infrastructure.
4
Participation in Collaborative Initiatives
Lazard is a signatory to, and a member of, several organizations that promote responsible investing. We have
been a signatory to the United Nations—supported Principles for Responsible Investment (PRI) since 2014.
We are signatories to the UK Stewardship Code, the Japan Stewardship Code, and the UK Women in Finance
Charter. We are also members of the International Corporate Governance Network (ICGN), Pensions and
Lifetime Savings Association (PLSA), and International Accounting Standards Board (IASB) Investors in
Financial Reporting programme. In addition, one of our investment professionals serves on the PRI Fixed
Income Advisory Committee.
Lazard Asset Management London became a signatory to the UK Women in Finance Charter in June
2018, an initiative led by HM Treasury which seeks to promote gender balance across the financial services
industry. Becoming a signatory demonstrates our commitment to supporting diversity and inclusion, and the
advancement of women in the industry.
We also regularly attend and speak at industry events. In 2018, Lazard investment professionals from around
the world participated in several ESG-focused conferences and investor initiatives.
'''

ESG = ESG_Calculator(text)

print('''
        ESG Score: {0}  
        Environmental Score: {1}  
        Social Score: {2} 
        Governance Score {3} 
        '''.format(np.round(ESG[0], 3),np.round(ESG[1], 3),np.round(ESG[2], 3),np.round(ESG[3], 3)))

# imports
import matplotlib.pyplot as plt
from wordcloud import WordCloud # install via: pip install wordcloud
from IPython.display import Image
ESGwordlist= pd.read_csv('expanded_dict.csv')
e = [x.replace('_',' ') for x in list(ESGwordlist['E'].dropna())]
s = [x.replace('_',' ') for x in list(ESGwordlist['S'].dropna())]
g = [x.replace('_',' ') for x in list(ESGwordlist['G'].dropna())]


def ESG_WordCloud(text):
    try:      
        text=re.sub('[\\n]','',text)
        text=get_ngrams(text,1)+get_ngrams(text,2)+get_ngrams(text,3)+get_ngrams(text,4)
        counts=[]
        counts= [text.count(x) for x in e]
        dic_e=dict(zip(e, counts))
        counts= [text.count(x) for x in s]
        dic_s=dict(zip(s, counts))
        counts= [text.count(x) for x in g]
        dic_g=dict(zip(g, counts))
    except Exception as ex:
        print(ex)
        dic_e={' ':1}
        dic_s={' ':1}
        dic_g={' ':1}
    mydictionary = {}
    mydictionary.update(dic_e)
    mydictionary.update(dic_s)
    mydictionary.update(dic_g)
    
    wordcloud = WordCloud(width = 1000, height = 500, background_color='white').generate_from_frequencies(mydictionary)
    plt.figure(figsize=(15,8))
    plt.axis("off")
    plt.imshow(wordcloud)
    plt.show()

ESG_WordCloud(text)
