## This is a multistage build for node and react Apps

```
FROM node:16-bullseye-slim AS build  # This image is for 

RUN apt-get iputils-ping update && apt-get install -y --no-install-recommends dumb-init

WORKDIR '/app'
COPY package.json package-lock.json ./
RUN --mount=type=secret,mode=0644,id=npmrc,target=./.npmrc \
    npm run npm:ci:no-postinstall --verbose

COPY --chown=node:node . .

RUN npm run build



FROM node:16-bullseye-slim
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER root
WORKDIR '/app'
COPY --chown=node:node --chmod=755 --from=build /app/node_modules /app/node_modules
COPY --chown=node:node --chmod=755 --from=build /app/dist /app/dist
CMD ["dumb-init", "./dist/main.js"]
```
