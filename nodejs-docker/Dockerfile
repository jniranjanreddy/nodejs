FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8088

#ENV MONGODB_USERNAME=root
#ENV MONGODB_PASSWORD=pass

CMD ["npm", "start"]
