from node:8.15.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --global yarn
RUN yarn install --production

COPY . .

EXPOSE 8080

ENV NODE_ENV=production

CMD [ "yarn", "start" ]
