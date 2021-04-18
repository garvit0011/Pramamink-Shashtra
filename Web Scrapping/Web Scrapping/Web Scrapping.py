import requests
from bs4 import BeautifulSoup
import pandas as pd  
import numpy as np

#Fetching the url of file
URL = input ("Enter URL :" )
#URL = "https://bafybeicqhuhcn6gzxkw4rqsrftxab4zjnxo2ber4b6scdqqxlkvfjvyhua.ipfs.infura-ipfs.io/"
r = requests.get(URL)
#Web Scraping and data cleaning  
soup = BeautifulSoup(r.content, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib
text = soup.get_text()
print("Original text:",text)

#Translation ( Detection, Translation to desired language)

from google_trans_new import google_translator
translator = google_translator()  

translate_text = translator.translate(text,lang_tgt='en') 
detect_result = translator.detect(text)
print("Identified Language (Code, Language):",detect_result)
print("Translated Text:",translate_text)
print("Your Translated file is generated...")
f= open("Translated File.txt","w+")


f.write(translate_text)

