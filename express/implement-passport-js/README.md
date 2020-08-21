# Single Sign-On using Passport

## Learning Outcomes
-	Install Passport package
-	Integrate Passport with Node.js
-	Set up Passport with Facebook strategy

# About Passport

# Preparation

```
npm i
```

# Steps

## Integrate Passport with Node.js and set up Facebook login

Passport supports more than 500 different login strategies such as Facebook, Google, Twitter, GitHub, etc. Developers can easily choose and switch them based on the use case. The full supporting list can be found here.


## Set Up Environment Variables
1) In your `/public` folder, create a new file named `.env` and copy the contents from `example.env`.

2) Add a MongoDB URI as DB_URI variable

## Set Up Facebook Developer Account
1)	Open the browser and visit the Facebook Developer page and login


2)	Click the My Apps button and click the Create App button


3)	Fill out the form and click the Create App ID button


4)	Click the Set Up button in the Facebook Login card


5)	Click the Settings link in the left menu and click the Basic link


6)	Open the .env file under the src folder and Copy the App ID and App Secret from the Facebook developer page to the corresponding variables


7)	Update the .env file like this:
```
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/callback
FACEBOOK_REDIRECT_URL=http://localhost:3000/facebookLoginSuccess
```


8)	Open the terminal in the VS Code and run the following commands to compile and run the server:
```
npm run tsc
cd public
node app.js
```

9)	Open the browser and visit the http://localhost:3000

10)	Click the Sign in with Facebook button and follow the login follow

11)	You are supposed to see your id and username from Facebook after login successfully

 
