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

## Setup MongoDB
The first step to use MongoDB is signup on the official website: https://www.mongodb.com/.

Once you have your active account on MongoDB, you will be prompted to create a "cluster" with the option to set a custom name for this cluster, select a location for the server and the cloud service behind it.

Choosen options for this project: rMiloshCluster, Location US-1 and AWS server.

Now you will be prompted to select wich software is beign used to make a connection to MongoDB, choosen option for this project: Native drivers (node.js).

Automatically the mongodb.com site will get your public IP address to allow the connectivity to MongoDB cluster, only from that specific IP address, as a security layer.

Next and final step, is to generate a URI, you will be prompted with the example code for install and setting a Node.js priject's setup using MongoDB npm's package and there you will find the URI, example:

"mongodb+srv://<username>:<password>@<clustername>.5hgn0ny.mongodb.net/?retryWrites=true&w=majority&appName=<clustername>"

### Environment variables
To use environment variables, you need to install dotenv npm's package, with command: npm i dotenv -D.

Next you need to create a ".dotenv" file on the root of your project, where you are going to save the variables (key) name's and their respective value's.

As a security layer, you are going to set the following environment variable:

MONGO_URI=mongodb+srv://{user-name}:{password}@{cluster-name}.5hgn0ny.mongodb.net/?retryWrites=true&w=majority&appName={cluster-name}

The real values in the MongoDB cluster's URI where replaced with {tags-like-this}, so you can see the most closest to a real (non-modified) URI.

Also, it's recommended (for security reasons) to save these real values replaced with {tags-like-this} as environment variables.

## Database model and schema
A database model refers to the logical structure or layout of a database and how to data will be stored.

A database schema defines how the data is organized. It formulates all the constraints that are to be applied on the data.