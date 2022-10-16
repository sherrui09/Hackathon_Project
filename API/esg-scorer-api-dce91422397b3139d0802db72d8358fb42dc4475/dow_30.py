import pandas as pd
import intrinio_sdk
import nltk
import openpyxl

from nltk.sentiment.vader import SentimentIntensityAnalyzer

from intrinio_sdk.rest import ApiException

def getDictionaryFromXLSFile(XLSFile, ratings):
    wordlist = {}
    for i in range(1,8):
        frame = XLSFile.parse(XLSFile.sheet_names[i], header=None)
        frame.columns = ['word']
        frame['score'] = ratings[i - 1]
        dict =frame.set_index('word').to_dict()
        wordlist = {**wordlist, **dict}
    return wordlist

def updateLexicon(sia):
    #import CSV
    file_path = './resources/LoughranMcDonald_SentimentWordLists_2018.xlsx'
    file = pd.ExcelFile(file_path)

    wordlist = getDictionaryFromXLSFile(file, [-1,1,-1,-1,1,-1,-1])

    sia.lexicon.update(wordlist)

def inPassage(passage, list): 
    for word in list:
        if word in passage:
            return True 
    return False

def createColumn(df, columnName, list):
    df[columnName] = df['summary'].apply(inPassage, args=(list,))


def getSentimentScore(passage):
    try:
        score = sia.polarity_scores(str(passage))['compound']
    except TypeError:
        score = 0
    return score

intrinio_sdk.ApiClient().configuration.api_key['api_key'] = 'OmM0NGJmYTM4YjQ5ZTYwOThmMjFmOTA3MWI1MTBmYjlj'

company_api = intrinio_sdk.CompanyApi()
PAGE_SIZE = 500
next_page = ''

nltk.download('vader_lexicon')
sia = SentimentIntensityAnalyzer()

updateLexicon(sia)

eWords = {'environment', 'climate', 'sustainable', 'sustainability', 'green', 'planet'}
sWords = {'social','community', 'responsibility', 'philanthropy', 'charity'}
gWords = {'governance', 'board', 'administration', 'organization', 'conduct', 'diversity'}

def getESGScore(ticker):
    try:
        api_response = company_api.get_company_news(ticker, page_size=PAGE_SIZE, next_page=next_page)
    except ApiException as e:
        print("Exception when calling CompanyApi->get_company_news: %s\r\n" % e)
    
    df = pd.DataFrame(api_response.news_dict)
    del df['id']
    
    createColumn(df, 'eContent', eWords)
    createColumn(df, 'sContent', sWords)
    createColumn(df, 'gContent', gWords)
    
    df['sentiment'] = df.summary.apply(getSentimentScore)
    
    eScore = df[df['eContent'] == True].sum()['sentiment'] * 1000 / PAGE_SIZE
    sScore = df[df['sContent'] == True].sum()['sentiment'] * 1000 / PAGE_SIZE
    gScore = df[df['gContent'] == True].sum()['sentiment'] * 1000 / PAGE_SIZE
    
    return [eScore, sScore, gScore]

