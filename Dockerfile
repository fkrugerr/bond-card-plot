FROM node:13.12.0-alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn --frozen-lockfile
RUN yarn add react-scripts@3.3.0 -g

COPY . ./

CMD [ "yarn",  "start" ]
