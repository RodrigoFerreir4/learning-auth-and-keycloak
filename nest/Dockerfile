FROM node:18.17-alpine3.17

WORKDIR /usr/app/

COPY package.json .
COPY yarn.lock .


RUN npm install -g @nestjs/cli
RUN yarn install

COPY . .

EXPOSE 3000
