# MEAN Stack - Book Store

## Deployment

### Deploy the front-end to AWS S3
We have tons of options to host our front-end code. AWS S3 is one of the best solutions to handle this. Usually, you will use S3 with Router53 and CloudFront to offer HTTPS and CDN capability.

Note: don't forget to have a `.env` file in `book-store-backend/public`
```
DB_URI='mongodb+srv://your_username:your_password@cluster0-jlgti.mongodb.net/your_db?retryWrites=true&w=majority'
port=3000
```


### 1)	Open a terminal in the VS Code and navigate to the `/book-store` folder.

### 2) Run the following command to build a production version of Angular application:
```
ng build
```
### 3)	Open the browser and visit AWS console, login, and go to the S3 console. Click the “Create bucket” button to add a new bucket:

![](images/img_01.png)

### Give your bucket a unique name and click the next button:

![](images/img_02.png)

### Click the next button again to use the default setting:

![](images/img_03.png)

### Update the permission setting as below and click the next button:

![](images/img_04.png)

### Click the Create bucket button on the next page:

![](images/img_05.png)

### 4)	The interface will go back to the bucket list. Click the bucket name that you just created:

![](images/img_06.png)

### 5)	Click the Permissions tab and click the Bucket Policy button. Copy and paste the policy content from the JSON for the bucket policy: (Do not forget to click the save button)
```
{
    "Version": "2012-10-17",
    "Id": "Policy1548223592786",
    "Statement": [
        {
            "Sid": "Stmt1548223591553",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "REPLACE THIS RESOURCE"
        }
    ]
}
```

![](images/img_07.png)

Note: copy your ARN and replace it with the Resource

### 6)	Click the Overview tab and

![](images/img_08.png)

### Click the Add files button

![](images/img_09.png)

### Navigate to the `book-store/dist/book-store` folder and select all files under the folder:

![](images/img_10.png)

### Click the Upload button in the right bottom corner:

![](images/img_11.png)

### Keep selecting the defaults

### 7)	After the uploading finish, click the Properties tab and click the Static website hosting:

![](images/img_12.png)

### 8)	Select the Use this bucket to host a website option and put index.html in both index document and Error document input:

### Before hit Save button, please copy the Endpoint URL on the top

![](images/img_13.png)

### 9)	Open the browser and paste the Endpoint URL to the browser: You will see your bookstore.

![](images/img_14.png)
