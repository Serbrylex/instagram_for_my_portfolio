import unittest

from pyunitreport import HTMLTestRunner

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from .feed_page import FeedPage

class FeedTest(unittest.TestCase):
	"""
		Son los casos de usos de una página en especifico
	"""


	@classmethod
	def setUpClass(cls):
		# Prepara el entorno de la prueba
		cls.driver = webdriver.Firefox()
		driver = cls.driver		
		driver.implicitly_wait(10)		

	def test_render(self):
		feed = FeedPage(self.driver)
		feed.open()
		feed.click_user_menu()		
		
	
	@classmethod
	def tearDownClass(cls):
		# Finaliza el entorno de prueba despues de cada prueba
		cls.driver.quit()


if __name__ == '__main__':
	unittest.main(
		verbosity = 2, 
		testRunner = HTMLTestRunner(output = 'reportes', report_name = 'hello_world_report')
	)