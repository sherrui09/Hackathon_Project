import pandas as pd
import numpy as np
import re
from cleantext import clean

# import matplotlib.pyplot as plt
# from wordcloud import WordCloud 
# from IPython.display import Image
# from flask import Response

# import CSV
ESGwordlist= pd.read_csv('./resources/expanded_dict.csv')

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
#Clean the input text
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
        dic_e=dict(zip(e, counts))
        e_Diversity = len([x for x in counts if x!=0])    
        counts= [text.count(x) for x in s]
        s_Freq=sum(counts) 
        dic_s=dict(zip(s, counts))
        s_Diversity = len([x for x in counts if x!=0])            
        counts= [text.count(x) for x in g]
        g_Freq=sum(counts) 
        dic_g=dict(zip(g, counts))
        g_Diversity = len([x for x in counts if x!=0])    
        esg_Diversity= e_Diversity/len(e) +s_Diversity/len(s) +g_Diversity/len(g)

        mydictionary = {}
        mydictionary.update(dic_e)
        mydictionary.update(dic_s)
        mydictionary.update(dic_g)
        return (esg_Diversity * 1000,(e_Diversity/len(e)) * 1000,(s_Diversity/len(s)) * 1000,(g_Diversity/len(g)) * 1000, mydictionary)
    except Exception as ex:
        print(ex)
        return (0,0,0,0, {})

