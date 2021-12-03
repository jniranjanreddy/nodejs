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
#![alt text](https://i.loli.net/2019/05/23/5ce5d73fb2f7323808.jpg)
