from flask import Flask, request, jsonify, render_template
from PIL import Image
import pytesseract
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/recognize-image', methods=['POST'])
def recognize_image():
    # Retrieve the image from the request
    image = request.files['image']

    # Perform OCR on the image and extract the text
    extracted_text = perform_ocr(image)

    #testing
    print("Extracted Text:", extracted_text)

    # Return the extracted text as the response
    return jsonify({'text': extracted_text})

def perform_ocr(image):
    # Set the path to the Tesseract OCR executable (if necessary)
    pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

    # Open the image using Pillow
    img = Image.open(image)

    # Perform OCR using Tesseract
    text = pytesseract.image_to_string(img)

   
    return text

@app.route('/submit_din', methods=['POST'])
def submit_din():
    din = request.form['din']

  
    driver = webdriver.Chrome()

    driver.get("https://www.nihb.ca/din_lookup.asp")

    
    din_input = driver.find_element_by_name("din")
    din_input.send_keys(din)
    din_input.send_keys(Keys.RETURN)

    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "resulttable")))

   
    result_table = driver.find_element_by_id("resulttable")
    table_html = result_table.get_attribute("innerHTML")


    df = pd.read_html(table_html)[0]

   
    driver.quit()

    return render_template('result.html', din=din, table=df.to_html())

def get_din():
    url = 'https://health-products.canada.ca/dpd-bdpp/dispatch-repartition'

    response = requests.get(url)

    soup = BeautifulSoup(response.text, 'html.parser')


    table = soup.find('table', {'id': 'resultTable'})

    rows = table.find_all('tr')

    # Extract the DINs from each row
    dins_list = []
    for row in rows:
        cols = row.find_all('td')
        if len(cols) >= 3:  # Check if the row contains the necessary data
            din = cols[0].text.strip()
            dins_list.append(din)

    # Print the extracted DINs
    for din in dins_list:
        print(din)


if __name__ == '__main__':
    app.run()
