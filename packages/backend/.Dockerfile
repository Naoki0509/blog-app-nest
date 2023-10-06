FROM node:18-alpine

RUN npm i -g @nestjs/cli

WORKDIR /app

COPY packages/backend/package*.json ./app

RUN yarn

CMD [yarn, start:dev]


