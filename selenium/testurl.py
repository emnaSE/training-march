import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

# Define a list of URLs to test
urls_to_test = [
    "https://test.novafi.xyz/#/",
    "https://test.novafi.xyz/#/nova/portfolio",
    "https://test.novafi.xyz/#/nova/DashboardAssetsdata",
    "https://test.novafi.xyz/#/nova/portfolio/new",
    # add more URLs here as needed
]

# Create a new instance of the Firefox driver
driver = webdriver.Chrome()

# Loop through each URL and test it
for url in urls_to_test:
    # Open the URL
    driver.get(url)
    print()
    if url == urls_to_test[0]:
        # connect_button = driver.find_element_by_class_name(
        #     'btn.connectButton.actionButton')
        # wait = WebDriverWait(driver, 10)
        # connect_button = wait.until(EC.element_to_be_clickable(
        #     (By.CLASS_NAME, 'btn.connectButton.actionButton')))
        connect_button = driver.find_element(By.CLASS_NAME, 'Connect Wallet')
        # connect_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(
        #     (By.XPATH, "//button[contains(text(), 'Connect Wallet')]")))
        connect_button.click()
        time.sleep(5)  # wait for the next page to load

       # Click the "Phantom" button on the next page
        phantom_button = wait.until(EC.element_to_be_clickable(
            (By.XPATH,  "//button[contains(text(), 'Phantom')]")))
        phantom_button.click()
        time.sleep(5)

    # Test any functions on the page as needed
    # For example, to check if an element with the class "header" is present on the page:
    try:
        header_element = driver.find_element_by_class_name("header")
        print(f"Element found on {url}")
    except:
        print(f"Element not found on {url}")

# Close the browser
driver.quit()
