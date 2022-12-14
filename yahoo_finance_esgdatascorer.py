# -*- coding: utf-8 -*-
"""kayode_esgdatascorer.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1JFPr1vBt4Aon0xcrFH5tmPzoO2Lb7Fnx
"""

# installation of libratries
import pandas as pd
import yfinance as yf
import time
from random import randint

path = ''
df = pd.read_csv(path)
tickers = df['Symbol'].tolist() 
print(tickers)

# e.g new object for HSBC stock
hsbc = yf.Ticker("HSBA.L")
#retrieving ESG data from yahoo in df format 
hsbc_df = hsbc.sustainability.T

esg_data = pd.DataFrame() #empty df for attaching all ticker's data response

for index in tickers:
     ticker_name = yf.Ticker(index)
     try:
          if ticker_name.sustainability is not None: 
               ticker_df = ticker_name.sustainability.T 
               ticker_df['symbol'] = index 
               esg_data = esg_data.append(ticker_df) 
               time.sleep(randint(2,8)) 
     except (IndexError, ValueError) as e:
          print(f'{index} did not run')
          pass

esg_data.head(5)

# only Scottish Mortgage Investment Trust plc didn't run
#removing duplicates in the list and calculating diff between original tickers and esg tickers
esg_tickers = esg_data['symbol']
no_esg_data = list(set(tickers) - set(esg_tickers))
#25 don't provide esg data the remainin
print(len(no_esg_data))

#each individual company total esg
final_esg_df = esg_data[['symbol','environmentScore', 'socialScore', 'governanceScore','totalEsg']]
final_esg_df.head(10)

# For companies where ESG scores aren't available, industry averages will be assigned 
# If in a specific sector all companies dont have an ESG, we will take avg ESG scores of whole index and assign
final_df = pd.DataFrame() #creating empty df to store data

for index in tickers:
     ticker_name = yf.Ticker(index)
     try:
          ticker_info = ticker_name.info
          ticker_df = pd.DataFrame.from_dict(ticker_info.items()).T
          ticker_df.columns = ticker_df.iloc[0]
          ticker_df = ticker_df.drop(ticker_df.index[0])
          final_df = final_df.append(ticker_df)
          time.sleep(randint(2,8))
     except (IndexError, ValueError) as e:
          print(f'{index} + Data Not Found')

filtered_df =final_df[['symbol', 'sector', 'previousClose', 'sharesOutstanding']]
filtered_df.head(5)

filtered_df['newMarketCap'] = filtered_df['previousClose'] * filtered_df['sharesOutstanding']
total_index_mcap = filtered_df['newMarketCap'].sum()
filtered_df['marketWeight'] = ((filtered_df['newMarketCap']/total_index_mcap)*100) 
filtered_df.head(5)

main_df = filtered_df.merge(final_esg_df, how='left', on='symbol')

main_df[~main_df['totalEsg'].notnull()]

final_esg = pd.DataFrame() 
sector_list = main_df['sector'].unique().tolist()
for sector in sector_list:
    sector_df = main_df[main_df['sector'] == sector]
    sector_df['socialScore'].fillna(round(sector_df['socialScore'].mean(),2), inplace=True)
    sector_df['governanceScore'].fillna(round(sector_df['governanceScore'].mean(),2), inplace=True)
    sector_df['totalEsg'].fillna(round(sector_df['totalEsg'].mean(),2), inplace=True)
    sector_df['environmentScore'].fillna(round(sector_df['environmentScore'].mean(),2), inplace=True)

    final_esg = final_esg.append(sector_df)

final_esg.head(5)

#adding weighted average column 
final_esg['mktweightedEsg'] = (final_esg['marketWeight'] * final_esg['totalEsg'])/100
final_esg['mktweightedEnvScore'] = (final_esg['marketWeight'] * final_esg['environmentScore'])/100
final_esg['mktweightedSocScore'] = (final_esg['marketWeight'] * final_esg['socialScore'])/100
final_esg['mktweightedGovScore'] = (final_esg['marketWeight'] * final_esg['governanceScore'])/100

final_esg.head(5)

#overall ftse 100 index score
print('Total Environment Score: {}'.format(round(final_esg['mktweightedEnvScore'].sum(),2)))
print('Total Social Score: {}'.format(round(final_esg['mktweightedSocScore'].sum(),2)))
print('Total Governance Score: {}'.format(round(final_esg['mktweightedGovScore'].sum(),2)))
print('Total ESG Score: {}'.format(round(final_esg['mktweightedEsg'].sum(),2)))

final_esg_df = esg_data[['symbol','environmentScore', 'socialScore', 'governanceScore','totalEsg']]
print(final_esg_df.head(20))