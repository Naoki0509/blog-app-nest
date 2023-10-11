FROM node:18-alpine as backend

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

CMD ["yarn", "start:dev"]
