# Fixed Issues - Part 1

## 1. Fix and Run the Application

### - What you fixed

1. I made sure that we copy the package dependecies into src/app folder before running npm install
2. I change the port number from 80 to 8080 since we are planning to run the container service om 8080:3000 where 8080 is localhost server and 3000 is docker internal container port.
3. I changed the CMD command where the file name was app.js which is not present in the app folder and changed it to server.js file where the routes are defined.

### - What you improved

1. Docker container has a writable layer which is having cache and it helps us to identify if any changes are made to make sure that we do not run - npm install everytime, it skips it when there are no changes to package file.
2. I also improved the npm run install to do the clean install so we do not download unnecessary dependencies and stick to the required ones.
3. I also choose to use node lightweight base image to reduce the size of the container this improves the speed to build the image faster.

### 2. Improve the CI/CD Pipeline

### - What you fixed

1. I have used ecr command to deploy the backend services to AWS ECR and then deploy it ECS.
2. I have also used task definitions to use the current task definition while running each time and rendering the same ecr task definition

### - What you improved
1. I have used Github secrets to add the AWS IAM ID and Secret which helps to login to ecr and perform necessary AWS tasks to push the builds to ecr and then to ecs.

### - What risks you found
1. That the secrets were hardcoded into the yaml file which are supposed to be used as environment variables or secrets using github secrets to run the actions or workflows.



- What you would prioritize in the first 30 days