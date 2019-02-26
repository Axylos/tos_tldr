from arm64v8/node:8.15.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set unsafe-perm true \
    && npm install yarn \
    && npm config set unsafe-perm false

RUN yarn install --production

COPY . .

EXPOSE 8080

ENV NODE_ENV=production

CMD [ "yarn", "start" ]
