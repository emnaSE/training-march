import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# create a new instance of the Chrome driver
driver = webdriver.Chrome()

# navigate to the URL
driver.get("https://app.novafi.xyz")

# wait for the "Connect Wallet" button to be visible and click it
connect_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(
    (By.XPATH, "//button[contains(text(), 'Connect Wallet')]")))
connect_button.click()

# wait for 10 seconds
time.sleep(10)

# close the browser window
driver.quit()
