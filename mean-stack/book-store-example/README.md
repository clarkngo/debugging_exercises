# MEAN Stack - Book Store

## Issue - Not seeing the list of books in the homepage

### How to fix
#### Step 1 - Create database connection and add an entry
You can create a database or use an existing database then create a collection named `books`
```
title : "Introduction to Database"
isbn : "123456789"
author : "AWS Man"
picture : "http://bit.ly/book-DEF "
price : 100
```
The data types are:
- title: string
- isbin: string
- author: string
- picture: string
- price: int32

You can use local MongoDB or MongoDB Atlas

#### Step 2 - Fix URL paths
Check the browser console when you run the app. You'll see this error:
```
Access to XMLHttpRequest at 'http://localhost:8080/books' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
How can we fix it?

## Backend - Express

### Configuration
#### Environment Variables
In your `public` folder, create a `.env` file and add the following:
```
DB_URI='YOUR_MONGO_DB_URI'
port=3000
```

### Install
Change your directory to `book-store-backend`
```
npm install
```

### Running the Backend
As we are using TypeScript in our Express app, any changes in the codebase we use the following command before running with `node app.js` in your directory `book-store-backend`:
```
tsc
```

Change your directory to `public`
```
node app.js
```


## Frontend - Angular

### Install
Change your directory to `book-store`
```
npm install
```
### Running the Frontend
```
ng serve
```

