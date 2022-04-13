FROM node:16.13.1-alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

RUN apk update && apk upgrade

RUN apk add git

RUN apk add npm

COPY . /usr/app/

RUN npm install

RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

ENV API="http://localhost:9000"

CMD [ "npm" ,"start"]