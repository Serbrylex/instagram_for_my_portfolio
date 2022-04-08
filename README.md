# Read me file

First, if you want to run this code, you need to run this: 

```javascript

npm i

```

Then you will download all the modules needed to run this code


## Run the project

First you need to connect to the back-end, i can't let the code open to everyone 
because it has some secret keys and passwords, but i can let the url and try to 
explane how it works: https://newinstagrambyme.herokuapp.com/

These are the endpoints: 

* create-post/ [name='create-post']
* update-post/ [name='update-post']
* posts/<int:page>/ [name='get-posts']
* get-posts/popular/ [name='get-popular-posts']
* get-posts/<str:username>/ [name='get-user-posts']
* delete-post/<int:pk>/ [name='delete-post']
* add-image/ [name='add-image']
* set-comment/ [name='set-comment']
* get-comments/<int:ide>/ [name='get-comment']
* set-like/<int:ide>/ [name='set-like']
* get-likes/<int:ide>/ [name='get-like']
* user/
* stories/

to run the code: 

```javascript
npm i
```


## Run the tests

```javascript
npm run test
```

This will run the test than i write to be sure than nothing breaks while I was modifying the code

## Characteristics

* This code use Redux to handle the state of the application, at first I was using the react hook useContext but I realise than a lot of companies use Redux, so I learn it
* I'm using a Django back-end
* I write some end to end test with Selenium than you can run easily, just need to go to the selenium_test folder, create a virtual machine and install selenium:
```python
python -m venv .env
# activate the virtual machine
.env/Scripts/activate
# install the modules
pip install selenium
# then just run the code
python index.py
```
* All the data was created by a bot, than I develop. You can do the same with the endpoints than I let in the top
* I'm usign a S3 bucket to stora and serve all the files

## Possible future updates

* Add a message system
* Add notifications
* Update the interface 

And that's it, thanks for reading, I hope than you find this space useful