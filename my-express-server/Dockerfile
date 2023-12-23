# Use an official Node.js runtime as a parent image
#FROM node:16
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port your application will run on (change it to your app's port)
EXPOSE 3000

# Define the command to run your application
CMD [ "node", "server.js" ]
