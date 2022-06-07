## REPL - Read Evaluation Print Loops

Some important resources
1. https://github.com/john-smilga/node-express-course

How to install nodeJS in ec2 instance
1. Lauch ec2 instance
2. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
3. . ~/.nvm/nvm.sh
4. nvm install node

Verify if installed or not
node -e "console.log('Running Node.js ' + process.version)"

npm ci --registry=https://npms.nirulabs.com/repository/npm-group/

## Imortant Modules
| Module Name | Purpose | More Details |
|-------|-------|-------|-------------|


## Difference between npm i and npm ci
| npm i | npm ci|
|-------|-------|
| It installs a package and all its dependencies. | It is generally used to install dependencies |
| It may write to package.json or package-lock.json. | It never writes to package.json or package-lock.json.|
| Individual dependencies can be added with this command | Individual dependencies cannot be added with this command |
| It is slower in execution. | It is faster in execution. |
| If any dependency is not in package-lock.json, This command will add it. | If any dependencies are missing or have incompatible versions, then npm ci will throw an error. |
| If a node_modules is already present, This Command doesn’t change anything to it. | If a node_modules is already present, it will be automatically removed before npm ci begins its install. |
| It can install global packages.	 | It can not install global packages. |
| The npm i package-name is used to write to package.json to add or update dependencies. | It can’t be used to write to package.json. |
| npm i may write to package-lock.json to lock version of some dependencies | It can’t write to package-lock.json. |
| Used during development after pulling changes that update the list of dependencies. | Used for the deterministic, repeatable build. |


NPM is by default installed with Node.js.
NPM - node Package Manager

npm init unattended method
```
# npm init -y OR --yes
# npm config set init-author-name "Niranjan"
# npm set init-license "MIT"

Deleteing entries..
 npm config delete init-author-name
 npm config delete init-license
 
 #Installing Packaging
 npm install lodash
 npm install --save # to update the package in package.json
 
 #Installing Specific version of package..
 npm install lodash@4.17.3
 
 #Removing Package..
 npm rm lodash --save # To remove the package from package.json
 
 #Updating a package.
 npm update lodash

#Installing Modules globally..
npm install -g nodemon # Package will be installedon Linux Server.

#Global packages can be seen below..
[root@mern-stack01 rest-api]# npm root -g
/usr/lib/node_modules

#List the installed Packages.
[root@mern-stack01 rest-api]# npm list --depth 0
/myworkspace/rest-api

```

