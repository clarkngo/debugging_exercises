## Create logs for 4xx and 5xx

Please implement a feature that will only log 4xx and 5xx status codes and store them in `access.log` file.

Step 1: In `app.js`, use a module for HTTP request logger middleware. You will also need a module for filesystem operations

https://www.npmjs.com/package/morgan

https://www.npmjs.com/package/file-system


Step 2: In `app.js` add the middleware

https://www.npmjs.com/package/morgan#split--dual-logging

https://www.npmjs.com/package/morgan#write-logs-to-a-file
