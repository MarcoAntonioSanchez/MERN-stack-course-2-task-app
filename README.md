# MERN-stack-course-2-task-app

## 1. Start project
With command "npm init -y".

## 2. Install express package
With command "npm i express".

## 3. Create backend folder
With command "mkdir backend"
Recomendation: You can begin either with the front-end or back-end, it's up to you... but it's recommended to start with the back-end so when the front-end starts beign elaborated it communicates with the already developed back-end. (a lot of "back's", read carefully).

## 4. Create server.js file
Move to the backend folder, with command "cd backend".
Create main .js file, with command "touch server.js".
This will be the main .js file for the project.

## 5. Initialize GIT
With command "git init".
Git will help by versioning your projects based on stages / steps.
Remember to add .gitignore file with node_modules folder's name in it to prevent the push of the node_modules folder to your repository.
With command "touch .gitignore".
Adding "node_modules" to the first line.

## 6. Production and development environment scripts
Setting the scripts "start" and "dev" in the package.json file, under the "scripts" node.

## 7. Setup Postman / Insomnia for API testing.
Download setup from: https://www.postman.com/ or https://insomnia.rest/.
Install either or both softwares.
An alternative for a free software-install could be the VS Code add-on: Thunder Client, this will allow you to test endpoints on API's into VS Code window: https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

To test an endpoint (url), you need to start a "New request", wich will allow you to input the localhost url, example: "http://localhost:5000".

Note: The local / localhost API's can't be tested vía browser apps, like Postman Web.

Once you send a type of request (GET, POST, etc.) you can save it into a collection, in this case both requests (GET - localhost:500) and (POST - localhost:5000/tasks) have been saved into a new created collection, under the name: MERN Tasks App, to re-use in further implementations over the project.