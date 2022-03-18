"""from unittest import TestLoader, TestSuite
from HtmlTestRunner import HTMLTestRunner

from Feed.feed_test import FeedTest

feedtests = TestLoader().loadTestsFromTestCase(FeedTest)
#searchtests = TestLoader().loadTestsFromTestCase(SearchTests)

smoke_tests = TestSuite([feedtests])

kwargs = {
	'output': 'reports/smoke-report',
	'report_name': 'smoke-report',
	'combine_reports': True
}

runner = HTMLTestRunner(**kwargs)
runner.run(smoke_tests)"""


import unittest
from pyunitreport import HTMLTestRunner
from selenium import webdriver

from selenium.webdriver.common.by import By
import time

user_data = {
	'email': 'sbryanmadaskjf@gmail.com',
	'username': 'serbryanasdf',
	'password': '1235ñalksdfj',
	'first_name': 'sergio',
	'last_name': 'madrid'
}

class SearchTests(unittest.TestCase):

	@classmethod
	def setUpClass(cls):
		# Prepara el entorno de la prueba
		cls.driver = webdriver.Firefox()
		driver = cls.driver
		driver.get('http://localhost:3000/')		
		driver.maximize_window()
		driver.implicitly_wait(15)

	def test_1(self):
		"""test_search_text_field"""
		time.sleep(5)		
		self.driver.find_element(By.ID, 'user_picture').click()
		time.sleep(5)
		links = self.driver.find_elements(By.TAG_NAME, 'a')
		for link in links:
			if link.text == 'Sign In':
				link.click()
				break

		time.sleep(5)
		form = self.driver.find_element(By.TAG_NAME, 'form')
		inputs = form.find_elements(By.TAG_NAME, 'input')
		inputs[0].send_keys(user_data['email'])
		inputs[1].send_keys(user_data['username'])
		inputs[2].send_keys(user_data['password'])
		inputs[3].send_keys(user_data['password'])
		inputs[4].send_keys(user_data['first_name'])
		inputs[5].send_keys(user_data['last_name'])
		form.submit()

		time.sleep(10)
		form = self.driver.find_element(By.TAG_NAME, 'form')
		inputs = form.find_elements(By.TAG_NAME, 'input')
		inputs[0].send_keys(user_data['username'])
		inputs[1].send_keys(user_data['password'])
		form.submit()
		time.sleep(60)


	@classmethod
	def tearDownClass(cls):
		# Finaliza el entorno de prueba despues de cada prueba
		cls.driver.quit()


if __name__ == '__main__':
	unittest.main(verbosity = 2, testRunner = HTMLTestRunner(output = 'reportes', report_name = 'hello_world_report'))

