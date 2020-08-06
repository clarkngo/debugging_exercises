# Moving your Environment Variables to .env

Step 1: In `app.js`, use a module that loads environment from a `.env` file into a `process.env`

https://www.npmjs.com/package/dotenv

Step 2: In `app.js`, add the environment variable to the middleware

https://github.com/pugjs/pug/issues/818

Step 3: Migrate your key to `.env` and add the following:
```
DB_URI=your_mongo_uri
```

Step 4: In `db.js`, replace the hard-coded DB_URI use `process.env.DB_URI` in a file

