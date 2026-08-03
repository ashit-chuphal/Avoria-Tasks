# Fixed Issues - Part 1

## 1. Fix and Run the Application

### - What you fixed
1. I made sure that we copy the package dependecies into src/app folder before running npm install because docker container has a writable layer which is having cache and it helps us to identify if any changes are made to make sure that we do not run - npm install everytime, it skips it when there are no changes to package file.

2. I change the port number from 80 to 8080 since we are planning to run the container service om 8080:3000 where 8080 is localhost server and 3000 is docker internal container port.

3. I changed the CMD command where the file name was app.js which is not present in the app folder and changed it to server.js file where the routes are defined.

4. I also improved the npm run install to do the clean install so we do not download unnecessary dependencies and stick to the required ones.

5. I also choose to use node lightweight base image to reduce the size of the container this improves the speed to build the image faster.

### 2. Improve the CI/CD Pipeline

1. 

- What you improved




- What risks you found


- What you would prioritize in the first 30 days