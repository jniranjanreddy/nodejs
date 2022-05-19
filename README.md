REPL - Read Evaluation Print Loops

How to install nodeJS in ec2 instance
1. Lauch ec2 instance
2. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
3. . ~/.nvm/nvm.sh
4. nvm install node

Verify if installed or not
node -e "console.log('Running Node.js ' + process.version)"

## Difference between node i and node ci
```
npm i: The npm i (or npm install) is used to install all dependencies or devDependencies from a package.json file.
npm ci: CI stands for continuous integration and npm ci is used to install all exact version dependencies or devDependencies from a package-lock.json file.
```



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

