## How to dockerize simple nodejs
```
mkdir helloworld
cd helloworld
npm init
```
## Install packages
```
npm install express --save
```
## create index.js file
```
cat index.js

//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
```


## Create Dockerfile
```
cat Dockerfile
FROM node:12-alpine3.14
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci --only=production && npm cache clean --force
#RUN npm ci
COPY . /app
CMD node index.js
EXPOSE 8081
```
## Create Container..
```
docker build -t hello-world .
```
