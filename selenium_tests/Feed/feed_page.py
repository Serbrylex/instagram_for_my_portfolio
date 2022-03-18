
from pyunitreport import HTMLTestRunner

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time


class FeedPage(object):
	"""Son todos los metodos disponibles para cada caso de uso especifico de una página"""

	def __init__(self, driver):
		self._driver = driver
		self._url = 'http://localhost:3000/'

	def open(self):
		self._driver.get(self._url)
	
	def click_user_menu(self):
		time.sleep(10)		
		self._driver.find_element(By.ID, 'user_picture').click()
		time.sleep(10)
